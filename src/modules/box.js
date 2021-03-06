// Truck Module - Box, Data Persistence:
import '../truck';

$.extend({
  Box: (function(globalObject) {
    //==================
    // IndexedDB Driver:
    //==================
    (function() {
      const self = this;
      const indexedDB = indexedDB || globalObject.indexedDB || globalObject.webkitIndexedDB || globalObject.mozIndexedDB || globalObject.OIndexedDB || globalObject.msIndexedDB;
      if (!indexedDB) {
        return;
      }

      const DETECT_BLOB__support_STORE = 'truck-box-detect-blob-support';
      let supportsBlobs;
      let dbContexts;

      function __createBlob(parts, properties) {
        parts = parts || [];
        properties = properties || {};
        try {
          return new Blob(parts, properties);
        } catch (e) {
          if (e.name !== 'TypeError') {
            throw e;
          }
          const BlobBuilder = globalObject.BlobBuilder || globalObject.MSBlobBuilder || globalObject.MozBlobBuilder || globalObject.WebKitBlobBuilder;
          let builder = new BlobBuilder();
          for (let i = 0; i < parts.length; i += 1) {
            builder.append(parts[i]);
          }
          return builder.getBlob(properties.type);
        }
      }

      function __binStringToArrayBuffer(bin) {
        const length = bin.length;
        const buf = new ArrayBuffer(length);
        let arr = new Uint8Array(buf);
        for (let i = 0; i < length; i++) {
          arr[i] = bin.charCodeAt(i);
        }
        return buf;
      }

      function __blobAjax(url) {
        return new Promise(function(resolve, reject) {
          const xhr = new XMLHttpRequest();
          xhr.open('GET', url);
          xhr.withCredentials = true;
          xhr.responseType = 'arraybuffer';

          xhr.onreadystatechange = function() {
            if (xhr.readyState !== 4) {
              return;
            }
            if (xhr.status === 200) {
              return resolve({
                response: xhr.response,
                type: xhr.getResponseHeader('Content-Type')
              });
            }
            reject({
              status: xhr.status,
              response: xhr.response
            });
          };
          xhr.send();
        });
      }

      function __checkBlobSupportWithoutCaching(idb) {
        return new Promise(function(resolve, reject) {
          const blob = __createBlob([''], {
            type: 'image/png'
          });
          const txn = idb.transaction([DETECT_BLOB__support_STORE], 'readwrite');
          txn.objectStore(DETECT_BLOB__support_STORE).put(blob, 'key');
          txn.oncomplete = function() {
            const blobTxn = idb.transaction([DETECT_BLOB__support_STORE], 'readwrite');
            const getBlobReq = blobTxn.objectStore(DETECT_BLOB__support_STORE).get('key');
            getBlobReq.onerror = reject;
            getBlobReq.onsuccess = function(e) {

              const storedBlob = e.target.result;
              const url = URL.createObjectURL(storedBlob);

              __blobAjax(url).then(function(res) {
                resolve(!!(res && res.type === 'image/png'));
              }, function() {
                resolve(false);
              }).then(function() {
                URL.revokeObjectURL(url);
              });
            };
          };
        })['catch'](function() {
          return false; // error, so assume unsupported
        });
      }

      function __checkBlobSupport(idb) {
        if (typeof supportsBlobs === 'boolean') {
          return Promise.resolve(supportsBlobs);
        }
        return __checkBlobSupportWithoutCaching(idb).then(function(value) {
          supportsBlobs = value;
          return supportsBlobs;
        });
      }

      function __encodeBlob(blob) {
        return new Promise(function(resolve, reject) {
          const reader = new FileReader();
          reader.onerror = reject;
          reader.onloadend = function(e) {
            const base64 = btoa(e.target.result || '');
            resolve({
              __truck_box_encoded_blob: true,
              data: base64,
              type: blob.type
            });
          };
          reader.readAsBinaryString(blob);
        });
      }

      function __decodeBlob(encodedBlob) {
        const arrayBuff = __binStringToArrayBuffer(atob(encodedBlob.data));
        return __createBlob([arrayBuff], {
          type: encodedBlob.type
        });
      }

      function __isEncodedBlob(value) {
        return value && value.__truck_box_encoded_blob;
      }

      function __initStorage(options) {
        const self = this;
        let dbInfo = {
          db: null
        };

        if (options) {
          for (let i in options) {
            dbInfo[i] = options[i];
          }
        }

        if (!dbContexts) {
          dbContexts = {};
        }

        let dbContext = dbContexts[dbInfo.name];

        if (!dbContext) {
          dbContext = {
            box: [],
            db: null
          };
          dbContexts[dbInfo.name] = dbContext;
        }

        dbContext.box.push(this);

        let readyPromises = [];

        function ignoreErrors() {
          return Promise.resolve();
        }

        for (let j = 0; j < dbContext.box.length; j++) {
          const truckbox = dbContext.box[j];
          if (truckbox !== this) {
            readyPromises.push(truckbox.ready()['catch'](ignoreErrors));
          }
        }

        const box = dbContext.box.slice(0);
        return Promise.all(readyPromises).then(function() {
          dbInfo.db = dbContext.db;
          return __getOriginalConnection(dbInfo);
        }).then(function(db) {
          dbInfo.db = db;
          if (_isUpgradeNeeded(dbInfo, self.__defaultConfig.version)) {
            return __getUpgradedConnection(dbInfo);
          }
          return db;
        }).then(function(db) {
          dbInfo.db = dbContext.db = db;
          self.__dbInfo = dbInfo;
          for (let k in box) {
            let truckbox = box[k];
            if (truckbox !== self) {
              truckbox.__dbInfo.db = dbInfo.db;
              truckbox.__dbInfo.version = dbInfo.version;
            }
          }
        });
      }

      function __getOriginalConnection(dbInfo) {
        return __getConnection(dbInfo, false);
      }

      function __getUpgradedConnection(dbInfo) {
        return __getConnection(dbInfo, true);
      }

      function __getConnection(dbInfo, upgradeNeeded) {
        return new Promise(function(resolve, reject) {
          if (dbInfo.db) {
            if (upgradeNeeded) {
              dbInfo.db.close();
            } else {
              return resolve(dbInfo.db);
            }
          }

          let dbArgs = [dbInfo.name];

          if (upgradeNeeded) {
            dbArgs.push(dbInfo.version);
          }

          let openreq = indexedDB.open.apply(indexedDB, dbArgs);

          if (upgradeNeeded) {
            openreq.onupgradeneeded = function(e) {
              const db = openreq.result;
              try {
                db.createObjectStore(dbInfo.boxName);
                if (e.oldVersion <= 1) {
                  db.createObjectStore(DETECT_BLOB__support_STORE);
                }
              } catch (ex) {
                if (ex.name === 'ConstraintError') {
                  globalObject.console.warn('The database "' + dbInfo.name + '"' + ' has been upgraded from version ' + e.oldVersion + ' to version ' + e.newVersion + ', but the storage "' + dbInfo.boxName + '" already exists.');
                } else {
                  throw ex;
                }
              }
            };
          }

          openreq.onerror = function() {
            reject(openreq.error);
          };

          openreq.onsuccess = function() {
            resolve(openreq.result);
          };
        });
      }

      function _isUpgradeNeeded(dbInfo, defaultVersion) {
        if (!dbInfo.db) {
          return true;
        }

        const isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.boxName);
        const isDowngrade = dbInfo.version < dbInfo.db.version;
        let isUpgrade = dbInfo.version > dbInfo.db.version;

        if (isDowngrade) {
          if (dbInfo.version !== defaultVersion) {
            globalObject.console.warn('The database "' + dbInfo.name + '"' + ' can\'t be downgraded from version ' + dbInfo.db.version + ' to version ' + dbInfo.version + '.');
          }
          dbInfo.version = dbInfo.db.version;
        }

        if (isUpgrade || isNewStore) {
          if (isNewStore) {
            const incVersion = dbInfo.db.version + 1;
            if (incVersion > dbInfo.version) {
              dbInfo.version = incVersion;
            }
          }

          return true;
        }

        return false;
      }

      function get(key, callback) {
        const self = this;
        if (typeof key !== 'string') {
          globalObject.console.warn(key + ' used as a key, but it is not a string.');
          key = String(key);
        }

        const promise = new Promise(function(resolve, reject) {
          self.ready().then(function() {
            const dbInfo = self.__dbInfo;
            const store = dbInfo.db.transaction(dbInfo.boxName, 'readonly').objectStore(dbInfo.boxName);
            let req = store.get(key);

            req.onsuccess = function() {
              let value = req.result;
              if (value === undefined) {
                value = null;
              }
              if (__isEncodedBlob(value)) {
                value = __decodeBlob(value);
              }
              resolve(value);
            };

            req.onerror = function() {
              reject(req.error);
            };
          })['catch'](reject);
        });

        executeCallback(promise, callback);
        return promise;
      }

      function each(iterator, callback) {
        const self = this;
        const promise = new Promise(function(resolve, reject) {
          self.ready().then(function() {
            const dbInfo = self.__dbInfo;
            const store = dbInfo.db.transaction(dbInfo.boxName, 'readonly').objectStore(dbInfo.boxName);

            const req = store.openCursor();
            let iterationNumber = 1;

            req.onsuccess = function() {
              const cursor = req.result;

              if (cursor) {
                let value = cursor.value;
                if (__isEncodedBlob(value)) {
                  value = __decodeBlob(value);
                }
                const result = iterator(value, cursor.key, iterationNumber++);

                if (result !== void 0) {
                  resolve(result);
                } else {
                  cursor['continue']();
                }
              } else {
                resolve();
              }
            };

            req.onerror = function() {
              reject(req.error);
            };
          })['catch'](reject);
        });

        executeCallback(promise, callback);
        return promise;
      }

      function set(key, value, callback) {
        const self = this;
        if (typeof key !== 'string') {
          globalObject.console.warn(key + ' used as a key, but it is not a string.');
          key = String(key);
        }

        const promise = new Promise(function(resolve, reject) {
          self.ready().then(function() {
          const dbInfo = self.__dbInfo;
            return __checkBlobSupport(dbInfo.db);
          }).then(function(blobSupport) {
            if (!blobSupport && value instanceof Blob) {
              return __encodeBlob(value);
            }
            return value;
          }).then(function(value) {
            const transaction = dbInfo.db.transaction(dbInfo.boxName, 'readwrite');
            let store = transaction.objectStore(dbInfo.boxName);
            if (value === null) {
              value = undefined;
            }

            const req = store.put(value, key);
            transaction.oncomplete = function() {
              if (value === undefined) {
                value = null;
              }

              resolve(value);
            };
            transaction.onabort = transaction.onerror = function() {
              const err = req.error ? req.error : req.transaction.error;
              reject(err);
            };
          })['catch'](reject);
        });

        executeCallback(promise, callback);
        return promise;
      }

      function remove(key, callback) {
        const self = this;
        if (typeof key !== 'string') {
          globalObject.console.warn(key + ' used as a key, but it is not a string.');
          key = String(key);
        }

        const promise = new Promise(function(resolve, reject) {
          self.ready().then(function() {
            const dbInfo = self.__dbInfo;
            const transaction = dbInfo.db.transaction(dbInfo.boxName, 'readwrite');
            const store = transaction.objectStore(dbInfo.boxName);
            const req = store['delete'](key);
            transaction.oncomplete = function() {
              resolve();
            };

            transaction.onerror = function() {
              reject(req.error);
            };

            transaction.onabort = function() {
              const err = req.error ? req.error : req.transaction.error;
              reject(err);
            };
          })['catch'](reject);
        });

        executeCallback(promise, callback);
        return promise;
      }

      function clear(callback) {
        const self = this;
        const promise = new Promise(function(resolve, reject) {
          self.ready().then(function() {
            const dbInfo = self.__dbInfo;
            const transaction = dbInfo.db.transaction(dbInfo.boxName, 'readwrite');
            const store = transaction.objectStore(dbInfo.boxName);
            const req = store.clear();

            transaction.oncomplete = function() {
              resolve();
            };

            transaction.onabort = transaction.onerror = function() {
              const err = req.error ? req.error : req.transaction.error;
              reject(err);
            };
          })['catch'](reject);
        });

        executeCallback(promise, callback);
        return promise;
      }

      function size(callback) {
        const self = this;
        const promise = new Promise(function(resolve, reject) {
          self.ready().then(function() {
            const dbInfo = self.__dbInfo;
            const store = dbInfo.db.transaction(dbInfo.boxName, 'readonly').objectStore(dbInfo.boxName);
            const req = store.count();

            req.onsuccess = function() {
              resolve(req.result);
            };

            req.onerror = function() {
              reject(req.error);
            };
          })['catch'](reject);
        });

        executeCallback(promise, callback);
        return promise;
      }

      function key(n, callback) {
        const self = this;
        const promise = new Promise(function(resolve, reject) {
          if (n < 0) {
            resolve(null);

            return;
          }

          self.ready().then(function() {
            const dbInfo = self.__dbInfo;
            const store = dbInfo.db.transaction(dbInfo.boxName, 'readonly').objectStore(dbInfo.boxName);

            let advanced = false;
            const req = store.openCursor();
            req.onsuccess = function() {
              const cursor = req.result;
              if (!cursor) {
                resolve(null);

                return;
              }

              if (n === 0) {
                resolve(cursor.key);
              } else {
                if (!advanced) {
                  advanced = true;
                  cursor.advance(n);
                } else {
                  resolve(cursor.key);
                }
              }
            };

            req.onerror = function() {
              reject(req.error);
            };
          })['catch'](reject);
        });

        executeCallback(promise, callback);
        return promise;
      }

      function keys(callback) {
        const self = this;
        const promise = new Promise(function(resolve, reject) {
          self.ready().then(function() {
            const dbInfo = self.__dbInfo;
            const store = dbInfo.db.transaction(dbInfo.boxName, 'readonly').objectStore(dbInfo.boxName);

            const req = store.openCursor();
            let keys = [];

            req.onsuccess = function() {
              const cursor = req.result;

              if (!cursor) {
                resolve(keys);
                return;
              }

              keys.push(cursor.key);
              cursor['continue']();
            };

            req.onerror = function() {
              reject(req.error);
            };
          })['catch'](reject);
        });

        executeCallback(promise, callback);
        return promise;
      }

      function executeCallback(promise, callback) {
        if (callback) {
          promise.then(function(result) {
            callback(null, result);
          }, function(error) {
            callback(error);
          });
        }
      }

      const asyncStorage = {
        __driver: 'asyncStorage',
        __initStorage: __initStorage,
        each: each,
        get: get,
        set: set,
        remove: remove,
        clear: clear,
        size: size,
        key: key,
        keys: keys
      };

      // Export driver:
      this.asyncStorage = asyncStorage;
      globalObject.asyncStorage = asyncStorage;
    }).call(window);

    //===============
    // WebSQL Driver:
    //===============
    (function() {
      const globalObject = this;
      const openDatabase = this.openDatabase;
      if (!openDatabase) {
        return;
      }

      function __initStorage(options) {
        const self = this;
        let dbInfo = {
          db: null
        };

        if (options) {
          for (let i in options) {
            dbInfo[i] = typeof options[i] !== 'string' ? options[i].toString() : options[i];
          }
        }

        const dbInfoPromise = new Promise(function(resolve, reject) {
          try {
            dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
          } catch (e) {
            return self.setDriver(self.LOCALSTORAGE).then(function() {
              return self.__initStorage(options);
            }).then(resolve)['catch'](reject);
          }

          dbInfo.db.transaction(function(t) {
            t.executeSql('CREATE TABLE IF NOT EXISTS ' + dbInfo.boxName + ' (id INTEGER PRIMARY KEY, key unique, value)', [], function() {
              self.__dbInfo = dbInfo;
              resolve();
            }, function(t, error) {
              reject(error);
            });
          });
        });

        return new Promise(function(resolve, reject) {
          resolve(truckBoxSerializer);
        }).then(function(lib) {
          dbInfo.serializer = lib;
          return dbInfoPromise;
        });
      }

      function get(key, callback) {
        const self = this;
        if (typeof key !== 'string') {
          globalObject.console.warn(key + ' used as a key, but it is not a string.');
          key = String(key);
        }

        const promise = new Promise(function(resolve, reject) {
          self.ready().then(function() {
            const dbInfo = self.__dbInfo;
            dbInfo.db.transaction(function(t) {
              t.executeSql('SELECT * FROM ' + dbInfo.boxName + ' WHERE key = ? LIMIT 1', [key], function(t, results) {
                let result = results.rows.length ? results.rows.item(0).value : null;
                if (result) {
                  result = dbInfo.serializer.deserialize(result);
                }

                resolve(result);
              }, function(t, error) {

                reject(error);
              });
            });
          })['catch'](reject);
        });

        executeCallback(promise, callback);
        return promise;
      }

      function each(iterator, callback) {
        const self = this;
        const promise = new Promise(function(resolve, reject) {
          self.ready().then(function() {
            const dbInfo = self.__dbInfo;

            dbInfo.db.transaction(function(t) {
              t.executeSql('SELECT * FROM ' + dbInfo.boxName, [], function(t, results) {
                const rows = results.rows;
                const length = rows.length;

                for (let i = 0; i < length; i++) {
                  const item = rows.item(i);
                  let result = item.value;
                  if (result) {
                    result = dbInfo.serializer.deserialize(result);
                  }
                  result = iterator(result, item.key, i + 1);
                  if (result !== void 0) {
                    resolve(result);
                    return;
                  }
                }

                resolve();
              }, function(t, error) {
                reject(error);
              });
            });
          })['catch'](reject);
        });

        executeCallback(promise, callback);
        return promise;
      }

      function set(key, value, callback) {
        const self = this;
        if (typeof key !== 'string') {
          globalObject.console.warn(key + ' used as a key, but it is not a string.');
          key = String(key);
        }

        const promise = new Promise(function(resolve, reject) {
          self.ready().then(function() {
            if (value === undefined) {
              value = null;
            }

            const originalValue = value;

            const dbInfo = self.__dbInfo;
            dbInfo.serializer.serialize(value, function(value, error) {
              if (error) {
                reject(error);
              } else {
                dbInfo.db.transaction(function(t) {
                  t.executeSql('INSERT OR REPLACE INTO ' + dbInfo.boxName + ' (key, value) VALUES (?, ?)', [key, value], function() {
                    resolve(originalValue);
                  }, function(t, error) {
                    reject(error);
                  });
                }, function(sqlError) {
                  if (sqlError.code === sqlError.QUOTA_ERR) {
                    reject(sqlError);
                  }
                });
              }
            });
          })['catch'](reject);
        });

        executeCallback(promise, callback);
        return promise;
      }

      function remove(key, callback) {
        const self = this;
        if (typeof key !== 'string') {
          globalObject.console.warn(key + ' used as a key, but it is not a string.');
          key = String(key);
        }

        const promise = new Promise(function(resolve, reject) {
          self.ready().then(function() {
            const dbInfo = self.__dbInfo;
            dbInfo.db.transaction(function(t) {
              t.executeSql('DELETE FROM ' + dbInfo.boxName + ' WHERE key = ?', [key], function() {
                resolve();
              }, function(t, error) {

                reject(error);
              });
            });
          })['catch'](reject);
        });

        executeCallback(promise, callback);
        return promise;
      }

      function clear(callback) {
        const self = this;
        const promise = new Promise(function(resolve, reject) {
          self.ready().then(function() {
            const dbInfo = self.__dbInfo;
            dbInfo.db.transaction(function(t) {
              t.executeSql('DELETE FROM ' + dbInfo.boxName, [], function() {
                resolve();
              }, function(t, error) {
                reject(error);
              });
            });
          })['catch'](reject);
        });

        executeCallback(promise, callback);
        return promise;
      }

      function size(callback) {
        const self = this;
        const promise = new Promise(function(resolve, reject) {
          self.ready().then(function() {
            const dbInfo = self.__dbInfo;
            dbInfo.db.transaction(function(t) {
              t.executeSql('SELECT COUNT(key) as c FROM ' + dbInfo.boxName, [], function(t, results) {
                const result = results.rows.item(0).c;

                resolve(result);
              }, function(t, error) {

                reject(error);
              });
            });
          })['catch'](reject);
        });

        executeCallback(promise, callback);
        return promise;
      }

      function key(n, callback) {
        const self = this;

        const promise = new Promise(function(resolve, reject) {
          self.ready().then(function() {
            const dbInfo = self.__dbInfo;
            dbInfo.db.transaction(function(t) {
              t.executeSql('SELECT key FROM ' + dbInfo.boxName + ' WHERE id = ? LIMIT 1', [n + 1], function(t, results) {
                const result = results.rows.length ? results.rows.item(0).key : null;
                resolve(result);
              }, function(t, error) {
                reject(error);
              });
            });
          })['catch'](reject);
        });

        executeCallback(promise, callback);
        return promise;
      }

      function keys(callback) {
        const self = this;
        const promise = new Promise(function(resolve, reject) {
          self.ready().then(function() {
            const dbInfo = self.__dbInfo;
            dbInfo.db.transaction(function(t) {
              t.executeSql('SELECT key FROM ' + dbInfo.boxName, [], function(t, results) {
                let keys = [];

                for (let i = 0; i < results.rows.length; i++) {
                  keys.push(results.rows.item(i).key);
                }

                resolve(keys);
              }, function(t, error) {

                reject(error);
              });
            });
          })['catch'](reject);
        });

        executeCallback(promise, callback);
        return promise;
      }

      function executeCallback(promise, callback) {
        if (callback) {
          promise.then(function(result) {
            callback(null, result);
          }, function(error) {
            callback(error);
          });
        }
      }

      const webSQLStorage = {
        __driver: 'webSQLStorage',
        __initStorage: __initStorage,
        each: each,
        get: get,
        set: set,
        remove: remove,
        clear: clear,
        size: size,
        key: key,
        keys: keys
      };

      // Export driver:
      this.webSQLStorage = webSQLStorage;
      globalObject.webSQLStorage = webSQLStorage;
    }).call(window);

    //=====================
    // localStorage Driver:
    //=====================
    (function() {
      const globalObject = this;
      let localStorage = null;
      try {
        if (!this.localStorage || !('setItem' in this.localStorage)) {
          return;
        }
        localStorage = this.localStorage;
      } catch (e) {
        return;
      }

      function __initStorage(options) {
        const self = this;
        let dbInfo = {};
        if (options) {
          for (let i in options) {
            dbInfo[i] = options[i];
          }
        }

        dbInfo.keyPrefix = dbInfo.name + '/';

        if (dbInfo.boxName !== self.__defaultConfig.boxName) {
          dbInfo.keyPrefix += dbInfo.boxName + '/';
        }

        self.__dbInfo = dbInfo;

        return new Promise(function(resolve, reject) {
          resolve(truckBoxSerializer);
        }).then(function(lib) {
          dbInfo.serializer = lib;
          return Promise.resolve();
        });
      }

      function clear(callback) {
        const self = this;
        const promise = self.ready().then(function() {
          const keyPrefix = self.__dbInfo.keyPrefix;

          for (let i = localStorage.length - 1; i >= 0; i--) {
            const key = localStorage.key(i);

            if (key.indexOf(keyPrefix) === 0) {
              localStorage.removeItem(key);
            }
          }
        });

        executeCallback(promise, callback);
        return promise;
      }

      function get(key, callback) {
        const self = this;
        if (typeof key !== 'string') {
          globalObject.console.warn(key + ' used as a key, but it is not a string.');
          key = String(key);
        }

        const promise = self.ready().then(function() {
          const dbInfo = self.__dbInfo;
          let result = localStorage.getItem(dbInfo.keyPrefix + key);
          if (result) {
            result = dbInfo.serializer.deserialize(result);
          }

          return result;
        });

        executeCallback(promise, callback);
        return promise;
      }

      function each(iterator, callback) {
        const self = this;

        const promise = self.ready().then(function() {
          const dbInfo = self.__dbInfo;
          const keyPrefix = dbInfo.keyPrefix;
          const keyPrefixLength = keyPrefix.length;
          const length = localStorage.length;
          let iterationNumber = 1;

          for (let i = 0; i < length; i++) {
            const key = localStorage.key(i);
            if (key.indexOf(keyPrefix) !== 0) {
              continue;
            }
            let value = localStorage.getItem(key);
            if (value) {
              value = dbInfo.serializer.deserialize(value);
            }

            value = iterator(value, key.substring(keyPrefixLength), iterationNumber++);
            if (value !== void 0) {
              return value;
            }
          }
        });

        executeCallback(promise, callback);
        return promise;
      }

      function key(n, callback) {
        const self = this;
        const promise = self.ready().then(function() {
          const dbInfo = self.__dbInfo;
          let result;
          try {
            result = localStorage.key(n);
          } catch (error) {
            result = null;
          }

          if (result) {
            result = result.substring(dbInfo.keyPrefix.length);
          }

          return result;
        });

        executeCallback(promise, callback);
        return promise;
      }

      function keys(callback) {
        const self = this;
        const promise = self.ready().then(function() {
          const dbInfo = self.__dbInfo;
          const length = localStorage.length;
          let keys = [];

          for (let i = 0; i < length; i++) {
            if (localStorage.key(i).indexOf(dbInfo.keyPrefix) === 0) {
              keys.push(localStorage.key(i).substring(dbInfo.keyPrefix.length));
            }
          }
          return keys;
        });

        executeCallback(promise, callback);
        return promise;
      }

      function size(callback) {
        const self = this;
        const promise = self.keys().then(function(keys) {
          return keys.length;
        });

        executeCallback(promise, callback);
        return promise;
      }

      function remove(key, callback) {
        const self = this;
        if (typeof key !== 'string') {
          globalObject.console.warn(key + ' used as a key, but it is not a string.');
          key = String(key);
        }

        const promise = self.ready().then(function() {
          const dbInfo = self.__dbInfo;
          localStorage.removeItem(dbInfo.keyPrefix + key);
        });

        executeCallback(promise, callback);
        return promise;
      }

      function set(key, value, callback) {
        const self = this;
        if (typeof key !== 'string') {
          globalObject.console.warn(key + ' used as a key, but it is not a string.');
          key = String(key);
        }

        const promise = self.ready().then(function() {
          if (value === undefined) {
            value = null;
          }
          const originalValue = value;

          return new Promise(function(resolve, reject) {
            const dbInfo = self.__dbInfo;
            dbInfo.serializer.serialize(value, function(value, error) {
              if (error) {
                reject(error);
              } else {
                try {
                  localStorage.setItem(dbInfo.keyPrefix + key, value);
                  resolve(originalValue);
                } catch (e) {
                  if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                    reject(e);
                  }
                  reject(e);
                }
              }
            });
          });
        });

        executeCallback(promise, callback);
        return promise;
      }

      function executeCallback(promise, callback) {
        if (callback) {
          promise.then(function(result) {
            callback(null, result);
          }, function(error) {
            callback(error);
          });
        }
      }

      const localStorageWrapper = {
        __driver: 'localStorageWrapper',
        __initStorage: __initStorage,
        each: each,
        get: get,
        set: set,
        remove: remove,
        clear: clear,
        size: size,
        key: key,
        keys: keys
      };

      // Export driver:
      this.localStorageWrapper = localStorageWrapper;
      window.localStorageWrapper = localStorageWrapper;
    }).call(window);

    //=================
    // Blob Serializer:
    //=================
    (function() {
      const BASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

      const BLOB_TYPE_PREFIX = '~~truck_box_type~';
      const BLOB_TYPE_PREFIX_REGEX = /^~~truck_box_type~([^~]+)~/;
      const SERIALIZED_MARKER = '__lfsc__:';
      const SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;
      const TYPE_ARRAYBUFFER = 'arbf';
      const TYPE_BLOB = 'blob';
      const TYPE_INT8ARRAY = 'si08';
      const TYPE_UINT8ARRAY = 'ui08';
      const TYPE_UINT8CLAMPEDARRAY = 'uic8';
      const TYPE_INT16ARRAY = 'si16';
      const TYPE_INT32ARRAY = 'si32';
      const TYPE_UINT16ARRAY = 'ur16';
      const TYPE_UINT32ARRAY = 'ui32';
      const TYPE_FLOAT32ARRAY = 'fl32';
      const TYPE_FLOAT64ARRAY = 'fl64';
      const TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;
      const globalObject = this;

      function __createBlob(parts, properties) {
        parts = parts || [];
        properties = properties || {};

        try {
          return new Blob(parts, properties);
        } catch (err) {
          if (err.name !== 'TypeError') {
            throw err;
          }

          const BlobBuilder = globalObject.BlobBuilder || globalObject.MSBlobBuilder || globalObject.MozBlobBuilder || globalObject.WebKitBlobBuilder;

          let builder = new BlobBuilder();
          for (let i = 0; i < parts.length; i += 1) {
            builder.append(parts[i]);
          }

          return builder.getBlob(properties.type);
        }
      }

      function serialize(value, callback) {
        let valueString = '';
        if (value) {
          valueString = value.toString();
        }

        if (value && (value.toString() === '[object ArrayBuffer]' || value.buffer && value.buffer.toString() === '[object ArrayBuffer]')) {
          let buffer;
          let marker = SERIALIZED_MARKER;

          if (value instanceof ArrayBuffer) {
            buffer = value;
            marker += TYPE_ARRAYBUFFER;
          } else {
            buffer = value.buffer;

            if (valueString === '[object Int8Array]') {
              marker += TYPE_INT8ARRAY;
            } else if (valueString === '[object Uint8Array]') {
              marker += TYPE_UINT8ARRAY;
            } else if (valueString === '[object Uint8ClampedArray]') {
              marker += TYPE_UINT8CLAMPEDARRAY;
            } else if (valueString === '[object Int16Array]') {
              marker += TYPE_INT16ARRAY;
            } else if (valueString === '[object Uint16Array]') {
              marker += TYPE_UINT16ARRAY;
            } else if (valueString === '[object Int32Array]') {
              marker += TYPE_INT32ARRAY;
            } else if (valueString === '[object Uint32Array]') {
              marker += TYPE_UINT32ARRAY;
            } else if (valueString === '[object Float32Array]') {
              marker += TYPE_FLOAT32ARRAY;
            } else if (valueString === '[object Float64Array]') {
              marker += TYPE_FLOAT64ARRAY;
            } else {
              callback(new Error('Failed to get type for BinaryArray'));
            }
          }

          callback(marker + bufferToString(buffer));
        } else if (valueString === '[object Blob]') {
          const fileReader = new FileReader();

          fileReader.onload = function() {
            const str = BLOB_TYPE_PREFIX + value.type + '~' + bufferToString(this.result);
            callback(SERIALIZED_MARKER + TYPE_BLOB + str);
          };

          fileReader.readAsArrayBuffer(value);
        } else {
          try {
            callback(JSON.stringify(value));
          } catch (e) {
            console.error("Couldn't convert value into a JSON string: ", value);

            callback(null, e);
          }
        }
      }

      function deserialize(value) {
        if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) {
          return JSON.parse(value);
        }
        let serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
        const type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);
        let blobType;
        if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
          const matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
          blobType = matcher[1];
          serializedString = serializedString.substring(matcher[0].length);
        }
        const buffer = stringToBuffer(serializedString);

        switch (type) {
          case TYPE_ARRAYBUFFER:
            return buffer;
          case TYPE_BLOB:
            return __createBlob([buffer], {
              type: blobType
            });
          case TYPE_INT8ARRAY:
            return new Int8Array(buffer);
          case TYPE_UINT8ARRAY:
            return new Uint8Array(buffer);
          case TYPE_UINT8CLAMPEDARRAY:
            return new Uint8ClampedArray(buffer);
          case TYPE_INT16ARRAY:
            return new Int16Array(buffer);
          case TYPE_UINT16ARRAY:
            return new Uint16Array(buffer);
          case TYPE_INT32ARRAY:
            return new Int32Array(buffer);
          case TYPE_UINT32ARRAY:
            return new Uint32Array(buffer);
          case TYPE_FLOAT32ARRAY:
            return new Float32Array(buffer);
          case TYPE_FLOAT64ARRAY:
            return new Float64Array(buffer);
          default:
            throw new Error('Unkown type: ' + type);
        }
      }

      function stringToBuffer(serializedString) {
        let bufferLength = serializedString.length * 0.75;
        const len = serializedString.length;
        let i;
        let p = 0;
        let encoded1, encoded2, encoded3, encoded4;
        if (serializedString[serializedString.length - 1] === '=') {
          bufferLength--;
          if (serializedString[serializedString.length - 2] === '=') {
            bufferLength--;
          }
        }
        const buffer = new ArrayBuffer(bufferLength);
        let bytes = new Uint8Array(buffer);

        for (i = 0; i < len; i += 4) {
          encoded1 = BASE_CHARS.indexOf(serializedString[i]);
          encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);
          encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);
          encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);

          /*jslint bitwise: true */
          bytes[p++] = encoded1 << 2 | encoded2 >> 4;
          bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
          bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
        }
        return buffer;
      }

      function bufferToString(buffer) {
        const bytes = new Uint8Array(buffer);
        let base64String = '';
        let i;

        for (i = 0; i < bytes.length; i += 3) {
          /*jslint bitwise: true */
          base64String += BASE_CHARS[bytes[i] >> 2];
          base64String += BASE_CHARS[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
          base64String += BASE_CHARS[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
          base64String += BASE_CHARS[bytes[i + 2] & 63];
        }
        if (bytes.length % 3 === 2) {
          base64String = base64String.substring(0, base64String.length - 1) + '=';
        } else if (bytes.length % 3 === 1) {
          base64String = base64String.substring(0, base64String.length - 2) + '==';
        }
        return base64String;
      }

      const truckBoxSerializer = {
        serialize: serialize,
        deserialize: deserialize,
        stringToBuffer: stringToBuffer,
        bufferToString: bufferToString
      };

      // Export driver:
      this.truckBoxSerializer = truckBoxSerializer;
      window.truckBoxSerializer = truckBoxSerializer;
    }).call(window);

    //==========================
    // Truck Box Implementation:
    //==========================
    let CustomDrivers = {};
    const DriverType = {
      INDEXEDDB: 'asyncStorage',
      LOCALSTORAGE: 'localStorageWrapper',
      WEBSQL: 'webSQLStorage'
    };
    let DefaultDriverOrder = [DriverType.INDEXEDDB, DriverType.WEBSQL, DriverType.LOCALSTORAGE];
    const LibraryMethods = ['clear', 'get', 'each', 'key', 'keys', 'size', 'remove', 'set'];

    let DefaultConfig = {
      description: '',
      driver: DefaultDriverOrder.slice(),
      name: 'truckbox',
      size: 4980736,
      boxName: 'keyvaluepairs',
      version: 1.0
    };

    const driverSupport = (function(self) {
      const indexedDB = indexedDB || self.indexedDB || self.webkitIndexedDB || self.mozIndexedDB || self.OIndexedDB || self.msIndexedDB;
       let result = {};
      result[DriverType.WEBSQL] = !!self.openDatabase;
      result[DriverType.INDEXEDDB] = !!(function() {
        if (typeof self.openDatabase !== 'undefined' && self.navigator && self.navigator.userAgent && /Safari/.test(self.navigator.userAgent) && !/Chrome/.test(self.navigator.userAgent)) {
          return false;
        }
        try {
          return indexedDB && typeof indexedDB.open === 'function' &&
            typeof self.IDBKeyRange !== 'undefined';
        } catch (e) {
          return false;
        }
      })();

      result[DriverType.LOCALSTORAGE] = !!(function() {
        try {
          return self.localStorage && 'setItem' in self.localStorage && self.localStorage.setItem;
        } catch (e) {
          return false;
        }
      })();

      return result;
    })(window);

    const isArray = Array.isArray || function(arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    };

    function callWhenReady(truckBoxInstance, libraryMethod) {
      truckBoxInstance[libraryMethod] = function() {
        const __args = arguments;
        return truckBoxInstance.ready().then(function() {
          return truckBoxInstance[libraryMethod].apply(truckBoxInstance, __args);
        });
      };
    }

    function extend() {
      for (let i = 1; i < arguments.length; i++) {
        const arg = arguments[i];

        if (arg) {
          for (let key in arg) {
            if (arg.hasOwnProperty(key)) {
              if (isArray(arg[key])) {
                arguments[0][key] = arg[key].slice();
              } else {
                arguments[0][key] = arg[key];
              }
            }
          }
        }
      }

      return arguments[0];
    }

    function isLibraryDriver(driverName) {
      for (let driver in DriverType) {
        if (DriverType.hasOwnProperty(driver) && DriverType[driver] === driverName) {
          return true;
        }
      }

      return false;
    }

    const TruckBox = (function() {
      function TruckBox(options) {

        this.INDEXEDDB = DriverType.INDEXEDDB;
        this.LOCALSTORAGE = DriverType.LOCALSTORAGE;
        this.WEBSQL = DriverType.WEBSQL;

        this.__defaultConfig = extend({}, DefaultConfig);
        this.__config = extend({}, this.__defaultConfig, options);
        this.__driverSet = null;
        this.__initDriver = null;
        this.__ready = false;
        this.__dbInfo = null;

        this.__wrapLibraryMethodsWithReady();
        this.setDriver(this.__config.driver);
      }

      TruckBox.prototype.config = function(options) {
        if (typeof options === 'object') {
          if (this.__ready) {
            return new Error("Can't call config() after truckbox " + 'has been used.');
          }
          for (let i in options) {
            if (i === 'boxName') {
              options[i] = options[i].replace(/\W/g, '_');
            }

            this.__config[i] = options[i];
          }
          if ('driver' in options && options.driver) {
            this.setDriver(this.__config.driver);
          }

          return true;
        } else if (typeof options === 'string') {
          return this.__config[options];
        } else {
          return this.__config;
        }
      };

      TruckBox.prototype.defineDriver = function(driverObject, callback, errorCallback) {
        const promise = new Promise(function(resolve, reject) {
          try {
            const driverName = driverObject.__driver;
            const complianceError = new Error('Custom driver not compliant; see Truck Box documentation');
            const namingError = new Error('Custom driver name already in use: ' + driverObject.__driver);
            if (!driverObject.__driver) {
              reject(complianceError);
              return;
            }
            if (isLibraryDriver(driverObject.__driver)) {
              reject(namingError);
              return;
            }

            const customDriverMethods = LibraryMethods.concat('__initStorage');
            for (let i = 0; i < customDriverMethods.length; i++) {
              const customDriverMethod = customDriverMethods[i];
              if (!customDriverMethod || !driverObject[customDriverMethod] || typeof driverObject[customDriverMethod] !== 'function') {
                reject(complianceError);
                return;
              }
            }

            let supportPromise = Promise.resolve(true);
            if ('__support' in driverObject) {
              if (driverObject.__support && typeof driverObject.__support === 'function') {
                supportPromise = driverObject.__support();
              } else {
                supportPromise = Promise.resolve(!!driverObject.__support);
              }
            }

            supportPromise.then(function(supportResult) {
              driverSupport[driverName] = supportResult;
              CustomDrivers[driverName] = driverObject;
              resolve();
            }, reject);
          } catch (e) {
            reject(e);
          }
        });

        promise.then(callback, errorCallback);
        return promise;
      };

      TruckBox.prototype.driver = function() {
        return this.__driver || null;
      };

      TruckBox.prototype.getDriver = function(driverName, callback, errorCallback) {
        const self = this;
        const getDriverPromise = (function() {
          if (isLibraryDriver(driverName)) {
            switch (driverName) {
              case self.INDEXEDDB:
                return new Promise(function(resolve, reject) {
                  resolve(asyncStorage);
                });
              case self.LOCALSTORAGE:
                return new Promise(function(resolve, reject) {
                  resolve(localStorageWrapper);
                });
              case self.WEBSQL:
                return new Promise(function(resolve, reject) {
                  resolve(webSQLStorage);
                });
            }
          } else if (CustomDrivers[driverName]) {
            console.log('Using: ' + driverName)
            return Promise.resolve(CustomDrivers[driverName]);
          }

          return Promise.reject(new Error('Driver not found.'));
        })();

        getDriverPromise.then(callback, errorCallback);
        return getDriverPromise;
      };

      TruckBox.prototype.getSerializer = function(callback) {
        const serializerPromise = new Promise(function(resolve, reject) {
          resolve(truckBoxSerializer)
        });
        if (callback && typeof callback === 'function') {
          serializerPromise.then(function(result) {
            callback(result);
          });
        }
        return serializerPromise;
      };

      TruckBox.prototype.ready = function(callback) {
        const self = this;

        const promise = self.__driverSet.then(function() {
          if (self.__ready === null) {
            self.__ready = self.__initDriver();
          }

          return self.__ready;
        });

        promise.then(callback, callback);
        return promise;
      };

      TruckBox.prototype.setDriver = function(drivers, callback, errorCallback) {
        const self = this;

        if (!isArray(drivers)) {
          drivers = [drivers];
        }

        const supportedDrivers = this.__getSupportedDrivers(drivers);

        function setDriverToConfig() {
          self.__config.driver = self.driver();
        }

        function initDriver(supportedDrivers) {
          return function() {
            let currentDriverIndex = 0;

            function driverPromiseLoop() {
              while (currentDriverIndex < supportedDrivers.length) {
                const driverName = supportedDrivers[currentDriverIndex];
                currentDriverIndex++;

                self.__dbInfo = null;
                self.__ready = null;

                return self.getDriver(driverName).then(function(driver) {
                  self.__extend(driver);
                  setDriverToConfig();

                  self.__ready = self.__initStorage(self.__config);
                  return self.__ready;
                })['catch'](driverPromiseLoop);
              }

              setDriverToConfig();
              const error = new Error('No available storage method found.');
              self.__driverSet = Promise.reject(error);
              return self.__driverSet;
            }

            return driverPromiseLoop();
          };
        }

        const oldDriverSetDone = this.__driverSet !== null ? this.__driverSet['catch'](function() {
          return Promise.resolve();
        }) : Promise.resolve();

        this.__driverSet = oldDriverSetDone.then(function() {
          const driverName = supportedDrivers[0];
          self.__dbInfo = null;
          self.__ready = null;

          return self.getDriver(driverName).then(function(driver) {
            self.__driver = driver.__driver;
            setDriverToConfig();
            self.__wrapLibraryMethodsWithReady();
            self.__initDriver = initDriver(supportedDrivers);
          });
        })['catch'](function() {
          setDriverToConfig();
          const error = new Error('No available storage method found.');
          self.__driverSet = Promise.reject(error);
          return self.__driverSet;
        });

        this.__driverSet.then(callback, errorCallback);
        return this.__driverSet;
      };

      TruckBox.prototype.supports = function(driverName) {
        return !!driverSupport[driverName];
      };

      TruckBox.prototype.__extend = function(libraryMethodsAndProperties) {
        extend(this, libraryMethodsAndProperties);
      };

      TruckBox.prototype.__getSupportedDrivers = function(drivers) {
        let supportedDrivers = [];
        for (let i = 0, len = drivers.length; i < len; i++) {
          const driverName = drivers[i];
          if (this.supports(driverName)) {
            supportedDrivers.push(driverName);
          }
        }
        return supportedDrivers;
      };

      TruckBox.prototype.__wrapLibraryMethodsWithReady = function() {
        for (let i = 0; i < LibraryMethods.length; i++) {
          callWhenReady(this, LibraryMethods[i]);
        }
      };

      TruckBox.prototype.createInstance = function(options) {
        return new TruckBox(options);
      };

      return TruckBox;
    })();

    const truckBox = new TruckBox();
    return truckBox;
  })(window)
});