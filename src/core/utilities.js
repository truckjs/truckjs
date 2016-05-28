
  /**
   * Truck utility methods.
   */
  $.extend({
    lib: "TruckJS",

    version: 'VERSION_NUMBER',

    noop: () => {},

    uuid: () => {
      let d = Date.now();
      const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
      const randomLetter = charset[Math.floor(Math.random() * charset.length)];
      return randomLetter + 'xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
    },

    html: HTMLString => {
      let ret = new DOMStack();
      let temp;

      const wrapperMap = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        __default: [1, "<div>", "</div>"]
      };

      wrapperMap.optgroup = wrapperMap.option;
      wrapperMap.tbody = wrapperMap.tfoot = wrapperMap.colgroup = wrapperMap.caption = wrapperMap.thead;
      wrapperMap.th = wrapperMap.td;

      let element = document.createElement('div');
      const match = /<\s*\w.*?>/g.exec(HTMLString);

      if (match !== null) {
        const tag = match[0].replace(/</g, '').replace(/>/g, '');
        const map = wrapperMap[tag] || wrapperMap.__default;
        HTMLString = map[1] + HTMLString + map[2];

        element.innerHTML = HTMLString;
        element = element.lastChild;

        temp = Array.prototype.slice.apply(element.childNodes);
        temp.forEach(ctx => {
          if (ctx.nodeType === 1) {
            ret.push(ctx);
          } else if (ctx.nodeType === 3 && ctx.nodeValue.trim().length !== 0) {
            ret.push(ctx);
          }
        });

      } else {
        element.innerHTML = HTMLString;
        element = element.lastChild;
        ret.push(element);
      }

      return ret;
    },

    require: (src, callback, ctx) => {
      let onerror = "onerror";
      const insertScript = function(script) {
        let firstScript = document.getElementsByTagName("script")[0];
        firstScript.parentNode.insertBefore(script, firstScript);
      };
      let script = document.createElement("script");
      let done = false;
      let err;
      let loadScript;
      const handleError = function() {
        err = new Error(src || "EMPTY");
        loadScript();
      };
      const setupLoad = function(fn) {
        return function() {
          // Only call once.
          if (done) {
            return;
          }
          done = true;
          fn();
          if (callback) {
            callback.call(ctx, err);
          }
        };
      };

      loadScript = setupLoad(function() {
        script.onload = script[onerror] = null;
      });

      script[onerror] = handleError;
      script.onload = loadScript;
      script.async = true;
      script.charset = "utf-8";
      script.src = src;
      insertScript(script);
    },

    delay: milliseconds => {
      return new Promise(function (resolve, reject) {
        setTimeout(resolve, milliseconds);
      });
    },

    each: (obj, callback) => {
      let value;
      let key;
      let i = 0;
      let length;

      if (Array.isArray(obj)) {
        length = obj.length;
        for (; i < length; i++) {
          value = callback.call(obj[i], i, obj[i]);
          if (value === false) {
            break;
          }
        }
        return obj;
      } else if (obj.objectType && obj.objectType === 'domstack') {
        obj.forEach((item, idx) => callback.call(item, idx, item));
        return obj;
      } else if ($.type(obj) === 'object' && Object.keys(obj).length) {
        for (key in obj) {
          if (callback.call(obj[key], key, obj[key]) === false) return obj;
        }
      }
    },

    unique: array => {
      if (!array || !Array.isArray(array)) return;
      const len = array.length;
      let obj = {};
      let ret = [];
      for (let i = 0; i < len; i++) {
        const arrayItem = JSON.stringify(array[i]);
        const arrayItemValue = array[i];
        if (obj[arrayItem] === undefined) {
          ret.push(arrayItemValue);
          obj[arrayItem] = 1;
        } else {
          obj[arrayItem]++;
        }
      }
      return ret;
    },

    // Replace target element with new element:
    replace: (newElement, targetElement) => {
      if (!newElement || !targetElement) return;
      let newEl;
      let targEl;
      if (typeof newElement === 'string') {
        newEl = $(newElement)[0];
      } else if (newElement.objectType && newElement.objectType === 'domstack') {
        newEl = newElement[0];
      } else if (newElement.nodeType === 1) {
        newEl = newElement;
      }
      if (typeof targetElement === 'string') {
        targEl = $(targetElement)[0];
      } else if (targetElement.objectType && targetElement.objectType === 'domstack') {
        targEl = targetElement[0];
      } else if (targetElement.nodeType === 1) {
        targEl = targetElement;
      }
      // Remove target's bound events:
      $(targEl).off();
      targEl.parentNode.replaceChild(newEl, targEl);
    },

    // Extra boolean types:
    isEmptyObject: obj =>  Object.keys(obj).length === 0,

    isInteger: number => (typeof number === 'number' && number % 1 === 0),

    isFloat: number => (typeof number === 'number' && number % 1 !== 0),

    encode: value => encodeURIComponent(value),

    escapeHTML: data => {
      const tagsToReplace = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '(': '%28',
        ')': '%29'
      };
      let str = JSON.stringify(data);

      const replaceTag = (tag) => tagsToReplace[tag] || tag;

      const safe_tags_replace = (str) => str.replace(/[&<>]/g, replaceTag);

      str = safe_tags_replace(str);
      return JSON.parse(str);
    },

    concat: args => (args instanceof Array) ? args.join('') : [].slice.apply(arguments).join('')
  });