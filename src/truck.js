// Import DOMStack:
import {DOMStack} from './domstack.js';
/**
 * Truck Core. This function exports the Truck singleton.
 */
export default (function(DOMStack) {


  /**
   * Truck singleton. This function can query the DOM with the provided parameters, or execute a callback when the DOM is ready. This is all the base for Truck methods for DOM manipulation, as well as for the Truck MVC modules and widgets.
   */
  function Truck(selector, context) {
    const __this = this;
    const idRE = /^#([\w-]*)$/;
    const classRE = /^\.([\w-])$/;
    const tagRE = /^[\w-]+$/;
    const readyRE = /complete|loaded|interactive/;
    let temp;

    const slice = elements => {
      temp = new DOMStack([].slice.apply(elements));
      temp[0] = temp.array[0];
      return temp;
    };

    const getId = selector => {
      const el = document.getElementById(selector.split('#')[1]);
      if (el) {
        temp = new DOMStack([el]);
        temp[0] = new DOMStack([el]).array[0];
        temp.length = 1;
        return temp;
      } else {
        return new DOMStack();
      }
    };

    const getTag = (selector, context) => {
      if (context) {
        temp = slice(context.getElementsByTagName(selector));
        temp[0] = temp.array[0];
        temp.length = temp.length;
        return temp;
      } else {
        temp = slice(document.getElementsByTagName(selector));
        temp[0] = temp.array[0];
        temp.length = temp.array.length;
        return temp;
      }
    };

    const getClass = (selector, context) => {
      if (context) {
        temp = slice(context.getElementsByClassName(selector.split('.')[1]));
        temp[0] = temp.array[0];
        temp.length = temp.length;
        return temp;
      } else {
        temp = slice(document.getElementsByClassName(selector.split('.')[1]));
        temp[0] = temp.array[0];
        temp.length = temp.array.length;
        return temp;
      }
    };

    const getNode = (selector, context) => {
      if (typeof selector === 'string')
        selector = selector.trim();
      if (typeof selector === 'string' && idRE.test(selector)) {
        return getId(selector);
      }

      if (selector && (selector instanceof Array) && selector.length)
        return selector;
      if (!context && typeof selector === 'string') {
        if (/<\/?[^>]+>/.test(selector)) {
          return __this.html(selector);
        }

        if (tagRE.test(selector)) {
          return getTag(selector);

        } else if (classRE.test(selector)) {
          return getClass(selector);

        } else {
          temp = slice(document.querySelectorAll(selector));
          temp[0] = temp.array[0];
          temp.length = temp.array.length;
          return temp;
        }

      } else {
        if (context) {
          temp = slice($(context).find(selector));
          temp[0] = temp.array[0];
          temp.length = temp.array / length;
          return temp;

        } else {
          temp = slice(document.querySelectorAll(selector));
          temp[0] = temp.array[0];
          temp.length = temp.array.length;
          return temp;
        }
      }
    };

    if (selector && selector.objectType && selector.objectType === 'domstack') {
      return selector;
    }

    if (selector === document) {
      return new DOMStack(document);
    }

    if (selector === null) {
      return new DOMStack();
    }

    if (!!context) {
      if (typeof context === 'string') {
        temp = slice(document.querySelectorAll(context + ' ' + selector));
        temp[0] = temp.array[0];
        temp.length = temp.array.length;
        return temp;
      } else if (context.nodeType === 1) {
        return getNode(selector, context);
      }

    } else if (typeof selector === 'function') {
      if (readyRE.test(document.readyState) && document.body) {
        selector.call(selector);
      } else {
        document.addEventListener("DOMContentLoaded", function() {
          return selector.call(selector);
        });
      }

    } else if (selector && selector.nodeType === 1) {
      temp = new DOMStack();
      temp[0] = selector;
      temp.length = temp.array.length;
      temp.push(selector);
      return temp;

    } else if (typeof selector === 'string') {
      if (selector === '') return new DOMStack();
      if (/<\/?[^>]+>/.test(selector)) {
        return Truck.html(selector);
      } else {
        try {
          return getNode(selector) ? getNode(selector) : new DOMStack();
        } catch (err) {
          return new DOMStack();
        }
      }

    } else if (Array.isArray(selector)) {
      return new DOMStack(selector);
      
    } else if (selector === window) {
      temp = new DOMStack();
      temp[0] = window;
      temp.length = temp.array.length;
      return temp;

    } else {
      return new DOMStack();
    }

    return new DOMStack();
  }
  
  let $ = Truck;

  /**
   * Truck extend method.
   */
  $.extend = (targetObject, sourceObject) => {
    if (!sourceObject) {
      sourceObject = targetObject;
      targetObject = Truck;
    }
    let keys = Object.keys(sourceObject);
    let len = keys.length;
    while (len--) {
      targetObject[keys[len]] = sourceObject[keys[len]];
    }
    return Truck;
  };


  /**
   * Truck collection extend method.
   */
  $.fn = {
    extend: object => $.extend(DOMStack.prototype, object)
  };

  /**
   * Truck utility methods.
   */
  $.extend({
    lib: "TruckJS",

    version: '1.0.0',

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

  /**
   * Truck types method.
   */
  $.extend({
    type: type => {
      switch (typeof type) {
        case 'boolean':
          return 'boolean';
        case 'number':
          return 'number';
        case 'string':
          return 'string';
        case 'function':
          return 'function';
        case 'object':
          if (Array.isArray(type)) {
            return 'array';
          } else if (Object.prototype.toString.call(type) === '[object Date]') {
            return 'date';
          } else if (Object.prototype.toString.call(type) === '[object Error]') {
            return 'error';
          } else if (Object.prototype.toString.call(type) === '[object RegExp]') {
            return 'regexp';
          } else if (Object.prototype.toString.call(type) === '[object Object]') {
            return 'object';
          }
      }
    }
  });

  /**
   * Truck string methods.
   */
  $.extend({
    camelize: string => {
      if (typeof string !== 'string')
        return;
      return string.replace(/\-(.)/g, (match, letter) => {
        return letter.toUpperCase();
      });
    },

    deCamelize: string => {
      if (typeof string !== 'string')
        return;
      return string.replace(/([A-Z])/g, '-$1').toLowerCase();
    },

    capitalize: (string, all) => {
      const self = this;
      if (!string) {
        return;
      }
      if (typeof string !== 'string')
        return;
      if (all) {
        const str = string.split(' ');
        let newstr = [];
        str.forEach(item => {
          return newstr.push(self.capitalize(item));
        });
        return newstr.join(' ');
      } else {
        return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
      }
    }
  });

  /**
   * Truck DOM method.
   */
  $.fn.extend({
    find: function(selector, context) {
      let ret = new DOMStack();
      if (!this.size())
        return ret;
      if (context) {
        $(context).forEach(() => {
          Array.prototype.slice.apply(context.querySelectorAll(selector)).forEach(node=> {
            return ret.push(node);
          });
        });
      } else {
        this.forEach(ctx => {
          if (ctx && ctx.children && ctx.children.length) {
            Array.prototype.slice.apply(ctx.querySelectorAll(selector)).forEach(node => {
              return ret.push(node);
            });
          }
        });
      }
      return ret;
    },

    is: function(arg) {
      let ret = false;
      if (!this.size() || !arg) return;
      if (!this.size()) return;
      const that = this;
      const __is = (node, arg) => {
        if (typeof arg === 'string') {
          let elements = Array.prototype.slice.apply(node.parentNode.querySelectorAll(arg));
          if (elements.length) {
            if (elements.indexOf(node) >= 0) {
              ret = true;
            }
          }
        } else if (typeof arg === 'function') {
          if (arg.call(that)) {
            ret = true;
          }
        } else if (arg.objectType && arg.objectType === 'domstack') {
          if (node === arg[0]) {
            ret = true;
          }
        } else if (arg && arg.length) {
          if (this.slice.apply(arg).indexOf(node) !== -1) {
            ret = true;
          }
        } else if (arg.nodeType === 1) {
          if (node === arg) {
            ret = true;
          }
        } else {
          return;
        }
        return ret;
      };
      this.forEach(item => {
        if (__is(item, arg)) {
          ret = true;
        }
      });
      return ret;
    },

    not: function(selector) {
      if (!this.size() || !selector) return new DOMStack();
      let ret = new DOMStack();
      let temp = [];
      let elems;
      if (typeof selector === 'string') {
        elems = Array.prototype.slice.apply(this.array[0].parentNode.querySelectorAll(selector));
        this.forEach(element => {
          if (!elems[0]) {
            ret.push(element);
          } else {
            elems.forEach(item => {
              if (element !== item) {
                ret.push(element);
              }
            });
          }
        });
        return ret;
      } else if (selector && selector.objectType && selector.objectType === 'domstack') {
        this.forEach(element => {
          selector.forEach(node => {
            if (node !== element) {
              temp.push(element);
            }
          });
        });
        if (temp.length) {
          ret.concat(temp);
        }
        return ret;
      } else if (selector && selector.nodeType === 1) {
        this.forEach(element => {
          if (element !== selector) {
            temp.push(element);
          }
        });
        if (temp.length) {
          ret.concat(temp);
        }
        return ret;
      }
    },

    has: function(arg) {
      if (!this.size()) return new DOMStack();
      let items = new DOMStack();

      const __has = (node, arg) => {
        if (typeof arg === 'string') {
          if (node.querySelector(arg)) {
            return true;
          }
        } else if (arg.nodeType === 1) {
          if (Array.prototype.slice(this.children).data.indexOf(arg)) {
            return true;
          }
        } else {
          return false;
        }
      };

      this.forEach(element => {
        if (__has(element, arg)) {
          items.push(element);
        }
      });
      return items;
    },

    prev: function(selector) {
      if (!this.size()) return new DOMStack();
      let ret = new DOMStack();
      let children;
      const prevElement = this[0].previousElementSibling;
      if (selector && typeof selector === 'string') {
        children = this.siblings(selector);
        children.forEach(element => {
          if (prevElement === element) ret.push(element);
        });
      } else {
        ret.push(this[0].previousElementSibling);
      }
      return ret;
    },

    prevAll: function(selector) {
      if (!this.size()) return new DOMStack();
      let ret = new DOMStack();
      let __siblings;
      const __self = this[0];
      let __sibs = Array.prototype.slice.apply(this[0].parentNode.children);
      let pos = __sibs.indexOf(__self);
      __sibs.splice(pos, __sibs.length - 1);
      if (selector && typeof selector === 'string') {
        __siblings = this.siblings(selector).array;
        __sibs.forEach(element => {
          if (__siblings.indexOf(element) > -1) {
            ret.push(element);
          }
        });
      } else {
        __siblings = Array.prototype.slice.apply(this[0].parentNode.children);
        pos = __siblings.indexOf(__self);
        __siblings.splice(pos, __siblings.length - 1);
        ret.concat(__siblings);
      }
      return ret;
    },

    next: function(selector) {
      if (!this.size()) return new DOMStack();
      let ret = new DOMStack();
      let children;
      let nextElement = this[0].nextElementSibling;
      if (selector && typeof selector === 'string') {
        children = this.siblings(selector);
        children.forEach(element => {
          if (nextElement === element) ret.push(element);
        });
      } else {
        ret.push(this[0].nextElementSibling);
      }
      return ret;
    },

    nextAll: function(selector) {
      if (!this.size()) return new DOMStack();
      let ret = new DOMStack();
      let __siblings;
      let __parent;
      const __self = this[0];
      let __sibs = Array.prototype.slice.apply(this[0].parentNode.children);
      let pos = __sibs.indexOf(__self);
      __sibs.splice(0, pos + 1);
      if (selector && typeof selector === 'string') {
        __parent = this.array[0].parentNode;
        __siblings = $(__parent).find(selector);
        __sibs.splice(0, __sibs.indexOf(this.array[0]));
        __sibs.forEach(element => {
          if (__siblings.array.indexOf(element) > -1) {
            ret.push(element);
          }
        });
      } else {
        __siblings = Array.prototype.slice.apply(this[0].parentNode.children);
        pos = __siblings.indexOf(__self);
        __siblings.splice(0, pos + 1);
        ret.concat(__siblings);
      }
      return ret;
    },

    first: function() {
      if (!this.size()) return new DOMStack();
      return this.eq(0);

    },

    last: function() {
      if (!this.size()) return new DOMStack();
      return this.eq(-1);
    },

    index: function(element) {
      if (!this.size()) return undefined;
      if (!element) {
        return Array.prototype.slice.apply(this[0].parentNode.children).indexOf(this[0]);
      } else {
        if (element && element.objectType && element.objectType === 'domstack') {
          return this.indexOf(element.getData()[0]);
        } else if (element.nodeType === 1) {
          return this.indexOf(element);
        } else {
          return this.indexOf(element);
        }
      }
    },

    children: function(selector) {
      if (!this.size()) return new DOMStack();
      let ret = new DOMStack();
      if (!selector) {
        this.forEach(node => {
          Array.prototype.slice.apply(node.children).forEach(ctx => ret.push(ctx));
        });
        ret[0] = ret.array[0];
      } else {
        this.forEach(node => {
          Array.prototype.slice.apply(node.children).forEach(ctx => {
            if ($(ctx).is(selector)) {
              ret.push(ctx);
            }
          });
        });
        ret[0] = ret.array[0];
      }
      return ret;
    },

    siblings: function(selector) {
      if (!this.size())
        return new DOMStack();
      let __siblings;
      let ret = new DOMStack();
      const $this = this;
      let parent;
      let children = Array.prototype.slice.apply(this.array[0].parentNode.children);

      // Remove this from siblings;
      var pos = children.indexOf($this[0]);
      children.splice(pos, 1);

      children.splice(children.indexOf(this.array[0]), 0);
      if (selector && typeof selector === 'string') {
        parent = this.array[0].parentNode;
        __siblings = $(parent).find(selector);
        __siblings.array.splice(__siblings.array.indexOf(this.array[0]), 0);
        ret.concat(__siblings.array);
      } else {
        ret.concat(children);
      }
      return ret;
    },

    parent: function() {
      if (!this.size()) return new DOMStack();
      let ret = new DOMStack();
      this.forEach(ctx => {
        return ret.push(ctx.parentNode);
      });
      ret.unique();
      return ret;
    },

    closest: function(selector) {
      if (!this.size())
        return new DOMStack();
      let ret = new DOMStack();
      if (typeof selector === 'undefined') {
        return new DOMStack();
      }
      let position = null;
      let p = this[0].parentNode;
      if (!p) {
        return new DOMStack();
      }
      if (typeof selector === 'string') {
        selector.trim();
      }
      if (typeof selector === 'number') {
        position = selector || 1;
        for (let i = 1; i < position; i++) {
          if (p && p.nodeName === 'HTML') {
            return p;
          } else {
            if (p !== null) {
              p = p.parentNode;
            }
          }
        }
        ret.push(p);
      } else if (typeof selector === 'string') {
        if (p && $(p).is(selector)) {
          ret.push(p);
        } else {
          ret.push($(p).closest(selector).array[0]);
        }
      }
      return ret;
    },

    css: function(property, value) {
      if (!this.size()) return new DOMStack();
      const pixelRE = /top|bottom|left|right|margin|padding/img;
      let postFix = '';
      let ret = new DOMStack();
      const testForPixelSupport = (value, property) => {
        if ($.type(value) === 'number' && property.match(pixelRE)) {
          postFix = 'px';
        }
      };
      if (!property) return new DOMStack();
      if (!value && $.type(property) === 'object') {
        this.forEach(node => {
          for (var key in property) {
            if (property.hasOwnProperty(key)) {
              testForPixelSupport(property[key], key);
              node.style[$.camelize(key)] = property[key] + postFix;
            }
          }
          ret.push(node);
        });
      } else if (!value && typeof property === 'string') {
        if (!this.size())
          return;
        return document.defaultView.getComputedStyle(this.eq(0).array[0], null).getPropertyValue(property.toLowerCase());
      } else if (!!value) {
        this.forEach(node => {
          testForPixelSupport(value, property);
          node.style[$.camelize(property)] = value + postFix;
          ret.push(node);
        });
      }
      return ret;
    },

    width: function() {
      if (!this.size())
        return;
      return this.eq(0).array[0].clientWidth;
    },

    height: function() {
      if (!this.size())
        return;
      return this.eq(0).array[0].clientHeight;
    },

    before: function(content) {
      if (!this.size()) {
        return new DOMStack();
      }
      const __before = (node, content) => {
        if (typeof content === 'string' || typeof content === 'number') {
          content = $.html(content);
        }
        if (content && content.objectType && content.objectType === 'domstack') {
          const len = content.size();
          let i = 0;
          while (i < len) {
            node.parentNode.insertBefore(content.array[i], node);
            i++;
          }
        } else if (content && content.nodeType === 1) {
          node.parentNode.insertBefore(content, node);
        }
        return this;
      };
      this.forEach(node => {
        return __before(node, content);
      });
      return this;
    },

    after: function(args) {
      if (!this.size()) return new DOMStack();
      const __after = (node, content) => {
        let parent = node.parentNode;
        if (typeof content === 'string' || typeof content === 'number') {
          content = $.html(content);
        }
        if (content && content.objectType && content.objectType === 'domstack') {
          let i = 0,
            len = content.size();
          while (i < len) {
            if (node === parent.lastChild) {
              parent.appendChild(content.array[i]);
            } else {
              parent.insertBefore(content.array[i], node.nextSibling);
            }
            i++;
          }
        } else if (content && content.nodeType === 1) {
          parent.appendChild(content);
        }
        return this;
      };
      this.forEach(node => {
        return __after(node, args);
      });
      return this;
    },

    prepend: function(content) {
      if (!this.size()) return new DOMStack();

      if (typeof content === 'string' || typeof content === 'number') {
        this.forEach(element => {
          element.insertAdjacentHTML('afterbegin', content);
        });
      } else if (content && content.objectType && content.objectType === 'domstack') {
        this.forEach(element => {
          content.forEach(node => {
            element.insertBefore(node, element.firstChild);
          });
        });
      } else if (content && content.nodeType === 1) {
        this.forEach(element => {
          element.insertBefore(node, element.firstChild);
        });
      }
      return this;
    },

    append: function(content) {
      if (!this.size()) return new DOMStack();

      if (typeof content === 'string' || typeof content === 'number') {
        this.forEach(element => {
          element.insertAdjacentHTML('beforeend', content);
        });
      } else if (content && content.objectType && content.objectType === 'domstack') {
        this.forEach(element => {
          content.forEach(node => {
            element.insertBefore(node, null);
          });
        });

      } else if (content && content.nodeType === 1) {
        this.forEach(element => {
          element.insertBefore(node, null);
        });
      }
      return this;
    },

    prependTo: function(selector) {
      if (!this.size()) return new DOMStack();
      this.reverse();
      this.forEach(item => {
        return $(selector).prepend(item);
      });
      return this;
    },

    appendTo: function(selector) {
      if (!this.size()) return new DOMStack();
      this.forEach(item => {
        return $(selector).append(item);
      });
      return this;
    },

    clone: function(value) {
      if (!this.size()) return new DOMStack();
      let ret = new DOMStack();
      this.forEach(ctx => {
        if (value === true || !value) {
          ret.push(ctx.cloneNode(true));
        } else {
          ret.push(ctx.cloneNode(false));
        }
      });
      return ret;
    },

    wrap: function(string) {
      if (!this.size() || !string) return new DOMStack();
      let tempNode;
      let empNode;
      let whichClone;
      this.forEach(ctx => {
        tempNode = $.html(string);
        empNode = tempNode.array[0];
        whichClone = $(ctx).clone(true);
        tempNode.append(whichClone);
        $(ctx).before(tempNode);
        $(ctx).remove();
      });
    },

    unwrap: function() {
      if (!this.size()) return new DOMStack();
      let parentNode = null;
      this.forEach(node => {
        if (node.parentNode === parentNode) {
          return;
        }
        parentNode = node.parentNode;
        if (node.parentNode.nodeName === 'BODY') {
          return false;
        }
        $.replace(node, node.parentNode);
      });
    },

    offset: function() {
      if (!this.size())
        return;
      const offset = this.eq(0).array[0].getBoundingClientRect();
      return {
        top: Math.round(offset.top),
        left: Math.round(offset.left)
      };
    },

    position: function() {
      let obj = {
        top: 0,
        left: 0
      };
      const pos = this.array[0].getBoundingClientRect();
      const borderTop = parseInt(this.parent().css('border-top-width'), 10) || 0;
      const borderLeft = parseInt(this.parent().css('border-left-width'), 10) || 0;
      const parentPos = this.array[0].parentNode.getBoundingClientRect();
      var compareOffsets1 = function(val1, val2) {
        return Math.round(val1 - val2);
      };
      obj.top = compareOffsets1(pos.top, (parentPos.top + borderTop));
      obj.left = compareOffsets1(pos.left, (parentPos.left + borderLeft));
      return obj;
    },

    empty: function() {
      if (!this.size()) return new DOMStack();
      let ret = new DOMStack();
      this.forEach(ctx => {
        $(ctx).children().off();
        ctx.textContent = '';
        ret.push(ctx);
      });
      return ret;
    },

    html: function(content) {
      if (!this.size()) return new DOMStack();
      if (content === '') {
        this.forEach(node => {
          node.innerHTML = '';
        });
        return this;
      } else if (content) {
        this.forEach(node => {
          node.innerHTML = content;
        });
        return this;
      } else if (!content) {
        return this.array[0].innerHTML.trim();
      }
    },

    text: function(string) {
      let ret = '';
      if (!this.size()) return new DOMStack();
      if (!!string || string === 0) {
        this.forEach(element => {
          element.innerText = string;
        });
        return this;
      } else {
        this.forEach(element => {
          ret += element.innerText;
          ret.trim();
        });
        return ret;
      }
    },

    replaceWith: function(content) {
      if (content && content.nodeType && content.nodeType === 1) {
        $(content).off();
      } else if (content && contnet.objectType && content.objectType === 'domstack') {
        content.off();
      }
      this.forEach(node => {
        $(node).off();
        if (typeof content === 'string') {
          $.replace($(content), node);
        } else {
          $.replace($(content), node);
        }
      });
    },

    remove: function() {
      if (!this.size()) return new DOMStack();
      this.forEach(node => {
        $(node).off();
        node.parentNode.removeChild(node);
      });
    },

    addClass: function(className) {
      if (!this.size()) return new DOMStack();
      if (typeof className !== "string")
        return;
      let ret = new DOMStack();
      let classes;
      this.forEach(node => {
        if (/\s/.test(className)) {
          classes = className.split(' ');
          classes.forEach(name => {
            node.classList.add(name);
          });
        } else {
          node.classList.add(className);
        }
        ret.push(node);
      });
      return ret;
    },

    hasClass: function(className) {
      if (!this.size()) return new DOMStack();
      let temp = false;
      this.forEach(element => {
        if (element.classList.contains(className)) {
          temp = true;
        }
      });
      return temp;
    },

    removeClass: function(className) {
      if (!this.size()) return new DOMStack();
      let ret = new DOMStack();
      let classes;
      this.forEach(node => {
        if (!node)
          return;
        if (/\s/.test(className)) {
          classes = className.split(' ');
          classes.forEach(name => {
            node.classList.remove(name);
          });
        } else {
          node.classList.remove(className);
        }
        if (node.getAttribute('class') === '') {
          node.removeAttribute('class');
        }
        ret.push(node);
      });
      return ret;
    },

    toggleClass: function(className) {
      if (!this.size()) return new DOMStack();
      let ret = new DOMStack();
      this.forEach(node => {
        node.classList.toggle(className);
        ret.push(node);
      });
      return ret;
    },

    attr: function(property, value) {
      if (!this.size()) return new DOMStack();
      let ret = new DOMStack();
      const __attr = (node, property, value) => {
        if (value === undefined) {
          return node.getAttribute(property);
        } else {
          return node.setAttribute(property, value);
        }
      };
      if (value === undefined) {
        if (this[0].hasAttribute(property)) {
          return this[0].getAttribute(property);
        }
      } else {
        this.forEach(node => {
          __attr(node, property, value);
          ret.push(node);
        });
      }
      if (ret.length) {
        return ret;
      }
    },

    removeAttr: function(attribute) {
      if (!this.size()) return new DOMStack();
      let ret = new DOMStack();
      this.forEach(node => {
        if (!!node.hasAttribute(attribute)) {
          node.removeAttribute(attribute);
          ret.push(node);
        }
      });
      return ret;
    },

    prop: function(property, value) {
      if (!this.size()) return new DOMStack();
      if (value === false || !!value) {
        this.forEach(element => {
          element[property] = value;
        });
        return this;
      } else if (this.array[0] && this.array[0][property]) {
        return this.array[0][property];
      }
    },

    removeProp: function(property) {
      if (!this.size()) return new DOMStack();
      this[0][property] = false;
      return [this[0]];
    },

    disable: function() {
      if (!this.size()) return new DOMStack();
      this.forEach(node => {
        node.classList.add('disabled');
        node.disabled = true;
        node.style.cursor = 'default';
      });
      return this;
    },

    enable: function() {
      if (!this.size()) return new DOMStack();
      this.forEach(node => {
        node.classList.remove('disabled');
        node.removeAttribute('disabled');
        node.style.cursor = 'auto';
      });
      return this;
    },

    val: function(value) {
      if (!this.size()) return new DOMStack();
      if (value) {
        this.array[0].value = value;
        return this;
      } else {
        if (this.array[0] && this.array[0].value) {
          return this.array[0].value;
        }
      }
    },

    hide: function() {
      let display = this.css('display');
      this.data('display_attr', display);
      this.css('display', 'none');
    },

    show: function() {
      let display = this.data('display_attr');
      if (display === 'none' || !display) {
        display = 'block';
      }
      this.css('display', display);
    }
  });

  /**
   * Truck data cache.
   */
  let TruckDataCache = {
    elements: {}
  };
  $.fn.extend({
    data: function(key, value) {
      if (!this.size()) return new DOMStack();
      let val;
      let id;
      const ctx = this.array[0];
      if (!ctx.id) {
        ctx.id = $.uuid();
      }
      id = ctx.id;
      if (!TruckDataCache.elements[id]) {
        TruckDataCache.elements[id] = {};
      }
      if (key === 'undefined' || key === null) {
        return;
      }
      if (value || value === 0) {
        val = value;
        let obj = {};
        obj[key] = value;

        TruckDataCache.elements[id][key] = value;
      } else {
        if (!TruckDataCache.elements[id]) return;
        if (TruckDataCache.elements[id][key] === 0) {
          return TruckDataCache.elements[id][key];
        }
        if (!TruckDataCache.elements[id][key]) return;
        return TruckDataCache.elements[id][key];
      }
      return this;
    },

    removeData: function(key) {
      if (!this.size()) return this;
      this.forEach((element) => {
        const id = element.id;
        if (!id) return this;
        if (!TruckDataCache.elements[id]) {
          return this;
        }
        if (!key) {
          delete TruckDataCache.elements[id];
          return this;
        }
        if (Object.keys(TruckDataCache.elements[id]).length === 0) {
          delete TruckDataCache.elements[id];
        } else {
          delete TruckDataCache.elements[id][key];
        }
        return this;
      });
    }
  });

  /**
   * Truck serialize methods.
   */
  $.fn.extend({
    serializeArray: function() {
      let name;
      let type;
      let ret = [];
      const add = value => {
        if ($.type(value) === 'array') {
          return value.forEach(add);
        }
        ret.push({
          name: name,
          value: value
        });
      };
      if (this[0]) {
        $.each([].slice.apply(this[0].elements), (idx, field) => {
          type = field.type;
          name = field.name;
          if (name && field.nodeName.toLowerCase() != 'fieldset' &&
            !field.disabled && type != 'submit' && type != 'reset' && type != 'button' && type != 'file' &&
            ((type != 'radio' && type != 'checkbox') || field.checked)) {
            add($(field).val());
          }
        });
      }
      return ret;
    },

    // Serialize the values of a form:
    //================================
    serialize: function() {
      let ret = [];
      this.serializeArray().forEach(element => {
        ret.push(encodeURIComponent(element.name) + '=' + encodeURIComponent(element.value));
      });
      return ret.join('&');
    }
  });

  /**
   * Truck param method.
   */
  $.extend({

    // Serialize an object for posting to server:
    //===========================================
    param: function(obj, traditional) {

      // Private function used by $.param:
      //==================================
      function serialize(params, obj, traditional, scope) {
        let type, array = $.type(obj) === 'array',
          hash = $.isEmptyObject(obj);

        // If it's an array of objects:
        if ($.type(obj) === 'array') {
          $.each(obj, (key, value) => {
            type = $.type(value);
            if (scope) {
              key = traditional ? scope : scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']';
            }
            if (!scope && array) {
              params.add(value.name, value.value);
            } else if (type == "array" || (!traditional && type == "object")) {
              serialize(params, value, traditional, key);
            } else {
              params.add(key, value);
            }
          });

          // Else its an object (use key/value loop):
        } else if ($.type(obj) === 'object') {
          for (let key in obj) {
            type = $.type(obj[key]);
            if (scope) {
              key = traditional ? scope : scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']';
            }
            if (!scope && array) {
              params.add(obj[key].name, obj[key].obj[key]);
            } else if (type == "array" || (!traditional && type == "object")) {
              serialize(params, obj[key], traditional, key);
            } else {
              params.add(key, obj[key]);
            }
          }
        }
      }
      let params = [];
      params.add = function(key, value) {
        if ($.type(value) === 'function') value = value();
        if (value === null) value = "";
        this.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
      };
      serialize(params, obj, traditional);
      return params.join('&').replace(/%20/g, '+');
    }
  });

  /**
    * Truck event methods.
    */

  (() => {
    
    // ======================================
    // Define interface for handling events:
    // ======================================
    let TruckEventStack = (array) => {
      let __array = [];
      if (array && Array.isArray(array)) {
        let i = -1;
        const len = array.length;
        while (++i < len) {
          __array[i] = array[i];
        }
      } else if (array) {
        const arr = Array.prototype.slice.apply(arguments);
        arr.forEach((ctx, idx) => {
          __array[idx] = ctx;
        });
      }
      return {

        size: () => __array.length,

        push: (data) => __array.push(data),

        pop: () => __array.pop(),

        eq: (index) => {
          if (index < 0) {
            return __array[__array.length + index];
          } else {
            return __array[index];
          }
        },

        forEach: (callback) => {
          let value;
          let i = -1;
          const len = __array.length;
          while (++i < len) {
            value = callback.call(__array[i], __array[i], i);
            if (value === false) {
              break;
            }
          }
        },

        shift: () => __array.shift.apply(__array, arguments),

        unshift: () => __array.unshift.apply(__array, arguments),

        splice: () => __array.splice.apply(__array, arguments),

        indexOf: () => __array.indexOf.apply(__array, arguments),

        getData: () => __array,

        purge: () => __array = []
      };
    };

    let TruckEventCache = {
      elements: {}
    };

    /* jshint, evil: false, validthis:true, unused:false, loopfunc: false,
    smarttabs: true, nonew: false */

    // //////////////////////////////////////////////////
    // Private method to set events on TruckEventCache
    // //////////////////////////////////////////////////
    const bind = function(element, event, callback, capturePhase) {
      if (!element.id) element.id = Truck.uuid();
      if (!TruckEventCache.elements[element.id]) {
        TruckEventCache.elements[element.id] = TruckEventStack(); // jshint ignore:line
      }
      TruckEventCache.elements[element.id].push({
        event: event,
        callback: callback
      });
      element.addEventListener(event, callback, capturePhase);
    };


    // Delete items from event stack:
    //===============================
    const deleteFromEventStack = function(toDelete, evtStck) {
      var len = toDelete.length;
      for (var i = 0; len > i; len--) {
        evtStck.splice(toDelete[len - 1], 1);
      }
    };
    ////////////////////////////////////////////////////
    // Private method to unbind events on TruckEventCache
    ////////////////////////////////////////////////////
    const unbind = function(element, event, callback, capturePhase) {

      var eventStack = TruckEventCache.elements[element.id];
      if (!eventStack) return;
      var deleteOrder = [];

      if (!event) {
        deleteOrder = [];
        eventStack.forEach((evt, idx) => {
          element.removeEventListener(evt.event, evt.callback, evt.capturePhase);
          deleteOrder.push(idx);
        });

        deleteFromEventStack(deleteOrder, eventStack);

      } else if (!!event && !callback) {
        deleteOrder = [];
        eventStack.forEach((evt, idx) => {
          if (evt.event === event) {
            element.removeEventListener(evt.event, evt.callback, evt.capturePhase);
            deleteOrder.push(idx);
          }
        });

        deleteFromEventStack(deleteOrder, eventStack);

      } else if (callback) {
        deleteOrder = [];
        eventStack.forEach((evt, idx) => {
          if (callback === evt.callback) {
            element.removeEventListener(evt.event, evt.callback, evt.capturePhase);
            deleteOrder.push(idx);
          }
        });
        deleteFromEventStack(deleteOrder, eventStack);
      }
    };

    //////////////////////////////////////////////////////////////
    // Private method to set delegated events on TruckEventCache
    //////////////////////////////////////////////////////////////

    const delegate = (element, selector, event, callback, capturePhase) => {
      let delegateElement = $(element).array[0];
      $(element).forEach(ctx => {
        $(ctx).on(event, (e) => {
          let target = e.target;
          if (e.target.nodeType === 3) {
            target = e.target.parentNode;
          }
          $(ctx).find(selector).forEach(delegateElement => {
            if (delegateElement === target) {
              callback.call(delegateElement, e);
            } else {
              try {
                const ancestor = $(target).closest(selector);
                if (delegateElement === ancestor.array[0]) {
                  callback.call(delegateElement, e);
                }
              } catch (err) {}
            }
          });
        }, capturePhase);
      });
    };


    ///////////////////////////////////////////////////////////////////
    // Private method to remove delegated events from TruckEventCache
    ///////////////////////////////////////////////////////////////////
    const undelegate = (element, selector, event, callback, capturePhase) => {

      unbind($(element).array[0], event, callback, capturePhase);
    };

    $.fn.extend({
      on: function(event, selector, callback, capturePhase) {

        if (!selector && /Object/img.test(event.constructor.toString())) {
          this.forEach(element => {
            for (var key in event) {
              if (event.hasOwnProperty(key)) {
                $(element).on(key, event[key]);
              }
            }
          });
        }
        let ret = [];
        let events;
        if (typeof event === 'string') {
          event = event.trim();
          if (/\s/.test(event)) {
            events = event.split(' ');
            this.forEach(ctx => {
              events.forEach(evt => {
                if (typeof selector === 'function') {
                  bind(ctx, evt, selector, callback);
                  ret.push(ctx);
                } else {
                  delegate(ctx, selector, evt, callback, capturePhase);
                  // ret.push(ctx);
                }
              });
            });
          }
        }
        this.forEach(ctx => {
          if (typeof selector === 'function') {
            return bind(ctx, event, selector, callback);
          } else {
            delegate(ctx, selector, event, callback, capturePhase);
            // ret.push(ctx);
          }
        });
        return this;
      },

      off: function(event, selector, callback, capturePhase) {
        let ret = new DOMStack();
        if (!this.size()) return ret;

        this.forEach(function(ctx) {
          if (typeof event === 'undefined') {
            ret.push(ctx);
            unbind(ctx);
            return ret;
          } else if (typeof selector === 'function' || !selector) {
            unbind(ctx, event, selector, callback, capturePhase);
            return this;
          } else {
            undelegate(ctx, selector, event, callback, capturePhase);
            return this;
          }
        });
      },

      trigger: function(event) {
        if (!this.size()) return new DOMStack();
        this.forEach(ctx => {
          if (document.createEvent) {
            var evtObj = document.createEvent('Events');
            evtObj.initEvent(event, true, false);
            ctx.dispatchEvent(evtObj);
          }
        });
      }
    });
  })();


  /**
   * Truck event aliases.
   */
  $.extend({
    eventStart: null,
    eventEnd: null,
    eventMove: null,
    eventCancel: null,
    // Define min-length for gesture detection:
    gestureLength: 30
  });
  $(() => {
    //=======================
    // Setup Event Variables:
    //=======================
    // Pointer events for IE10 and WP8:
    if (window.navigator.pointerEnabled) {
      $.eventStart = 'pointerdown';
      $.eventEnd = 'pointerup';
      $.eventMove = 'pointermove';
      $.eventCancel = 'pointercancel';
      // Pointer events for IE10 and WP8:
    } else if (window.navigator.msPointerEnabled) {
      $.eventStart = 'MSPointerDown';
      $.eventEnd = 'MSPointerUp';
      $.eventMove = 'MSPointerMove';
      $.eventCancel = 'MSPointerCancel';
      // Touch events for iOS & Android:
    } else if ('ontouchstart' in window && /mobile/img.test(navigator.userAgent)) {
      $.eventStart = 'touchstart';
      $.eventEnd = 'touchend';
      $.eventMove = 'touchmove';
      $.eventCancel = 'touchcancel';
      // Mouse events for desktop:
    } else {
      $.eventStart = 'mousedown';
      $.eventEnd = 'click';
      $.eventMove = 'mousemove';
      $.eventCancel = 'mouseout';
    }
  });

  /**
   * Truck gestures.
   */
  (function() {
    "use strict";
    let touch = {};
    let touchTimeout;
    let swipeTimeout;
    let tapTimeout;
    const longTapDelay = 750;
    let singleTapDelay = 150;
    $.gestureLength = 50;
    if ($.isAndroid) singleTapDelay = 200;
    var longTapTimeout;

    function parentIfText(node) {
      return 'tagName' in node ? node : node.parentNode;
    }

    function swipeDirection(x1, x2, y1, y2) {
      return Math.abs(x1 - x2) >=
        Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'left' : 'right') : (y1 - y2 > 0 ? 'up' : 'down');
    }

    function longTap() {
      longTapTimeout = null;
      if (touch.last) {
        try {
          if (touch && touch.el) {
            touch.el.trigger('longtap');
            touch = {};
          }
        } catch (err) {};
      }
    }

    function cancelLongTap() {
      if (longTapTimeout) clearTimeout(longTapTimeout);
      longTapTimeout = null;
    }

    function cancelAll() {
      if (touchTimeout) clearTimeout(touchTimeout);
      if (tapTimeout) clearTimeout(tapTimeout);
      if (swipeTimeout) clearTimeout(swipeTimeout);
      if (longTapTimeout) clearTimeout(longTapTimeout);
      touchTimeout = tapTimeout = swipeTimeout = longTapTimeout = null;
      touch = {};
    }

    // Execute this after DOM loads:
    //==============================
    $(() => {
      let now;
      let delta;
      const body = $('body');
      let twoTouches = false;

      // Capture start of event:
      //========================
      body.on($.eventStart, function(e) {
        now = Date.now();
        delta = now - (touch.last || now);
        if (e.originalEvent) e = e.originalEvent;

        // Handle MSPointer Events:
        if (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) {
          if (window && window.jQuery && $ === window.jQuery) {
            if (e.originalEvent && !e.originalEvent.isPrimary) return;
          } else {
            if (!e.isPrimary) return;
          }
          // Handle event if jQuery or not:
          e = e.originalEvent ? e.originalEvent : e;
          body.on('MSHoldVisual', e => {
            e.preventDefault();
          });
          touch.el = $(parentIfText(e.target));
          touchTimeout && clearTimeout(touchTimeout); // jshint ignore:line
          touch.x1 = e.pageX;
          touch.y1 = e.pageY;
          twoTouches = false;

        } else {
          if ($.eventStart === 'mousedown') {
            touch.el = $(parentIfText(e.target));
            touchTimeout && clearTimeout(touchTimeout); // jshint ignore:line
            touch.x1 = e.pageX;
            touch.y1 = e.pageY;
            twoTouches = false;

            // Detect two or more finger gestures:
          } else {
            if (e.touches.length === 1) {
              touch.el = $(parentIfText(e.touches[0].target));
              touchTimeout && clearTimeout(touchTimeout); // jshint ignore:line
              touch.x1 = e.touches[0].pageX;
              touch.y1 = e.touches[0].pageY;
              if (e.targetTouches.length === 2) {
                twoTouches = true;
              } else {
                twoTouches = false;
              }
            }
          }
        }
        if (delta > 0 && delta <= 250) {
          touch.isDoubleTap = true;
        }
        touch.last = now;
        longTapTimeout = setTimeout(longTap, longTapDelay);
      });

      // Capture event move:
      //====================
      body.on($.eventMove, e => {
        if (e.originalEvent) e = e.originalEvent;
        if (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) {
          if (window && window.jQuery && $ === window.jQuery) {
            if (e.originalEvent && !e.originalEvent.isPrimary) return;
          } else {
            if (!e.isPrimary) return;
          }
          e = e.originalEvent ? e.originalEvent : e;
          cancelLongTap();
          touch.x2 = e.pageX;
          touch.y2 = e.pageY;

        } else {
          cancelLongTap();
          if ($.eventMove === 'mousemove') {
            touch.x2 = e.pageX;
            touch.y2 = e.pageY;
          } else {
            // One finger gesture:
            if (e.touches.length === 1) {
              touch.x2 = e.touches[0].pageX;
              touch.y2 = e.touches[0].pageY;
            }
          }
        }
      });

      // Capture event end:
      //===================
      body.on($.eventEnd, e => {
        if (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) {
          if (window && window.jQuery && $ === window.jQuery) {
            if (e.originalEvent && !e.originalEvent.isPrimary) return;
          } else {
            if (!e.isPrimary) return;
          }
        }

        cancelLongTap();
        if (!!touch.el) {
          // Swipe detection:
          if ((touch.x2 && Math.abs(touch.x1 - touch.x2) > $.gestureLength) ||
            (touch.y2 && Math.abs(touch.y1 - touch.y2) > $.gestureLength)) {
            swipeTimeout = setTimeout(function() {
              if (touch && touch.el) {
                touch.el.trigger('swipe');
                touch.el.trigger('swipe' + (swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2)));
                touch = {};
              }
            }, 0);

            // Normal tap:
          } else if ('last' in touch) {
            // Delay by one tick so we can cancel the 'tap' event if 'scroll' fires:
            tapTimeout = setTimeout(() => {
              // Trigger double tap immediately:
              if (touch && touch.isDoubleTap) {
                if (touch && touch.el) {
                  touch.el.trigger('doubletap');
                  touch = {};
                }

              } else {
                // Trigger tap after singleTapDelay:
                touchTimeout = setTimeout(() => {
                  touchTimeout = null;
                  if (touch && touch.el) {
                    touch.el.trigger('tap');
                    touch = {};
                    return false;
                  }
                }, singleTapDelay);
              }
            }, 0);
          }

        } else {
          return;
        }
      });
      body.on('touchcancel', cancelAll);
    });

    // Register events:
    //=================
    ['tap', 'doubletap', 'longtap', 'swipeleft', 'swiperight', 'swipeup', 'swipedown'].forEach(method => {
      $.fn.extend({
        method: function(callback) {
          return this.on(method, callback);
        }
      });
    });
  })();

  /**
   * Truck collection utilities.
   */
  $.fn.extend({
    forEach: function(callback) {
      this.each((idx, ctx) => {
        callback.call(ctx, ctx, idx);
      });
    },

    disable: function() {
      if (!this.size()) return $();
      this.forEach(node => {
        node.classList.add('disabled');
        node.disabled = true;
        node.style.cursor = 'default';
      });
      return this;
    },

    enable: function() {
      if (!this.size()) return $();
      this.forEach(node => {
        node.classList.remove('disabled');
        node.removeAttribute('disabled');
        node.style.cursor = 'auto';
      });
      return this;
    },

    iz: function(selector) {
      var ret = $();
      this.forEach(ctx => {
        if ($(ctx).is(selector)) {
          ret.push(ctx);
        }
      });
      return ret;
    },

    iznt: function(selector) {
      var ret = $();
      this.each((_, ctx) => {
        if (!$(ctx).is(selector)) {
          ret.push(ctx);
        }
      });
      return ret;
    },

    haz: function(selector) {
      var ret;
      if (typeof jQuery !== 'undefined') {
        ret = this.has(selector);
      } else {
        ret = new DOMStack();
        this.forEach(element => {
          if ($(element).has(selector)[0]) {
            ret.push(element);
          }
        });
      }
      return ret;
    },

    haznt: function(selector) {
      var ret;
      if (typeof jQuery !== 'undefined') {
        ret = $();
        this.each((_, element) => {
          if (!$(element).has(selector)[0]) {
            ret.push(element);
          }
        });
      } else {
        ret = new DOMStack();
        this.forEach(element => {
          if (!$(element).has(selector)[0]) {
            ret.push(element);
          }
        });
      }
      return ret;
    },

    hazClass: function(className) {
      if (className) {
        return this.iz('.' + className);
      } else {
        return new DOMStack();
      }
    },

    hazntClass: function(className) {
      if (className) {
        return this.iznt('.' + className);
      } else {
        return new DOMStack();
      }
    },

    hazAttr: function(attribute) {
      if (attribute) {
        return this.iz('[' + attribute + ']');
      } else {
        return new DOMStack();
      }
    },

    hazntAttr: function(attribute) {
      if (attribute) {
        return this.iznt('[' + attribute + ']');
      } else {
        return new DOMStack();
      }
    }
  });

  window.$ = Truck;

  return $;
})(DOMStack);