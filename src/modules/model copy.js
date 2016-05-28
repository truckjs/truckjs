// Truck Module - Model:
import '../truck';
import './mediator';
import './box';

$.extend({

  /**
   * Factory to create a model.
   *
   * @param {any} data The data for the model. Can be just "" or [].
   * @param {string} handle A handle used by models to annouce their changes. When a view is bound to a model, a mediator listens for the model's handle to update the view.
   * @return {object} A model.
   */
  Model: (data, handle) => {

    // Define handle name:
    let __handle = handle || $.uuid();
    // Init private data:
    let __data = data || '';
    data = null;

    // Used for boxing a model:
    let __name;
    let __boxName;
    let __key;
    let __autobox = false;
    let __lastBoxTime;
    let __lastModifiedTime = 0;

    const checkPublicationName = (__handle) => {
      return typeof __handle === 'string';
    };

    const propagateDataLoop = (handle, data) => {
      if ($.mediators[handle]) {
        $.mediators[handle].forEach((cntrl) => {
          if (cntrl && cntrl.callback) {
            cntrl.callback.call(cntrl.callback, data);
          }
        });
      }
    };

    const propagateData = (__handle, data, doNotPropogate) => {
      if (!doNotPropogate) {
        propagateDataLoop(__handle, data);
      } else if (doNotPropogate && checkPublicationName(doNotPropogate) === 'string') {
        propagateDataLoop(doNotPropogate, data);
      }
    };

    // Return closure to encapsulate data:
    return {

      key: () => __key,

      // Get size of array data:
      size: function() {
        if (this.hasData() && this.isIterable()) {
          return __data.length;
        }
      },

      // Define getter:
      eq: function(prop) {
        if (Array.isArray(__data)) {
          if (__data && isNaN(prop)) {
            return __data[prop];
          } else if (__data && !isNaN(prop) && prop < 0) {
            return __data[__data.length - 1];
          } else if (__data && !isNaN(prop) && prop > -1) {
            return __data[prop];
          }
        } else if (this.hasData()) {
          return __data[prop];
        }
      },

      // Allow setting a property value on an object.
      // This is for objects that are not iterable.
      setProp: function(prop, value, doNotPropogate) {
        if (!prop || (this.hasData() && this.isIterable())) {
          return;
        }
        if (!__data) {
          __data = {};
          __data[prop] = value;
          propagateData(__handle, __data, doNotPropogate);
        } else {
          __data[prop] = value;
          propagateData(__handle, __data, doNotPropogate);
        }
        __lastModifiedTime = Date.now();
      },

      // Get a property on an object.
      // This is for objects that are not iterable.
      getProp: function(prop) {
        if (!prop || (this.hasData() && this.isIterable())) {
          return;
        } else {
          return __data[prop];
        }
      },

      // Replace a single object with another.
      // This is for objects that are not iterable.
      setObject: function(obj, doNotPropogate) {
        if (!obj || (this.hasData() && this.isIterable())) {
          return;
        }
        __data = obj;
        __lastModifiedTime = Date.now();
        propagateData(__handle, __data, doNotPropogate);
      },

      // Merge new object into existing object.
      // New properties will be added,
      // existing properties will be updated.
      mergeObject: function(obj, doNotPropogate) {
        if (!obj || $.type(obj) !== 'object') return;
        const temp = this.getData();
        $.extend(temp, obj);
        this.setObject(temp, doNotPropogate);
      },

      // Define push for collections.
      // Add item to end of collection:
      push: function(data, doNotPropogate) {
        if (!data) return;
        const self = this;
        if (Array.isArray(__data)) {
          __data.push(data);
          __lastModifiedTime = Date.now();
          propagateData(__handle, data, doNotPropogate);
          if (__autobox) {
            self.box({
              key: __key
            });
          }
        }
      },

      // Define pop for collections.
      // Remove item from end of collection:
      pop: function(doNotPropogate) {
        const self = this;
        if (this.hasData() && this.isIterable()) {
          const data = __data.pop();
          __lastModifiedTime = Date.now();
          propagateData(__handle, data, doNotPropogate);
          if (__autobox) {
            self.box({
              key: __key
            });
          }
          return data;
        }
      },

      // Unshift for collections.
      // Add item to beginning of collection:
      unshift: function(data, doNotPropogate) {
        if (!data) return;
        const self = this;
        if (Array.isArray(__data)) {
          __data.unshift(data);
          __lastModifiedTime = Date.now();
          propagateData(__handle, data, doNotPropogate);
          if (__autobox) {
            self.box({
              key: __key
            });
          }
        }
      },

      // Shift for collections.
      // Remove item from beginning of collection:
      shift: function(doNotPropogate) {
        const self = this;
        if (this.hasData() && this.isIterable()) {
          const __d = __data.shift();
          __lastModifiedTime = Date.now();
          propagateData(__handle, __d, doNotPropogate);
          if (__autobox) {
            self.box({
              key: __key
            });
          }
          return __d;
        }
      },

      // Define concat for collections.
      // Merge one array into view model:
      concat: function(data, doNotPropogate) {
        if (!data) return;
        const self = this;
        if (Array.isArray(__data)) {
          __data.push.apply(__data, data);
          __lastModifiedTime = Date.now();
          propagateData(__handle, __data, doNotPropogate);
          if (__autobox) {
            self.box({
              key: __key
            });
          }
        }
      },

      // Define insert for collections.
      // Insert data at position:
      insert: function(position, data, doNotPropogate) {
        if (!position) return;
        const self = this;
        if (this.hasData() && this.isIterable()) {
          let len = data.length;
          // The position is greater than the collection,
          // so add to end of collection:
          if (position >= len -1) {
            __data.push(data);
            __lastModifiedTime = Date.now();
            propagateData(__handle, data, doNotPropogate);
          // Otherwise insert it at the position:
          } else {
            __data.splice(position, 0, data);
            __lastModifiedTime = Date.now();
            propagateData(__handle, data, doNotPropogate);
          }
        }
        if (__autobox) {
          self.box({
            key: __key
          });
        }
      },

      // Define unique for collections.
      // Remove duplicates from view model:
      unique: function(doNotPropogate) {
        const len = __data.length;
        let ret = [];
        let obj = {};
        const self = this;

        if (this.hasData() && this.isIterable()) {
          for (let i = 0; i < len; i++) {
            const arrayItem = JSON.stringify(__data[i]);
            const arrayItemValue = __data[i];
            if (obj[arrayItem] === undefined) {
              ret.push(arrayItemValue);
              obj[arrayItem] = 1;
            } else {
              obj[arrayItem]++;
            }
          }
          __lastModifiedTime = Date.now();
          __data = ret;
        }
        if (doNotPropogate) {
          if (checkPublicationName(doNotPropogate)) {
            $.mediators[doNotPropogate].forEach(function(handle) {
              handle.callback.call(handle.callback, data);
            });
          }
        } else {
          $.dispatch(__handle, __data);
        }
        if (__autobox) {
          self.box({
            key: __key
          });
        }
      },

      // Get the index of data from a collection:
      index: function(prop, value) {
        if (this.hasData() && this.isIterable()) {
          if (value) {
            for (let i = 0; i < __data.length; i++) {
              if (__data[i][prop] === value) {
                return i;
              }
            }
          } else {
            return __data.indexOf(prop);
          }
        }
        return;
      },

      // Filter the data of a collection:
      filter: function(args) {
        if (this.hasData() && this.isIterable()) {
          return __data.filter.apply(__data, arguments);
        }
      },

      // Map the data of a collection:
      map: function(args) {
        if (this.hasData() && this.isIterable()) {
          return __data.map.apply(__data, arguments);
        }
      },

      // Pluck the property value from a collection:
      pluck: function(property) {
        if (!property) return;
        let ret = [];
        if (this.hasData() && this.isIterable()) {
          const len = this.size();
          for (let i = 0; i < len; i++) {
            ret.push(__data[i][property]);
          }
          return ret;
        }
      },

      sort: (args) => {
        __lastModifiedTime = Date.now();
        return __data.sort.call(__data, args);
      },

      reverse: function() {
        const self = this;
        __lastModifiedTime = Date.now();
        __data.reverse();
        if (__autobox) {
          self.box({
            key: __key
          });
        }
      },

      // Sort the data of a collection:
      sortBy: function(props) {
        const orderBy = function(args) {
          const props = arguments;
          return function(a, b) {
            const sortByProperty = (property) => {
              // Default sort order:
              let sortOrder = 1;
              // If user provided property 
              // with "-" prefix, make
              // sort order descending:
              if (property[0] === "-") {
                sortOrder = -1;
                // Extract property from hyphen prefix:
                property = property.substr(1);
              }
              // Sort objects by provided properties:
              //=====================================
              return (a, b) => {
                const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
                return result * sortOrder;
              };
            };

            // Loop over all properties and sort
            // objects based on those properties:
            //===================================
            let i = 0;
            let result = 0;
            const numberOfProperties = props.length;
            while (result === 0 && i < numberOfProperties) {
              // Use the private function to compare two values:
              //================================================
              result = sortByProperty(props[i])(a, b);
              i++;
            }
            __lastModifiedTime = Date.now();
            return result;
          };
        };
        if (this.hasData() && this.isIterable()) {
          return __data.sort(orderBy.apply(null, arguments));
        }
      },

      // Enable user to delete either an object property,
      // or an index of a collection;
      delete: function(data, doNotPropogate) {
        let pos;
        if (data !== 0 && !data) return;
        const self = this;
        if (this.hasData() && this.isIterable()) {
          pos = __data.indexOf(data);
          __data.splice(pos, 1);
          __lastModifiedTime = Date.now();
        } else if (this.hasData()) {
          __lastModifiedTime = Date.now();
          delete __data[data];
        }
        propagateData(__handle, __data, doNotPropogate);
        if (__autobox) {
          self.box({
            key: __key
          });
        }
      },

      // Enable callback execution with model:
      run: function(callback) {
        callback.call(callback, this, __data);
      },

      // For the model to announce its current data state:
      poke: function() {
        if (this.hasData() && this.isIterable() && __handle) {
          $.mediators[__handle].forEach(function(handle) {
            handle.callback.call(handle.callback, data);
          });
        }
      },

      // Get the current model handle:
      getHandle: () => __handle,

      // Set the handle that the model uses.
      // If a handle was set up at initialization,
      // it will be replace with this handel
      setHandle: (handle) => {
        if (handle && typeof handle === 'string') {
          __handle = handle;
        }
      },

      // Delete all data in the model:
      purge: function() {
        const self = this;
        if ($.type(__data) === 'array') {
          __data.length = 0;
        } else if ($.type(__data) === 'object') {
          for (k in __data)
            if (!(__data[k] instanceof Function)) delete __data[k];
        }
        if (__autobox) {
          self.box({
            key: __key
          });
        }
      },

      // Determine if the model has any data:
      hasData: () => {
        if ($.type(__data) === 'array' && __data.length || $.type(__data) === 'object' && !$.isEmptyObject(__data)) {
          return true;
        } else {
          return false;
        }
      },

      // Returns whether the model's data is
      // an array or an object:
      getType: () => {
        if (Array.isArray(__data)) {
          return 'array';
        } else if (typeof __data === 'object') {
          return 'object';
        } else {
          return;
        }
      },

      isIterable: () => {
        if (Array.isArray(__data)) {
          return true;
        } else {
          return false;
        }
      },

      forEach: function(callback) {
        if (this.hasData() && this.isIterable()) {
          let value;
          let i = -1;
          const len = __data.length;
          while (++i < len) {
            value = callback.call(__data[i], __data[i], i);
            if (value === false) {
              break;
            }
          }
        }
      },

      // Get all current data from model:
      getData: function() {
        if (this.hasData()) {
          return __data;
        }
      },

      // Set a value on an object property in a stack,
      // or replace the object with another:
      setItemProp: function(index, prop, value, doNotPropogate) {
        const self = this;
        if (this.hasData() && this.isIterable()) {
          if (isNaN(index)) return;
          if (!isNaN(index) && value) {
            __data[index][prop] = value;
            __lastModifiedTime = Date.now();
            propagateData(__handle, __data, doNotPropogate);
          } else if (prop && !value) {
            // __data[index][prop];
            __data.splice(index, 1, prop);
            __lastModifiedTime = Date.now();
            propagateData(__handle, __data, doNotPropogate);
          }
        } else {
          __data[index] = prop;
          __lastModifiedTime = Date.now();
          propagateData(__handle, __data, value);
        }
        if (__autobox) {
          self.box({
            key: __key
          });
        }
      },

      // Get the value of a property on an object in a stack,
      // or get the whole object at that index.
      getItemProp: function(index, prop) {
        if (this.hasData() && this.isIterable()) {
          if (isNaN(index)) return;
          if (prop) {
            return __data[index][prop];
          } else {
            return __data[index];
          }
        } else {
          return __data[index];
        }
      },

      deleteItemProp: function(index, prop, doNotPropogate) {
        const self = this;
        if (this.hasData() && this.isIterable()) {
          if (isNaN(index)) return;
          if (typeof prop === 'string') {
            __lastModifiedTime = Date.now();
            delete __data[index][prop];
            propagateData(__handle, __data, doNotPropogate);
          } else if (prop === true) {
            __lastModifiedTime = Date.now();
            __data.splice(index, 1);
            propagateData(__handle, __data, prop);
          } else {
            __lastModifiedTime = Date.now();
            __data.splice(index, 1);
            propagateData(__handle, __data, doNotPropogate);
          }
        }
        if (__autobox) {
          self.box({
            key: __key
          });
        }
      },

      getLastModTime: () => __lastModifiedTime,

      box: function(options) {
        /*
          options = {
            key: key,
            boxName: name
          }
        */

        if (!options) return;
        let value;
        __autobox = options.autobox || __autobox;
        __name = options.name || $.Box.__config.name;
        __boxName = options.boxName || 'keyvaluepairs';
        __key = options.key || this.getHandle();

        // Box the model's data:
        value = this.getData();
        $.Box.set(__key, value).then((item) => {
          __lastBoxTime = Date.now();
        });
      },

      setToAutobox: function(options) {
        __autobox = true;
        __name = options.name || $.Box.__config.name;
        __boxName = options.boxName || 'keyvaluepairs';
        __key = options.key || this.getHandle();
      },

      isBoxed: () => __lastBoxTime ? true : false,

      isAutoBoxed: () => __autobox ? true : false,

      getLastBoxTime: () => __lastBoxTime

    };
  }
});