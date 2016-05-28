!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in p||(p[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==v.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=p[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(v.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=p[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return x[e]||(x[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=p[s],v=x[s];v?l=v.exports:c&&!c.declarative?l=c.esModule:c?(d(c),v=c.module,l=v.exports):l=f(s),v&&v.importers?(v.importers.push(t),t.dependencies.push(v)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=p[e];if(t)t.declarative?c(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=f(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=p[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){if(r===e)return r;var t={};if("object"==typeof r||"function"==typeof r)if(g){var n;for(var o in r)(n=Object.getOwnPropertyDescriptor(r,o))&&h(t,o,n)}else{var a=r&&r.hasOwnProperty;for(var o in r)(!a||r.hasOwnProperty(o))&&(t[o]=r[o])}return t["default"]=r,h(t,"__useDefault",{value:!0}),t}function c(r,t){var n=p[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==v.call(t,u)&&(p[u]?c(u,t):f(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function f(e){if(D[e])return D[e];if("@node/"==e.substr(0,6))return y(e.substr(6));var r=p[e];if(!r)throw"Module "+e+" not present.";return a(e),c(e,[]),p[e]=void 0,r.declarative&&h(r.module.exports,"__esModule",{value:!0}),D[e]=r.declarative?r.module.exports:r.esModule}var p={},v=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},g=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(m){g=!1}var h;!function(){try{Object.defineProperty({},"a",{})&&(h=Object.defineProperty)}catch(e){h=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var x={},y="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,D={"@empty":{}};return function(e,n,o){return function(a){a(function(a){for(var u={_nodeRequire:y,register:r,registerDynamic:t,get:f,set:function(e,r){D[e]=r},newModule:function(e){return e}},d=0;d<n.length;d++)(function(e,r){r&&r.__esModule?D[e]=r:D[e]=s(r)})(n[d],arguments[d]);o(u);var i=f(e[0]);if(e.length>1)for(var d=1;d<e.length;d++)f(e[d]);return i.__useDefault?i["default"]:i})}}}("undefined"!=typeof self?self:global)

(["1","1"], [], function($__System) {

$__System.register('2', ['3', '4', '5'], function (_export) {
  var _Object$keys;

  return {
    setters: [function (_2) {}, function (_3) {}, function (_) {
      _Object$keys = _['default'];
    }],
    execute: function () {
      // Truck Module - View:
      'use strict';

      //=============
      // Define View:
      //=============

      $.extend({

        /* jshint, evil: false, validthis:true, unused:false, smarttabs: true, nonew false */
        view: {
          index: 0
        },

        helpers: {},

        defineHelper: function defineHelper(callback) {
          $.extend($.helpers, callback);
        },

        View: function View(options) {
          /*
          options = {
            element: undefined,
            template: stringTemplate,
            noTemplate: false;
            model: undefined,
            variable: 'whatever',
            events: [
              {
                element: selector || 'self',
                event: 'click',
                callback: function() {}
              },
              {
                element: selector2 || 'self',
                event: 'touchstart',
                callback: function() {}
              }
            ]
          }
          */

          //====================
          // Private Properties:
          //====================
          var __element = undefined;
          if (!options) options = {};
          if (options && options.element) {
            __element = $(options.element) || $();
          }
          var $this = undefined;
          var __template = options.template;
          var __model = options.model;
          var __mediator = options.mediator;
          var __index = options.index || 1;
          var __rendered = false;
          var __variable = options.variable || 'data';
          var __events = options.events || [];
          var __isBoundTo = options.model;
          var __dontGetTemplate = options.noTemplate || false;
          var __startIndexFrom = options.startIndexFrom || false;
          var __canRender = true;
          var __startFrom = 0;
          var __stopAfter = 0;
          var __restartTime = 0;
          var __renderViewEveryTime = false;
          var __lastRenderTime = 0;
          var __re = /data-src/img;
          var __escapeHTML = options.escapeHTML || false;
          var __renderCount = 0;

          //===================
          // Private Functions:
          //===================

          var parsedTemplate = undefined;

          var parseView = function parseView(template, variable) {
            var interpolate = /\{=([\s\S]+?)\}/img;
            variable = variable || 'data';
            template.replace("'", "\'");
            /* jshint ignore:start */
            var Template = new Function(variable, "var p=[];" + "p.push('" + template.replace(/[\r\t\n]/g, " ").split("'").join("\\'").replace(interpolate, "',$1,'")
            // Executable:
            .split('{{').join("');").split('}}').join("p.push('") + "');" + "return p.join('');");
            return Template;
            /* jshint ignore:end */
          };

          // Binding any events provided in View options:
          var handleEvents = function handleEvents() {
            if (!__element) return;
            if (__events.length) {
              __events.forEach(function (item) {
                if (item && item.element === 'self' || item && !item.element) {
                  __element.on(item.event, item.callback);
                } else {
                  __element.on(item.event, item.element, item.callback);
                }
              });
            }
          };

          // Get template from element:
          var extractTemplate = function extractTemplate() {
            if (!__element || !__element.size()) return;
            if (__dontGetTemplate) return;
            if (!__template) {
              if (__element.children()[0] && __element.children().eq(0).is('script')) {
                __template = __element.children('script').html();
                __element.empty();
              } else if (__element.children()[0] && __element.children().eq(0).is('template')) {
                __template = __element.children('template').html();
                __element.empty();
              } else if (!__element[0].childNodes) {
                return;
              } else {
                if (__element[0] && __element[0].childNodes) {
                  if (!__template) __template = __element.html();
                }
                __element.empty();
              }
              if (__template) __template = __template.replace(__re, 'src');

              parseView(__template, __variable);
            } else {
              __template = __template.replace(__re, 'src');
              parseView(__template, __variable);
            }
          };
          parsedTemplate = extractTemplate();

          if (__events) {
            handleEvents(__events);
          }

          //==============================================
          // Return closure to encapsulate methods & data:
          //==============================================
          var view = {};
          $.extend(view, {

            render: function render(data, append) {
              if (!__element) return;
              var __data = data;

              if (__template) {
                __template = __template.replace(__re, 'src');
                parsedTemplate = parseView(__template, __variable);
              } else {
                return;
              }

              /////////////////////////////////////////////
              // Private functions for the render method.
              // These need access to the returned instance.
              /////////////////////////////////////////////

              // Uncloaks, checks index and loops data:
              var renderIterableData = function renderIterableData(data) {
                if ($.type(data) === 'boolean') return;
                var Data = data ? data : __model;
                __element.removeClass('cloak');
                if (__element.data('index')) {
                  __index = Number(__element.data('index'));
                  $.view.index = Number(__element.data('index'));
                } else {
                  __index = 1;
                  $.view.index = 1;
                }
                interateModelToTemplate(Data);
                __renderCount++;
              };

              // Used by renderIterableData.
              // Loops over data to render template.
              // Handles index value as well.
              var interateModelToTemplate = function interateModelToTemplate(Data, append) {
                if (!append) {
                  __element.empty();
                }
                if (__startIndexFrom) $.view.index = __startIndexFrom;
                Data.forEach(function (item) {
                  __index += 1;
                  if (__escapeHTML) {
                    item = $.escapeHTML(item);
                  }
                  if (parsedTemplate) {
                    __element.append(parsedTemplate(item));
                    $.view.index += 1;
                  } else if (__template) {}
                });
                __lastRenderTime = Date.now();
                __rendered = true;
                $.view.index = 1;
              };
              /* jshint ignore:start */
              // Render view with object of key/value pairs:
              var renderSingleObjectView = function renderSingleObjectView(append) {
                __model.run(function (m, d) {
                  if (!append) {
                    __element.empty();
                  }
                  if (__escapeHTML) {
                    d = $.escapeHTML(d);
                  }
                  __element.append(parsedTemplate(d)); // jshint ignore:line
                  __element.removeClass('cloak');
                  __lastRenderTime = Date.now();
                  __rendered = true;
                  __renderCount++;
                });
              };
              /* jshint ignore:end */

              // Biding View to Model if Model provided
              var bindModelToView = function bindModelToView(handle) {
                if (!handle || typeof handle !== 'string') return;
                if (!$.mediators[handle]) $.mediators[handle] = $.MediatorStack();
                $.mediators[handle].push({
                  token: $.uuid(),
                  callback: function callback() {
                    view.render();
                  },
                  exec: true,
                  count: 0,
                  start: 0,
                  after: 0,
                  time: 0
                });
                __mediator = $.mediators[handle];
              };

              // Check extracted template:
              if (!parsedTemplate && __template && $.type(__template) === 'string') {
                parsedTemplate = parseView(__template, __variable);
              }

              // If the user supplied data to render:
              // If it's an array:
              if ($.type(data) === 'array') {
                $.view.index = __startIndexFrom || 1;
                if (!__canRender) return;
                if (!append) {
                  __element.empty();
                }
                data.forEach(function (item) {
                  if (__escapeHTML) {
                    item = $.escapeHTML(item);
                  }
                  __element.append(parsedTemplate(item)); // jshint ignore:line
                  $.view.index += 1;
                  __index += 1;
                });
                __rendered = true;
                $.view.index = 0;
                __element.removeClass('cloak');
                return;

                // Else if it is an object:
              } else if ($.type(data) === 'object' || $.type(data) === 'string' || $.type(data) === 'number') {
                  $.view.index = __startIndexFrom || 1;
                  if (!append) {
                    __element.empty();
                  }
                  __element.append(parsedTemplate(data)); // jshint ignore:line
                  __element.removeClass('cloak');
                  __rendered = true;
                  return;
                }

              // Check if model exists on __model.
              // Don't rendering view if no model.
              // (Model should be pokable)
              //=================================
              if (__model && _Object$keys(__model).indexOf('poke') > -1) {
                if (!__canRender) {
                  // Check to see if view can restart
                  // after set time:
                  if (__restartTime > 0) {
                    if (__restartTime < Date.now()) {
                      __canRender = true;
                      __restartTime = 0;
                      bindModelToView(__model.getHandle());
                    } else {
                      return;
                    }
                  } else {
                    return;
                  }
                }

                // If view was stoped with render limit,
                // check if set to stop after x times:
                if (__stopAfter > 0) {

                  // If the limit not reached, render:
                  if (__startFrom < __stopAfter) {
                    __startFrom++;
                    bindModelToView(__model.getHandle());

                    // If designated count reached, stop rendering:
                  } else if (__startFrom >= __stopAfter) {
                      __canRender = false;
                      __startFrom = 0;
                      __stopAfter = 0;
                    }

                  // Otherwise just render the view:
                } else {
                    if (__canRender) {
                      bindModelToView(__model.getHandle());
                    }
                  }

                // If model's data is single object:
                if (__model.getType() === 'object') {
                  renderSingleObjectView();

                  // If model's data is an array:
                } else if (__model.getType() === 'array' && !data) {
                    renderIterableData(data);
                    $.view.index = 0;
                    __index = 0;
                  }
              }
            },

            empty: function empty() {
              if (!__element) return;
              __element.empty();
            },

            resetIndex: function resetIndex() {
              if (!__element) return;
              __index = 0;
              __element.data('index', 0);
              $.view.index = 0;
            },

            startIndexFrom: function startIndexFrom(number) {
              if (!__element) return;
              if (number === 0 || number && !isNaN(number)) {
                __startIndexFrom = number;
                $.view.index = number;
                view.render();
              }
            },

            getTemplate: function getTemplate() {
              return __template;
            },

            setTemplate: function setTemplate(template) {
              if (!template) return;
              __template = template;
            },

            getModel: function getModel() {
              return __model;
            },

            setModel: function setModel(model) {
              if (!model || model === __model) return;
              __model = model;
              if (__model.size()) {
                view.render();
              }
              if (__isBoundTo) {
                view.unbind();
                view.bindToModel(model);
              }
            },

            getMediator: function getMediator() {
              return __mediator.getData()[0];
            },

            isRendered: function isRendered() {
              return __rendered;
            },

            isEmpty: function isEmpty() {
              if (!__element) return;
              if (typeof jQuery === 'undefined' && __element.objectType && __element.objectType === 'domstack') {
                if (__element.array[0].children.length) return false;
              } else if (__element[0].children.length) {
                return false;
              } else {
                return true;
              }
            },

            bind: function bind(model) {
              if (!model) return;
              var mediator = $.Mediator(model.getHandle());
              __mediator = mediator;
              var __v = undefined;
              __model = model;
              mediator.run(function (data) {
                if (!__element) return;
                __v.render();
              });
              if (!__element) return;
              view.render();
            },

            unbind: function unbind() {
              __model = undefined;
            },

            addEvent: function addEvent(events, replace) {
              if (replace) {
                __events = events & events.length ? events : [events];
              } else {
                if (events && events.length) {
                  events.forEach(function (event) {
                    __events.push(event);
                  });
                } else if (events) {
                  __events.push(events);
                }
              }
              handleEvents();
            },

            /*
              options: event, element (for a delegated event), callback
            */
            off: function off(event, element, callback) {
              __element.off(event, element, callback);
            },

            getElement: function getElement() {
              return __element;
            },

            setElement: function setElement(element) {
              if (!element) return;
              __element = $(element);
              $(element).empty();
              handleEvents();
            },

            stop: function stop(after) {
              // Stop after x number of times:
              if (!isNaN(after)) {
                __stopAfter = after;
                __startFrom = 0;

                // Else stop immediately:
              } else {
                  __canRender = false;
                }
            },

            isStopped: function isStopped() {
              return !__canRender;
            },

            restart: function restart(time) {
              // Restart after designated time:
              if (!isNaN(time)) {
                __restartTime = Date.now() + time * 1000;
                __canRender = false;

                // Else restart immediately:
              } else {
                  __canRender = true;
                  view.render();
                }
            },

            getRestartTime: function getRestartTime() {
              return __restartTime;
            },

            renderViewAfter: function renderViewAfter(time, data) {
              if (!time || isNaN(time) || time <= 0) return;
              var view = undefined;
              setTimeout(function () {
                view.render(data);
              }, time * 1000);
            },

            renderViewEvery: function renderViewEvery(time, callback) {
              if (!time || isNaN(time)) return;
              if (_Object$keys(__model).indexOf('poke') > -1) {

                // if the user set loop to stop:
                __renderViewEveryTime = true;
                var view = undefined;

                // Define loop for rendering view:
                var loop = function loop(view, callback) {
                  if (!__renderViewEveryTime) return;

                  // Use setTimeout to loop:
                  setTimeout((function () {
                    // If the model changed since last render:
                    if (__lastRenderTime < __model.getLastModTime()) {

                      if (callback && $.type(callback) === 'function') {
                        callback.apply(view);
                      }
                      view.render();
                    }

                    loop(undefined, callback);
                  }).bind(view), time * 1000);
                };
                loop(view, callback);
              }
            },

            // set flag to stop renderViewEvery:
            stopRenderViewEvery: function stopRenderViewEvery() {
              __renderViewEveryTime = false;
            },

            getLastRenderTime: function getLastRenderTime() {
              return __lastRenderTime;
            },

            escapeHTML: function escapeHTML(boolean) {
              if (boolean) {
                __escapeHTML = true;
              }
            },

            isEscapingHTML: function isEscapingHTML() {
              return __escapeHTML;
            },

            getRenderCount: function getRenderCount() {
              return __renderCount;
            }
          });
          return view;
        }
      });
    }
  };
});
$__System.register('6', ['2', '3'], function (_export) {
  // Truck Module - Component:
  'use strict';

  return {
    setters: [function (_2) {}, function (_) {}],
    execute: function () {

      $.extend({
        Component: function Component(options) {
          var comp = $.Component;
          $[options.name] = function () {
            comp.options = options;
            delete comp.options.name;
            return $.View(comp.options);
          };
        }
      });
    }
  };
});
$__System.register('7', ['3'], function (_export) {
  // Truck Module - Environment:
  'use strict';

  return {
    setters: [function (_) {}],
    execute: function () {

      $.extend({
        isiPhone: /iphone/img.test(navigator.userAgent),

        isiPad: /ipad/img.test(navigator.userAgent),

        isiPod: /ipod/img.test(navigator.userAgent),

        isiOS: /ip(hone|od|ad)/img.test(navigator.userAgent),

        isAndroid: /android/img.test(navigator.userAgent) && !/trident/img.test(navigator.userAgent),

        isBlackberry: /blackberry/img.test(navigator.userAgent),

        isTouchEnabled: !/trident/img.test(navigator.userAgent) && !/edge/img.test(navigator.userAgent) && 'createTouch' in document,

        isOnline: navigator.onLine,

        isStandalone: navigator.standalone,

        isWin: /edge/img.test(navigator.userAgent) || /trident/img.test(navigator.userAgent),

        isIE10: /msie 10/img.test(navigator.userAgent),

        isIE11: /windows nt/img.test(navigator.userAgent) && /trident/img.test(navigator.userAgent),

        isWebkit: !/trident/img.test(navigator.userAgent) && !/edge/img.test(navigator.userAgent) && /webkit/img.test(navigator.userAgent),

        isDesktop: !/mobile/img.test(navigator.userAgent),

        isSafari: !/edge/img.test(navigator.userAgent) && !/Chrome/img.test(navigator.userAgent) && /Safari/img.test(navigator.userAgent) && !/android/img.test(navigator.userAgent),

        isChrome: !/trident/img.test(navigator.userAgent) && !/edge/img.test(navigator.userAgent) && /Chrome/img.test(navigator.userAgent) && !((/samsung/img.test(navigator.userAgent) || /Galaxy Nexus/img.test(navigator.userAgent) || /HTC/img.test(navigator.userAgent) || /LG/img.test(navigator.userAgent)) && !/trident/img.test(navigator.userAgent) && !/edge/img.test(navigator.userAgent) && /android/i.test(navigator.userAgent) && /webkit/i.test(navigator.userAgent)),

        isNativeAndroid: (/samsung/img.test(navigator.userAgent) || /Galaxy Nexus/img.test(navigator.userAgent) || /HTC/img.test(navigator.userAgent) || /LG/img.test(navigator.userAgent)) && !/trident/img.test(navigator.userAgent) && !/edge/img.test(navigator.userAgent) && /android/i.test(navigator.userAgent) && /webkit/i.test(navigator.userAgent)
      });
    }
  };
});
$__System.registerDynamic("8", ["9", "a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toIObject = $__require('9'),
      getNames = $__require('a').getNames,
      toString = {}.toString;
  var windowNames = typeof window == 'object' && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
  var getWindowNames = function(it) {
    try {
      return getNames(it);
    } catch (e) {
      return windowNames.slice();
    }
  };
  module.exports.get = function getOwnPropertyNames(it) {
    if (windowNames && toString.call(it) == '[object Window]')
      return getWindowNames(it);
    return getNames(toIObject(it));
  };
  return module.exports;
});

$__System.registerDynamic("b", ["c", "8"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('c')('getOwnPropertyNames', function() {
    return $__require('8').get;
  });
  return module.exports;
});

$__System.registerDynamic("d", ["a", "b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('a');
  $__require('b');
  module.exports = function getOwnPropertyNames(it) {
    return $.getNames(it);
  };
  return module.exports;
});

$__System.registerDynamic("e", ["d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('d'),
    __esModule: true
  };
  return module.exports;
});

$__System.register("f", ["3", "10"], function (_export) {
  var _Object$defineProperty;

  return {
    setters: [function (_2) {}, function (_) {
      _Object$defineProperty = _["default"];
    }],
    execute: function () {
      // Truck Module - Promises:
      "use strict";

      _export("default", (function () {
        //==================================
        // Define polyfill for ES6 Promises:
        //==================================
        /*jshint validthis:true */
        var extend = undefined;
        var cycle = undefined;
        var queue = undefined;
        extend = function (obj, name, val, config) {
          return _Object$defineProperty(obj, name, {
            value: val,
            writable: true,
            configurable: config !== false
          });
        };
        queue = (function () {
          var first = undefined,
              last = undefined,
              item = undefined;
          function Item(func, self) {
            this.func = func;
            this.self = self;
            this.next = undefined;
          }
          return {
            add: function add(func, self) {
              item = new Item(func, self);
              if (last) {
                last.next = item;
              } else {
                first = item;
              }
              last = item;
              item = undefined;
            },
            unshift: function unshift() {
              var f = first;
              first = last = cycle = undefined;
              while (f) {
                f.func.call(f.self);
                f = f.next;
              }
            }
          };
        })();
        function schedule(func, self) {
          queue.add(func, self);
          if (!cycle) {
            cycle = setTimeout(queue.unshift);
          }
        }
        // Check that Promise is thenable:
        function isThenable(obj) {
          var _then = undefined,
              obj_type = typeof obj;
          if (obj !== null && (obj_type === "object" || obj_type === "function")) {
            _then = obj.then;
          }
          return typeof _then === "function" ? _then : false;
        }
        function notify() {
          for (var i = 0; i < this.chain.length; i++) {
            notifyIsolated(this, this.state === 1 ? this.chain[i].success : this.chain[i].failure, this.chain[i]);
          }
          this.chain.length = 0;
        }
        function notifyIsolated(self, callback, chain) {
          var ret = undefined,
              _then = undefined;
          try {
            if (callback === false) {
              chain.reject(self.msg);
            } else {
              if (callback === true) {
                ret = self.msg;
              } else {
                ret = callback.call(undefined, self.msg);
              }
              if (ret === chain.promise) {
                chain.reject(new TypeError("Promise-chain cycle"));
              } else if (_then = isThenable(ret)) {
                // jshint ignore:line
                _then.call(ret, chain.resolve, chain.reject);
              } else {
                chain.resolve(ret);
              }
            }
          } catch (err) {
            chain.reject(err);
          }
        }
        function resolve(msg) {
          var _then = undefined,
              deferred = undefined;
          var self = this;
          if (self.triggered) {
            return;
          }
          self.triggered = true;
          if (self.deferred) {
            self = self.deferred;
          }
          try {
            if (_then = isThenable(msg)) {
              // jshint ignore:line
              schedule(function () {
                var deferred_wrapper = new MakeDeferred(self);
                try {
                  _then.call(msg, function () {
                    resolve.apply(deferred_wrapper, arguments);
                  }, function () {
                    reject.apply(deferred_wrapper, arguments);
                  });
                } catch (err) {
                  reject.call(deferred_wrapper, err);
                }
              });
            } else {
              self.msg = msg;
              self.state = 1;
              if (self.chain.length > 0) {
                schedule(notify, self);
              }
            }
          } catch (err) {
            reject.call(new MakeDeferred(self), err);
          }
        }
        function reject(msg) {
          var self = this;
          if (self.triggered) {
            return;
          }
          self.triggered = true;
          if (self.deferred) {
            self = self.deferred;
          }
          self.msg = msg;
          self.state = 2;
          if (self.chain.length > 0) {
            schedule(notify, self);
          }
        }
        function iteratePromises(Constructor, arr, resolver, rejecter) {
          for (var idx = 0; idx < arr.length; idx++) {
            (function IIFE(idx) {
              Constructor.resolve(arr[idx]).then(function (msg) {
                resolver(idx, msg);
              }, rejecter);
            })(idx);
          }
        }
        function MakeDeferred(self) {
          this.deferred = self;
          this.triggered = false;
        }
        function Deferred(self) {
          this.promise = self;
          this.state = 0;
          this.triggered = false;
          this.chain = [];
          this.msg = undefined;
        }
        function Promise(executor) {
          if (typeof executor !== "function") {
            throw new TypeError("Not a function");
          }
          if (this.isValidPromise !== 0) {
            throw new TypeError("Not a promise");
          }
          // Indicate the Promise is initialized:
          this.isValidPromise = 1;
          var deferred = new Deferred(this);
          this.then = function (success, failure) {
            var obj = {
              success: typeof success === "function" ? success : true,
              failure: typeof failure === "function" ? failure : false
            };
            // `.then()` can be used against a different promise
            // constructor for making a chained promise.
            obj.promise = new this.constructor(function extractChain(resolve, reject) {
              if (typeof resolve !== "function" || typeof reject !== "function") {
                throw new TypeError("Not a function");
              }
              obj.resolve = resolve;
              obj.reject = reject;
            });
            deferred.chain.push(obj);
            if (deferred.state !== 0) {
              schedule(notify, deferred);
            }
            return obj.promise;
          };
          this["catch"] = function (failure) {
            return this.then(undefined, failure);
          };
          try {
            executor.call(undefined, function (msg) {
              resolve.call(deferred, msg);
            }, function (msg) {
              reject.call(deferred, msg);
            });
          } catch (err) {
            reject.call(deferred, err);
          }
        }
        var PromisePrototype = extend({}, "constructor", Promise, false);
        extend(Promise, "prototype", PromisePrototype, false);

        // Check if Promise is initialized:
        extend(PromisePrototype, "isValidPromise", 0, false);
        extend(Promise, "resolve", function (msg) {
          var Constructor = this;

          // Make sure it is a valide Promise:
          if (msg && typeof msg === "object" && msg.isValidPromise === 1) {
            return msg;
          }
          return new Constructor(function executor(resolve, reject) {
            if (typeof resolve !== "function" || typeof reject !== "function") {
              throw new TypeError("Not a function");
            }
            resolve(msg);
          });
        });
        extend(Promise, "reject", function (msg) {
          return new this(function executor(resolve, reject) {
            if (typeof resolve !== "function" || typeof reject !== "function") {
              throw new TypeError("Not a function");
            }
            reject(msg);
          });
        });
        extend(Promise, "all", function (arr) {
          var Constructor = this;

          // Make sure argument is an array:
          if (Object.prototype.toString.call(arr) !== "[object Array]") {
            return Constructor.reject(new TypeError("Not an array"));
          }
          if (arr.length === 0) {
            return Constructor.resolve([]);
          }
          return new Constructor(function executor(resolve, reject) {
            if (typeof resolve !== "function" || typeof reject !== "function") {
              throw new TypeError("Not a function");
            }
            var len = arr.length;
            var msgs = new Array(len);
            var count = 0;
            iteratePromises(Constructor, arr, function resolver(idx, msg) {
              msgs[idx] = msg;
              if (++count === len) {
                resolve(msgs);
              }
            }, reject);
          });
        });
        extend(Promise, "race", function (arr) {
          var Constructor = this;

          // Make sure argument is an array:
          if (Object.prototype.toString.call(arr) !== "[object Array]") {
            return Constructor.reject(new TypeError("Not an array"));
          }
          return new Constructor(function executor(resolve, reject) {
            if (typeof resolve !== "function" || typeof reject !== "function") {
              throw new TypeError("Not a function");
            }
            iteratePromises(Constructor, arr, function resolver(idx, msg) {
              resolve(msg);
            }, reject);
          });
        });

        // If native Promise exists in window, do not use this.
        if ("Promise" in window && "resolve" in window.Promise && "reject" in window.Promise && "all" in window.Promise && "race" in window.Promise) {
          return;
        } else {

          // Otherwise do use this:
          return window.Promise = Promise;
        }
      })());
    }
  };
});
$__System.register('11', ['3', '12', 'e', 'f'], function (_export) {
  var _Promise, _Object$getOwnPropertyNames;

  return {
    setters: [function (_2) {}, function (_) {
      _Promise = _['default'];
    }, function (_e) {
      _Object$getOwnPropertyNames = _e['default'];
    }, function (_f) {}],
    execute: function () {
      // Truck Module - Fetch:
      'use strict';

      _export('default', (function () {

        /**
         *
         * JSONP with API like fetch.
         */
        $.extend({
          // Container for jsonp methods:
          JSONPCallbacks: [],
          // JSONP method:
          jsonp: function jsonp(url, opts) {
            var settings = {
              timeout: 2000,
              callbackName: 'callback',
              clear: true
            };
            if (opts) {
              $.extend(settings, opts);
            }
            // Method to create callback:
            function generateCallbackName() {
              var base = 'callback';
              var callbackName = settings.callbackName + '_' + ($.JSONPCallbacks.length + 1);
              $.JSONPCallbacks.push(callbackName);
              return callbackName;
            }
            var callbackName = generateCallbackName();
            // Create and return Promise with result from request:
            return new _Promise(function (resolve, reject) {
              var timeout;
              window.jsonp = window.jsonp || {};
              window.jsonp[callbackName] = function (response) {
                resolve({
                  ok: true,
                  json: function json() {
                    return _Promise.resolve(response);
                  }
                });
                if (timeout) {
                  clearTimeout(timeout);
                }
              };
              // Create script tag:
              var script = document.createElement('script');
              script.async = true;
              script.defer = true;
              script.src = url + (url.indexOf('?') > -1 ? '&' : '?') + 'callback=jsonp.' + callbackName;
              document.body.appendChild(script);
              // Delete script tag:
              setTimeout(function () {
                script.parentNode.removeChild(script);
              });
              // Clear JSONP methods from window:
              if (settings.clear) {
                var pos = $.JSONPCallbacks.indexOf(callbackName);
                $.JSONPCallbacks.splice(pos, 1);
              }
              // Handle timeout:
              timeout = setTimeout(function () {
                reject(new Error('JSONP request to ' + url + ' timed out'));
              }, settings.timeout);
            });
          },
          // Helper function for fetch Promises.
          // Returns the respons as parsed JSON.
          // Usage: .then($.json)
          json: function json(response) {
            return response.json();
          }
        });
        if (window && window.fetch) {
          return;
        }
        var self = window;

        function normalizeName(name) {
          if (typeof name !== 'string') {
            name = String(name);
          }
          if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
            throw new TypeError('Invalid character in header field name');
          }
          return name.toLowerCase();
        }

        function normalizeValue(value) {
          if (typeof value !== 'string') {
            value = String(value);
          }
          return value;
        }

        function Headers(headers) {
          this.map = {};

          if (headers instanceof Headers) {
            headers.forEach(function (value, name) {
              this.append(name, value);
            }, this);
          } else if (headers) {
            _Object$getOwnPropertyNames(headers).forEach(function (name) {
              this.append(name, headers[name]);
            }, this);
          }
        }

        Headers.prototype.append = function (name, value) {
          name = normalizeName(name);
          value = normalizeValue(value);
          var list = this.map[name];
          if (!list) {
            list = [];
            this.map[name] = list;
          }
          list.push(value);
        };

        Headers.prototype['delete'] = function (name) {
          delete this.map[normalizeName(name)];
        };

        Headers.prototype.get = function (name) {
          var values = this.map[normalizeName(name)];
          return values ? values[0] : null;
        };

        Headers.prototype.getAll = function (name) {
          return this.map[normalizeName(name)] || [];
        };

        Headers.prototype.has = function (name) {
          return this.map.hasOwnProperty(normalizeName(name));
        };

        Headers.prototype.set = function (name, value) {
          this.map[normalizeName(name)] = [normalizeValue(value)];
        };

        Headers.prototype.forEach = function (callback, thisArg) {
          _Object$getOwnPropertyNames(this.map).forEach(function (name) {
            this.map[name].forEach(function (value) {
              callback.call(thisArg, value, name, this);
            }, this);
          }, this);
        };

        function consumed(body) {
          if (body.bodyUsed) {
            return _Promise.reject(new TypeError('Already read'));
          }
          body.bodyUsed = true;
        }

        function fileReaderReady(reader) {
          return new _Promise(function (resolve, reject) {
            reader.onload = function () {
              resolve(reader.result);
            };
            reader.onerror = function () {
              reject(reader.error);
            };
          });
        }

        function readBlobAsArrayBuffer(blob) {
          var reader = new FileReader();
          reader.readAsArrayBuffer(blob);
          return fileReaderReady(reader);
        }

        function readBlobAsText(blob) {
          var reader = new FileReader();
          reader.readAsText(blob);
          return fileReaderReady(reader);
        }

        var support = {
          blob: 'FileReader' in self && 'Blob' in self && (function () {
            try {
              new Blob();
              return true;
            } catch (e) {
              return false;
            }
          })(),
          formData: 'FormData' in self,
          arrayBuffer: 'ArrayBuffer' in self
        };

        function Body() {
          this.bodyUsed = false;

          this._initBody = function (body) {
            this._bodyInit = body;
            if (typeof body === 'string') {
              this._bodyText = body;
            } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
              this._bodyBlob = body;
            } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
              this._bodyFormData = body;
            } else if (!body) {
              this._bodyText = '';
            } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {
              // Only support ArrayBuffers for POST method.
              // Receiving ArrayBuffers happens via Blobs, instead.
            } else {
                throw new Error('unsupported BodyInit type');
              }
            if (!this.headers.get('content-type')) {
              if (typeof body === 'string') {
                this.headers.set('content-type', 'text/plain;charset=UTF-8');
              } else if (this._bodyBlob && this._bodyBlob.type) {
                this.headers.set('content-type', this._bodyBlob.type);
              }
            }
          };

          if (support.blob) {
            this.blob = function () {
              var rejected = consumed(this);
              if (rejected) {
                return rejected;
              }

              if (this._bodyBlob) {
                return _Promise.resolve(this._bodyBlob);
              } else if (this._bodyFormData) {
                throw new Error('could not read FormData body as blob');
              } else {
                return _Promise.resolve(new Blob([this._bodyText]));
              }
            };

            this.arrayBuffer = function () {
              return this.blob().then(readBlobAsArrayBuffer);
            };

            this.text = function () {
              var rejected = consumed(this);
              if (rejected) {
                return rejected;
              }

              if (this._bodyBlob) {
                return readBlobAsText(this._bodyBlob);
              } else if (this._bodyFormData) {
                throw new Error('could not read FormData body as text');
              } else {
                return _Promise.resolve(this._bodyText);
              }
            };
          } else {
            this.text = function () {
              var rejected = consumed(this);
              return rejected ? rejected : _Promise.resolve(this._bodyText);
            };
          }

          if (support.formData) {
            this.formData = function () {
              return this.text().then(decode);
            };
          }

          this.json = function () {
            return this.text().then(JSON.parse);
          };

          return this;
        }

        // HTTP methods whose capitalization should be normalized
        var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

        function normalizeMethod(method) {
          var upcased = method.toUpperCase();
          return methods.indexOf(upcased) > -1 ? upcased : method;
        }

        function Request(input, options) {
          options = options || {};
          var body = options.body;
          if (Request.prototype.isPrototypeOf(input)) {
            if (input.bodyUsed) {
              throw new TypeError('Already read');
            }
            this.url = input.url;
            this.credentials = input.credentials;
            if (!options.headers) {
              this.headers = new Headers(input.headers);
            }
            this.method = input.method;
            this.mode = input.mode;
            if (!body) {
              body = input._bodyInit;
              input.bodyUsed = true;
            }
          } else {
            this.url = input;
          }

          this.credentials = options.credentials || this.credentials || 'omit';
          if (options.headers || !this.headers) {
            this.headers = new Headers(options.headers);
          }
          this.method = normalizeMethod(options.method || this.method || 'GET');
          this.mode = options.mode || this.mode || null;
          this.referrer = null;

          if ((this.method === 'GET' || this.method === 'HEAD') && body) {
            throw new TypeError('Body not allowed for GET or HEAD requests');
          }
          this._initBody(body);
        }

        Request.prototype.clone = function () {
          return new Request(this);
        };

        function decode(body) {
          var form = new FormData();
          body.trim().split('&').forEach(function (bytes) {
            if (bytes) {
              var split = bytes.split('=');
              var name = split.shift().replace(/\+/g, ' ');
              var value = split.join('=').replace(/\+/g, ' ');
              form.append(decodeURIComponent(name), decodeURIComponent(value));
            }
          });
          return form;
        }

        function headers(xhr) {
          var head = new Headers();
          var pairs = xhr.getAllResponseHeaders().trim().split('\n');
          pairs.forEach(function (header) {
            var split = header.trim().split(':');
            var key = split.shift().trim();
            var value = split.join(':').trim();
            head.append(key, value);
          });
          return head;
        }

        Body.call(Request.prototype);

        function Response(bodyInit, options) {
          if (!options) {
            options = {};
          }

          this.type = 'default';
          this.status = options.status;
          this.ok = this.status >= 200 && this.status < 300;
          this.statusText = options.statusText;
          this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers);
          this.url = options.url || '';
          this._initBody(bodyInit);
        }

        Body.call(Response.prototype);

        Response.prototype.clone = function () {
          return new Response(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new Headers(this.headers),
            url: this.url
          });
        };

        Response.error = function () {
          var response = new Response(null, { status: 0, statusText: '' });
          response.type = 'error';
          return response;
        };

        var redirectStatuses = [301, 302, 303, 307, 308];

        Response.redirect = function (url, status) {
          if (redirectStatuses.indexOf(status) === -1) {
            throw new RangeError('Invalid status code');
          }

          return new Response(null, { status: status, headers: { location: url } });
        };

        self.Headers = Headers;
        self.Request = Request;
        self.Response = Response;

        self.fetch = function (input, init) {
          return new _Promise(function (resolve, reject) {
            var request;
            if (Request.prototype.isPrototypeOf(input) && !init) {
              request = input;
            } else {
              request = new Request(input, init);
            }

            var xhr = new XMLHttpRequest();

            function responseURL() {
              if ('responseURL' in xhr) {
                return xhr.responseURL;
              }

              // Avoid security warnings on getResponseHeader when not allowed by CORS
              if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
                return xhr.getResponseHeader('X-Request-URL');
              }

              return;
            }

            xhr.onload = function () {
              var options = {
                status: xhr.status,
                statusText: xhr.statusText,
                headers: headers(xhr),
                url: responseURL()
              };
              var body = 'response' in xhr ? xhr.response : xhr.responseText;
              resolve(new Response(body, options));
            };

            xhr.onerror = function () {
              reject(new TypeError('Network request failed'));
            };

            xhr.open(request.method, request.url, true);

            if (request.credentials === 'include') {
              xhr.withCredentials = true;
            }

            if ('responseType' in xhr && support.blob) {
              xhr.responseType = 'blob';
            }

            request.headers.forEach(function (value, name) {
              xhr.setRequestHeader(name, value);
            });

            xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
          });
        };
        self.fetch.polyfill = true;
      })());
    }
  };
});
$__System.registerDynamic("13", ["a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('a');
  module.exports = function create(P, D) {
    return $.create(P, D);
  };
  return module.exports;
});

$__System.registerDynamic("14", ["13"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('13'),
    __esModule: true
  };
  return module.exports;
});

$__System.register('15', ['3', '14'], function (_export) {
  var _Object$create;

  return {
    setters: [function (_2) {}, function (_) {
      _Object$create = _['default'];
    }],
    execute: function () {
      // Truck Module - OOP:
      'use strict';

      var _arguments = arguments;

      $.extend({

        // Mixin one object into another:
        //===============================
        mixin: function mixin(sourceObj, targetObj) {
          for (var key in sourceObj) {
            // Do not replace property if it exists:
            if (!(key in targetObj)) {
              targetObj[key] = sourceObj[key];
            }
          }
          return targetObj;
        },

        // Create a clone of an object.
        // This preserves the protytpe chain
        // to the original:
        //==================================
        clone: function clone(obj) {
          if (typeof _Object$create != 'function') {
            Object.create = (function () {
              function Temp() {}
              var hasOwn = Object.prototype.hasOwnProperty;

              return function (O) {
                if (typeof O != 'object') {
                  throw TypeError('Object prototype may only be an Object or null');
                }
                Temp.prototype = O;
                var obj = new Temp();
                Temp.prototype = null;
                if (_arguments.length > 1) {
                  var Properties = Object(_arguments[1]);
                  for (var prop in Properties) {
                    if (hasOwn.call(Properties, prop)) {
                      obj[prop] = Properties[prop];
                    }
                  }
                }
                return obj;
              };
            })();
          }
          return _Object$create(obj);
        }
      });
    }
  };
});
$__System.register('16', ['3'], function (_export) {
  // Truck Module - Validators:
  'use strict';

  var setValidityStatus, checkValidity;
  return {
    setters: [function (_) {}],
    execute: function () {

      // Set validity state of form elements:
      setValidityStatus = function setValidityStatus(element, valid) {
        if (valid) {
          $(element).prop('valid', true);
          $(element).prop('invalid', false);
          $(element).addClass('valid').removeClass('invalid');
        } else {
          $(element).prop('valid', false);
          $(element).prop('invalid', true);
          $(element).addClass('invalid').removeClass('valid');
        }
      };

      // Used to check input validity:
      checkValidity = function checkValidity(element, expression) {
        if (expression) {
          setValidityStatus(element, true);
        } else {
          setValidityStatus(element, false);
        }
        return expression;
      };

      $.fn.extend({
        isNotEmpty: function isNotEmpty(ctx) {
          if (this[0].nodeName !== 'INPUT') return;
          return checkValidity(this, this[0].nodeName === 'INPUT' && this[0].value);
        },

        validateAlphabetic: function validateAlphabetic() {
          if (this[0].nodeName !== 'INPUT') return;
          var letters = /^[A-Za-z]+$/;
          var value = this[0].nodeName === 'INPUT' && this[0].value;
          checkValidity(this, value.match(letters));
          if (value) {
            return checkValidity(this, value.match(letters));
          }
        },

        validateText: function validateText() {
          if (this[0].nodeName !== 'INPUT') return;
          var letters = /^[A-Za-z\W]+$/;
          var value = this[0].nodeName === 'INPUT' && this[0].value;
          checkValidity(this, value.match(letters));
          if (value) {
            return checkValidity(this, value.match(letters));
          }
        },

        validateNumber: function validateNumber() {
          if (this[0].nodeName !== 'INPUT') return;
          var numbers = /^[+-]?\d+(\.\d+)?$/;
          var value = this[0].nodeName === 'INPUT' && this[0].value;
          checkValidity(this, value.match(numbers));
          if (value) {
            return checkValidity(this, value.match(numbers));
          }
        },

        validateAlphaNumeric: function validateAlphaNumeric() {
          if (this[0].nodeName !== 'INPUT') return;
          var letters = /^[0-9a-zA-Z]+$/;
          var value = this[0].nodeName === 'INPUT' && this[0].value;
          checkValidity(this, value.match(letters));
          if (value) {
            return checkValidity(this, value.match(letters));
          }
        },

        validateUserName: function validateUserName(minimum) {
          if (this[0].nodeName !== 'INPUT') return;
          var letters = /^[a-zA-Z0-9]+$/;
          var username = this[0].value;
          if (!username) return checkValidity(this, username);
          if (minimum && username.match(letters)) {
            if (username.length >= minimum) {
              return checkValidity(this, username);
            } else {
              return checkValidity(this, false);
            }
          } else {
            return checkValidity(this, checkValidity(this, username.match(letters)));
          }
        },

        validateEmail: function validateEmail() {
          if (this[0].nodeName !== 'INPUT') return;
          var value = this[0].value;
          var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          if (value) {
            return checkValidity(this, value.match(email));
          } else {
            return checkValidity(this, false);
          }
        },

        validatePhoneNumber: function validatePhoneNumber(int) {
          if (this[0].nodeName !== 'INPUT') return;
          var phone = undefined;
          var phoneNumber = undefined;
          var convertLettersToNumbers = function convertLettersToNumbers(value) {
            var phonenumber = "";
            value = value.toLowerCase();
            var len = value.length;
            for (var i = 0; i < len; i++) {
              var character = value.charAt(i);
              switch (character) {
                case '0':
                  phonenumber += "0";
                  break;
                case '1':
                  phonenumber += "1";
                  break;
                case '2':
                  phonenumber += "2";
                  break;
                case '3':
                  phonenumber += "3";
                  break;
                case '4':
                  phonenumber += "4";
                  break;
                case '5':
                  phonenumber += "5";
                  break;
                case '6':
                  phonenumber += "6";
                  break;
                case '7':
                  phonenumber += "7";
                  break;
                case '8':
                  phonenumber += "8";
                  break;
                case '9':
                  phonenumber += "9";
                  break;
                case '-':
                  phonenumber += "-";
                  break;
                case 'a':
                case 'b':
                case 'c':
                  phonenumber += "2";
                  break;
                case 'd':
                case 'e':
                case 'f':
                  phonenumber += "3";
                  break;
                case 'g':
                case 'h':
                case 'i':
                  phonenumber += "4";
                  break;
                case 'j':
                case 'k':
                case 'l':
                  phonenumber += "5";
                  break;
                case 'm':
                case 'n':
                case 'o':
                  phonenumber += "6";
                  break;
                case 'p':
                case 'q':
                case 'r':
                case 's':
                  phonenumber += "7";
                  break;
                case 't':
                case 'u':
                case 'v':
                  phonenumber += "8";
                  break;
                case 'w':
                case 'x':
                case 'y':
                case 'z':
                  phonenumber += "9";
                  break;
              }
            }
            return phonenumber;
          };
          if (this[0].value) {

            // International Numbers:
            if (int) {
              phoneNumber = this[0].value.replace(/[\(\)\.\-\ ]/g, '');
              return checkValidity(this, this.isNotEmpty() && !isNaN(phoneNumber));

              // North America (US and Canada):
            } else {
                phoneNumber = this[0].value.replace(/[\(\)\.\-\ ]/g, '');
                phoneNumber = convertLettersToNumbers(phoneNumber);
                phone = /((\(\d{3}\)?)|(\d{3}))([\s-./]?)(\d{3})([\s-./]?)(\d{4})/;
                return checkValidity(this, phoneNumber.match(phone));
              }
          } else {
            return checkValidity(this, false);
          }
        },

        validateUrl: function validateUrl() {
          if (this[0].nodeName !== 'INPUT') return;
          if (this[0].value) {
            var url = /^(ftp|http|https):\/\/([w]{3}\.)?(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;
            return checkValidity(this, this[0].value.match(url));
          } else {
            return checkValidity(this, false);
          }
        },

        validateAge: function validateAge(minimum) {
          if (this[0].nodeName !== 'INPUT') return;
          if (!minimum) return;
          var age = this[0].value;
          if (age) {
            return checkValidity(this, age >= minimum);
          } else {
            return checkValidity(this, false);
          }
        },

        validateCheckbox: function validateCheckbox() {
          if (this[0].nodeName !== 'INPUT') return;
          if (this[0].nodeName === 'INPUT' && this[0].type === 'checkbox') {
            return checkValidity(this, this[0].checked === true);
          }
        },

        validateRadioButtons: function validateRadioButtons() {
          if (this[0].nodeName !== 'INPUT') return;
          var choice = false;
          if (this[0].nodeName === 'INPUT' && this[0].type === 'radio') {
            $.each(this, function (idx, button) {
              if (button.checked === true) {
                choice = true;
              }
            });
            return checkValidity(this, choice);
          }
        },

        validateSelectBox: function validateSelectBox() {
          if (this[0].nodeName === 'SELECT') {
            return checkValidity(this, this[0].selectedIndex);
          } else {
            return;
          }
        },

        validateSwitch: function validateSwitch() {
          var checkbox = this.find('input[type=checkbox]')[0];
          if (checkbox.checked) {
            return true;
          } else {
            return false;
          }
        },

        validateSelectList: function validateSelectList() {
          var radio = this.find('input[type=radio]');
          if (radio.iz('[checked]')[0]) {
            return true;
          } else {
            return false;
          }
        },
        validateMultiSelectList: function validateMultiSelectList() {
          var checkboxes = this.find('input[type=checkbox]');
          var checked = false;
          checkboxes.forEach(function (item) {
            if ($(item).prop('checked')) {
              checked = true;
            }
          });
          if (checked) {
            return true;
          } else {
            return false;
          }
        }
      });

      $.extend({
        validatePassword: function validatePassword(input1, input2, minimum) {
          if (minimum && $(input1).val().length < minimum || $(input2).val().length < minimum) {
            $(input1).addClass('invalid').removeClass('valid');
            $(input2).addClass('invalid').removeClass('valid');
            return false;
          } else {
            var letters = /^(?=.*[a-zA-Z])(?=.*[0-9]).+$/;
            if (!letters.test($(input1).val()) && !letters.test($(input2).val())) return false;
            if ($(input1).val() === $(input2).val()) {
              $(input1).removeClass('invalid').addClass('valid');
              $(input2).removeClass('invalid').addClass('valid');
            } else {
              $(input1).addClass('invalid').removeClass('valid');
              $(input2).addClass('invalid').removeClass('valid');
            }
            return $(input1).val() === $(input2).val();
          }
        },

        validateWithRegex: function validateWithRegex(input, regex) {
          if (!regex) {
            console.error('This method requires a regular expression.');
            return;
          }
          var value = $(input).val();
          if (value) {
            return checkValidity(input, value.match(regex));
          }
        },

        customValidators: [],

        registerCustomValidator: function registerCustomValidator(name, regex) {
          this.customValidators.push({ name: name, regex: regex });
        }
      });
    }
  };
});
$__System.register('17', ['3', '16'], function (_export) {
  // Truck Module - Form Validation & JSON:
  'use strict';

  return {
    setters: [function (_) {}, function (_2) {}],
    execute: function () {

      $.extend({
        //===========================================
        // Setup Form object to convert data to JSON,
        // and to validate form values:
        //===========================================
        Form: function Form(options) {
          if (!options || $.type(options) !== 'array') return;

          var __passed = false;
          var __errors = [];
          var __result = [];

          // Helper to validate form elements:
          //==================================
          function validateElement(item) {
            if (!item) return;
            console.dir(item);
            if (!__passed) {
              __errors.push({
                element: item.element,
                type: item.type
              });
              if (item.callback) item.callback();
            } else {
              convertToObject($(item.element).attr('name'), $(item.element).val());
            }
          }

          // Helper to convert form element names to JSON:
          //==============================================
          function convertToObject(name, value) {
            __result.push({
              name: name,
              value: value
            });
          }

          // Convert form names and values to JSON:
          //=======================================
          function convertObjectToJSON(data) {
            var delimiter = '_';
            var result = {};
            var arrays = {};
            data.forEach(function (item) {
              var value = item.value;
              if (value !== '') {
                var _name = item.name;
                var nameParts = _name.split(delimiter);
                var currResult = result;
                for (var j = 0; j < nameParts.length; j++) {
                  var namePart = nameParts[j];
                  var arrName = undefined;
                  if (namePart.indexOf('[]') > -1 && j === nameParts.length - 1) {

                    arrName = namePart.substr(0, namePart.indexOf('['));
                    if (!currResult[arrName]) {
                      currResult[arrName] = [];
                    }
                    currResult[arrName].push(value);
                  } else {
                    if (namePart.indexOf('[') > -1) {
                      arrName = namePart.substr(0, namePart.indexOf('['));
                      var arrIdx = namePart.replace(/^[a-z]+\[|\]$/gi, '');
                      if (!arrays[arrName]) {
                        arrays[arrName] = {};
                      }
                      if (!currResult[arrName]) {
                        currResult[arrName] = [];
                      }
                      if (j === nameParts.length - 1) {
                        currResult[arrName].push(value);
                      } else {
                        if (!arrays[arrName][arrIdx]) {
                          currResult[arrName].push({});
                          arrays[arrName][arrIdx] = currResult[arrName][currResult[arrName].length - 1];
                        }
                      }
                      currResult = arrays[arrName][arrIdx];
                    } else {
                      if (j < nameParts.length - 1) {
                        if (!currResult[namePart]) {
                          currResult[namePart] = {};
                        }
                        currResult = currResult[namePart];
                      } else {
                        currResult[namePart] = value;
                      }
                    }
                  }
                }
              }
            });
            return result;
          }

          // Validate form elements:
          //========================
          options.forEach(function (item) {
            if (!$(item.element)[0]) return;
            switch (item.type) {
              case 'notempty':
                __passed = validateElement(item.element, item.type);
                __errors.push({
                  element: item.element,
                  type: item.type
                });
                return;
              case 'number':
                __passed = $(item.element).validateNumber();
                validateElement(item);
                return;
              case 'text':
                __passed = $(item.element).validateText();
                validateElement(item);
                return;
              case 'alphanumeric':
                __passed = $(item.element).validateAlphaNumeric();
                validateElement(item);
                return;
              case 'username':
                __passed = $(item.element).validateUserName(item.min);
                validateElement(item);
                // minimum length
                return;
              case 'email':
                __passed = $(item.element).validateEmail();
                validateElement(item);
                return;
              case 'phone':
                __passed = $(item.element).validatePhoneNumber();
                validateElement(item);
                return;
              case 'url':
                __passed = $(item.element).validateUrl();
                validateElement(item);
                return;
              case 'age':
                __passed = $(item.element).validateAge(item.min);
                validateElement(item);
                // minimum length
                return;
              case 'checkbox':
                __passed = $(item.element).validateCheckbox();
                if (__passed) {
                  // var checkbox = $(item.element)[0];
                  validateElement(item);
                }
                return;
              case 'radio':
                __passed = $(item.element).validateRadioButtons();
                validateElement(item);
                return;
              case 'selectbox':
                __passed = $(item.element).validateSelectBox();
                validateElement(item);
                return;
              case 'password':
                __passed = $.validatePassword(item.element, item.element2, item.min);
                __errors.push({
                  element: item.element,
                  element2: item.element2,
                  type: item.type
                });
                // input1, input2, minimum length
                return;
              case 'switch':
                __passed = $(item.element).validateSwitch();
                if (__passed) {
                  validateElement(item);
                }
                return;
              case 'selectlist':
                __passed = $(item.element).validateSelectList();
                if (__passed) {
                  validateElement(item);
                }
              case 'multiselectlist':
                __passed = $(item.element).validateMultiSelectList();
                var inputs;
                if (__passed) {
                  inputs = $(item.element).find('input[type=checkbox]');
                  inputs.forEach(function (item) {
                    if (item.checked) {
                      convertToObject(item.name, item.value);
                    }
                  });
                }
            }
            if (item.type.match(/custom/)) {
              var cv = $.customValidators.filter(function (validator) {
                return validator.name === item.type;
              });
              if (cv) {
                var result = $.validateWithRegex(item.element, cv[0].regex);
                if (result) {
                  var el = $(item.element);
                  convertToObject(el[0].name, el[0].value);
                } else {
                  __errors.push({
                    element: item.element,
                    type: item.type
                  });
                  if (item.callback) item.callback();
                }
              }
            }
          });

          return {
            getErrors: function getErrors() {
              if (__errors.length) {
                return __errors;
              }
            },

            errors: function errors() {
              if (__errors.length) {
                return true;
              }
            },

            get: function get() {
              // console.log(__result)
              return convertObjectToJSON(__result);
            }
          };
        }
      });
    }
  };
});
$__System.register('18', ['3'], function (_export) {
  // Truck Module - Formatters:
  'use strict';

  return {
    setters: [function (_) {}],
    execute: function () {

      $.extend({
        //==============================
        // Format Numbers for Thousands:
        //==============================
        formatNumber: function formatNumber(amount, separator, decimal) {
          var sep = separator || ",";
          // Allow the user to round a float to a whole number:
          if (decimal === 0) {
            var num = Math.round(amount);
            return Number(num).toString().replace(/(?=(?:\d{3})+$)(?!^)/g, sep);
          }
          if (decimal === undefined) {
            // Check if amount is a float:
            if (typeof amount === 'number' && amount % 1 !== 0) {
              return Number(amount).toString().replace(/\d(?=(\d{3})+\.)/g, '$&' + sep);
              // Otherwise treat it as an integer:
            } else {
                return Number(amount).toString().replace(/(?=(?:\d{3})+$)(?!^)/g, sep);
              }
            // If a decimal value was provided,
            // format it to that amount:
          } else {
              return Number(amount).toFixed(decimal).replace(/\d(?=(\d{3})+\.)/g, '$&' + sep);
            }
        },

        //=======================
        // Return sum of numbers:
        //=======================
        sum: function sum(arr) {
          var ret = undefined;
          if (Array.isArray(arr) && arr.length) {
            ret = arr;
          } else {
            ret = [].slice.apply(arguments);
          }
          return ret.reduce(function (a, b) {
            return a + b;
          });
        },

        //=================
        // Format currency:
        //=================
        currency: function currency(amount, symbol, separator, decimal) {
          var sym = symbol || "$";
          var sep = separator || ",";
          var dec = decimal || 2;
          var zero = false;
          if (decimal === 0) {
            zero = true;
          }
          // Private function to format amounts:
          var formatNumber = function formatNumber(amount, sep) {
            // A decimal value of '0' means
            // we need to round the amount off
            // before adding in thousands separators:
            if (zero) {
              var num = Math.round(amount);
              return Number(num).toString().replace(/^0+/, '').replace(/(?=(?:\d{3})+$)(?!^)/g, sep);
            } else {
              // Otherwise, we can just add the thousands
              // separators with the decimal placement
              // provided by the user or the default:
              return Number(amount).toFixed(dec).replace(/^0+/, '').replace(/\d(?=(\d{3})+\.)/g, '$&' + sep);
            }
          };
          return sym + formatNumber(amount, sep);
        },

        //=============
        // Format Time:
        //=============
        formatTime: function formatTime(time) {
          var temp = time.split(':');
          var temp2 = temp[0] + ':' + temp[1];
          var ampm = time.split(' ')[1];
          return temp2 + ' ' + ampm;
        },

        sortDate: function sortDate(date1, date2) {
          return new Date(date1) - new Date(date2);
        },

        //==============
        // Sort Numbers:
        //==============
        sortNumbers: function sortNumbers(a, b) {
          return a - b;
        },

        sortNumbersDescending: function sortNumbersDescending(a, b) {
          return b - a;
        }
      });
    }
  };
});
$__System.register('19', ['3'], function (_export) {
  // Truck Module - Animation:
  'use strict';

  return {
    setters: [function (_) {}],
    execute: function () {

      $(function () {
        function transformProperty() {
          var styles = ['webkitTransform', 'MozTransform', 'msTransform', 'transform'];

          var el = document.createElement('p');
          var style = undefined;
          var ret = undefined;
          for (var i = 0; i < styles.length; i++) {
            style = styles[i];
            if (null !== el.style[style]) {
              ret = style;
              break;
            }
          }
          return ret;
        }

        function hasTranslate3d() {
          var prop = transformProperty();
          var map = {
            webkitTransform: '-webkit-transform',
            msTransform: '-ms-transform',
            MozTransform: '-moz-transform',
            transform: 'transform'
          };

          var el = document.createElement('div');
          el.style[prop] = 'translate3d(1px,1px,1px)';
          document.body.insertBefore(el, null);
          var val = getComputedStyle(el).getPropertyValue(map[prop]);
          document.body.removeChild(el);
          return null !== val && val.length && 'none' != val;
        }

        function hasTransitions() {
          var styl = document.body.style;
          return 'transition' in styl || 'webkitTransition' in styl || 'MozTransition' in styl || 'msTransition' in styl;
        }

        function componentEvents() {
          var _bind = 'addEventListener';
          var _unbind = 'removeEventListener';
          var prefix = _bind !== 'addEventListener' ? 'on' : '';

          return {
            bind: function bind(el, type, fn, capture) {
              el[_bind](prefix + type, fn, capture || false);
              return fn;
            },

            unbind: function unbind(el, type, fn, capture) {
              el[_unbind](prefix + type, fn, capture || false);
              return fn;
            }
          };
        }

        function cssEmitter() {

          var events = componentEvents();

          // CSS events:

          var watch = ['transitionend', 'webkitTransitionEnd', 'MSTransitionEnd', 'animationend', 'webkitAnimationEnd', 'MSAnimationEnd'];

          function CssEmitter(element) {
            if (!(this instanceof CssEmitter)) return new CssEmitter(element);
            this.el = element;
          }

          CssEmitter.prototype.bind = function (fn) {
            for (var i = 0; i < watch.length; i++) {
              events.bind(this.el, watch[i], fn);
            }
            return this;
          };

          CssEmitter.prototype.unbind = function (fn) {
            for (var i = 0; i < watch.length; i++) {
              events.unbind(this.el, watch[i], fn);
            }
            return this;
          };

          CssEmitter.prototype.once = function (fn) {
            var self = this;

            function on() {
              self.unbind(on);
              fn.apply(self.el, arguments);
            }
            self.bind(on);
            return this;
          };

          return CssEmitter;
        }

        function yieldsAafterTransition() {
          var has = hasTransitions;
          var emitter = cssEmitter();
          var supported = has();
          var n = 0;
          var global = (function () {
            return this;
          })();
          var once = function once(fn) {
            var id = n++;

            function once() {
              // no receiver
              if (this == global) {
                if (once.called) return;
                once.called = true;
                return fn.apply(this, arguments);
              }

              // receiver
              var key = '__called_' + id + '__';
              if (this[key]) return;
              this[key] = true;
              return fn.apply(this, arguments);
            }

            return once;
          };
          function after(el, fn) {
            if (!supported || !has(el)) return fn();
            emitter(el).bind(fn);
            return fn;
          }
          after.once = function (el, fn) {
            var callback = once(fn);
            after(el, fn = function () {
              emitter(el).unbind(fn);
              callback();
            });
          };
          return after;
        }

        function emitter() {
          function Emitter(obj) {
            if (obj) return mixin(obj);
          }
          function mixin(obj) {
            for (var key in Emitter.prototype) {
              obj[key] = Emitter.prototype[key];
            }
            return obj;
          }

          Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
            this._callbacks = this._callbacks || {};
            (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
            return this;
          };

          Emitter.prototype.once = function (event, fn) {
            function on() {
              this.off(event, on);
              fn.apply(this, arguments);
            }

            on.fn = fn;
            this.on(event, on);
            return this;
          };

          Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
            this._callbacks = this._callbacks || {};

            // all:
            if (0 === arguments.length) {
              this._callbacks = {};
              return this;
            }

            // specific event:
            var callbacks = this._callbacks['$' + event];
            if (!callbacks) return this;

            // remove all handlers:
            if (1 == arguments.length) {
              delete this._callbacks['$' + event];
              return this;
            }

            // remove specific handler:
            var cb = undefined;
            for (var i = 0; i < callbacks.length; i++) {
              cb = callbacks[i];
              if (cb === fn || cb.fn === fn) {
                callbacks.splice(i, 1);
                break;
              }
            }
            return this;
          };

          Emitter.prototype.emit = function (event) {
            this._callbacks = this._callbacks || {};
            var args = [].slice.call(arguments, 1);
            var callbacks = this._callbacks['$' + event];

            if (callbacks) {
              callbacks = callbacks.slice(0);
              for (var i = 0, len = callbacks.length; i < len; ++i) {
                callbacks[i].apply(this, args);
              }
            }

            return this;
          };

          Emitter.prototype.listeners = function (event) {
            this._callbacks = this._callbacks || {};
            return this._callbacks['$' + event] || [];
          };

          Emitter.prototype.hasListeners = function (event) {
            return !!this.listeners(event).length;
          };
          return Emitter;
        }

        function cssEase() {
          return {
            'in': 'ease-in',
            'out': 'ease-out',
            'in-out': 'ease-in-out',
            'snap': 'cubic-bezier(0,1,.5,1)',
            'linear': 'cubic-bezier(0.250, 0.250, 0.750, 0.750)',

            'ease-in-quad': 'cubic-bezier(0.550, 0.085, 0.680, 0.530)',
            'ease-out-quad': 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            'ease-in-out-quad': 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',

            'ease-in-cubic': 'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
            'ease-out-cubic': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
            'ease-in-out-cubic': 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',

            'ease-in-quart': 'cubic-bezier(0.895, 0.030, 0.685, 0.220)',
            'ease-out-quart': 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',
            'ease-in-out-quart': 'cubic-bezier(0.770, 0.000, 0.175, 1.000)',

            'ease-in-quint': 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
            'ease-out-quint': 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
            'ease-in-out-quint': 'cubic-bezier(0.860, 0.000, 0.070, 1.000)',

            'ease-in-sine': 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
            'ease-out-sine': 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            'ease-in-out-sine': 'cubic-bezier(0.445, 0.050, 0.550, 0.950)',

            'ease-in-expo': 'cubic-bezier(0.950, 0.050, 0.795, 0.035)',
            'ease-out-expo': 'cubic-bezier(0.190, 1.000, 0.220, 1.000)',
            'ease-in-out-expo': 'cubic-bezier(1.000, 0.000, 0.000, 1.000)',
            'ease-out-in-back': 'cubic-bezier(0,1,1,0)',

            'ease-in-circ': 'cubic-bezier(0.600, 0.040, 0.980, 0.335)',
            'ease-out-circ': 'cubic-bezier(0.075, 0.820, 0.165, 1.000)',
            'ease-in-out-circ': 'cubic-bezier(0.785, 0.135, 0.150, 0.860)',
            'ease-out-in-circ': 'cubic-bezier((0.135, 0.885, 0.860, 0.140)',

            'ease-in-back': 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
            'ease-out-back': 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
            'ease-in-out-back': 'cubic-bezier(0.680, -0.550, 0.265, 1.550)'
          };
        }

        $.extend({
          anim: (function () {

            var Emitter = emitter();

            var query = function query(selector) {
              return document.querySelector(selector);
            };

            var after = yieldsAafterTransition();
            var has3d = hasTranslate3d();
            var ease = cssEase();
            var translate = has3d ? ['translate3d(', ', 0)'] : ['translate(', ')'];
            // module.exports = Anim;
            var style = window.getComputedStyle || window.currentStyle;

            // Initialize a new Anim with the given element:
            function Anim(el) {
              if (!(this instanceof Anim)) return new Anim(el);
              if ('string' == typeof el) el = query(el);
              if (!el) throw new TypeError('Anim must be initialized with element or selector');
              this.el = el;
              this._props = {};
              this._rotate = 0;
              this._transitionProps = [];
              this._transforms = [];
              this.duration(Anim.defaults.duration);
              requestAnimationFrame(Anim);
            }
            Anim.ease = ease;

            Anim.defaults = {
              duration: 500
            };

            // Default element selection used by anim(selector):
            Anim.select = function (selector) {
              return $(selector)[0];
            };

            // Inherit from EventEmitter.prototype:
            Emitter(Anim.prototype);

            // Buffer transform:
            Anim.prototype.transform = function (transform) {
              this._transforms.push(transform);
              return this;
            };

            // Skew x and y:
            Anim.prototype.skew = function (x, y) {
              return this.transform('skew(' + x + 'deg, ' + (y || 0) + 'deg)');
            };

            // Skew x by n:
            Anim.prototype.skewX = function (n) {
              return this.transform('skewX(' + n + 'deg)');
            };

            // Skew y by n:
            Anim.prototype.skewY = function (n) {
              return this.transform('skewY(' + n + 'deg)');
            };

            // Translate x and y axis:
            Anim.prototype.translate = Anim.prototype.to = function (x, y) {
              return this.transform(translate.join('' + x + 'px, ' + (y || 0) + 'px'));
            };

            // Translate on x axis:
            Anim.prototype.translateX = Anim.prototype.x = function (n) {
              return this.transform('translateX(' + n + 'px)');
            };

            // Translate on y axis:
            Anim.prototype.translateY = Anim.prototype.y = function (n) {
              return this.transform('translateY(' + n + 'px)');
            };

            // Scale x and y axis by x, or
            // individually scale x and y:
            Anim.prototype.scale = function (x, y) {
              return this.transform('scale(' + x + ', ' + (y || x) + ')');
            };

            // Scale x axis by n
            Anim.prototype.scaleX = function (n) {
              return this.transform('scaleX(' + n + ')');
            };

            // Scale y axis by n
            Anim.prototype.scaleY = function (n) {
              return this.transform('scaleY(' + n + ')');
            };

            // Define matrix transform:
            Anim.prototype.matrix = function (m11, m12, m21, m22, m31, m32) {
              return this.transform('matrix(' + [m11, m12, m21, m22, m31, m32].join(',') + ')');
            };

            // Rotate n degrees:
            Anim.prototype.rotate = function (n) {
              return this.transform('rotate(' + n + 'deg)');
            };

            // Set transition easing function to fn string.
            // Following shortcuts available:
            // no argument - "ease" is used
            // "in" - "ease-in" is used
            // "out" - "ease-out" is used
            // "in-out" - "ease-in-out" is used
            Anim.prototype.ease = function (fn) {
              fn = ease[fn] || fn || 'ease';
              return this.setVendorProperty('transition-timing-function', fn);
            };

            // Set animation properties:
            Anim.prototype.animate = function (name, props) {
              for (var i in props) {
                if (props.hasOwnProperty(i)) {
                  this.setVendorProperty('animation-' + i, props[i]);
                }
              }
              return this.setVendorProperty('animation-name', name);
            };

            // Set duration to n milliseconds:
            Anim.prototype.duration = function (n) {
              n = this._duration = 'string' == typeof n ? parseFloat(n) * 1000 : n;
              return this.setVendorProperty('transition-duration', n + 'ms');
            };

            // Delay the animation by n milliseconds:
            Anim.prototype.delay = function (n) {
              n = 'string' == typeof n ? parseFloat(n) * 1000 : n;
              return this.setVendorProperty('transition-delay', n + 'ms');
            };

            // Set prop to val, deferred until .end() is invoked:
            Anim.prototype.setProperty = function (prop, val) {
              this._props[prop] = val;
              return this;
            };

            // Set a vendor prefixed prop with the given val:
            Anim.prototype.setVendorProperty = function (prop, val) {
              this.setProperty('-webkit-' + prop, val);
              this.setProperty('-moz-' + prop, val);
              this.setProperty('-ms-' + prop, val);
              return this;
            };

            // Set prop to value, deferred until .end() is invoked
            // and adds the property to the list of transition props:
            Anim.prototype.set = function (prop, val) {
              this.transition(prop);
              this._props[prop] = val;
              return this;
            };

            // ncrement prop by val, deferred until .end() is invoked
            // and adds the property to the list of transition props:
            Anim.prototype.add = function (prop, val) {
              if (!style) return;
              var self = this;
              return this.on('start', function () {
                var curr = parseInt(self.current(prop), 10);
                self.set(prop, curr + val + 'px');
              });
            };

            // Decrement prop by val, deferred until .end() is invoked
            // and adds the property to the list of transition props:
            Anim.prototype.sub = function (prop, val) {
              if (!style) return;
              var self = this;
              return this.on('start', function () {
                var curr = parseInt(self.current(prop), 10);
                self.set(prop, curr - val + 'px');
              });
            };

            // Get computed or "current" value of prop:
            Anim.prototype.current = function (prop) {
              return style(this.el).getPropertyValue(prop);
            };

            // Add prop to the list of internal transition properties:
            Anim.prototype.transition = function (prop) {
              if (!this._transitionProps.indexOf(prop)) return this;
              this._transitionProps.push(prop);
              return this;
            };

            // Commit style properties, aka apply them to
            // the elemenet's style:
            Anim.prototype.applyProperties = function () {
              for (var prop in this._props) {
                this.el.style.setProperty(prop, this._props[prop], '');
              }
              return this;
            };

            // Re-select element via selector, replacing
            // the current element:
            Anim.prototype.anim = Anim.prototype.select = function (selector) {
              this.el = Anim.select(selector);
              return this;
            };

            // Defer the given fn until the animation
            // is complete:
            Anim.prototype.then = function (fn) {

              // Invoke .end():
              if (fn instanceof Anim) {
                this.on('end', function () {
                  fn.run();
                });

                // Callback
              } else if ('function' == typeof fn) {
                  this.on('end', fn);

                  // Chain:
                } else {
                    var clone = new Anim(this.el);
                    clone._transforms = this._transforms.slice(0);
                    this.then(clone);
                    clone.parent = this;
                    return clone;
                  }

              return this;
            };

            // Return parent:
            Anim.prototype.pop = function () {
              return this.parent;
            };

            // Reset duration:
            Anim.prototype.reset = function () {
              this.el.style.webkitTransitionDuration = this.el.style.mozTransitionDuration = this.el.style.msTransitionDuration = this.el.style.oTransitionDuration = '';
              return this;
            };

            Anim.prototype.run = function (fn) {
              var self = this;

              // Emit "start" event:
              this.emit('start');

              // Transforms:
              if (this._transforms.length) {
                this.setVendorProperty('transform', this._transforms.join(' '));
              }

              // Transition properties:
              this.setVendorProperty('transition-properties', this._transitionProps.join(', '));
              this.applyProperties();

              // Callback given:
              if (fn) this.then(fn);

              // Emit "end" when complete:
              after.once(this.el, function () {
                self.reset();
                self.emit('end');
              });

              return this;
            };
            return Anim;
          })()
        });
      });
    }
  };
});
$__System.register('1a', ['3', '1b', '1c'], function (_export) {
  // Truck Widget - Activity Indicator:
  'use strict';

  return {
    setters: [function (_) {}, function (_b) {}, function (_c) {}],
    execute: function () {

      $.fn.extend({
        //===========================
        // Setup activitiy indicator:
        //===========================
        Busy: function Busy(options) {
          var settings = {
            size: 40,
            color: '#666',
            position: false
          };
          $.extend(settings, options);

          var $this = this;
          var spinner = undefined;
          // For iOS:
          var iOSBusy = function iOSBusy() {
            var small = undefined;
            if (parseInt(settings.size, 10) < 30) {
              spinner = '<svg class=\'truck-busy small\' width=\'' + settings.size + 'px\' height=\'' + settings.size + 'px\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\' preserveAspectRatio=\'xMidYMid\'>  <g x=\'0\' y=\'0\' width=\'100\' height=\'100\' fill=\'none\' class=\'bk\'><rect  x=\'46.5\' y=\'40\' width=\'7\' height=\'20\' rx=\'5\' ry=\'5\' fill=\'' + settings.color + '\' transform=\'rotate(0 50 50) translate(0 -30)\'></rect><rect  x=\'46.5\' y=\'40\' width=\'7\' height=\'20\' rx=\'5\' ry=\'5\' fill=\'' + settings.color + '\' transform=\'rotate(45 50 50) translate(0 -30)\'></rect><rect  x=\'46.5\' y=\'40\' width=\'7\' height=\'20\' rx=\'5\' ry=\'5\' fill=\'' + settings.color + '\' transform=\'rotate(90 50 50) translate(0 -30)\'></rect><rect  x=\'46.5\' y=\'40\' width=\'7\' height=\'20\' rx=\'5\' ry=\'5\' fill=\'' + settings.color + '\' transform=\'rotate(135 50 50) translate(0 -30)\'></rect><rect  x=\'46.5\' y=\'40\' width=\'7\' height=\'20\' rx=\'5\' ry=\'5\' fill=\'' + settings.color + '\' transform=\'rotate(180 50 50) translate(0 -30)\'></rect><rect  x=\'46.5\' y=\'40\' width=\'7\' height=\'20\' rx=\'5\' ry=\'5\' fill=\'' + settings.color + '\' transform=\'rotate(225 50 50) translate(0 -30)\'></rect><rect  x=\'46.5\' y=\'40\' width=\'7\' height=\'20\' rx=\'5\' ry=\'5\' fill=\'' + settings.color + '\' transform=\'rotate(270 50 50) translate(0 -30)\'></rect><rect  x=\'46.5\' y=\'40\' width=\'7\' height=\'20\' rx=\'5\' ry=\'5\' fill=\'' + settings.color + '\' transform=\'rotate(315 50 50) translate(0 -30)\'></rect></g></svg>';
              $this.append(spinner);
            } else {
              spinner = '<svg class=\'truck-busy\' width=\'' + settings.size + 'px\' height=\'' + settings.size + 'px\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\' preserveAspectRatio=\'xMidYMid\' class=\'uil-default\'> <g x=\'0\' y=\'0\' width=\'100\' height=\'100\' fill=\'none\'><rect  x=\'46.5\' y=\'40\' width=\'7\' height=\'20\' rx=\'5\' ry=\'5\' fill=\'' + settings.color + '\' transform=\'rotate(0 50 50) translate(0 -30)\'></rect><rect  x=\'46.5\' y=\'40\' width=\'7\' height=\'20\' rx=\'5\' ry=\'5\' fill=\'' + settings.color + '\' transform=\'rotate(30 50 50) translate(0 -30)\'></rect><rect  x=\'46.5\' y=\'40\' width=\'7\' height=\'20\' rx=\'5\' ry=\'5\' fill=\'' + settings.color + '\' transform=\'rotate(60 50 50) translate(0 -30)\'></rect><rect  x=\'46.5\' y=\'40\' width=\'7\' height=\'20\' rx=\'5\' ry=\'5\' fill=\'' + settings.color + '\' transform=\'rotate(90 50 50) translate(0 -30)\'></rect><rect  x=\'46.5\' y=\'40\' width=\'7\' height=\'20\' rx=\'5\' ry=\'5\' fill=\'' + settings.color + '\' transform=\'rotate(120 50 50) translate(0 -30)\'></rect><rect  x=\'46.5\' y=\'40\' width=\'7\' height=\'20\' rx=\'5\' ry=\'5\' fill=\'' + settings.color + '\' transform=\'rotate(150 50 50) translate(0 -30)\'></rect><rect  x=\'46.5\' y=\'40\' width=\'7\' height=\'20\' rx=\'5\' ry=\'5\' fill=\'' + settings.color + '\' transform=\'rotate(180 50 50) translate(0 -30)\'></rect><rect  x=\'46.5\' y=\'40\' width=\'7\' height=\'20\' rx=\'5\' ry=\'5\' fill=\'' + settings.color + '\' transform=\'rotate(210 50 50) translate(0 -30)\'></rect><rect  x=\'46.5\' y=\'40\' width=\'7\' height=\'20\' rx=\'5\' ry=\'5\' fill=\'' + settings.color + '\' transform=\'rotate(240 50 50) translate(0 -30)\'></rect><rect  x=\'46.5\' y=\'40\' width=\'7\' height=\'20\' rx=\'5\' ry=\'5\' fill=\'' + settings.color + '\' transform=\'rotate(270 50 50) translate(0 -30)\'></rect><rect  x=\'46.5\' y=\'40\' width=\'7\' height=\'20\' rx=\'5\' ry=\'5\' fill=\'' + settings.color + '\' transform=\'rotate(300 50 50) translate(0 -30)\'></rect><rect  x=\'46.5\' y=\'40\' width=\'7\' height=\'20\' rx=\'5\' ry=\'5\' fill=\'' + settings.color + '\' transform=\'rotate(330 50 50) translate(0 -30)\'></rect></g></svg>';
              $this.append(spinner);
            }
          };

          // For Android:
          var androidBusy = function androidBusy() {
            settings.id = $.uuid();
            var androidActivityIndicator = null;
            var position = settings.position ? ' ' + settings.position : '';
            if ($.isNativeAndroid) {
              androidActivityIndicator = '<svg class="truck-busy' + position + '" version="1.1" id="' + settings.id + '" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><g><path fill="none" stroke="' + settings.color + '" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M74.2,65c2.7-4.4,4.3-9.5,4.3-15c0-15.7-12.8-28.5-28.5-28.5S21.5,34.3,21.5,50c0,5.5,1.6,10.6,4.3,15"/></g><polyline fill="none" stroke="' + settings.color + '" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="89.4,56.1 74.3,65 65.4,49.9 "/></svg>';

              $this.append(androidActivityIndicator);
              return;
            } else {
              androidActivityIndicator = '<svg id="' + settings.id + '" class="truck-busy' + position + '" x="0px" y="0px" viewBox="0 0 100 100"><circle stroke="url(#SVGID_1_)" cx="50" cy="50" r="28.5"/></svg>';
              $this.append(androidActivityIndicator);
              $this.addClass('hasActivityIndicator');
              if (settings.position) {
                $('#' + settings.id).addClass(settings.position);
              }
              if (options.color) {
                $('#' + settings.id).find('circle').css('stroke', options.color);
              }
            }
            $('#' + settings.id).css({
              'height': settings.size + 'px',
              'width': settings.size + 'px'
            });
            return $('#' + settings.id);
          };

          // For Windows 8/WP8:
          var winBusy = function winBusy() {
            var spinner = $('<progress class="truck-busy"></progress>');
            $(spinner).css({
              'color': settings.color
            });
            $(spinner).attr('role', 'progressbar');
            $(spinner).addClass('win-ring');
            if (settings.position) $(spinner).addClass(settings.position);
            $this.append(spinner);
          };

          // Create Busy control for appropriate OS:
          if ($('body').hasClass('isWindows')) {
            winBusy(options);
          } else if ($('body').hasClass('isAndroid')) {
            androidBusy(options);
          } else if ($('body').hasClass('isiOS')) {
            iOSBusy(options);
          }
        }
      });
    }
  };
});
$__System.register('1d', ['3', '4', '1b'], function (_export) {
  // Truck Widget - Edit List:
  'use strict';

  return {
    setters: [function (_) {}, function (_2) {}, function (_b) {}],
    execute: function () {

      $.extend({
        //=================================
        // Setup an editable list, enabling
        // reording of items and deletion:
        //=================================
        EditList: function EditList(options) {
          /*
            options = {
              editLabel: labelName,
              doneLabel: labelName,
              deleteLabel: labelName,
              cancelLabel: cancelName,
              callback: callback (Tapping "Done" fires this),
              deletable: false (no deletables),
              movable: false (no movables),
              model: myModel,
              modelProp: 'id',
              view: myView
            }
          */
          var settings = {
            editLabel: 'Edit',
            doneLabel: 'Done',
            deleteLabel: 'Delete',
            cancelLabel: 'Cancel',
            callback: $.noop,
            deletable: true,
            movable: true,
            model: undefined,
            modelProp: 'id',
            view: undefined
          };

          var __data = [];
          if (!options) {
            return;
          }
          $.extend(settings, options);
          var __model = settings.model || false;

          if (!settings.deletable && !settings.movable) {
            return;
          }
          var __view = settings.view;

          if (options) $.extend(settings, options);

          var deleteButton = undefined;
          var editButton = undefined;
          var deletionIndicator = undefined;
          var button = undefined;
          var dispelDeletable = 'swiperight';
          var enableDeletable = 'swipeleft';
          var moveUpIndicator = undefined;
          var moveDownIndicator = undefined;
          var element = settings.element;
          var deleteLabel = undefined;

          var dir = $('html').attr('dir');
          dir = dir ? dir.toLowerCase() : '';
          if (dir === 'rtl') {
            dispelDeletable = 'swipeleft';
            enableDeletable = 'swiperight';
          }
          if ($('link[href*=windows]')[0]) {
            deleteLabel = '';
          }

          if (settings.deletable) {
            deleteButton = '<button class="delete">\n        <label>' + settings.deleteLabel + '</label>\n        <svg width="27px" height="30px" viewBox="0 0 27 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n              <g id="delete-icon" fill="#3A3A3A"><g transform="translate(3.000000, 1.000000)">\n                <path d="M1,6 L20,6 L20,24.9986131 C20,26.6562333 18.6639569,28 16.9998779,28 L4.00012207,28 C2.3432004,28 1,26.6569187 1,24.9986131 L1,6 Z M4,9 L5,9 L5,25 L4,25 L4,9 Z M8,9 L9,9 L9,25 L8,25 L8,9 Z M12,9 L13,9 L13,25 L12,25 L12,9 Z M16,9 L17,9 L17,25 L16,25 L16,9 Z" id="can"></path><path d="M0,4.96611425 L0,1.67759301 L5.1776507,1.7511163 L6.482399,0 L14.5847825,0 L15.8789491,1.7511163 L21,1.7511163 L21,4.9447157 L0,4.96611425 L0,4.96611425 Z" id="lid"></path>\n                </g>\n              </g>\n            </g>\n        </svg>\n      </button>';
            deletionIndicator = '<span class="deletion-indicator">\n        <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="deletion-indicator">\n            <g id="ios-indicator">\n              <circle id="ios-circle" fill="#FF0000" cx="10" cy="10" r="10"></circle>\n              <path d="M3.5,10 L16.5,10" id="ios-bar" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square"></path></g><path d="M2,13 L9.9294326,16.8406135 L17.1937075,1.90173332" id="checkmark" stroke="#FA0303" stroke-width="2"></path>\n            </g>\n          </g>\n        </svg>\n      </span>';
            $(element).addClass('deletable');
          }
          if (settings.movable) {
            moveUpIndicator = '<span class=\'move-up\'>\n        <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n            <g id="move-indicator">\n              <circle id="circle" cx="11" cy="11" r="10"></circle>\n              <path d="M4,13.9645823 L10.9316382,5.94630319 L17.795297,13.9073417" id="move-up"></path>\n            </g>\n          </g>\n        </svg>\n      </span>';
            moveDownIndicator = '<span class=\'move-down\'>\n        <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n            <g id="move-indicator">\n              <circle id="circle" cx="11" cy="11" r="10"></circle>\n              <path d="M4.0421421,7.98172087 L10.912246,16 L17.7960071,8.1103389" id="move-down"></path>\n            </g>\n          </g>\n        </svg>\n      </span>';
            $(element).addClass('editable');
          }

          editButton = '<button class="edit">' + settings.editLabel + '</button>';
          var nav = $(element).closest('screen').find('nav');
          nav.append(editButton);
          nav.find('.back').hide();
          nav.prepend('<button class="cancel">' + settings.cancelLabel + '</button>');
          nav.find('.cancel').hide();
          $.AdjustNavbarLayout($(element).closest('screen'));

          button = $(element).closest('screen').find('.edit');
          $(element).find('li').forEach(function (ctx) {
            if (!$(ctx).has('.deletion-indicator').length) {
              if (settings.deletable) {
                $(ctx).prepend(deletionIndicator);
              }
              if (settings.movable) {
                $(ctx).append(moveDownIndicator);
                $(ctx).append(moveUpIndicator);
              }
              if (settings.deletable) {
                $(ctx).append(deleteButton);
              }
            }
          });

          // Callback to setup indicator interactions:
          var setupDeletability = function setupDeletability(callback, list, button) {
            $(function () {

              // Check for view and update its template:
              if (__view) {
                var temp = $('<div></div>');
                temp[0].insertAdjacentHTML('afterbegin', __view.getTemplate());
                temp.find('li').prepend(deletionIndicator);
                temp.find('li').append(moveDownIndicator);
                temp.find('li').append(moveUpIndicator);
                var template = temp.html();
                __view.setTemplate(template);
              }

              button.on('tap', function () {
                var $this = this;

                // When button is in "Edit" state:
                if (this.classList.contains('edit')) {
                  setTimeout(function () {
                    $this.classList.remove('edit');
                    $this.classList.add('done');
                    $($this).text(settings.doneLabel);
                    $(list).addClass('showIndicators');
                    $($this).siblings('.back').hide();
                    $($this).siblings('.cancel').show();
                  });

                  // When button is in "Done" state:
                } else if (this.classList.contains('done')) {
                    // Execute callback if edit was performed:
                    //========================================
                    if ($(list).data('list-edit')) {
                      callback.call(callback, list);
                    }
                    setTimeout(function () {
                      $this.classList.remove('done');
                      $this.classList.add('edit');
                      $($this).text(settings.editLabel);
                      $(list).removeClass('showIndicators');
                      $(list).find('li').removeClass('selected');
                      $($this).siblings('.cancel').hide();
                    });
                    var movedItems = [];
                    $(list).find('li').forEach(function (ctx, idx) {
                      __data.push($(ctx).attr('data-id'));
                    });

                    // Reorder model based on user choice:
                    if (__model) {
                      (function () {
                        var __newarray = [];
                        __data.filter(function (item) {
                          var ret = __model.filter(function (b) {
                            return b[settings.modelProp] === item;
                          });
                          __newarray.push(ret[0]);
                        });
                        __data = [];
                        __model.purge();
                        __model.concat(__newarray, true);
                        __newarray = [];
                      })();
                    }
                  }
                setTimeout(function () {
                  $.AdjustNavbarLayout($(element).closest('screen'));
                });
              });

              // Handle deletion indicators:
              $(list).off('tap', '.deletion-indicator');
              $(list).on('tap', '.deletion-indicator', function () {
                if ($(this).closest('li').hasClass('selected')) {
                  $(this).closest('li').removeClass('selected');
                  return;
                } else {
                  $(this).closest('li').addClass('selected');
                }
              });

              // Handle swipe gestures:
              $(list).on(dispelDeletable, 'li', function () {
                // If no deletables, disable swipes:
                if (!settings.deletable) return;
                // Else reveal delete button:
                $(this).removeClass('selected');
              });

              $(list).on(enableDeletable, 'li', function () {
                // If no deletables, disable swipes:
                if (!settings.deletable) return;
                // Else reveal delete button:
                $(this).addClass('selected');
              });

              // Move list item up:
              $(list).on('tap', '.move-up', function (e) {
                var _this = this;

                var item = $(this).closest('li');
                if (item.is('li:first-child')) {
                  return;
                } else {
                  (function () {
                    // Mark list as edited:
                    $(list).data('list-edit', true);
                    item = $(_this).closest('li');
                    var prev = item.prev();
                    // Clone the items to replace the
                    // transitioned ones alter:
                    var itemClone = item.clone();
                    var prevClone = prev.clone();
                    var height = item[0].offsetHeight;
                    item.css({
                      "-webkit-transform": 'translate3d(0,-' + height + 'px,0)',
                      "transform": 'translate3d(0,-' + height + 'px,0)'
                    });

                    prev.css({
                      "-webkit-transform": 'translate3d(0,' + height + 'px,0)',
                      "transform": 'translate3d(0,' + height + 'px,0)'
                    });
                    setTimeout(function () {
                      $.replace(prevClone, item);
                      $.replace(itemClone, prev);
                    }, 250);
                  })();
                }
              });

              // Move list item down:
              $(list).on('tap', '.move-down', function (e) {
                var item = $(this).closest('li');
                var next = item.next();
                if (item.is('li:last-child')) {
                  return;
                } else {
                  (function () {
                    // Clone the items to replace the
                    // transitioned ones alter:
                    var itemClone = item.clone();
                    var nextClone = next.clone();
                    // Mark list as edited:
                    $(list).data('list-edit', true);

                    var height = item[0].offsetHeight;
                    item.css({
                      '-webkit-transform': 'translate3d(0,' + height + 'px,0)',
                      transform: 'translate3d(0,' + height + 'px,0)'
                    });
                    next.css({
                      "-webkit-transform": 'translate3d(0,-' + height + 'px,0)',
                      "transform": 'translate3d(0,-' + height + 'px,0)'
                    });
                    setTimeout(function () {
                      $.replace(nextClone, item);
                      $.replace(itemClone, next);
                    }, 250);
                  })();
                }
              });

              // Handle deletion of list item:
              $(list).on('tap', '.delete', function () {
                var $this = this;
                var listItem = $(this).parent();

                // Mark list as edited:
                $(list).data('list-edit', true);
                var direction = '-1200%';
                if ($('html').attr('dir') === 'rtl') direction = '1000%';
                $(this).siblings().css({
                  '-webkit-transform': 'translate3d(' + direction + ',0,0)',
                  '-webkit-transition': 'all 1s ease-out',
                  'transform': 'translate3d(' + direction + ',0,0)',
                  'transition': 'all 1s ease-out'
                });

                setTimeout(function () {
                  listItem.remove();
                }, 500);
              });

              // Cancel edits:
              nav.find('.cancel').on('tap', function () {
                nav.find('.back').show();
                $(this).hide();
                __view.render();
                nav.find('.done').addClass('edit').removeClass('done');
                $(list).removeClass('showIndicators');
                $(list).find('li').removeClass('selected');
                $(this).hide();
              });
            });
          };
          // Initialize the editable list:
          setupDeletability(settings.callback, element, button);

          return {
            getModel: function getModel() {
              return __model;
            },

            getView: function getView() {
              return __view;
            }
          };
        }
      });
    }
  };
});
$__System.register('1e', ['3', '4', '1b'], function (_export) {
  // Truck Widget - Select List:
  'use strict';

  return {
    setters: [function (_) {}, function (_2) {}, function (_b) {}],
    execute: function () {

      $.extend({
        //=====================
        // Setup a select list:
        //=====================
        SelectList: function SelectList(options) {
          if (!options || !options.element) return;
          var settings = {
            element: undefined,
            selected: undefined,
            name: $.uuid(),
            callback: $.noop,
            model: undefined
          };
          var __selection = {};

          $.extend(settings, options);
          var name = settings.name;
          var list = $(settings.element);
          list.addClass('select-list');
          list.find('li').forEach(function (ctx, idx) {
            var value = ctx.getAttribute("data-select") !== null ? ctx.getAttribute("data-select") : "";
            ctx.setAttribute('role', 'radio');
            $(ctx).removeClass('selected').find('input').removeAttr('checked');
            $(ctx).append('<span class="selection-indicator"><svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="selection-indicator"><path d="M2,13 L9.9294326,16.8406135 L17.1937075,1.90173332" id="checkmark" stroke="#007AFF" stroke-width="2"></path><circle id="outer-circle" stroke="#007AFF" stroke-width="2" cx="10" cy="10" r="9"></circle><circle id="inner-circle" fill="#007AFF" cx="10" cy="10" r="4"></circle></g></g></svg></span>');
            if (settings.selected === idx) {
              ctx.setAttribute('aria-checked', 'true');
              ctx.classList.add('selected');
              if (!$(ctx).find('input')[0]) {
                $(ctx).append('<input type="radio" checked="checked" name="' + name + '" value="' + value + '">');
              } else {
                $(ctx).find('input').prop('checked', true).attr('value', value);
              }
              __selection = {
                index: settings.selected,
                value: value
              };
            } else {
              if (!$(ctx).find('input')[0]) {
                $(ctx).append('<input type="radio" name="' + name + '" value="' + value + '">');
              }
            }
          });
          list.on('tap', 'li', function () {
            var item = $(this);
            __selection = {
              index: item.index(),
              value: item.find('input').val()
            };
            item.siblings('li').removeClass('selected');
            item.siblings('li').removeAttr('aria-checked');
            item.siblings('li').find('input').removeProp('checked');
            item.addClass('selected');
            item.attr('aria-checked', true);
            item.find('input').prop('checked', true);
            settings.callback.apply(this, arguments);
          });

          return {
            getSelection: function getSelection() {
              return __selection;
            }
          };
        }
      });
    }
  };
});
$__System.register("1f", ["3", "20", "21"], function (_export) {
  var _createClass, _classCallCheck, Stack;

  return {
    setters: [function (_3) {}, function (_) {
      _createClass = _["default"];
    }, function (_2) {
      _classCallCheck = _2["default"];
    }],
    execute: function () {
      // Truck Module - Stack:
      "use strict";

      Stack = (function () {
        function Stack(array) {
          _classCallCheck(this, Stack);

          this.data = [];
          if (array && Array.isArray(array)) {
            var i = -1;
            var len = array.length;
            while (++i < len) {
              this.data[i] = array[i];
            }
          } else if (array) {
            var arr = Array.prototype.slice.apply(arguments);
            arr.forEach(function (ctx, idx) {
              this.data[idx] = ctx;
            });
          }
        }

        _createClass(Stack, [{
          key: "size",
          value: function size() {
            return this.data.length;
          }
        }, {
          key: "push",
          value: function push(data) {
            this.data.push(data);
          }
        }, {
          key: "pop",
          value: function pop() {
            return this.data.pop();
          }
        }, {
          key: "eq",
          value: function eq(index) {
            if (index < 0) {
              return this.data[this.data.length + index];
            } else {
              return this.data[index];
            }
          }
        }, {
          key: "forEach",
          value: function forEach(callback) {
            var value = undefined;
            var i = 0;
            var len = this.data.length;
            for (; i < len; i++) {
              value = callback.call(this.data[i], this.data[i], i);
              if (value === false) {
                break;
              }
            }
          }
        }, {
          key: "each",
          value: function each(callback) {
            var value = undefined;
            var i = 0;
            var len = this.data.length;
            for (; i < len; i++) {
              value = callback.call(this.data[i], i, this.data[i]);
              if (value === false) {
                break;
              }
            }
          }
        }, {
          key: "shift",
          value: function shift() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            return this.data.shift.apply(this.data, args);
          }
        }, {
          key: "unshift",
          value: function unshift() {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            this.data.unshift.apply(this.data, args);
          }
        }, {
          key: "slice",
          value: function slice() {
            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }

            return this.data.slice.apply(this.data, args);
          }
        }, {
          key: "splice",
          value: function splice() {
            for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = arguments[_key4];
            }

            this.data.splice.apply(this.data, args);
          }
        }, {
          key: "sort",
          value: function sort() {
            for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              args[_key5] = arguments[_key5];
            }

            this.data.sort(args);
          }
        }, {
          key: "sortBy",
          value: function sortBy() {
            for (var _len6 = arguments.length, props = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
              props[_key6] = arguments[_key6];
            }

            var args = [];
            var orderBy = function orderBy() {
              return function (a, b) {
                var sortByProperty = function sortByProperty(property) {
                  var sortOrder = 1;
                  if (property[0] === "-") {
                    sortOrder = -1;
                    property = property.substr(1);
                  }
                  return function (a, b) {
                    var result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
                    return result * sortOrder;
                  };
                };
                var i = 0;
                var result = 0;
                var numberOfProperties = props.length;
                while (result === 0 && i < numberOfProperties) {
                  result = sortByProperty(props[i])(a, b);
                  i++;
                }
                return result;
              };
            };
            this.data.sort(__orderBy.apply(null, args));
            this[0] = this.data[0];
            return this;
          }
        }, {
          key: "filter",
          value: function filter() {
            for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
              args[_key7] = arguments[_key7];
            }

            return this.data.filter.apply(this.data, args);
          }
        }, {
          key: "map",
          value: function map() {
            for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
              args[_key8] = arguments[_key8];
            }

            return this.data.map.apply(this.data, args);
          }
        }, {
          key: "join",
          value: function join(separator) {
            return this.data.join(separator);
          }
        }, {
          key: "concat",
          value: function concat(object) {
            if (Array.isArray(object)) {
              this.data.push.apply(this.data, object);
            }
          }
        }, {
          key: "reverse",
          value: function reverse() {
            for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
              args[_key9] = arguments[_key9];
            }

            this.data.reverse.apply(this.data, args);
          }
        }, {
          key: "indexOf",
          value: function indexOf() {
            for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
              args[_key10] = arguments[_key10];
            }

            return this.data.indexOf.apply(this.array, args);
          }
        }, {
          key: "every",
          value: function every() {
            for (var _len11 = arguments.length, args = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
              args[_key11] = arguments[_key11];
            }

            return this.data.every.apply(this.data, args);
          }
        }, {
          key: "some",
          value: function some() {
            for (var _len12 = arguments.length, args = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
              args[_key12] = arguments[_key12];
            }

            return this.data.some.apply(this.data, arguments);
          }
        }, {
          key: "unique",
          value: function unique() {
            var len = this.data.length;
            var ret = [];
            var obj = {};

            for (var i = 0; i < len; i++) {
              var arrayItem = JSON.stringify(this.data[i]);
              var arrayItemValue = this.data[i];
              if (obj[arrayItem] === undefined) {
                ret.push(arrayItemValue);
                obj[arrayItem] = 1;
              } else {
                obj[arrayItem]++;
              }
            }
            this.data = ret;
          }
        }, {
          key: "purge",
          value: function purge() {
            this.data = [];
          }
        }, {
          key: "getData",
          value: function getData() {
            return this.data;
          }
        }]);

        return Stack;
      })();

      _export("Stack", Stack);

      $.extend({
        Stack: Stack
      });
    }
  };
});
$__System.register('22', ['3', '4', '1b', '1f'], function (_export) {
  // Truck Widget - Multi-Select List:
  'use strict';

  return {
    setters: [function (_) {}, function (_2) {}, function (_b) {}, function (_f) {}],
    execute: function () {

      $.extend({
        //===========================
        // Setup a multi-select list:
        //===========================
        MultiSelectList: function MultiSelectList(options) {
          if (!options || !options.element) return;
          var settings = {
            element: undefined,
            selected: [],
            name: $.uuid(),
            callback: $.noop,
            model: undefined
          };
          var __selection = new $.Stack();
          $.extend(settings, options);
          var selections = settings.selected;
          var name = settings.name;
          var list = $(settings.element);
          list.addClass('multi-select-list');
          list.find('li').forEach(function (ctx, idx) {
            var value = ctx.getAttribute("data-select") !== null ? ctx.getAttribute("data-select") : "";
            selections.forEach(function (item) {
              if (item.index === idx) {
                __selection.push({
                  index: idx,
                  value: value
                });
              }
            });

            ctx.setAttribute('role', 'checkbox');
            $(ctx).removeClass('selected').find('input').removeAttr('checked');
            $(ctx).prepend('<span class="multi-selection-indicator"><svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="multi-select-icon" stroke="#979797"><g id="multi-select-circle-+-mulit-select-checkmark" transform="translate(2.000000, 2.000000)"><circle id="multi-select-circle" cx="13" cy="13" r="13"></circle><path d="M4.71521456,15.9877529 L13.0000002,20.7028494 L19.977049,5.70284941" id="mulit-select-checkmark"></path></g></g></g></svg></span>');
            $(ctx).append('<input type="checkbox" name="' + name + '" value="' + value + '">');
            if (selections.length) {
              selections.forEach(function (sel) {
                if (sel === idx) {
                  ctx.setAttribute('aria-checked', 'true');
                  ctx.classList.add('selected');
                  $(ctx).find('input').prop('checked', true).attr('value', value);
                  __selection.push({
                    index: sel,
                    value: value
                  });
                }
              });
            }
          });

          list.on('tap', 'li', function () {
            var _this = this,
                _arguments = arguments;

            var item = $(this);
            if (item.hasClass('selected')) {
              (function () {
                item.removeClass('selected').removeAttr('aria-checked');
                item.find('input').removeProp('checked');
                var dataObj = {
                  index: item.index(),
                  value: item.attr('data-select')
                };
                var pos = undefined;
                __selection.forEach(function (item, idx) {
                  if (item.index === dataObj.index && item.value === dataObj.value) {
                    pos = idx;
                  }
                });
                __selection.splice(pos, 1);

                settings.callback.apply(_this, _arguments);
              })();
            } else {
              __selection.push({
                index: item.index(),
                value: item.attr('data-select')
              });
              __selection.unique();
              item.addClass('selected');
              item.attr('aria-checked', true);
              item.find('input').prop('checked', true);

              settings.callback.apply(this, arguments);
            }
          });

          return {
            getSelection: function getSelection() {
              return __selection.getData();
            }
          };
        }
      });
    }
  };
});
$__System.register('23', ['3', '1b'], function (_export) {
  // Truck Widget - Paging:
  'use strict';

  return {
    setters: [function (_) {}, function (_b) {}],
    execute: function () {

      $.extend({
        //========================
        // Setup a paging control:
        //========================
        Paging: function Paging(options) {
          if (!options || !options.element) return;
          var screen = $(options.element);
          var pager = '<div class="pager">\n\
    <button class="previous">\n\
      <svg width="24px" height="36px" viewBox="0 0 24 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="pagination-icons" stroke="#979797"><path d="M19.7729197,3 L4.25431067,17.8699971 L19.7729196,32.9558941" id="page-previous"></path></g></g></svg>\n\
    </button>\n\
    <button class="next">\n\
      <svg width="24px" height="36px" viewBox="0 0 24 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="pagination-icons" stroke="#979797"><path d="M4.08862955,3.06871359 L20.0261609,18.0528447 L4.08862956,32.9999994" id="page-next"></path></g></g></svg>\n\
    </button>\n\
    </div>';

          $(screen).find('nav').append(pager);

          var currentSection = $(screen).find('section');

          var articles = function articles() {
            return currentSection.find('article').length;
          };
          $.AdjustNavbarLayout(screen);

          // Handle paging forward:
          var pageForward = function pageForward(pagerButton) {
            if (articles() < 2) return;
            pagerButton.prev().removeClass('selected');
            pagerButton.addClass('selected');
            var currentArticle;
            if (pagerButton[0] && pagerButton[0].classList.contains('disabled')) return;
            currentArticle = currentSection.find('article.current');
            if (currentArticle.index() === articles() - 1) {
              // start again!
              currentArticle.removeClass('current').addClass('next');
              currentArticle.siblings().removeClass('previous').addClass('next');
              currentSection.find('article').eq(0).addClass('current').removeClass('previous').removeClass('next');
            } else {
              currentArticle.removeClass('current').addClass('previous');
              currentArticle.next().removeClass('next').addClass('current');
            }
            setTimeout(function () {
              pagerButton.removeClass('selected');
            }, 250);
          };

          var pageBack = function pageBack(pagerButton) {
            if (articles() === 1) return;
            pagerButton.next().removeClass('selected');
            pagerButton.addClass('selected');
            var currentArticle;
            currentArticle = currentSection.find('article.current');

            if (currentArticle.index() === 0) {
              currentArticle.removeClass('current');
              currentArticle.siblings().eq(-1).addClass('current').removeClass('next');
              currentArticle.siblings().eq(-1).siblings().removeClass('next').addClass('previous');
            } else {
              currentArticle.removeClass('current').addClass('next');
              currentArticle.prev().removeClass('previous').addClass('current');
            }
            setTimeout(function () {
              pagerButton.removeClass('selected');
            }, 250);
          };

          $('.pager').on($.eventStart, 'button:last-of-type', function () {
            pageForward($(undefined));
          });
          $('.pager').on($.eventStart, 'button:first-of-type', function () {
            pageBack($(undefined));
          });
        }
      });
    }
  };
});
$__System.register('24', ['3', '1b', '1c'], function (_export) {
  // Truck Widget - Popover:
  'use strict';

  return {
    setters: [function (_) {}, function (_b) {}, function (_c) {}],
    execute: function () {

      $.extend({
        //=================================
        // Setup a popover (dropdown menu):
        //=================================
        Popover: function Popover(options) {
          /*
            id: myUniqueID,
            title: 'Great',
            callback: myCallback,
          */
          options = options || {};
          var settings = {
            id: $.uuid(),
            callback: $.noop,
            title: ''
          };
          $.extend(settings, options);
          if (options && options.content) {
            settings.content = options.content;
          } else {
            settings.content = '';
          }
          var header = '<header><h1>' + settings.title + '</h1></header>';
          var popover = '<div class="popover" id="' + settings.id + '">' + header + '<section></section></div>';
          var popoverID = '#' + settings.id;

          // Calculate position of popover relative to the button that opened it:
          var __calcPopPos = function __calcPopPos(element) {
            var offset = $(element).offset();
            var left = offset.left;
            var calcLeft = undefined;
            var calcTop = undefined;
            var popover = $(popoverID);
            var popoverOffset = popover.offset();
            calcLeft = popoverOffset.left;
            calcTop = offset.top + $(element)[0].clientHeight;
            if (popover.width() + offset.left > window.innerWidth) {
              popover.css({
                'left': window.innerWidth - popover.width() - 20 + 'px',
                'top': calcTop + 25 + 'px'
              });
            } else {
              popover.css({
                'left': left + 'px',
                'top': calcTop - 30 + 'px'
              });
            }
          };

          if ($('.mask')[0]) {
            $.ClosePopover();
            $('body').Unblock();
            return;
          }
          $.Block('.5');
          $('body').append(popover);
          if ($('body').hasClass('isAndroid')) {
            setTimeout(function () {
              $(popoverID).addClass('opened');
            }, 300);
          }
          if ($('body').hasClass('isWindows')) {
            $(popoverID).addClass('open');
          }
          $(popoverID).data('triggerEl', settings.trigger);
          $(popoverID).find('section').append(settings.content);
          settings.callback.call(settings.callback, settings.trigger);
          __calcPopPos(settings.trigger);
        },

        AlignPopover: function AlignPopover() {
          var popover = $('.popover');
          if (!popover.length) return;
          var triggerID = popover.data('triggerEl');
          var offset = $(triggerID).offset();
          var left = offset.left;
          if ($(popover).width() + offset.left > window.innerWidth) {
            popover.css({
              'left': window.innerWidth - $(popover).width() - 20 + 'px'
            });
          } else {
            popover.css({
              'left': left + 'px'
            });
          }
        },

        ClosePopover: function ClosePopover() {
          $.Unblock();
          $('.popover').css('visibility', 'hidden');
          setTimeout(function () {
            $('.popover').off();
            $('.popover').remove();
          }, 10);
        }
      });

      $(function () {
        /////////////////////////////////////////////////
        // Reposition popovers on window resize:
        /////////////////////////////////////////////////
        window.onresize = function () {
          $.AlignPopover();
        };
        var events = "$.eventStart singletap $.eventEnd";
        $('body').on(events, '.mask', function (e) {
          if (!$('.popover')[0]) {
            if (e && e.nodeType === 1) return;
            // e.stopPropogation();
          } else {
              $.ClosePopover();
            }
        });
      });
    }
  };
});
$__System.register('1c', ['3', '1b'], function (_export) {
  // Truck Widget - Screen Blocker:
  'use strict';

  return {
    setters: [function (_) {}, function (_b) {}],
    execute: function () {

      $.extend({

        //==============
        // Cover screen:
        //==============
        Block: function Block(opacity) {
          opacity = opacity ? ' style=\'opacity:' + opacity + ';\'' : ' style=\'opacity: .5;\'';
          if ($('.mask')[0]) return;
          $('body').append('<div class=\'mask\'' + opacity + '></div>');
          $('screen.current').attr('aria-hidden', true);
        },

        //================
        // Uncover screen:
        //================
        Unblock: function Unblock() {
          $('.mask').remove();
          $('screen.current').removeAttr('aria-hidden');
        }
      });
    }
  };
});
$__System.register('25', ['3', '1b', '1c'], function (_export) {
  // Truck Widget - Popup:
  'use strict';

  return {
    setters: [function (_) {}, function (_b) {}, function (_c) {}],
    execute: function () {

      $.extend({
        //=======================
        // Setup  a popup dialog:
        //=======================
        Popup: function Popup(options) {
          /*
          options {
            id: 'alertID',
            title: 'Alert',
            message: 'This is a message from me to you.',
            cancelButton: 'Cancel',
            continueButton: 'Go Ahead',
            width: '100px',
            callback: function() { // do something },
            empty: true
          }
          */
          if (!options) return;
          var settings = {};
          settings.id = $.uuid();
          settings.content = true;
          $.extend(settings, options);
          var width = '';
          if (settings.width) {
            width = 'style="width:' + settings.width + 'px;"';
          }

          var id = settings.id;
          var title = settings.title ? '<header><h1>' + settings.title + '</h1></header>' : '';
          var message = settings.message ? '<p role="note">' + options.message + '</p>' : '';
          var cancelButton = options.cancelButton ? '<button class="cancel" role="button">' + settings.cancelButton + '</button>' : '';
          var continueButton = settings.continueButton ? '<button class="continue" role="button">' + settings.continueButton + '</button>' : '';
          var callback = settings.callback || $.noop;
          var popup = undefined;
          if (settings.empty) {
            popup = '<div ' + width + ' class="popup closed" role="alertdialog" id="' + id + '"></div>';
          } else {
            popup = '<div class="popup closed" role="alertdialog" id="' + id + '"><div class="panel">' + title + message + '</div><footer>' + cancelButton + continueButton + '</footer></div>';
          }

          $('body').append(popup);
          if (callback && continueButton) {
            $('.popup').find('.continue').on($.eventStart, function () {
              var $this = $(this);
              if ($.isAndroid || $.isChrome) {
                $this.addClass('selected');
                setTimeout(function () {
                  $this.removeClass('selected');
                  $('.popup').ClosePopup();
                  callback.call(callback);
                }, 300);
              } else {
                $('.popup').ClosePopup();
                callback.call(callback);
              }
            });
            $('.popup').find('.cancel').on($.eventStart, function () {
              var $this = $(this);
              if ($.isAndroid || $.isChrome) {
                $this.addClass('selected');
                setTimeout(function () {
                  $this.removeClass('selected');
                  $('.popup').ClosePopup();
                }, 300);
              } else {
                $('.popup').ClosePopup();
              }
            });
          }

          $.CenterPopup();
          var events = $.eventStart + ' tap ' + $.eventEnd;
          $('.mask').on(events, function (e) {
            e.stopPropagation();
          });
        },

        // Hanle Orientation Change:
        //==========================
        CenterPopup: function CenterPopup() {
          var popup = $('.popup');
          if (!popup[0]) return;
          var tmpTop = window.innerHeight / 2 + window.pageYOffset - popup[0].clientHeight / 2 + 'px';
          var tmpLeft = undefined;
          if (window.innerWidth === 320) {
            tmpLeft = '10px';
          } else {
            tmpLeft = Math.floor((window.innerWidth - popup[0].clientWidth) / 2) + 'px';
          }
          if ($('body').hasClass('isWindows')) {
            popup.css({
              top: tmpTop
            });
          } else {
            popup.css({
              left: tmpLeft,
              top: tmpTop
            });
          }
        }
      });
      $.fn.extend({
        // Show Popup:
        //============
        ShowPopup: function ShowPopup() {
          $.Block('0.5');
          $(this).removeClass('closed');
          $(this).addClass('opened');
          $.CenterPopup();
        },

        // Close Popup:
        //=============
        ClosePopup: function ClosePopup() {
          $.Unblock();
          $(this).removeClass('opened');
          $(this).addClass('closed');
        }
      });

      // Reposition popups on window resize:
      //====================================
      $(function () {
        window.onresize = function () {
          $.CenterPopup();
        };
      });
    }
  };
});
$__System.register('26', ['3', '1b'], function (_export) {
  // Truck Widget - Range Input:
  'use strict';

  return {
    setters: [function (_) {}, function (_b) {}],
    execute: function () {

      $.fn.extend({
        //=====================
        // Setup a range input:
        //=====================
        Range: function Range() {
          if ($('body').hasClass('isWindows')) return;
          if (this[0].nodeName !== 'INPUT') return;
          var input = $(this);
          var newPlace = undefined;
          var width = input.width();
          var newPoint = (input.val() - input.attr("min")) / (input.attr("max") - input.attr("min"));
          var offset = -1.3;
          if (newPoint < 0) {
            newPlace = 0;
          } else if (newPoint > 1) {
            newPlace = width;
          } else {
            newPlace = width * newPoint + offset;
            offset -= newPoint;
          }
          if ($('body').hasClass('isAndroid') || $.isChrome) input.css({
            'background-size': Math.round(newPlace) + 'px 3px, 100% 3px'
          });else input.css({
            'background-size': Math.round(newPlace) + 'px 10px'
          });
        }
      });
      $(function () {
        $('input[type=range]').forEach(function (ctx) {
          $(ctx).Range();
        });
        $('body').on('input', 'input[type=range]', function () {
          $(this).Range();
        });
      });
    }
  };
});
$__System.register('27', ['3', '1b'], function (_export) {
  // Truck Widget - Segmented Buttons:
  'use strict';

  return {
    setters: [function (_) {}, function (_b) {}],
    execute: function () {

      $(function () {
        $.extend({
          //==========================
          // Setup a segmented button:
          //==========================
          Segmented: function Segmented(options) {
            if (!options || !options.element) return;
            /* 
              options = {
                element: '#segmentHolder'
                labels : ['first','second','third'],
                selected: 0,
                callback: function() { alert('Boring!'); }
              }
            */
            var settings = {
              selected: 0,
              callback: $.noop
            };
            $.extend(settings, options);

            var segmented = undefined;
            var labels = settings.labels ? settings.labels : [];
            var __selection = undefined;
            var __element = settings.element;

            function createSegmentedButton() {
              var __segmented = ['<div class="segmented">'];
              labels.forEach(function (ctx, idx) {
                if (settings.selected === idx) {
                  __segmented.push('<button role="radio" aria-checked="true" class="selected">');
                  __selection = idx;
                } else {
                  __segmented.push('<button role="radio">');
                }

                __segmented.push(ctx);
                __segmented.push('</button>');
              });
              __segmented.push('</div>');
              segmented = __segmented.join('');
              $(settings.element).append(segmented);
            }
            createSegmentedButton();

            var callback = settings.callback;
            $(__element).on('tap', '.segmented > button', function (e) {
              var $this = $(this);
              if (this.parentNode.classList.contains('paging')) return;
              $this.siblings('button').removeClass('selected');
              $this.siblings('button').removeAttr('aria-checked');
              $this.addClass('selected');
              __selection = $this.index();
              __element = $(this);
              $this.attr('aria-checked', true);
              callback.call(this, e);
            });

            return {
              getSelection: function getSelection() {
                return {
                  index: __selection,
                  element: __element
                };
              }
            };
          }
        });
      });
    }
  };
});
$__System.register('28', ['3', '1b'], function (_export) {
  // Truck Widget - Sheets:
  'use strict';

  return {
    setters: [function (_) {}, function (_b) {}],
    execute: function () {

      $.extend({
        //========================
        // Create a sliding sheet:
        //========================
        Sheet: function Sheet(options) {
          /*
            var options {
              id : 'starTrek',
              background: 'transparent',
              handle: false,
              slideDown: false // default is slideUp
            }
          */
          if (!options) return;
          var settings = {
            id: $.uuid(),
            background: '',
            handle: true,
            slideDown: false
          };

          $.extend(settings, options);

          if (settings.background) settings.background = ' style="background-color:' + settings.background + '" ';
          if (settings.slideDown) settings.slideDown = ' class="slideDown" ';
          if (settings.handle === false) settings.handle = '';else settings.handle = '<div class="handle"><span><svg width="100%" height="100%" viewBox="0 0 76 27" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:butt;stroke-linejoin:butt;stroke-miterlimit:1.41421;"><g id="sheet-handle" transform="matrix(1,0,0,1,-29.7966,-15.7797)"><path id="sheet-handle-path" d="M36.25,26.242L67.645,34.215L98.176,25.789" style="fill:none;"/></g></svg></span></div>';

          var sheet = '<sheet id="' + settings.id + '"' + settings.slideDown + settings.background + '>' + settings.handle + '<section></section></sheet>';

          $('body').append(sheet);

          $('#' + settings.id).find('.handle').on($.eventStart, function () {
            $.HideSheet('#' + settings.id);
          });
        },
        ShowSheet: function ShowSheet(id) {
          var sheet = id ? id : '.sheet';
          $('screen.current').addClass('blurred');
          if ($.isAndroid || $.isChrome) {
            $(sheet).css('display', 'block');
            setTimeout(function () {
              $(sheet).addClass('opened');
            }, 20);
          } else {
            $(sheet).addClass('opened');
          }
        },
        HideSheet: function HideSheet(id) {
          $(id).removeClass('opened');
          $('screen.current').addClass('removeBlurSlow');
          setTimeout(function () {
            $('screen').removeClass('blurred');
            $('screen').removeClass('removeBlurSlow');
          }, 500);
        }
      });
    }
  };
});
$__System.register('29', ['3', '1b', '2a'], function (_export) {
  // Truck Widget - Slide Out Menu:
  'use strict';

  return {
    setters: [function (_) {}, function (_b) {}, function (_a) {}],
    execute: function () {

      $.extend({
        //========================
        // Setup a slide out menu:
        //========================
        SlideOut: function SlideOut() {
          var slideoutID = $.uuid();
          var buttonID = $.uuid();
          var slideOutButton = $('<button id="' + buttonID + '" class="slide-out-button"></button>');
          var slideOut = '<slideout id="' + slideoutID + '"><section></section></slideout>';
          $('body').prepend(slideOut);
          $('body').append(slideOutButton);
          // Get Slide Out & Slide Out button:
          var slideout = $('#' + slideoutID);
          var slideOutBtn = $('#' + buttonID);

          // Set up state for Slide Out and screens:
          slideout.attr('aria-hidden', true);
          $("screens").attr('aria-hidden', true);
          $("screens").eq(0).addClass('show').attr('aria-hidden', "false");

          // Handle Slide Out button events:
          slideOutBtn.on('tap', function () {
            $(this).toggleClass('focused');
            if (slideout.hasClass('open')) {
              slideout.removeClass('open');
              slideout.removeAttr('aria-hidden');
              $('button.back').removeClass('disabled').removeProp('disabled');
              $('button.backTo').removeClass('disabled').removeProp('disabled');
            } else {
              slideout.addClass('open');
              slideout.attr('aria-hidden', true);
              $('button.back').addClass('disabled').prop('disabled', true);
              $('button.backTo').addClass('disabled').prop('disabled', true);
            }
          });

          $('#' + slideoutID).on('tap', 'li', function () {
            var menuItems = slideout.find('li[data-show]');
            slideout.attr('aria-hidden', 'true');

            // Toggle Slide Out button:
            slideOutBtn.toggleClass('focused');

            $('button.back').removeClass('disabled').removeProp('disabled');
            $('button.backTo').removeClass('disabled').removeProp('disabled');

            // This list item shows a single screen:
            menuItems.hazClass('selected').removeClass('selected');
            $.screens.hazClass('show').removeClass('show').attr('aria-hidden', true);
            var screenToShow = $(this).attr('data-show');
            $('#' + screenToShow.split(':')[0]).addClass('show').attr('aria-hidden', false);
            $('screen.current').addClass('next').removeClass('current');
            $('screen.previous').addClass('next').removeClass('previous');
            // Get route to dispatch:
            $.Router.dispatch(screenToShow);

            // Close slide out:
            slideout.removeClass('open');
          });

          return {
            populate: function populate(options) {
              var slideout = $('#' + slideoutID);
              if (!slideout[0]) return;
              if (!options) {
                return;
              } else {
                (function () {
                  slideout.find('section').append('<ul class="list"></ul>');
                  var list = slideout.find('ul');
                  options.forEach(function (ctx) {
                    for (var key in ctx) {
                      if (key === 'header') {
                        list.append('<li class="menu-header"><h2>' + ctx[key] + '</h2></li>');
                      } else {
                        list.append('<li data-show="' + key + '"><h3>' + ctx[key] + '</h3></li>');
                      }
                    }
                  });
                  slideout.find('li').eq(0).addClass('selected');
                })();
              }
            }
          };
        }
      });
    }
  };
});
$__System.register('2b', ['3', '1b'], function (_export) {
  // Truck Widget - Stepper:
  'use strict';

  return {
    setters: [function (_) {}, function (_b) {}],
    execute: function () {

      $.extend({
        //==================
        // Create a stepper:
        //==================
        Stepper: function Stepper(options) {
          if (!options) return;
          if (!options.element) return;
          if (!options.min) return;
          if (!options.max) return;

          var stepper = $(options.element);
          var min = options.min;
          var max = options.max;
          var defaultValue = options.defaultValue ? options.defaultValue : options.min;
          var increaseSymbol = '+';
          var decreaseSymbol = '-';
          if ($.isWin) {
            increaseSymbol = '';
            decreaseSymbol = '';
          }
          var decreaseButton = '<button class="decrease"><span>-</span></button>';
          var label = '<label>' + defaultValue + '</label><input type="text" value="' + defaultValue + '">';
          var increaseButton = '<button class="increase"><span>+</span></button>';
          stepper.append(decreaseButton + label + increaseButton);
          stepper.data('data-value', {
            min: min,
            max: max,
            defaultValue: defaultValue
          });

          var increaseStepperValue = function increaseStepperValue() {
            var currentValue = stepper.find('input').val();
            var value = stepper.data('data-value');
            var max = value.max;
            var newValue = undefined;
            if (currentValue >= max) {
              $(this).addClass('disabled');
            } else {
              newValue = Number(currentValue) + 1;
              stepper.find('button:first-of-type').removeClass('disabled');
              stepper.find('label').text(newValue);
              stepper.find('input')[0].value = newValue;
              if (currentValue === max) {
                $(this).addClass('disabled');
              }
            }
          };

          var decreaseStepperValue = function decreaseStepperValue() {
            var currentValue = stepper.find('input').val();
            var value = stepper.data('data-value');
            var min = value.min;
            var newValue = undefined;
            if (currentValue <= min) {
              $(this).addClass('disabled');
            } else {
              newValue = Number(currentValue) - 1;
              stepper.find('button:last-of-type').removeClass('disabled');
              stepper.find('label').text(newValue);
              stepper.find('input')[0].value = newValue;
              if (currentValue === min) {
                $(this).addClass('disabled');
              }
            }
          };

          stepper.find('button:last-of-type').on('tap', function () {
            increaseStepperValue.call(this, stepper);
          });

          stepper.find('button:first-of-type').on('tap', function () {
            decreaseStepperValue.call(this, stepper);
          });

          return {
            getValue: function getValue() {
              return stepper.find('input').val();
            }
          };
        }
      });
    }
  };
});
$__System.register('2c', ['3', '1b'], function (_export) {
  // Truck Widget - Switches:
  'use strict';

  return {
    setters: [function (_) {}, function (_b) {}],
    execute: function () {

      $.extend({
        //=========================
        // Create a switch control:
        //=========================
        Switch: function Switch(options) {
          if (!options || !options.element) return;
          var __checked = false;
          var settings = {
            element: undefined,
            name: undefined,
            value: undefined,
            checked: false,
            onCallback: $.noop,
            offCallback: $.noop
          };

          $.extend(settings, options);
          var __selection = {
            checked: __checked,
            value: settings.value
          };

          var __element = $(settings.element);
          __checked = settings.checked;

          // Abrstract swipe for left-to-right and right-to-left:
          var swipeOn = "swiperight";
          var swipeOff = "swipeleft";
          if (document.documentElement.dir === "rtl") {
            swipeOn = "swipeleft";
            swipeOff = "swiperight";
          }

          var checkState = settings.checked ? ' checked' : '';
          var __switch = '<em></em><input type="checkbox" name="' + settings.name + '" ' + checkState + ' value="' + settings.value + '">';

          __element.append(__switch);

          if (__checked) {
            __element.addClass('checked');
            __element.attr('role', 'checkbox');
          }

          __element.on('tap', function () {
            var checkbox = this.querySelector('input');
            if (this.classList.contains('checked')) {
              this.classList.remove('checked');
              this.setAttribute('aria-checked', false);
              checkbox.removeAttribute('checked');
              __selection.checked = false;
              __checked = false;
              settings.offCallback.call(this);
            } else {
              this.classList.add('checked');
              checkbox.setAttribute('checked', 'checked');
              this.setAttribute('aria-checked', true);
              __selection.checked = true;
              __checked = true;
              settings.onCallback.call(this);
            }
          });
          __element.on(swipeOn, function () {
            var checkbox = this.querySelector('input');
            if (this.classList.contains('checked')) {
              this.classList.remove('checked');
              this.setAttribute('aria-checked', false);
              checkbox.removeAttribute('checked');
              __selection.checked = true;
              __checked = true;
              settings.offCallback.call(this);
            }
          });
          __element.on(swipeOff, function () {
            var checkbox = this.querySelector('input');
            if (!this.classList.contains('checked')) {
              this.classList.add('checked');
              checkbox.setAttribute('checked', 'checked');
              this.setAttribute('aria-checked', true);
              __selection.checked = false;
              __checked = false;
              settings.onCallback.call(this);
            }
          });

          return {
            getValue: function getValue() {
              return __selection;
            }
          };
        }
      });
    }
  };
});
$__System.register('2d', ['3'], function (_export) {
  // Truck Widget - Center Elements:
  'use strict';

  return {
    setters: [function (_) {}],
    execute: function () {

      $.fn.extend({
        //============================
        // Center an Element on Screen
        //============================
        Center: function Center(position) {
          if (!this[0]) return;
          var $this = $(this);
          var parent = $this.parent();
          if (position) {
            $(this.css('position', position));
          } else if ($this.css('position') === 'absolute') {
            position = 'absolute';
          } else {
            position = 'relative';
          }
          var height = undefined,
              width = undefined,
              parentHeight = undefined,
              parentWidth = undefined;
          if (position === 'absolute') {
            height = $this[0].clientHeight;
            width = $this[0].clientWidth;
            parentHeight = parent[0].clientHeight;
            parentWidth = parent[0].clientWidth;
          } else {
            height = parseInt($this.css('height'), 10);
            width = parseInt($this.css('width'), 10);
            parentHeight = parseInt(parent.css('height'), 10);
            parentWidth = parseInt(parent.css('width'), 10);
            $(this).css({
              'margin-left': 'auto',
              'margin-right': 'auto'
            });
          }
          var tmpTop = undefined,
              tmpLeft = undefined;
          if (parent[0].nodeName === 'body') {
            tmpTop = window.innerHeight / 2 + window.pageYOffset - height / 2 + 'px';
            tmpLeft = window.innerWidth / 2 - width / 2 + 'px';
          } else {
            tmpTop = parentHeight / 2 - height / 2 + 'px';
            tmpLeft = parentWidth / 2 - width / 2 + 'px';
          }
          if (position !== 'absolute') tmpLeft = 0;
          $this.css({
            left: tmpLeft,
            top: tmpTop
          });
        }
      });
    }
  };
});
$__System.register('2e', ['3'], function (_export) {
  // Truck Widget - Button functions:
  'use strict';

  var truckBackButtonSVG;
  return {
    setters: [function (_) {}],
    execute: function () {
      truckBackButtonSVG = '<svg id="truck-back-button-svg" width="100px" height="100px" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="truck-back-arrow" stroke="#979797"><path d="M50.7822487,4.05872022 L5.60302012,49.1913445 L50.4625593,94.6779982" id="back-arrow-bracket"></path><path d="M6,49.368351 L95.8300018,49.368351" id="back-arrow-shaft"></path></g></g></svg>';

      $.fn.extend({
        decorateBackButton: function decorateBackButton() {
          if ($(this).hasClass('back') || $(this).hasClass('backTo')) {
            this.forEach(function (button) {
              var temp = $(button).text();
              $(button).html('<span>' + temp + '</span>');
              $(button).prepend(truckBackButtonSVG);
            });
          }
        }
      });
      $(function () {
        $('.back').decorateBackButton();
        $('.backTo').decorateBackButton();
        $('button').on($.eventStart, function () {
          var button = $(this);
          button.addClass('hover');
          setTimeout(function () {
            button.removeClass('hover');
          }, 400);
        });
      });
    }
  };
});
$__System.register('2f', ['3', '1b'], function (_export) {
  // Truck Widget - Adjust Navbar for iOS:
  'use strict';

  return {
    setters: [function (_) {}, function (_b) {}],
    execute: function () {

      $(function () {

        //===============================
        // Method to center H1 in Navbar.
        // Check on widths of siblings:
        //===============================
        $.extend({
          AdjustNavbarLayout: function AdjustNavbarLayout(screen) {
            if (!$('link[href*=ios]')[0]) return;
            screen = $(screen);
            var h1 = screen.find('h1');
            var siblings = h1.siblings();
            var whichSide = undefined;
            var oppositeSide = undefined;
            var rtl = $('html').attr('dir') === 'rtl';
            var amount = 0;
            var hidden = false;
            var visibleSibling = undefined;

            var calculateLongest = function calculateLongest(a, b) {
              var widthA = a[0].clientWidth;
              var widthB = b[0].clientWidth;
              if (!widthA) {
                widthA = 0;
                whichSide = 'margin-right';
                oppositeSide = 'margin-left';
                if (rtl) {
                  whichSide = 'margin-left';
                  oppositeSide = 'margin-right';
                }
              }
              if (!widthB) {
                widthB = 0;
                whichSide = 'margin-left';
                oppositeSide = 'margin-right';
                if (rtl) {
                  whichSide = 'margin-right';
                  oppositeSide = 'margin-left';
                }
              }
              if (widthB > widthA) {
                whichSide = 'margin-left';
                oppositeSide = 'margin-right';
                if (rtl) {
                  whichSide = 'margin-right';
                  oppositeSide = 'margin-left';
                }
                amount = widthB - widthA;
              } else if (widthA > widthB) {
                whichSide = 'margin-right';
                oppositeSide = 'margin-left';
                if (rtl) {
                  whichSide = 'margin-left';
                  oppositeSide = 'margin-right';
                }
                amount = widthA - widthB;
              } else {
                amount = 0;
              }
            };

            function handleOneSibling(sib) {
              var sibling = sib || h1.siblings();
              amount = sibling[0].clientWidth;
              if (sibling.is(':first-child')) {
                whichSide = 'margin-right';
                oppositeSide = 'margin-left';
                if (rtl) {
                  whichSide = 'margin-left';
                  oppositeSide = 'margin-right';
                }
              } else if (sibling.is(':last-child')) {
                whichSide = 'margin-left';
                oppositeSide = 'margin-right';
                if (rtl) {
                  whichSide = 'margin-right';
                  oppositeSide = 'margin-left';
                }
              }
            }

            // If one sibling:
            if (siblings.length === 1) {
              handleOneSibling();

              // If two siblings:
            } else if (siblings.length === 2) {
                siblings.forEach(function (item) {
                  if ($(item).css('display') === 'none') {
                    hidden = true;
                  } else {
                    visibleSibling = $(item);
                  }
                });
                if (hidden) {
                  handleOneSibling(visibleSibling);
                } else {
                  calculateLongest(siblings.eq(0), siblings.eq(1));
                }

                // H1 is alone:
              } else {
                  whichSide = 'margin-left';
                  oppositeSide = 'margin-right';
                  amount = 0;
                }
            var props = {};
            props[whichSide] = amount;
            // props[oppositeSide] = 0;
            var sibwidth = 0;
            if (siblings.size()) {
              siblings.forEach(function (item) {
                sibwidth += $(item)[0].clientWidth;
              });
            }
            // alert(amount)
            var headerWidth = screen.find('nav').width() / 2;
            if (sibwidth + 20 > headerWidth) {
              h1.css({
                'margin-left': 0,
                'margin-right': 0
              });
            } else {
              h1.css(props);
            }
          }
        });
        setTimeout(function () {
          $('screen').forEach(function (screen) {
            $.AdjustNavbarLayout(screen);
          });
        });
      });
    }
  };
});
$__System.register('1b', ['3', '2d', '2e', '2f'], function (_export) {
  // Truck Widget - Setup:
  'use strict';

  return {
    setters: [function (_) {}, function (_d) {}, function (_e) {}, function (_f) {}],
    execute: function () {

      $(function () {
        if (!/(mobile)|(ios)|(android)/img.test(navigator.userAgent)) {
          $('body').addClass('isDesktop');
        }
        if ($('link[href*=ios]')[0]) {
          $('body').addClass('isiOS');
          $.AdjustNavbarLayout();
        } else if ($('link[href*=android]')[0]) {
          $('body').addClass('isAndroid');
        } else if ($('link[href*=windows]')[0]) {
          $('body').addClass('isWindows');
        }
      });
    }
  };
});
$__System.register('30', ['3'], function (_export) {
  // Truck Widget - Screens:
  'use strict';

  return {
    setters: [function (_) {}],
    execute: function () {

      $(function () {
        //=================================
        // Interface for the app's screens:
        //=================================
        $.extend({
          screens: $('screen')
        });
        $.extend($.screens, {
          getCurrent: function getCurrent() {
            return this.hazClass('current');
          },

          getNext: function getNext() {
            return this.hazClass('next');
          },

          getPrevious: function getPrevious() {
            return this.hazClass('previous');
          }
        });
      });
    }
  };
});
$__System.register('31', ['3'], function (_export) {
  // Truck Module - Mediator:
  'use strict';

  return {
    setters: [function (_) {}],
    execute: function () {
      var _arguments = arguments;

      $.extend({

        /**
         * Used by $.Mediator as mediator store. Do not touch!
         */
        MediatorStack: function MediatorStack(array) {
          var __array = [];
          if (array && Array.isArray(array)) {
            var i = -1;
            var len = array.length;
            while (++i < len) {
              __array[i] = array[i];
            }
          } else if (array) {
            var arr = Array.prototype.slice.apply(_arguments);
            arr.forEach(function (ctx, idx) {
              __array[idx] = ctx;
            });
          }
          return {

            size: function size() {
              return __array.length;
            },

            push: function push(data) {
              return __array.push(data);
            },

            eq: function eq(index) {
              if (index < 0) {
                return __array[__array.length + index];
              } else {
                return __array[index];
              }
            },

            indexOf: function indexOf() {
              return __array.indexOf.apply(__array, _arguments);
            },

            forEach: function forEach(callback) {
              var value = undefined;
              var i = -1;
              var len = __array.length;
              while (++i < len) {
                value = callback.call(__array[i], __array[i], i);
                if (value === false) {
                  break;
                }
              }
            },

            setExecutable: function setExecutable(token, exec) {
              __array.forEach(function (receiver) {
                if (receiver.token === token) {
                  receiver.exec = exec;
                  delete receiver.stopAfter;
                }
              });
            },

            setStopAfter: function setStopAfter(token, stopAfter) {
              __array.forEach(function (receiver) {
                if (receiver.token === token) {
                  receiver.stopAfter = stopAfter;
                }
              });
            },

            splice: function splice() {
              return __array.splice.apply(__array, _arguments);
            },

            getData: function getData() {
              return __array;
            }
          };
        },

        /**
         * Object to hold all the receivers defined.
         */
        mediators: {},

        /**
         * Factory to create a mediator.
         *
         * @param {string} handle A string defining a handle the mediator listens for.
         * @param {Function} callback A callback to execute when the mediator is executed.
         * @return {object} A mediator object.
         */
        Mediator: function Mediator(handle, callback) {
          if (!$.mediators[handle]) {
            $.mediators[handle] = $.MediatorStack(); // jshint ignore:line
          }
          var __exec = true;
          var __stopAfter = undefined;
          var token = $.uuid();
          $.mediators[handle].push({
            token: token,
            callback: callback,
            exec: true
          });

          var mtor = {};
          $.extend(mtor, {
            token: token,
            handle: handle,
            count: 0,
            exec: __exec,

            run: function run(data) {
              if (!mtor.exec) return;
              if (__stopAfter && __stopAfter > 0) {
                callback.call(undefined, data);
                __stopAfter--;
                if (!mtor.stopCount) mtor.count++;
                $.mediators[handle].setStopAfter(token, __stopAfter);
                if (__stopAfter === 0) {
                  mtor.exec = false;
                  $.mediators[handle].setExecutable(token, false);
                }
              } else {
                if (callback) {
                  callback.call(undefined, data);
                  if (!mtor.stopCount) mtor.count++;
                }
              }
            },

            stop: function stop(stopAfter) {
              if (stopAfter) {
                __stopAfter = stopAfter;
                $.mediators[handle].setStopAfter(token, stopAfter);
              } else {
                mtor.exec = false;
                $.mediators[handle].setExecutable(token, false);
              }
            },

            start: function start() {
              __exec = true;
              $.mediators[handle].setExecutable(token, true);
            }
          });
          return mtor;
        },

        /**
         * Method to create a receiver which responds to dispatches.
         *
         * @param {string} handle A string defining the handle the receiver listens for.
         * @param {Function} callback A callback to execute when the receiver's handle is dispatched.
         * @return {object} A mediator object.
         */
        receive: function receive(handle, callback) {
          return $.Mediator(handle, callback);
        },

        /**
         * Method to create a dispatcher which sends a handle and any possible data to a receiver or mediator.
         *
         * @param {string} handle The handle to dispatch to.
         * @param {any} args The data, if any, to send with the dispatch.
         * @return {boolean}
         */
        dispatch: function dispatch(handle, args) {
          if (!$.mediators[handle]) {
            return false;
          }
          setTimeout(function () {
            var len = $.mediators[handle] ? $.mediators[handle].size() : 0;
            while (len--) {
              if (!$.mediators[handle].eq(len).exec) return;
              var stopAfter = $.mediators[handle].eq(len).stopAfter;
              if (stopAfter > 0) {
                $.mediators[handle].eq(len).callback(args);
                stopAfter--;
                $.mediators[handle].setStopAfter($.mediators[handle].eq(len).token, stopAfter);
                if (stopAfter === 0) $.mediators[handle].eq(len).exec = false;
              } else if (stopAfter === 0) {
                return;
              } else if (stopAfter === undefined) {
                $.mediators[handle].eq(len).callback(args);
              }
            }
            return true;
          });
          return true;
        },

        /**
         * Method to restart a mediator, allowing it to respond to dispatches. Used if a mediator was stopped with `stopDispatch`.
         *
         * @param {object} mediator The mediator object to re-start.
         * @param {void}
         */
        startDispatch: function startDispatch(mediator) {
          setTimeout(function () {
            for (var m in $.mediators) {
              if ($.mediators[m] && $.mediators[m].size()) {
                $.mediators[m].forEach(function (item, i) {
                  if (item.token === mediator.token) {
                    item.exec = true;
                  }
                });
              }
            }
            return false;
          });
        },

        /**
         * Method to stop a mediator. This prevents a mediator from runing when dispatches are sent to its handle.
         *
         * @param {object} mediator The mediator object to stop.
         * @return {void}
         */
        stopDispatch: function stopDispatch(mediator) {
          setTimeout(function () {
            for (var m in $.mediators) {
              if ($.mediators[m] && $.mediators[m].size()) {
                $.mediators[m].forEach(function (item, i) {
                  if (item.token === mediator.token) {
                    item.exec = false;
                  }
                });
              }
            }
            return false;
          });
        }
      });
    }
  };
});
$__System.registerDynamic("32", ["33"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var defined = $__require('33');
  module.exports = function(it) {
    return Object(defined(it));
  };
  return module.exports;
});

$__System.registerDynamic("c", ["34", "35", "36"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $export = $__require('34'),
      core = $__require('35'),
      fails = $__require('36');
  module.exports = function(KEY, exec) {
    var fn = (core.Object || {})[KEY] || Object[KEY],
        exp = {};
    exp[KEY] = exec(fn);
    $export($export.S + $export.F * fails(function() {
      fn(1);
    }), 'Object', exp);
  };
  return module.exports;
});

$__System.registerDynamic("37", ["32", "c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toObject = $__require('32');
  $__require('c')('keys', function($keys) {
    return function keys(it) {
      return $keys(toObject(it));
    };
  });
  return module.exports;
});

$__System.registerDynamic("38", ["37", "35"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('37');
  module.exports = $__require('35').Object.keys;
  return module.exports;
});

$__System.registerDynamic("5", ["38"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('38'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("39", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  return module.exports;
});

$__System.registerDynamic("3a", ["3b", "33"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toInteger = $__require('3b'),
      defined = $__require('33');
  module.exports = function(TO_STRING) {
    return function(that, pos) {
      var s = String(defined(that)),
          i = toInteger(pos),
          l = s.length,
          a,
          b;
      if (i < 0 || i >= l)
        return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };
  return module.exports;
});

$__System.registerDynamic("3c", ["3a", "3d"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $at = $__require('3a')(true);
  $__require('3d')(String, 'String', function(iterated) {
    this._t = String(iterated);
    this._i = 0;
  }, function() {
    var O = this._t,
        index = this._i,
        point;
    if (index >= O.length)
      return {
        value: undefined,
        done: true
      };
    point = $at(O, index);
    this._i += point.length;
    return {
      value: point,
      done: false
    };
  });
  return module.exports;
});

$__System.registerDynamic("3e", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function() {};
  return module.exports;
});

$__System.registerDynamic("3f", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(done, value) {
    return {
      value: value,
      done: !!done
    };
  };
  return module.exports;
});

$__System.registerDynamic("40", ["41"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var cof = $__require('41');
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
  return module.exports;
});

$__System.registerDynamic("33", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    if (it == undefined)
      throw TypeError("Can't call method on  " + it);
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("9", ["40", "33"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var IObject = $__require('40'),
      defined = $__require('33');
  module.exports = function(it) {
    return IObject(defined(it));
  };
  return module.exports;
});

$__System.registerDynamic("42", ["a", "43", "44", "45", "46"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('a'),
      descriptor = $__require('43'),
      setToStringTag = $__require('44'),
      IteratorPrototype = {};
  $__require('45')(IteratorPrototype, $__require('46')('iterator'), function() {
    return this;
  });
  module.exports = function(Constructor, NAME, next) {
    Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
    setToStringTag(Constructor, NAME + ' Iterator');
  };
  return module.exports;
});

$__System.registerDynamic("3d", ["47", "34", "48", "45", "49", "4a", "42", "44", "a", "46"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var LIBRARY = $__require('47'),
      $export = $__require('34'),
      redefine = $__require('48'),
      hide = $__require('45'),
      has = $__require('49'),
      Iterators = $__require('4a'),
      $iterCreate = $__require('42'),
      setToStringTag = $__require('44'),
      getProto = $__require('a').getProto,
      ITERATOR = $__require('46')('iterator'),
      BUGGY = !([].keys && 'next' in [].keys()),
      FF_ITERATOR = '@@iterator',
      KEYS = 'keys',
      VALUES = 'values';
  var returnThis = function() {
    return this;
  };
  module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function(kind) {
      if (!BUGGY && kind in proto)
        return proto[kind];
      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };
        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }
      return function entries() {
        return new Constructor(this, kind);
      };
    };
    var TAG = NAME + ' Iterator',
        DEF_VALUES = DEFAULT == VALUES,
        VALUES_BUG = false,
        proto = Base.prototype,
        $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
        $default = $native || getMethod(DEFAULT),
        methods,
        key;
    if ($native) {
      var IteratorPrototype = getProto($default.call(new Base));
      setToStringTag(IteratorPrototype, TAG, true);
      if (!LIBRARY && has(proto, FF_ITERATOR))
        hide(IteratorPrototype, ITERATOR, returnThis);
      if (DEF_VALUES && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() {
          return $native.call(this);
        };
      }
    }
    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      hide(proto, ITERATOR, $default);
    }
    Iterators[NAME] = $default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: !DEF_VALUES ? $default : getMethod('entries')
      };
      if (FORCED)
        for (key in methods) {
          if (!(key in proto))
            redefine(proto, key, methods[key]);
        }
      else
        $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };
  return module.exports;
});

$__System.registerDynamic("4b", ["3e", "3f", "4a", "9", "3d"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var addToUnscopables = $__require('3e'),
      step = $__require('3f'),
      Iterators = $__require('4a'),
      toIObject = $__require('9');
  module.exports = $__require('3d')(Array, 'Array', function(iterated, kind) {
    this._t = toIObject(iterated);
    this._i = 0;
    this._k = kind;
  }, function() {
    var O = this._t,
        kind = this._k,
        index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return step(1);
    }
    if (kind == 'keys')
      return step(0, index);
    if (kind == 'values')
      return step(0, O[index]);
    return step(0, [index, O[index]]);
  }, 'values');
  Iterators.Arguments = Iterators.Array;
  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');
  return module.exports;
});

$__System.registerDynamic("4c", ["4b", "4a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('4b');
  var Iterators = $__require('4a');
  Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
  return module.exports;
});

$__System.registerDynamic("47", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = true;
  return module.exports;
});

$__System.registerDynamic("34", ["4d", "35", "4e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = $__require('4d'),
      core = $__require('35'),
      ctx = $__require('4e'),
      PROTOTYPE = 'prototype';
  var $export = function(type, name, source) {
    var IS_FORCED = type & $export.F,
        IS_GLOBAL = type & $export.G,
        IS_STATIC = type & $export.S,
        IS_PROTO = type & $export.P,
        IS_BIND = type & $export.B,
        IS_WRAP = type & $export.W,
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
        key,
        own,
        out;
    if (IS_GLOBAL)
      source = name;
    for (key in source) {
      own = !IS_FORCED && target && key in target;
      if (own && key in exports)
        continue;
      out = own ? target[key] : source[key];
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? (function(C) {
        var F = function(param) {
          return this instanceof C ? new C(param) : C(param);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      if (IS_PROTO)
        (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
    }
  };
  $export.F = 1;
  $export.G = 2;
  $export.S = 4;
  $export.P = 8;
  $export.B = 16;
  $export.W = 32;
  module.exports = $export;
  return module.exports;
});

$__System.registerDynamic("4f", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it, Constructor, name) {
    if (!(it instanceof Constructor))
      throw TypeError(name + ": use the 'new' operator!");
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("50", ["51"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var anObject = $__require('51');
  module.exports = function(iterator, fn, value, entries) {
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined)
        anObject(ret.call(iterator));
      throw e;
    }
  };
  return module.exports;
});

$__System.registerDynamic("52", ["4a", "46"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Iterators = $__require('4a'),
      ITERATOR = $__require('46')('iterator'),
      ArrayProto = Array.prototype;
  module.exports = function(it) {
    return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
  };
  return module.exports;
});

$__System.registerDynamic("3b", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ceil = Math.ceil,
      floor = Math.floor;
  module.exports = function(it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };
  return module.exports;
});

$__System.registerDynamic("53", ["3b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toInteger = $__require('3b'),
      min = Math.min;
  module.exports = function(it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
  };
  return module.exports;
});

$__System.registerDynamic("54", ["41", "46"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var cof = $__require('41'),
      TAG = $__require('46')('toStringTag'),
      ARG = cof(function() {
        return arguments;
      }()) == 'Arguments';
  module.exports = function(it) {
    var O,
        T,
        B;
    return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof(T = (O = Object(it))[TAG]) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };
  return module.exports;
});

$__System.registerDynamic("4a", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {};
  return module.exports;
});

$__System.registerDynamic("55", ["54", "46", "4a", "35"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var classof = $__require('54'),
      ITERATOR = $__require('46')('iterator'),
      Iterators = $__require('4a');
  module.exports = $__require('35').getIteratorMethod = function(it) {
    if (it != undefined)
      return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
  };
  return module.exports;
});

$__System.registerDynamic("56", ["4e", "50", "52", "51", "53", "55"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ctx = $__require('4e'),
      call = $__require('50'),
      isArrayIter = $__require('52'),
      anObject = $__require('51'),
      toLength = $__require('53'),
      getIterFn = $__require('55');
  module.exports = function(iterable, entries, fn, that) {
    var iterFn = getIterFn(iterable),
        f = ctx(fn, that, entries ? 2 : 1),
        index = 0,
        length,
        step,
        iterator;
    if (typeof iterFn != 'function')
      throw TypeError(iterable + ' is not iterable!');
    if (isArrayIter(iterFn))
      for (length = toLength(iterable.length); length > index; index++) {
        entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
      }
    else
      for (iterator = iterFn.call(iterable); !(step = iterator.next()).done; ) {
        call(iterator, f, step.value, entries);
      }
  };
  return module.exports;
});

$__System.registerDynamic("57", ["a", "58", "51", "4e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var getDesc = $__require('a').getDesc,
      isObject = $__require('58'),
      anObject = $__require('51');
  var check = function(O, proto) {
    anObject(O);
    if (!isObject(proto) && proto !== null)
      throw TypeError(proto + ": can't set as prototype!");
  };
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? function(test, buggy, set) {
      try {
        set = $__require('4e')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) {
        buggy = true;
      }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy)
          O.__proto__ = proto;
        else
          set(O, proto);
        return O;
      };
    }({}, false) : undefined),
    check: check
  };
  return module.exports;
});

$__System.registerDynamic("59", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = Object.is || function is(x, y) {
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };
  return module.exports;
});

$__System.registerDynamic("51", ["58"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isObject = $__require('58');
  module.exports = function(it) {
    if (!isObject(it))
      throw TypeError(it + ' is not an object!');
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("5a", ["51", "5b", "46"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var anObject = $__require('51'),
      aFunction = $__require('5b'),
      SPECIES = $__require('46')('species');
  module.exports = function(O, D) {
    var C = anObject(O).constructor,
        S;
    return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
  };
  return module.exports;
});

$__System.registerDynamic("5b", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    if (typeof it != 'function')
      throw TypeError(it + ' is not a function!');
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("4e", ["5b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var aFunction = $__require('5b');
  module.exports = function(fn, that, length) {
    aFunction(fn);
    if (that === undefined)
      return fn;
    switch (length) {
      case 1:
        return function(a) {
          return fn.call(that, a);
        };
      case 2:
        return function(a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function(a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function() {
      return fn.apply(that, arguments);
    };
  };
  return module.exports;
});

$__System.registerDynamic("5c", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(fn, args, that) {
    var un = that === undefined;
    switch (args.length) {
      case 0:
        return un ? fn() : fn.call(that);
      case 1:
        return un ? fn(args[0]) : fn.call(that, args[0]);
      case 2:
        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
      case 3:
        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
      case 4:
        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
    }
    return fn.apply(that, args);
  };
  return module.exports;
});

$__System.registerDynamic("5d", ["4d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('4d').document && document.documentElement;
  return module.exports;
});

$__System.registerDynamic("58", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };
  return module.exports;
});

$__System.registerDynamic("5e", ["58", "4d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isObject = $__require('58'),
      document = $__require('4d').document,
      is = isObject(document) && isObject(document.createElement);
  module.exports = function(it) {
    return is ? document.createElement(it) : {};
  };
  return module.exports;
});

$__System.registerDynamic("5f", ["4e", "5c", "5d", "5e", "4d", "41", "60"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    var ctx = $__require('4e'),
        invoke = $__require('5c'),
        html = $__require('5d'),
        cel = $__require('5e'),
        global = $__require('4d'),
        process = global.process,
        setTask = global.setImmediate,
        clearTask = global.clearImmediate,
        MessageChannel = global.MessageChannel,
        counter = 0,
        queue = {},
        ONREADYSTATECHANGE = 'onreadystatechange',
        defer,
        channel,
        port;
    var run = function() {
      var id = +this;
      if (queue.hasOwnProperty(id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
      }
    };
    var listner = function(event) {
      run.call(event.data);
    };
    if (!setTask || !clearTask) {
      setTask = function setImmediate(fn) {
        var args = [],
            i = 1;
        while (arguments.length > i)
          args.push(arguments[i++]);
        queue[++counter] = function() {
          invoke(typeof fn == 'function' ? fn : Function(fn), args);
        };
        defer(counter);
        return counter;
      };
      clearTask = function clearImmediate(id) {
        delete queue[id];
      };
      if ($__require('41')(process) == 'process') {
        defer = function(id) {
          process.nextTick(ctx(run, id, 1));
        };
      } else if (MessageChannel) {
        channel = new MessageChannel;
        port = channel.port2;
        channel.port1.onmessage = listner;
        defer = ctx(port.postMessage, port, 1);
      } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
        defer = function(id) {
          global.postMessage(id + '', '*');
        };
        global.addEventListener('message', listner, false);
      } else if (ONREADYSTATECHANGE in cel('script')) {
        defer = function(id) {
          html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run.call(id);
          };
        };
      } else {
        defer = function(id) {
          setTimeout(ctx(run, id, 1), 0);
        };
      }
    }
    module.exports = {
      set: setTask,
      clear: clearTask
    };
  })($__require('60'));
  return module.exports;
});

$__System.registerDynamic("41", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toString = {}.toString;
  module.exports = function(it) {
    return toString.call(it).slice(8, -1);
  };
  return module.exports;
});

$__System.registerDynamic("61", ["4d", "5f", "41", "60"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    var global = $__require('4d'),
        macrotask = $__require('5f').set,
        Observer = global.MutationObserver || global.WebKitMutationObserver,
        process = global.process,
        Promise = global.Promise,
        isNode = $__require('41')(process) == 'process',
        head,
        last,
        notify;
    var flush = function() {
      var parent,
          domain,
          fn;
      if (isNode && (parent = process.domain)) {
        process.domain = null;
        parent.exit();
      }
      while (head) {
        domain = head.domain;
        fn = head.fn;
        if (domain)
          domain.enter();
        fn();
        if (domain)
          domain.exit();
        head = head.next;
      }
      last = undefined;
      if (parent)
        parent.enter();
    };
    if (isNode) {
      notify = function() {
        process.nextTick(flush);
      };
    } else if (Observer) {
      var toggle = 1,
          node = document.createTextNode('');
      new Observer(flush).observe(node, {characterData: true});
      notify = function() {
        node.data = toggle = -toggle;
      };
    } else if (Promise && Promise.resolve) {
      notify = function() {
        Promise.resolve().then(flush);
      };
    } else {
      notify = function() {
        macrotask.call(global, flush);
      };
    }
    module.exports = function asap(fn) {
      var task = {
        fn: fn,
        next: undefined,
        domain: isNode && process.domain
      };
      if (last)
        last.next = task;
      if (!head) {
        head = task;
        notify();
      }
      last = task;
    };
  })($__require('60'));
  return module.exports;
});

$__System.registerDynamic("43", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
  return module.exports;
});

$__System.registerDynamic("45", ["a", "43", "62"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('a'),
      createDesc = $__require('43');
  module.exports = $__require('62') ? function(object, key, value) {
    return $.setDesc(object, key, createDesc(1, value));
  } : function(object, key, value) {
    object[key] = value;
    return object;
  };
  return module.exports;
});

$__System.registerDynamic("48", ["45"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('45');
  return module.exports;
});

$__System.registerDynamic("63", ["48"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var redefine = $__require('48');
  module.exports = function(target, src) {
    for (var key in src)
      redefine(target, key, src[key]);
    return target;
  };
  return module.exports;
});

$__System.registerDynamic("49", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function(it, key) {
    return hasOwnProperty.call(it, key);
  };
  return module.exports;
});

$__System.registerDynamic("44", ["a", "49", "46"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var def = $__require('a').setDesc,
      has = $__require('49'),
      TAG = $__require('46')('toStringTag');
  module.exports = function(it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG))
      def(it, TAG, {
        configurable: true,
        value: tag
      });
  };
  return module.exports;
});

$__System.registerDynamic("36", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
  return module.exports;
});

$__System.registerDynamic("62", ["36"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = !$__require('36')(function() {
    return Object.defineProperty({}, 'a', {get: function() {
        return 7;
      }}).a != 7;
  });
  return module.exports;
});

$__System.registerDynamic("64", ["35", "a", "62", "46"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core = $__require('35'),
      $ = $__require('a'),
      DESCRIPTORS = $__require('62'),
      SPECIES = $__require('46')('species');
  module.exports = function(KEY) {
    var C = core[KEY];
    if (DESCRIPTORS && C && !C[SPECIES])
      $.setDesc(C, SPECIES, {
        configurable: true,
        get: function() {
          return this;
        }
      });
  };
  return module.exports;
});

$__System.registerDynamic("65", ["4d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = $__require('4d'),
      SHARED = '__core-js_shared__',
      store = global[SHARED] || (global[SHARED] = {});
  module.exports = function(key) {
    return store[key] || (store[key] = {});
  };
  return module.exports;
});

$__System.registerDynamic("66", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var id = 0,
      px = Math.random();
  module.exports = function(key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };
  return module.exports;
});

$__System.registerDynamic("4d", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number')
    __g = global;
  return module.exports;
});

$__System.registerDynamic("46", ["65", "66", "4d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var store = $__require('65')('wks'),
      uid = $__require('66'),
      Symbol = $__require('4d').Symbol;
  module.exports = function(name) {
    return store[name] || (store[name] = Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
  };
  return module.exports;
});

$__System.registerDynamic("67", ["46"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ITERATOR = $__require('46')('iterator'),
      SAFE_CLOSING = false;
  try {
    var riter = [7][ITERATOR]();
    riter['return'] = function() {
      SAFE_CLOSING = true;
    };
    Array.from(riter, function() {
      throw 2;
    });
  } catch (e) {}
  module.exports = function(exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING)
      return false;
    var safe = false;
    try {
      var arr = [7],
          iter = arr[ITERATOR]();
      iter.next = function() {
        safe = true;
      };
      arr[ITERATOR] = function() {
        return iter;
      };
      exec(arr);
    } catch (e) {}
    return safe;
  };
  return module.exports;
});

$__System.registerDynamic("68", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var process = module.exports = {};
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length) {
      drainQueue();
    }
  }
  function drainQueue() {
    if (draining) {
      return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
  }
  process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
      setTimeout(drainQueue, 0);
    }
  };
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  Item.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = '';
  process.versions = {};
  function noop() {}
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.binding = function(name) {
    throw new Error('process.binding is not supported');
  };
  process.cwd = function() {
    return '/';
  };
  process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
  };
  process.umask = function() {
    return 0;
  };
  return module.exports;
});

$__System.registerDynamic("69", ["68"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('68');
  return module.exports;
});

$__System.registerDynamic("6a", ["69"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__System._nodeRequire ? process : $__require('69');
  return module.exports;
});

$__System.registerDynamic("60", ["6a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('6a');
  return module.exports;
});

$__System.registerDynamic("6b", ["a", "47", "4d", "4e", "54", "34", "58", "51", "5b", "4f", "56", "57", "59", "46", "5a", "61", "62", "63", "44", "64", "35", "67", "60"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var $ = $__require('a'),
        LIBRARY = $__require('47'),
        global = $__require('4d'),
        ctx = $__require('4e'),
        classof = $__require('54'),
        $export = $__require('34'),
        isObject = $__require('58'),
        anObject = $__require('51'),
        aFunction = $__require('5b'),
        strictNew = $__require('4f'),
        forOf = $__require('56'),
        setProto = $__require('57').set,
        same = $__require('59'),
        SPECIES = $__require('46')('species'),
        speciesConstructor = $__require('5a'),
        asap = $__require('61'),
        PROMISE = 'Promise',
        process = global.process,
        isNode = classof(process) == 'process',
        P = global[PROMISE],
        Wrapper;
    var testResolve = function(sub) {
      var test = new P(function() {});
      if (sub)
        test.constructor = Object;
      return P.resolve(test) === test;
    };
    var USE_NATIVE = function() {
      var works = false;
      function P2(x) {
        var self = new P(x);
        setProto(self, P2.prototype);
        return self;
      }
      try {
        works = P && P.resolve && testResolve();
        setProto(P2, P);
        P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
        if (!(P2.resolve(5).then(function() {}) instanceof P2)) {
          works = false;
        }
        if (works && $__require('62')) {
          var thenableThenGotten = false;
          P.resolve($.setDesc({}, 'then', {get: function() {
              thenableThenGotten = true;
            }}));
          works = thenableThenGotten;
        }
      } catch (e) {
        works = false;
      }
      return works;
    }();
    var sameConstructor = function(a, b) {
      if (LIBRARY && a === P && b === Wrapper)
        return true;
      return same(a, b);
    };
    var getConstructor = function(C) {
      var S = anObject(C)[SPECIES];
      return S != undefined ? S : C;
    };
    var isThenable = function(it) {
      var then;
      return isObject(it) && typeof(then = it.then) == 'function' ? then : false;
    };
    var PromiseCapability = function(C) {
      var resolve,
          reject;
      this.promise = new C(function($$resolve, $$reject) {
        if (resolve !== undefined || reject !== undefined)
          throw TypeError('Bad Promise constructor');
        resolve = $$resolve;
        reject = $$reject;
      });
      this.resolve = aFunction(resolve), this.reject = aFunction(reject);
    };
    var perform = function(exec) {
      try {
        exec();
      } catch (e) {
        return {error: e};
      }
    };
    var notify = function(record, isReject) {
      if (record.n)
        return;
      record.n = true;
      var chain = record.c;
      asap(function() {
        var value = record.v,
            ok = record.s == 1,
            i = 0;
        var run = function(reaction) {
          var handler = ok ? reaction.ok : reaction.fail,
              resolve = reaction.resolve,
              reject = reaction.reject,
              result,
              then;
          try {
            if (handler) {
              if (!ok)
                record.h = true;
              result = handler === true ? value : handler(value);
              if (result === reaction.promise) {
                reject(TypeError('Promise-chain cycle'));
              } else if (then = isThenable(result)) {
                then.call(result, resolve, reject);
              } else
                resolve(result);
            } else
              reject(value);
          } catch (e) {
            reject(e);
          }
        };
        while (chain.length > i)
          run(chain[i++]);
        chain.length = 0;
        record.n = false;
        if (isReject)
          setTimeout(function() {
            var promise = record.p,
                handler,
                console;
            if (isUnhandled(promise)) {
              if (isNode) {
                process.emit('unhandledRejection', value, promise);
              } else if (handler = global.onunhandledrejection) {
                handler({
                  promise: promise,
                  reason: value
                });
              } else if ((console = global.console) && console.error) {
                console.error('Unhandled promise rejection', value);
              }
            }
            record.a = undefined;
          }, 1);
      });
    };
    var isUnhandled = function(promise) {
      var record = promise._d,
          chain = record.a || record.c,
          i = 0,
          reaction;
      if (record.h)
        return false;
      while (chain.length > i) {
        reaction = chain[i++];
        if (reaction.fail || !isUnhandled(reaction.promise))
          return false;
      }
      return true;
    };
    var $reject = function(value) {
      var record = this;
      if (record.d)
        return;
      record.d = true;
      record = record.r || record;
      record.v = value;
      record.s = 2;
      record.a = record.c.slice();
      notify(record, true);
    };
    var $resolve = function(value) {
      var record = this,
          then;
      if (record.d)
        return;
      record.d = true;
      record = record.r || record;
      try {
        if (record.p === value)
          throw TypeError("Promise can't be resolved itself");
        if (then = isThenable(value)) {
          asap(function() {
            var wrapper = {
              r: record,
              d: false
            };
            try {
              then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
            } catch (e) {
              $reject.call(wrapper, e);
            }
          });
        } else {
          record.v = value;
          record.s = 1;
          notify(record, false);
        }
      } catch (e) {
        $reject.call({
          r: record,
          d: false
        }, e);
      }
    };
    if (!USE_NATIVE) {
      P = function Promise(executor) {
        aFunction(executor);
        var record = this._d = {
          p: strictNew(this, P, PROMISE),
          c: [],
          a: undefined,
          s: 0,
          d: false,
          v: undefined,
          h: false,
          n: false
        };
        try {
          executor(ctx($resolve, record, 1), ctx($reject, record, 1));
        } catch (err) {
          $reject.call(record, err);
        }
      };
      $__require('63')(P.prototype, {
        then: function then(onFulfilled, onRejected) {
          var reaction = new PromiseCapability(speciesConstructor(this, P)),
              promise = reaction.promise,
              record = this._d;
          reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
          reaction.fail = typeof onRejected == 'function' && onRejected;
          record.c.push(reaction);
          if (record.a)
            record.a.push(reaction);
          if (record.s)
            notify(record, false);
          return promise;
        },
        'catch': function(onRejected) {
          return this.then(undefined, onRejected);
        }
      });
    }
    $export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
    $__require('44')(P, PROMISE);
    $__require('64')(PROMISE);
    Wrapper = $__require('35')[PROMISE];
    $export($export.S + $export.F * !USE_NATIVE, PROMISE, {reject: function reject(r) {
        var capability = new PromiseCapability(this),
            $$reject = capability.reject;
        $$reject(r);
        return capability.promise;
      }});
    $export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {resolve: function resolve(x) {
        if (x instanceof P && sameConstructor(x.constructor, this))
          return x;
        var capability = new PromiseCapability(this),
            $$resolve = capability.resolve;
        $$resolve(x);
        return capability.promise;
      }});
    $export($export.S + $export.F * !(USE_NATIVE && $__require('67')(function(iter) {
      P.all(iter)['catch'](function() {});
    })), PROMISE, {
      all: function all(iterable) {
        var C = getConstructor(this),
            capability = new PromiseCapability(C),
            resolve = capability.resolve,
            reject = capability.reject,
            values = [];
        var abrupt = perform(function() {
          forOf(iterable, false, values.push, values);
          var remaining = values.length,
              results = Array(remaining);
          if (remaining)
            $.each.call(values, function(promise, index) {
              var alreadyCalled = false;
              C.resolve(promise).then(function(value) {
                if (alreadyCalled)
                  return;
                alreadyCalled = true;
                results[index] = value;
                --remaining || resolve(results);
              }, reject);
            });
          else
            resolve(results);
        });
        if (abrupt)
          reject(abrupt.error);
        return capability.promise;
      },
      race: function race(iterable) {
        var C = getConstructor(this),
            capability = new PromiseCapability(C),
            reject = capability.reject;
        var abrupt = perform(function() {
          forOf(iterable, false, function(promise) {
            C.resolve(promise).then(capability.resolve, reject);
          });
        });
        if (abrupt)
          reject(abrupt.error);
        return capability.promise;
      }
    });
  })($__require('60'));
  return module.exports;
});

$__System.registerDynamic("35", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core = module.exports = {version: '1.2.6'};
  if (typeof __e == 'number')
    __e = core;
  return module.exports;
});

$__System.registerDynamic("6c", ["39", "3c", "4c", "6b", "35"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('39');
  $__require('3c');
  $__require('4c');
  $__require('6b');
  module.exports = $__require('35').Promise;
  return module.exports;
});

$__System.registerDynamic("12", ["6c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('6c'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("a", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
  return module.exports;
});

$__System.registerDynamic("6d", ["a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('a');
  module.exports = function defineProperty(it, key, desc) {
    return $.setDesc(it, key, desc);
  };
  return module.exports;
});

$__System.registerDynamic("10", ["6d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('6d'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("20", ["10"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _Object$defineProperty = $__require('10')["default"];
  exports["default"] = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        _Object$defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  exports.__esModule = true;
  return module.exports;
});

$__System.registerDynamic("21", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports["default"] = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  exports.__esModule = true;
  return module.exports;
});

$__System.register('6e', ['20', '21'], function (_export) {
  var _createClass, _classCallCheck, DOMStack;

  return {
    setters: [function (_) {
      _createClass = _['default'];
    }, function (_2) {
      _classCallCheck = _2['default'];
    }],
    execute: function () {
      /**
        * DOMStack, an abstraction of the native NodeList, allowing manipulation of DOM elements without having to extend native elements.
        * @param {Element[] | Document | Element } args An array of elements, the document, or a node.
        * @return {DOMStack} DOMStack
        */
      'use strict';

      DOMStack = (function () {
        function DOMStack(args) {
          _classCallCheck(this, DOMStack);

          this.array = [];
          this.length = 0;
          this.objectType = 'domstack';
          if (Array.isArray(args)) {
            var i = -1;
            var len = args.length;
            while (++i < len) {
              this.array[i] = args[i];
            }
          } else if (args) {
            if (args === document) {
              this.array[0] = document;
            } else {
              var array = Array.prototype.slice.apply(arguments);
              array.forEach(function (ctx, idx) {
                this.array[idx] = ctx;
              });
            }
          }
        }

        _createClass(DOMStack, [{
          key: 'eq',
          value: function eq(index) {
            var ret = new DOMStack();
            if (!this.array.length) return ret;
            var temp = undefined;
            if (index < 0) {
              temp = this.array[this.array.length + index];
              ret.push(temp);
            } else {
              temp = this.array[index];
              ret.push(temp);
            }
            ret[0] = ret.array[0];
            ret.length = ret.array.length;
            return ret;
          }
        }, {
          key: 'push',
          value: function push(data) {
            this.array.push(data);
            this.length = this.array.length;
            this[0] = this.array[0];
          }
        }, {
          key: 'pop',
          value: function pop() {
            this.length = this.array.length - 1;
            return this.array.pop();
          }
        }, {
          key: 'unshift',
          value: function unshift(data) {
            this.array.unshift(data);
            this[0] = this.array[0];
            this.length = this.array.length;
          }
        }, {
          key: 'shift',
          value: function shift() {
            this.length = this.array.length - 1;
            return this.array.shift();
          }
        }, {
          key: 'size',
          value: function size() {
            return this.array.length;
          }
        }, {
          key: 'forEach',
          value: function forEach(callback) {
            var value = undefined;
            var i = 0;
            var len = this.array.length;
            for (; i < len; i++) {
              value = callback.call(this.array[i], this.array[i], i);
              if (value === false) {
                break;
              }
            }
          }
        }, {
          key: 'each',
          value: function each(callback) {
            var value = undefined;
            var i = 0;
            var len = this.array.length;
            for (; i < len; i++) {
              value = callback.call(this.array[i], i, this.array[i]);
              if (value === false) {
                break;
              }
            }
          }
        }, {
          key: 'slice',
          value: function slice() {
            var ret = new DOMStack();

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            ret.concat(this.array.slice.apply(this.array, args));
            ret.length = ret.array.length;
            return ret;
          }
        }, {
          key: 'splice',
          value: function splice() {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            this.array.splice.apply(this.array, args);
            this[0] = this.array[0];
            return this;
          }
        }, {
          key: 'filter',
          value: function filter() {
            var ret = new DOMStack();

            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }

            ret.concat(this.array.filter.apply(this.array, args));
            ret[0] = ret.array[0];
            return ret;
          }
        }, {
          key: 'map',
          value: function map() {
            var ret = new DOMStack();

            for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = arguments[_key4];
            }

            ret.concat(this.array.map.apply(this.array, args));
            ret[0] = ret.array[0];
            return ret;
          }
        }, {
          key: 'concat',
          value: function concat(collection) {
            var i = -1;
            var len = undefined;
            var temp = undefined;
            if (Array.isArray(collection)) {
              temp = collection;
              len = temp.length;
            } else if (collection && collection.objectType && collection.objectType === 'domstack') {
              temp = collection.getData();
              len = temp.length;
            } else if (collection.constructor.toString().match(/HTMLBodyElementConstructor/)) {
              temp = [collection];
              len = 1;
            }
            this.array.push.apply(this.array, temp);
            this[0] = this.array[0];
            this.length = this.array.length;
          }
        }, {
          key: 'reverse',
          value: function reverse() {
            for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              args[_key5] = arguments[_key5];
            }

            this.array.reverse.apply(this.array, args);
            this[0] = this.array[0];
          }
        }, {
          key: 'indexOf',
          value: function indexOf() {
            for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
              args[_key6] = arguments[_key6];
            }

            return this.array.indexOf.apply(this.array, args);
          }
        }, {
          key: 'every',
          value: function every() {
            for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
              args[_key7] = arguments[_key7];
            }

            return this.array.every.apply(this.array, args);
          }
        }, {
          key: 'some',
          value: function some() {
            for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
              args[_key8] = arguments[_key8];
            }

            return this.array.some.apply(this.array, args);
          }
        }, {
          key: 'unique',
          value: function unique() {
            var len = this.array.length;
            var ret = [];
            var obj = {};
            for (var i = 0; i < len; i++) {
              var arrayItem = JSON.stringify(this.array[i]);
              var arrayItemValue = this.array[i];
              if (obj[arrayItem] === undefined) {
                ret.push(arrayItemValue);
                obj[arrayItem] = 1;
              } else {
                obj[arrayItem]++;
              }
            }
            this.array = ret;
            this[0] = this.array[0];
            this.length = this.array.length;
          }
        }, {
          key: 'getData',
          value: function getData() {
            return this.array;
          }
        }, {
          key: 'purge',
          value: function purge() {
            this.array.length = 0;
            this.length = 0;
          }
        }]);

        return DOMStack;
      })();

      _export('DOMStack', DOMStack);
    }
  };
});
$__System.register('3', ['5', '12', '6e'], function (_export) {
  var _Object$keys, _Promise, DOMStack;

  return {
    setters: [function (_2) {
      _Object$keys = _2['default'];
    }, function (_3) {
      _Promise = _3['default'];
    }, function (_e) {
      DOMStack = _e.DOMStack;
    }],
    execute: function () {
      // Import DOMStack:
      /**
       * Truck Core. This function exports the Truck singleton.
       */
      'use strict';

      _export('default', (function (DOMStack) {
        var _arguments = arguments,
            _this = this;

        /**
         * Truck singleton. This function can query the DOM with the provided parameters, or execute a callback when the DOM is ready. This is all the base for Truck methods for DOM manipulation, as well as for the Truck MVC modules and widgets.
         */
        function Truck(selector, context) {
          var __this = this;
          var idRE = /^#([\w-]*)$/;
          var classRE = /^\.([\w-])$/;
          var tagRE = /^[\w-]+$/;
          var readyRE = /complete|loaded|interactive/;
          var temp = undefined;

          var slice = function slice(elements) {
            temp = new DOMStack([].slice.apply(elements));
            temp[0] = temp.array[0];
            return temp;
          };

          var getId = function getId(selector) {
            var el = document.getElementById(selector.split('#')[1]);
            if (el) {
              temp = new DOMStack([el]);
              temp[0] = new DOMStack([el]).array[0];
              temp.length = 1;
              return temp;
            } else {
              return new DOMStack();
            }
          };

          var getTag = function getTag(selector, context) {
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

          var getClass = function getClass(selector, context) {
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

          var getNode = function getNode(selector, context) {
            if (typeof selector === 'string') selector = selector.trim();
            if (typeof selector === 'string' && idRE.test(selector)) {
              return getId(selector);
            }

            if (selector && selector instanceof Array && selector.length) return selector;
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
              document.addEventListener("DOMContentLoaded", function () {
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

        var $ = Truck;

        /**
         * Truck extend method.
         */
        $.extend = function (targetObject, sourceObject) {
          if (!sourceObject) {
            sourceObject = targetObject;
            targetObject = Truck;
          }
          var keys = _Object$keys(sourceObject);
          var len = keys.length;
          while (len--) {
            targetObject[keys[len]] = sourceObject[keys[len]];
          }
          return Truck;
        };

        /**
         * Truck collection extend method.
         */
        $.fn = {
          extend: function extend(object) {
            return $.extend(DOMStack.prototype, object);
          }
        };

        /**
         * Truck utility methods.
         */
        $.extend({
          lib: "TruckJS",

          version: '1.0.0',

          noop: function noop() {},

          uuid: function uuid() {
            var d = Date.now();
            var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
            var randomLetter = charset[Math.floor(Math.random() * charset.length)];
            return randomLetter + 'xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
              var r = (d + Math.random() * 16) % 16 | 0;
              d = Math.floor(d / 16);
              return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
            });
          },

          html: function html(HTMLString) {
            var ret = new DOMStack();
            var temp = undefined;

            var wrapperMap = {
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

            var element = document.createElement('div');
            var match = /<\s*\w.*?>/g.exec(HTMLString);

            if (match !== null) {
              var tag = match[0].replace(/</g, '').replace(/>/g, '');
              var map = wrapperMap[tag] || wrapperMap.__default;
              HTMLString = map[1] + HTMLString + map[2];

              element.innerHTML = HTMLString;
              element = element.lastChild;

              temp = Array.prototype.slice.apply(element.childNodes);
              temp.forEach(function (ctx) {
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

          require: function require(src, callback, ctx) {
            var onerror = "onerror";
            var insertScript = function insertScript(script) {
              var firstScript = document.getElementsByTagName("script")[0];
              firstScript.parentNode.insertBefore(script, firstScript);
            };
            var script = document.createElement("script");
            var done = false;
            var err = undefined;
            var loadScript = undefined;
            var handleError = function handleError() {
              err = new Error(src || "EMPTY");
              loadScript();
            };
            var setupLoad = function setupLoad(fn) {
              return function () {
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

            loadScript = setupLoad(function () {
              script.onload = script[onerror] = null;
            });

            script[onerror] = handleError;
            script.onload = loadScript;
            script.async = true;
            script.charset = "utf-8";
            script.src = src;
            insertScript(script);
          },

          delay: function delay(milliseconds) {
            return new _Promise(function (resolve, reject) {
              setTimeout(resolve, milliseconds);
            });
          },

          each: function each(obj, callback) {
            var value = undefined;
            var key = undefined;
            var i = 0;
            var length = undefined;

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
              obj.forEach(function (item, idx) {
                return callback.call(item, idx, item);
              });
              return obj;
            } else if ($.type(obj) === 'object' && _Object$keys(obj).length) {
              for (key in obj) {
                if (callback.call(obj[key], key, obj[key]) === false) return obj;
              }
            }
          },

          unique: function unique(array) {
            if (!array || !Array.isArray(array)) return;
            var len = array.length;
            var obj = {};
            var ret = [];
            for (var i = 0; i < len; i++) {
              var arrayItem = JSON.stringify(array[i]);
              var arrayItemValue = array[i];
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
          replace: function replace(newElement, targetElement) {
            if (!newElement || !targetElement) return;
            var newEl = undefined;
            var targEl = undefined;
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
          isEmptyObject: function isEmptyObject(obj) {
            return _Object$keys(obj).length === 0;
          },

          isInteger: function isInteger(number) {
            return typeof number === 'number' && number % 1 === 0;
          },

          isFloat: function isFloat(number) {
            return typeof number === 'number' && number % 1 !== 0;
          },

          encode: function encode(value) {
            return encodeURIComponent(value);
          },

          escapeHTML: function escapeHTML(data) {
            var tagsToReplace = {
              '&': '&amp;',
              '<': '&lt;',
              '>': '&gt;',
              '(': '%28',
              ')': '%29'
            };
            var str = JSON.stringify(data);

            var replaceTag = function replaceTag(tag) {
              return tagsToReplace[tag] || tag;
            };

            var safe_tags_replace = function safe_tags_replace(str) {
              return str.replace(/[&<>]/g, replaceTag);
            };

            str = safe_tags_replace(str);
            return JSON.parse(str);
          },

          concat: function concat(args) {
            return args instanceof Array ? args.join('') : [].slice.apply(_arguments).join('');
          }
        });

        /**
         * Truck types method.
         */
        $.extend({
          type: function type(_type) {
            switch (typeof _type) {
              case 'boolean':
                return 'boolean';
              case 'number':
                return 'number';
              case 'string':
                return 'string';
              case 'function':
                return 'function';
              case 'object':
                if (Array.isArray(_type)) {
                  return 'array';
                } else if (Object.prototype.toString.call(_type) === '[object Date]') {
                  return 'date';
                } else if (Object.prototype.toString.call(_type) === '[object Error]') {
                  return 'error';
                } else if (Object.prototype.toString.call(_type) === '[object RegExp]') {
                  return 'regexp';
                } else if (Object.prototype.toString.call(_type) === '[object Object]') {
                  return 'object';
                }
            }
          }
        });

        /**
         * Truck string methods.
         */
        $.extend({
          camelize: function camelize(string) {
            if (typeof string !== 'string') return;
            return string.replace(/\-(.)/g, function (match, letter) {
              return letter.toUpperCase();
            });
          },

          deCamelize: function deCamelize(string) {
            if (typeof string !== 'string') return;
            return string.replace(/([A-Z])/g, '-$1').toLowerCase();
          },

          capitalize: function capitalize(string, all) {
            var self = _this;
            if (!string) {
              return;
            }
            if (typeof string !== 'string') return;
            if (all) {
              var _ret = (function () {
                var str = string.split(' ');
                var newstr = [];
                str.forEach(function (item) {
                  return newstr.push(self.capitalize(item));
                });
                return {
                  v: newstr.join(' ')
                };
              })();

              if (typeof _ret === 'object') return _ret.v;
            } else {
              return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
            }
          }
        });

        /**
         * Truck DOM method.
         */
        $.fn.extend({
          find: function find(selector, context) {
            var ret = new DOMStack();
            if (!this.size()) return ret;
            if (context) {
              $(context).forEach(function () {
                Array.prototype.slice.apply(context.querySelectorAll(selector)).forEach(function (node) {
                  return ret.push(node);
                });
              });
            } else {
              this.forEach(function (ctx) {
                if (ctx && ctx.children && ctx.children.length) {
                  Array.prototype.slice.apply(ctx.querySelectorAll(selector)).forEach(function (node) {
                    return ret.push(node);
                  });
                }
              });
            }
            return ret;
          },

          is: function is(arg) {
            var _this2 = this;

            var ret = false;
            if (!this.size() || !arg) return;
            if (!this.size()) return;
            var that = this;
            var __is = function __is(node, arg) {
              if (typeof arg === 'string') {
                var elements = Array.prototype.slice.apply(node.parentNode.querySelectorAll(arg));
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
                if (_this2.slice.apply(arg).indexOf(node) !== -1) {
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
            this.forEach(function (item) {
              if (__is(item, arg)) {
                ret = true;
              }
            });
            return ret;
          },

          not: function not(selector) {
            if (!this.size() || !selector) return new DOMStack();
            var ret = new DOMStack();
            var temp = [];
            var elems = undefined;
            if (typeof selector === 'string') {
              elems = Array.prototype.slice.apply(this.array[0].parentNode.querySelectorAll(selector));
              this.forEach(function (element) {
                if (!elems[0]) {
                  ret.push(element);
                } else {
                  elems.forEach(function (item) {
                    if (element !== item) {
                      ret.push(element);
                    }
                  });
                }
              });
              return ret;
            } else if (selector && selector.objectType && selector.objectType === 'domstack') {
              this.forEach(function (element) {
                selector.forEach(function (node) {
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
              this.forEach(function (element) {
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

          has: function has(arg) {
            var _this3 = this;

            if (!this.size()) return new DOMStack();
            var items = new DOMStack();

            var __has = function __has(node, arg) {
              if (typeof arg === 'string') {
                if (node.querySelector(arg)) {
                  return true;
                }
              } else if (arg.nodeType === 1) {
                if (Array.prototype.slice(_this3.children).data.indexOf(arg)) {
                  return true;
                }
              } else {
                return false;
              }
            };

            this.forEach(function (element) {
              if (__has(element, arg)) {
                items.push(element);
              }
            });
            return items;
          },

          prev: function prev(selector) {
            if (!this.size()) return new DOMStack();
            var ret = new DOMStack();
            var children = undefined;
            var prevElement = this[0].previousElementSibling;
            if (selector && typeof selector === 'string') {
              children = this.siblings(selector);
              children.forEach(function (element) {
                if (prevElement === element) ret.push(element);
              });
            } else {
              ret.push(this[0].previousElementSibling);
            }
            return ret;
          },

          prevAll: function prevAll(selector) {
            if (!this.size()) return new DOMStack();
            var ret = new DOMStack();
            var __siblings = undefined;
            var __self = this[0];
            var __sibs = Array.prototype.slice.apply(this[0].parentNode.children);
            var pos = __sibs.indexOf(__self);
            __sibs.splice(pos, __sibs.length - 1);
            if (selector && typeof selector === 'string') {
              __siblings = this.siblings(selector).array;
              __sibs.forEach(function (element) {
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

          next: function next(selector) {
            if (!this.size()) return new DOMStack();
            var ret = new DOMStack();
            var children = undefined;
            var nextElement = this[0].nextElementSibling;
            if (selector && typeof selector === 'string') {
              children = this.siblings(selector);
              children.forEach(function (element) {
                if (nextElement === element) ret.push(element);
              });
            } else {
              ret.push(this[0].nextElementSibling);
            }
            return ret;
          },

          nextAll: function nextAll(selector) {
            if (!this.size()) return new DOMStack();
            var ret = new DOMStack();
            var __siblings = undefined;
            var __parent = undefined;
            var __self = this[0];
            var __sibs = Array.prototype.slice.apply(this[0].parentNode.children);
            var pos = __sibs.indexOf(__self);
            __sibs.splice(0, pos + 1);
            if (selector && typeof selector === 'string') {
              __parent = this.array[0].parentNode;
              __siblings = $(__parent).find(selector);
              __sibs.splice(0, __sibs.indexOf(this.array[0]));
              __sibs.forEach(function (element) {
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

          first: function first() {
            if (!this.size()) return new DOMStack();
            return this.eq(0);
          },

          last: function last() {
            if (!this.size()) return new DOMStack();
            return this.eq(-1);
          },

          index: function index(element) {
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

          children: function children(selector) {
            if (!this.size()) return new DOMStack();
            var ret = new DOMStack();
            if (!selector) {
              this.forEach(function (node) {
                Array.prototype.slice.apply(node.children).forEach(function (ctx) {
                  return ret.push(ctx);
                });
              });
              ret[0] = ret.array[0];
            } else {
              this.forEach(function (node) {
                Array.prototype.slice.apply(node.children).forEach(function (ctx) {
                  if ($(ctx).is(selector)) {
                    ret.push(ctx);
                  }
                });
              });
              ret[0] = ret.array[0];
            }
            return ret;
          },

          siblings: function siblings(selector) {
            if (!this.size()) return new DOMStack();
            var __siblings = undefined;
            var ret = new DOMStack();
            var $this = this;
            var parent = undefined;
            var children = Array.prototype.slice.apply(this.array[0].parentNode.children);

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

          parent: function parent() {
            if (!this.size()) return new DOMStack();
            var ret = new DOMStack();
            this.forEach(function (ctx) {
              return ret.push(ctx.parentNode);
            });
            ret.unique();
            return ret;
          },

          closest: function closest(selector) {
            if (!this.size()) return new DOMStack();
            var ret = new DOMStack();
            if (typeof selector === 'undefined') {
              return new DOMStack();
            }
            var position = null;
            var p = this[0].parentNode;
            if (!p) {
              return new DOMStack();
            }
            if (typeof selector === 'string') {
              selector.trim();
            }
            if (typeof selector === 'number') {
              position = selector || 1;
              for (var i = 1; i < position; i++) {
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

          css: function css(property, value) {
            if (!this.size()) return new DOMStack();
            var pixelRE = /top|bottom|left|right|margin|padding/img;
            var postFix = '';
            var ret = new DOMStack();
            var testForPixelSupport = function testForPixelSupport(value, property) {
              if ($.type(value) === 'number' && property.match(pixelRE)) {
                postFix = 'px';
              }
            };
            if (!property) return new DOMStack();
            if (!value && $.type(property) === 'object') {
              this.forEach(function (node) {
                for (var key in property) {
                  if (property.hasOwnProperty(key)) {
                    testForPixelSupport(property[key], key);
                    node.style[$.camelize(key)] = property[key] + postFix;
                  }
                }
                ret.push(node);
              });
            } else if (!value && typeof property === 'string') {
              if (!this.size()) return;
              return document.defaultView.getComputedStyle(this.eq(0).array[0], null).getPropertyValue(property.toLowerCase());
            } else if (!!value) {
              this.forEach(function (node) {
                testForPixelSupport(value, property);
                node.style[$.camelize(property)] = value + postFix;
                ret.push(node);
              });
            }
            return ret;
          },

          width: function width() {
            if (!this.size()) return;
            return this.eq(0).array[0].clientWidth;
          },

          height: function height() {
            if (!this.size()) return;
            return this.eq(0).array[0].clientHeight;
          },

          before: function before(content) {
            var _this4 = this;

            if (!this.size()) {
              return new DOMStack();
            }
            var __before = function __before(node, content) {
              if (typeof content === 'string' || typeof content === 'number') {
                content = $.html(content);
              }
              if (content && content.objectType && content.objectType === 'domstack') {
                var len = content.size();
                var i = 0;
                while (i < len) {
                  node.parentNode.insertBefore(content.array[i], node);
                  i++;
                }
              } else if (content && content.nodeType === 1) {
                node.parentNode.insertBefore(content, node);
              }
              return _this4;
            };
            this.forEach(function (node) {
              return __before(node, content);
            });
            return this;
          },

          after: function after(args) {
            var _this5 = this;

            if (!this.size()) return new DOMStack();
            var __after = function __after(node, content) {
              var parent = node.parentNode;
              if (typeof content === 'string' || typeof content === 'number') {
                content = $.html(content);
              }
              if (content && content.objectType && content.objectType === 'domstack') {
                var i = 0,
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
              return _this5;
            };
            this.forEach(function (node) {
              return __after(node, args);
            });
            return this;
          },

          prepend: function prepend(content) {
            if (!this.size()) return new DOMStack();

            if (typeof content === 'string' || typeof content === 'number') {
              this.forEach(function (element) {
                element.insertAdjacentHTML('afterbegin', content);
              });
            } else if (content && content.objectType && content.objectType === 'domstack') {
              this.forEach(function (element) {
                content.forEach(function (node) {
                  element.insertBefore(node, element.firstChild);
                });
              });
            } else if (content && content.nodeType === 1) {
              this.forEach(function (element) {
                element.insertBefore(node, element.firstChild);
              });
            }
            return this;
          },

          append: function append(content) {
            if (!this.size()) return new DOMStack();

            if (typeof content === 'string' || typeof content === 'number') {
              this.forEach(function (element) {
                element.insertAdjacentHTML('beforeend', content);
              });
            } else if (content && content.objectType && content.objectType === 'domstack') {
              this.forEach(function (element) {
                content.forEach(function (node) {
                  element.insertBefore(node, null);
                });
              });
            } else if (content && content.nodeType === 1) {
              this.forEach(function (element) {
                element.insertBefore(node, null);
              });
            }
            return this;
          },

          prependTo: function prependTo(selector) {
            if (!this.size()) return new DOMStack();
            this.reverse();
            this.forEach(function (item) {
              return $(selector).prepend(item);
            });
            return this;
          },

          appendTo: function appendTo(selector) {
            if (!this.size()) return new DOMStack();
            this.forEach(function (item) {
              return $(selector).append(item);
            });
            return this;
          },

          clone: function clone(value) {
            if (!this.size()) return new DOMStack();
            var ret = new DOMStack();
            this.forEach(function (ctx) {
              if (value === true || !value) {
                ret.push(ctx.cloneNode(true));
              } else {
                ret.push(ctx.cloneNode(false));
              }
            });
            return ret;
          },

          wrap: function wrap(string) {
            if (!this.size() || !string) return new DOMStack();
            var tempNode = undefined;
            var empNode = undefined;
            var whichClone = undefined;
            this.forEach(function (ctx) {
              tempNode = $.html(string);
              empNode = tempNode.array[0];
              whichClone = $(ctx).clone(true);
              tempNode.append(whichClone);
              $(ctx).before(tempNode);
              $(ctx).remove();
            });
          },

          unwrap: function unwrap() {
            if (!this.size()) return new DOMStack();
            var parentNode = null;
            this.forEach(function (node) {
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

          offset: function offset() {
            if (!this.size()) return;
            var offset = this.eq(0).array[0].getBoundingClientRect();
            return {
              top: Math.round(offset.top),
              left: Math.round(offset.left)
            };
          },

          position: function position() {
            var obj = {
              top: 0,
              left: 0
            };
            var pos = this.array[0].getBoundingClientRect();
            var borderTop = parseInt(this.parent().css('border-top-width'), 10) || 0;
            var borderLeft = parseInt(this.parent().css('border-left-width'), 10) || 0;
            var parentPos = this.array[0].parentNode.getBoundingClientRect();
            var compareOffsets1 = function compareOffsets1(val1, val2) {
              return Math.round(val1 - val2);
            };
            obj.top = compareOffsets1(pos.top, parentPos.top + borderTop);
            obj.left = compareOffsets1(pos.left, parentPos.left + borderLeft);
            return obj;
          },

          empty: function empty() {
            if (!this.size()) return new DOMStack();
            var ret = new DOMStack();
            this.forEach(function (ctx) {
              $(ctx).children().off();
              ctx.textContent = '';
              ret.push(ctx);
            });
            return ret;
          },

          html: function html(content) {
            if (!this.size()) return new DOMStack();
            if (content === '') {
              this.forEach(function (node) {
                node.innerHTML = '';
              });
              return this;
            } else if (content) {
              this.forEach(function (node) {
                node.innerHTML = content;
              });
              return this;
            } else if (!content) {
              return this.array[0].innerHTML.trim();
            }
          },

          text: function text(string) {
            var ret = '';
            if (!this.size()) return new DOMStack();
            if (!!string || string === 0) {
              this.forEach(function (element) {
                element.innerText = string;
              });
              return this;
            } else {
              this.forEach(function (element) {
                ret += element.innerText;
                ret.trim();
              });
              return ret;
            }
          },

          replaceWith: function replaceWith(content) {
            if (content && content.nodeType && content.nodeType === 1) {
              $(content).off();
            } else if (content && contnet.objectType && content.objectType === 'domstack') {
              content.off();
            }
            this.forEach(function (node) {
              $(node).off();
              if (typeof content === 'string') {
                $.replace($(content), node);
              } else {
                $.replace($(content), node);
              }
            });
          },

          remove: function remove() {
            if (!this.size()) return new DOMStack();
            this.forEach(function (node) {
              $(node).off();
              node.parentNode.removeChild(node);
            });
          },

          addClass: function addClass(className) {
            if (!this.size()) return new DOMStack();
            if (typeof className !== "string") return;
            var ret = new DOMStack();
            var classes = undefined;
            this.forEach(function (node) {
              if (/\s/.test(className)) {
                classes = className.split(' ');
                classes.forEach(function (name) {
                  node.classList.add(name);
                });
              } else {
                node.classList.add(className);
              }
              ret.push(node);
            });
            return ret;
          },

          hasClass: function hasClass(className) {
            if (!this.size()) return new DOMStack();
            var temp = false;
            this.forEach(function (element) {
              if (element.classList.contains(className)) {
                temp = true;
              }
            });
            return temp;
          },

          removeClass: function removeClass(className) {
            if (!this.size()) return new DOMStack();
            var ret = new DOMStack();
            var classes = undefined;
            this.forEach(function (node) {
              if (!node) return;
              if (/\s/.test(className)) {
                classes = className.split(' ');
                classes.forEach(function (name) {
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

          toggleClass: function toggleClass(className) {
            if (!this.size()) return new DOMStack();
            var ret = new DOMStack();
            this.forEach(function (node) {
              node.classList.toggle(className);
              ret.push(node);
            });
            return ret;
          },

          attr: function attr(property, value) {
            if (!this.size()) return new DOMStack();
            var ret = new DOMStack();
            var __attr = function __attr(node, property, value) {
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
              this.forEach(function (node) {
                __attr(node, property, value);
                ret.push(node);
              });
            }
            if (ret.length) {
              return ret;
            }
          },

          removeAttr: function removeAttr(attribute) {
            if (!this.size()) return new DOMStack();
            var ret = new DOMStack();
            this.forEach(function (node) {
              if (!!node.hasAttribute(attribute)) {
                node.removeAttribute(attribute);
                ret.push(node);
              }
            });
            return ret;
          },

          prop: function prop(property, value) {
            if (!this.size()) return new DOMStack();
            if (value === false || !!value) {
              this.forEach(function (element) {
                element[property] = value;
              });
              return this;
            } else if (this.array[0] && this.array[0][property]) {
              return this.array[0][property];
            }
          },

          removeProp: function removeProp(property) {
            if (!this.size()) return new DOMStack();
            this[0][property] = false;
            return [this[0]];
          },

          disable: function disable() {
            if (!this.size()) return new DOMStack();
            this.forEach(function (node) {
              node.classList.add('disabled');
              node.disabled = true;
              node.style.cursor = 'default';
            });
            return this;
          },

          enable: function enable() {
            if (!this.size()) return new DOMStack();
            this.forEach(function (node) {
              node.classList.remove('disabled');
              node.removeAttribute('disabled');
              node.style.cursor = 'auto';
            });
            return this;
          },

          val: function val(value) {
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

          hide: function hide() {
            var display = this.css('display');
            this.data('display_attr', display);
            this.css('display', 'none');
          },

          show: function show() {
            var display = this.data('display_attr');
            if (display === 'none' || !display) {
              display = 'block';
            }
            this.css('display', display);
          }
        });

        /**
         * Truck data cache.
         */
        var TruckDataCache = {
          elements: {}
        };
        $.fn.extend({
          data: function data(key, value) {
            if (!this.size()) return new DOMStack();
            var val = undefined;
            var id = undefined;
            var ctx = this.array[0];
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
              var obj = {};
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

          removeData: function removeData(key) {
            var _this6 = this;

            if (!this.size()) return this;
            this.forEach(function (element) {
              var id = element.id;
              if (!id) return _this6;
              if (!TruckDataCache.elements[id]) {
                return _this6;
              }
              if (!key) {
                delete TruckDataCache.elements[id];
                return _this6;
              }
              if (_Object$keys(TruckDataCache.elements[id]).length === 0) {
                delete TruckDataCache.elements[id];
              } else {
                delete TruckDataCache.elements[id][key];
              }
              return _this6;
            });
          }
        });

        /**
         * Truck serialize methods.
         */
        $.fn.extend({
          serializeArray: function serializeArray() {
            var name = undefined;
            var type = undefined;
            var ret = [];
            var add = function add(value) {
              if ($.type(value) === 'array') {
                return value.forEach(add);
              }
              ret.push({
                name: name,
                value: value
              });
            };
            if (this[0]) {
              $.each([].slice.apply(this[0].elements), function (idx, field) {
                type = field.type;
                name = field.name;
                if (name && field.nodeName.toLowerCase() != 'fieldset' && !field.disabled && type != 'submit' && type != 'reset' && type != 'button' && type != 'file' && (type != 'radio' && type != 'checkbox' || field.checked)) {
                  add($(field).val());
                }
              });
            }
            return ret;
          },

          // Serialize the values of a form:
          //================================
          serialize: function serialize() {
            var ret = [];
            this.serializeArray().forEach(function (element) {
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
          param: function param(obj, traditional) {

            // Private function used by $.param:
            //==================================
            function serialize(params, obj, traditional, scope) {
              var type = undefined,
                  array = $.type(obj) === 'array',
                  hash = $.isEmptyObject(obj);

              // If it's an array of objects:
              if ($.type(obj) === 'array') {
                $.each(obj, function (key, value) {
                  type = $.type(value);
                  if (scope) {
                    key = traditional ? scope : scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']';
                  }
                  if (!scope && array) {
                    params.add(value.name, value.value);
                  } else if (type == "array" || !traditional && type == "object") {
                    serialize(params, value, traditional, key);
                  } else {
                    params.add(key, value);
                  }
                });

                // Else its an object (use key/value loop):
              } else if ($.type(obj) === 'object') {
                  for (var key in obj) {
                    type = $.type(obj[key]);
                    if (scope) {
                      key = traditional ? scope : scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']';
                    }
                    if (!scope && array) {
                      params.add(obj[key].name, obj[key].obj[key]);
                    } else if (type == "array" || !traditional && type == "object") {
                      serialize(params, obj[key], traditional, key);
                    } else {
                      params.add(key, obj[key]);
                    }
                  }
                }
            }
            var params = [];
            params.add = function (key, value) {
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

        (function () {

          // ======================================
          // Define interface for handling events:
          // ======================================
          var TruckEventStack = function TruckEventStack(array) {
            var __array = [];
            if (array && Array.isArray(array)) {
              var i = -1;
              var len = array.length;
              while (++i < len) {
                __array[i] = array[i];
              }
            } else if (array) {
              var arr = Array.prototype.slice.apply(_arguments);
              arr.forEach(function (ctx, idx) {
                __array[idx] = ctx;
              });
            }
            return {

              size: function size() {
                return __array.length;
              },

              push: function push(data) {
                return __array.push(data);
              },

              pop: function pop() {
                return __array.pop();
              },

              eq: function eq(index) {
                if (index < 0) {
                  return __array[__array.length + index];
                } else {
                  return __array[index];
                }
              },

              forEach: function forEach(callback) {
                var value = undefined;
                var i = -1;
                var len = __array.length;
                while (++i < len) {
                  value = callback.call(__array[i], __array[i], i);
                  if (value === false) {
                    break;
                  }
                }
              },

              shift: function shift() {
                return __array.shift.apply(__array, _arguments);
              },

              unshift: function unshift() {
                return __array.unshift.apply(__array, _arguments);
              },

              splice: function splice() {
                return __array.splice.apply(__array, _arguments);
              },

              indexOf: function indexOf() {
                return __array.indexOf.apply(__array, _arguments);
              },

              getData: function getData() {
                return __array;
              },

              purge: function purge() {
                return __array = [];
              }
            };
          };

          var TruckEventCache = {
            elements: {}
          };

          /* jshint, evil: false, validthis:true, unused:false, loopfunc: false,
          smarttabs: true, nonew: false */

          // //////////////////////////////////////////////////
          // Private method to set events on TruckEventCache
          // //////////////////////////////////////////////////
          var bind = function bind(element, event, callback, capturePhase) {
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
          var deleteFromEventStack = function deleteFromEventStack(toDelete, evtStck) {
            var len = toDelete.length;
            for (var i = 0; len > i; len--) {
              evtStck.splice(toDelete[len - 1], 1);
            }
          };
          ////////////////////////////////////////////////////
          // Private method to unbind events on TruckEventCache
          ////////////////////////////////////////////////////
          var unbind = function unbind(element, event, callback, capturePhase) {

            var eventStack = TruckEventCache.elements[element.id];
            if (!eventStack) return;
            var deleteOrder = [];

            if (!event) {
              deleteOrder = [];
              eventStack.forEach(function (evt, idx) {
                element.removeEventListener(evt.event, evt.callback, evt.capturePhase);
                deleteOrder.push(idx);
              });

              deleteFromEventStack(deleteOrder, eventStack);
            } else if (!!event && !callback) {
              deleteOrder = [];
              eventStack.forEach(function (evt, idx) {
                if (evt.event === event) {
                  element.removeEventListener(evt.event, evt.callback, evt.capturePhase);
                  deleteOrder.push(idx);
                }
              });

              deleteFromEventStack(deleteOrder, eventStack);
            } else if (callback) {
              deleteOrder = [];
              eventStack.forEach(function (evt, idx) {
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

          var delegate = function delegate(element, selector, event, callback, capturePhase) {
            var delegateElement = $(element).array[0];
            $(element).forEach(function (ctx) {
              $(ctx).on(event, function (e) {
                var target = e.target;
                if (e.target.nodeType === 3) {
                  target = e.target.parentNode;
                }
                $(ctx).find(selector).forEach(function (delegateElement) {
                  if (delegateElement === target) {
                    callback.call(delegateElement, e);
                  } else {
                    try {
                      var ancestor = $(target).closest(selector);
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
          var undelegate = function undelegate(element, selector, event, callback, capturePhase) {

            unbind($(element).array[0], event, callback, capturePhase);
          };

          $.fn.extend({
            on: function on(event, selector, callback, capturePhase) {

              if (!selector && /Object/img.test(event.constructor.toString())) {
                this.forEach(function (element) {
                  for (var key in event) {
                    if (event.hasOwnProperty(key)) {
                      $(element).on(key, event[key]);
                    }
                  }
                });
              }
              var ret = [];
              var events = undefined;
              if (typeof event === 'string') {
                event = event.trim();
                if (/\s/.test(event)) {
                  events = event.split(' ');
                  this.forEach(function (ctx) {
                    events.forEach(function (evt) {
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
              this.forEach(function (ctx) {
                if (typeof selector === 'function') {
                  return bind(ctx, event, selector, callback);
                } else {
                  delegate(ctx, selector, event, callback, capturePhase);
                  // ret.push(ctx);
                }
              });
              return this;
            },

            off: function off(event, selector, callback, capturePhase) {
              var ret = new DOMStack();
              if (!this.size()) return ret;

              this.forEach(function (ctx) {
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

            trigger: function trigger(event) {
              if (!this.size()) return new DOMStack();
              this.forEach(function (ctx) {
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
        $(function () {
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
        (function () {
          "use strict";
          var touch = {};
          var touchTimeout = undefined;
          var swipeTimeout = undefined;
          var tapTimeout = undefined;
          var longTapDelay = 750;
          var singleTapDelay = 150;
          $.gestureLength = 50;
          if ($.isAndroid) singleTapDelay = 200;
          var longTapTimeout;

          function parentIfText(node) {
            return 'tagName' in node ? node : node.parentNode;
          }

          function swipeDirection(x1, x2, y1, y2) {
            return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? x1 - x2 > 0 ? 'left' : 'right' : y1 - y2 > 0 ? 'up' : 'down';
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
          $(function () {
            var now = undefined;
            var delta = undefined;
            var body = $('body');
            var twoTouches = false;

            // Capture start of event:
            //========================
            body.on($.eventStart, function (e) {
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
                body.on('MSHoldVisual', function (e) {
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
            body.on($.eventMove, function (e) {
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
            body.on($.eventEnd, function (e) {
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
                if (touch.x2 && Math.abs(touch.x1 - touch.x2) > $.gestureLength || touch.y2 && Math.abs(touch.y1 - touch.y2) > $.gestureLength) {
                  swipeTimeout = setTimeout(function () {
                    if (touch && touch.el) {
                      touch.el.trigger('swipe');
                      touch.el.trigger('swipe' + swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2));
                      touch = {};
                    }
                  }, 0);

                  // Normal tap:
                } else if ('last' in touch) {
                    // Delay by one tick so we can cancel the 'tap' event if 'scroll' fires:
                    tapTimeout = setTimeout(function () {
                      // Trigger double tap immediately:
                      if (touch && touch.isDoubleTap) {
                        if (touch && touch.el) {
                          touch.el.trigger('doubletap');
                          touch = {};
                        }
                      } else {
                        // Trigger tap after singleTapDelay:
                        touchTimeout = setTimeout(function () {
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
          ['tap', 'doubletap', 'longtap', 'swipeleft', 'swiperight', 'swipeup', 'swipedown'].forEach(function (_method) {
            $.fn.extend({
              method: function method(callback) {
                return this.on(_method, callback);
              }
            });
          });
        })();

        /**
         * Truck collection utilities.
         */
        $.fn.extend({
          forEach: function forEach(callback) {
            this.each(function (idx, ctx) {
              callback.call(ctx, ctx, idx);
            });
          },

          disable: function disable() {
            if (!this.size()) return $();
            this.forEach(function (node) {
              node.classList.add('disabled');
              node.disabled = true;
              node.style.cursor = 'default';
            });
            return this;
          },

          enable: function enable() {
            if (!this.size()) return $();
            this.forEach(function (node) {
              node.classList.remove('disabled');
              node.removeAttribute('disabled');
              node.style.cursor = 'auto';
            });
            return this;
          },

          iz: function iz(selector) {
            var ret = $();
            this.forEach(function (ctx) {
              if ($(ctx).is(selector)) {
                ret.push(ctx);
              }
            });
            return ret;
          },

          iznt: function iznt(selector) {
            var ret = $();
            this.each(function (_, ctx) {
              if (!$(ctx).is(selector)) {
                ret.push(ctx);
              }
            });
            return ret;
          },

          haz: function haz(selector) {
            var ret;
            if (typeof jQuery !== 'undefined') {
              ret = this.has(selector);
            } else {
              ret = new DOMStack();
              this.forEach(function (element) {
                if ($(element).has(selector)[0]) {
                  ret.push(element);
                }
              });
            }
            return ret;
          },

          haznt: function haznt(selector) {
            var ret;
            if (typeof jQuery !== 'undefined') {
              ret = $();
              this.each(function (_, element) {
                if (!$(element).has(selector)[0]) {
                  ret.push(element);
                }
              });
            } else {
              ret = new DOMStack();
              this.forEach(function (element) {
                if (!$(element).has(selector)[0]) {
                  ret.push(element);
                }
              });
            }
            return ret;
          },

          hazClass: function hazClass(className) {
            if (className) {
              return this.iz('.' + className);
            } else {
              return new DOMStack();
            }
          },

          hazntClass: function hazntClass(className) {
            if (className) {
              return this.iznt('.' + className);
            } else {
              return new DOMStack();
            }
          },

          hazAttr: function hazAttr(attribute) {
            if (attribute) {
              return this.iz('[' + attribute + ']');
            } else {
              return new DOMStack();
            }
          },

          hazntAttr: function hazntAttr(attribute) {
            if (attribute) {
              return this.iznt('[' + attribute + ']');
            } else {
              return new DOMStack();
            }
          }
        });

        window.$ = Truck;

        return $;
      })(DOMStack));
    }
  };
});
$__System.register('6f', ['3', '12'], function (_export) {
  var _Promise;

  return {
    setters: [function (_2) {}, function (_) {
      _Promise = _['default'];
    }],
    execute: function () {
      // Truck Module - Box, Data Persistence:
      'use strict';

      $.extend({
        Box: (function (globalObject) {
          //==================
          // IndexedDB Driver:
          //==================
          (function () {
            var self = this;
            var indexedDB = indexedDB || globalObject.indexedDB || globalObject.webkitIndexedDB || globalObject.mozIndexedDB || globalObject.OIndexedDB || globalObject.msIndexedDB;
            if (!indexedDB) {
              return;
            }

            var DETECT_BLOB__support_STORE = 'truck-box-detect-blob-support';
            var supportsBlobs = undefined;
            var dbContexts = undefined;

            function __createBlob(parts, properties) {
              parts = parts || [];
              properties = properties || {};
              try {
                return new Blob(parts, properties);
              } catch (e) {
                if (e.name !== 'TypeError') {
                  throw e;
                }
                var BlobBuilder = globalObject.BlobBuilder || globalObject.MSBlobBuilder || globalObject.MozBlobBuilder || globalObject.WebKitBlobBuilder;
                var builder = new BlobBuilder();
                for (var i = 0; i < parts.length; i += 1) {
                  builder.append(parts[i]);
                }
                return builder.getBlob(properties.type);
              }
            }

            function __binStringToArrayBuffer(bin) {
              var length = bin.length;
              var buf = new ArrayBuffer(length);
              var arr = new Uint8Array(buf);
              for (var i = 0; i < length; i++) {
                arr[i] = bin.charCodeAt(i);
              }
              return buf;
            }

            function __blobAjax(url) {
              return new _Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open('GET', url);
                xhr.withCredentials = true;
                xhr.responseType = 'arraybuffer';

                xhr.onreadystatechange = function () {
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
              return new _Promise(function (resolve, reject) {
                var blob = __createBlob([''], {
                  type: 'image/png'
                });
                var txn = idb.transaction([DETECT_BLOB__support_STORE], 'readwrite');
                txn.objectStore(DETECT_BLOB__support_STORE).put(blob, 'key');
                txn.oncomplete = function () {
                  var blobTxn = idb.transaction([DETECT_BLOB__support_STORE], 'readwrite');
                  var getBlobReq = blobTxn.objectStore(DETECT_BLOB__support_STORE).get('key');
                  getBlobReq.onerror = reject;
                  getBlobReq.onsuccess = function (e) {

                    var storedBlob = e.target.result;
                    var url = URL.createObjectURL(storedBlob);

                    __blobAjax(url).then(function (res) {
                      resolve(!!(res && res.type === 'image/png'));
                    }, function () {
                      resolve(false);
                    }).then(function () {
                      URL.revokeObjectURL(url);
                    });
                  };
                };
              })['catch'](function () {
                return false; // error, so assume unsupported
              });
            }

            function __checkBlobSupport(idb) {
              if (typeof supportsBlobs === 'boolean') {
                return _Promise.resolve(supportsBlobs);
              }
              return __checkBlobSupportWithoutCaching(idb).then(function (value) {
                supportsBlobs = value;
                return supportsBlobs;
              });
            }

            function __encodeBlob(blob) {
              return new _Promise(function (resolve, reject) {
                var reader = new FileReader();
                reader.onerror = reject;
                reader.onloadend = function (e) {
                  var base64 = btoa(e.target.result || '');
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
              var arrayBuff = __binStringToArrayBuffer(atob(encodedBlob.data));
              return __createBlob([arrayBuff], {
                type: encodedBlob.type
              });
            }

            function __isEncodedBlob(value) {
              return value && value.__truck_box_encoded_blob;
            }

            function __initStorage(options) {
              var self = this;
              var dbInfo = {
                db: null
              };

              if (options) {
                for (var i in options) {
                  dbInfo[i] = options[i];
                }
              }

              if (!dbContexts) {
                dbContexts = {};
              }

              var dbContext = dbContexts[dbInfo.name];

              if (!dbContext) {
                dbContext = {
                  box: [],
                  db: null
                };
                dbContexts[dbInfo.name] = dbContext;
              }

              dbContext.box.push(this);

              var readyPromises = [];

              function ignoreErrors() {
                return _Promise.resolve();
              }

              for (var j = 0; j < dbContext.box.length; j++) {
                var truckbox = dbContext.box[j];
                if (truckbox !== this) {
                  readyPromises.push(truckbox.ready()['catch'](ignoreErrors));
                }
              }

              var box = dbContext.box.slice(0);
              return _Promise.all(readyPromises).then(function () {
                dbInfo.db = dbContext.db;
                return __getOriginalConnection(dbInfo);
              }).then(function (db) {
                dbInfo.db = db;
                if (_isUpgradeNeeded(dbInfo, self.__defaultConfig.version)) {
                  return __getUpgradedConnection(dbInfo);
                }
                return db;
              }).then(function (db) {
                dbInfo.db = dbContext.db = db;
                self.__dbInfo = dbInfo;
                for (var k in box) {
                  var truckbox = box[k];
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
              return new _Promise(function (resolve, reject) {
                if (dbInfo.db) {
                  if (upgradeNeeded) {
                    dbInfo.db.close();
                  } else {
                    return resolve(dbInfo.db);
                  }
                }

                var dbArgs = [dbInfo.name];

                if (upgradeNeeded) {
                  dbArgs.push(dbInfo.version);
                }

                var openreq = indexedDB.open.apply(indexedDB, dbArgs);

                if (upgradeNeeded) {
                  openreq.onupgradeneeded = function (e) {
                    var db = openreq.result;
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

                openreq.onerror = function () {
                  reject(openreq.error);
                };

                openreq.onsuccess = function () {
                  resolve(openreq.result);
                };
              });
            }

            function _isUpgradeNeeded(dbInfo, defaultVersion) {
              if (!dbInfo.db) {
                return true;
              }

              var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.boxName);
              var isDowngrade = dbInfo.version < dbInfo.db.version;
              var isUpgrade = dbInfo.version > dbInfo.db.version;

              if (isDowngrade) {
                if (dbInfo.version !== defaultVersion) {
                  globalObject.console.warn('The database "' + dbInfo.name + '"' + ' can\'t be downgraded from version ' + dbInfo.db.version + ' to version ' + dbInfo.version + '.');
                }
                dbInfo.version = dbInfo.db.version;
              }

              if (isUpgrade || isNewStore) {
                if (isNewStore) {
                  var incVersion = dbInfo.db.version + 1;
                  if (incVersion > dbInfo.version) {
                    dbInfo.version = incVersion;
                  }
                }

                return true;
              }

              return false;
            }

            function get(key, callback) {
              var self = this;
              if (typeof key !== 'string') {
                globalObject.console.warn(key + ' used as a key, but it is not a string.');
                key = String(key);
              }

              var promise = new _Promise(function (resolve, reject) {
                self.ready().then(function () {
                  var dbInfo = self.__dbInfo;
                  var store = dbInfo.db.transaction(dbInfo.boxName, 'readonly').objectStore(dbInfo.boxName);
                  var req = store.get(key);

                  req.onsuccess = function () {
                    var value = req.result;
                    if (value === undefined) {
                      value = null;
                    }
                    if (__isEncodedBlob(value)) {
                      value = __decodeBlob(value);
                    }
                    resolve(value);
                  };

                  req.onerror = function () {
                    reject(req.error);
                  };
                })['catch'](reject);
              });

              executeCallback(promise, callback);
              return promise;
            }

            function each(iterator, callback) {
              var self = this;
              var promise = new _Promise(function (resolve, reject) {
                self.ready().then(function () {
                  var dbInfo = self.__dbInfo;
                  var store = dbInfo.db.transaction(dbInfo.boxName, 'readonly').objectStore(dbInfo.boxName);

                  var req = store.openCursor();
                  var iterationNumber = 1;

                  req.onsuccess = function () {
                    var cursor = req.result;

                    if (cursor) {
                      var value = cursor.value;
                      if (__isEncodedBlob(value)) {
                        value = __decodeBlob(value);
                      }
                      var result = iterator(value, cursor.key, iterationNumber++);

                      if (result !== void 0) {
                        resolve(result);
                      } else {
                        cursor['continue']();
                      }
                    } else {
                      resolve();
                    }
                  };

                  req.onerror = function () {
                    reject(req.error);
                  };
                })['catch'](reject);
              });

              executeCallback(promise, callback);
              return promise;
            }

            function set(key, value, callback) {
              var self = this;
              if (typeof key !== 'string') {
                globalObject.console.warn(key + ' used as a key, but it is not a string.');
                key = String(key);
              }

              var promise = new _Promise(function (resolve, reject) {
                self.ready().then(function () {
                  var dbInfo = self.__dbInfo;
                  return __checkBlobSupport(dbInfo.db);
                }).then(function (blobSupport) {
                  if (!blobSupport && value instanceof Blob) {
                    return __encodeBlob(value);
                  }
                  return value;
                }).then(function (value) {
                  var transaction = dbInfo.db.transaction(dbInfo.boxName, 'readwrite');
                  var store = transaction.objectStore(dbInfo.boxName);
                  if (value === null) {
                    value = undefined;
                  }

                  var req = store.put(value, key);
                  transaction.oncomplete = function () {
                    if (value === undefined) {
                      value = null;
                    }

                    resolve(value);
                  };
                  transaction.onabort = transaction.onerror = function () {
                    var err = req.error ? req.error : req.transaction.error;
                    reject(err);
                  };
                })['catch'](reject);
              });

              executeCallback(promise, callback);
              return promise;
            }

            function remove(key, callback) {
              var self = this;
              if (typeof key !== 'string') {
                globalObject.console.warn(key + ' used as a key, but it is not a string.');
                key = String(key);
              }

              var promise = new _Promise(function (resolve, reject) {
                self.ready().then(function () {
                  var dbInfo = self.__dbInfo;
                  var transaction = dbInfo.db.transaction(dbInfo.boxName, 'readwrite');
                  var store = transaction.objectStore(dbInfo.boxName);
                  var req = store['delete'](key);
                  transaction.oncomplete = function () {
                    resolve();
                  };

                  transaction.onerror = function () {
                    reject(req.error);
                  };

                  transaction.onabort = function () {
                    var err = req.error ? req.error : req.transaction.error;
                    reject(err);
                  };
                })['catch'](reject);
              });

              executeCallback(promise, callback);
              return promise;
            }

            function clear(callback) {
              var self = this;
              var promise = new _Promise(function (resolve, reject) {
                self.ready().then(function () {
                  var dbInfo = self.__dbInfo;
                  var transaction = dbInfo.db.transaction(dbInfo.boxName, 'readwrite');
                  var store = transaction.objectStore(dbInfo.boxName);
                  var req = store.clear();

                  transaction.oncomplete = function () {
                    resolve();
                  };

                  transaction.onabort = transaction.onerror = function () {
                    var err = req.error ? req.error : req.transaction.error;
                    reject(err);
                  };
                })['catch'](reject);
              });

              executeCallback(promise, callback);
              return promise;
            }

            function size(callback) {
              var self = this;
              var promise = new _Promise(function (resolve, reject) {
                self.ready().then(function () {
                  var dbInfo = self.__dbInfo;
                  var store = dbInfo.db.transaction(dbInfo.boxName, 'readonly').objectStore(dbInfo.boxName);
                  var req = store.count();

                  req.onsuccess = function () {
                    resolve(req.result);
                  };

                  req.onerror = function () {
                    reject(req.error);
                  };
                })['catch'](reject);
              });

              executeCallback(promise, callback);
              return promise;
            }

            function key(n, callback) {
              var self = this;
              var promise = new _Promise(function (resolve, reject) {
                if (n < 0) {
                  resolve(null);

                  return;
                }

                self.ready().then(function () {
                  var dbInfo = self.__dbInfo;
                  var store = dbInfo.db.transaction(dbInfo.boxName, 'readonly').objectStore(dbInfo.boxName);

                  var advanced = false;
                  var req = store.openCursor();
                  req.onsuccess = function () {
                    var cursor = req.result;
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

                  req.onerror = function () {
                    reject(req.error);
                  };
                })['catch'](reject);
              });

              executeCallback(promise, callback);
              return promise;
            }

            function keys(callback) {
              var self = this;
              var promise = new _Promise(function (resolve, reject) {
                self.ready().then(function () {
                  var dbInfo = self.__dbInfo;
                  var store = dbInfo.db.transaction(dbInfo.boxName, 'readonly').objectStore(dbInfo.boxName);

                  var req = store.openCursor();
                  var keys = [];

                  req.onsuccess = function () {
                    var cursor = req.result;

                    if (!cursor) {
                      resolve(keys);
                      return;
                    }

                    keys.push(cursor.key);
                    cursor['continue']();
                  };

                  req.onerror = function () {
                    reject(req.error);
                  };
                })['catch'](reject);
              });

              executeCallback(promise, callback);
              return promise;
            }

            function executeCallback(promise, callback) {
              if (callback) {
                promise.then(function (result) {
                  callback(null, result);
                }, function (error) {
                  callback(error);
                });
              }
            }

            var asyncStorage = {
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
          (function () {
            var globalObject = this;
            var openDatabase = this.openDatabase;
            if (!openDatabase) {
              return;
            }

            function __initStorage(options) {
              var self = this;
              var dbInfo = {
                db: null
              };

              if (options) {
                for (var i in options) {
                  dbInfo[i] = typeof options[i] !== 'string' ? options[i].toString() : options[i];
                }
              }

              var dbInfoPromise = new _Promise(function (resolve, reject) {
                try {
                  dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
                } catch (e) {
                  return self.setDriver(self.LOCALSTORAGE).then(function () {
                    return self.__initStorage(options);
                  }).then(resolve)['catch'](reject);
                }

                dbInfo.db.transaction(function (t) {
                  t.executeSql('CREATE TABLE IF NOT EXISTS ' + dbInfo.boxName + ' (id INTEGER PRIMARY KEY, key unique, value)', [], function () {
                    self.__dbInfo = dbInfo;
                    resolve();
                  }, function (t, error) {
                    reject(error);
                  });
                });
              });

              return new _Promise(function (resolve, reject) {
                resolve(truckBoxSerializer);
              }).then(function (lib) {
                dbInfo.serializer = lib;
                return dbInfoPromise;
              });
            }

            function get(key, callback) {
              var self = this;
              if (typeof key !== 'string') {
                globalObject.console.warn(key + ' used as a key, but it is not a string.');
                key = String(key);
              }

              var promise = new _Promise(function (resolve, reject) {
                self.ready().then(function () {
                  var dbInfo = self.__dbInfo;
                  dbInfo.db.transaction(function (t) {
                    t.executeSql('SELECT * FROM ' + dbInfo.boxName + ' WHERE key = ? LIMIT 1', [key], function (t, results) {
                      var result = results.rows.length ? results.rows.item(0).value : null;
                      if (result) {
                        result = dbInfo.serializer.deserialize(result);
                      }

                      resolve(result);
                    }, function (t, error) {

                      reject(error);
                    });
                  });
                })['catch'](reject);
              });

              executeCallback(promise, callback);
              return promise;
            }

            function each(iterator, callback) {
              var self = this;
              var promise = new _Promise(function (resolve, reject) {
                self.ready().then(function () {
                  var dbInfo = self.__dbInfo;

                  dbInfo.db.transaction(function (t) {
                    t.executeSql('SELECT * FROM ' + dbInfo.boxName, [], function (t, results) {
                      var rows = results.rows;
                      var length = rows.length;

                      for (var i = 0; i < length; i++) {
                        var item = rows.item(i);
                        var result = item.value;
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
                    }, function (t, error) {
                      reject(error);
                    });
                  });
                })['catch'](reject);
              });

              executeCallback(promise, callback);
              return promise;
            }

            function set(key, value, callback) {
              var self = this;
              if (typeof key !== 'string') {
                globalObject.console.warn(key + ' used as a key, but it is not a string.');
                key = String(key);
              }

              var promise = new _Promise(function (resolve, reject) {
                self.ready().then(function () {
                  if (value === undefined) {
                    value = null;
                  }

                  var originalValue = value;

                  var dbInfo = self.__dbInfo;
                  dbInfo.serializer.serialize(value, function (value, error) {
                    if (error) {
                      reject(error);
                    } else {
                      dbInfo.db.transaction(function (t) {
                        t.executeSql('INSERT OR REPLACE INTO ' + dbInfo.boxName + ' (key, value) VALUES (?, ?)', [key, value], function () {
                          resolve(originalValue);
                        }, function (t, error) {
                          reject(error);
                        });
                      }, function (sqlError) {
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
              var self = this;
              if (typeof key !== 'string') {
                globalObject.console.warn(key + ' used as a key, but it is not a string.');
                key = String(key);
              }

              var promise = new _Promise(function (resolve, reject) {
                self.ready().then(function () {
                  var dbInfo = self.__dbInfo;
                  dbInfo.db.transaction(function (t) {
                    t.executeSql('DELETE FROM ' + dbInfo.boxName + ' WHERE key = ?', [key], function () {
                      resolve();
                    }, function (t, error) {

                      reject(error);
                    });
                  });
                })['catch'](reject);
              });

              executeCallback(promise, callback);
              return promise;
            }

            function clear(callback) {
              var self = this;
              var promise = new _Promise(function (resolve, reject) {
                self.ready().then(function () {
                  var dbInfo = self.__dbInfo;
                  dbInfo.db.transaction(function (t) {
                    t.executeSql('DELETE FROM ' + dbInfo.boxName, [], function () {
                      resolve();
                    }, function (t, error) {
                      reject(error);
                    });
                  });
                })['catch'](reject);
              });

              executeCallback(promise, callback);
              return promise;
            }

            function size(callback) {
              var self = this;
              var promise = new _Promise(function (resolve, reject) {
                self.ready().then(function () {
                  var dbInfo = self.__dbInfo;
                  dbInfo.db.transaction(function (t) {
                    t.executeSql('SELECT COUNT(key) as c FROM ' + dbInfo.boxName, [], function (t, results) {
                      var result = results.rows.item(0).c;

                      resolve(result);
                    }, function (t, error) {

                      reject(error);
                    });
                  });
                })['catch'](reject);
              });

              executeCallback(promise, callback);
              return promise;
            }

            function key(n, callback) {
              var self = this;

              var promise = new _Promise(function (resolve, reject) {
                self.ready().then(function () {
                  var dbInfo = self.__dbInfo;
                  dbInfo.db.transaction(function (t) {
                    t.executeSql('SELECT key FROM ' + dbInfo.boxName + ' WHERE id = ? LIMIT 1', [n + 1], function (t, results) {
                      var result = results.rows.length ? results.rows.item(0).key : null;
                      resolve(result);
                    }, function (t, error) {
                      reject(error);
                    });
                  });
                })['catch'](reject);
              });

              executeCallback(promise, callback);
              return promise;
            }

            function keys(callback) {
              var self = this;
              var promise = new _Promise(function (resolve, reject) {
                self.ready().then(function () {
                  var dbInfo = self.__dbInfo;
                  dbInfo.db.transaction(function (t) {
                    t.executeSql('SELECT key FROM ' + dbInfo.boxName, [], function (t, results) {
                      var keys = [];

                      for (var i = 0; i < results.rows.length; i++) {
                        keys.push(results.rows.item(i).key);
                      }

                      resolve(keys);
                    }, function (t, error) {

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
                promise.then(function (result) {
                  callback(null, result);
                }, function (error) {
                  callback(error);
                });
              }
            }

            var webSQLStorage = {
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
          (function () {
            var globalObject = this;
            var localStorage = null;
            try {
              if (!this.localStorage || !('setItem' in this.localStorage)) {
                return;
              }
              localStorage = this.localStorage;
            } catch (e) {
              return;
            }

            function __initStorage(options) {
              var self = this;
              var dbInfo = {};
              if (options) {
                for (var i in options) {
                  dbInfo[i] = options[i];
                }
              }

              dbInfo.keyPrefix = dbInfo.name + '/';

              if (dbInfo.boxName !== self.__defaultConfig.boxName) {
                dbInfo.keyPrefix += dbInfo.boxName + '/';
              }

              self.__dbInfo = dbInfo;

              return new _Promise(function (resolve, reject) {
                resolve(truckBoxSerializer);
              }).then(function (lib) {
                dbInfo.serializer = lib;
                return _Promise.resolve();
              });
            }

            function clear(callback) {
              var self = this;
              var promise = self.ready().then(function () {
                var keyPrefix = self.__dbInfo.keyPrefix;

                for (var i = localStorage.length - 1; i >= 0; i--) {
                  var _key = localStorage.key(i);

                  if (_key.indexOf(keyPrefix) === 0) {
                    localStorage.removeItem(_key);
                  }
                }
              });

              executeCallback(promise, callback);
              return promise;
            }

            function get(key, callback) {
              var self = this;
              if (typeof key !== 'string') {
                globalObject.console.warn(key + ' used as a key, but it is not a string.');
                key = String(key);
              }

              var promise = self.ready().then(function () {
                var dbInfo = self.__dbInfo;
                var result = localStorage.getItem(dbInfo.keyPrefix + key);
                if (result) {
                  result = dbInfo.serializer.deserialize(result);
                }

                return result;
              });

              executeCallback(promise, callback);
              return promise;
            }

            function each(iterator, callback) {
              var self = this;

              var promise = self.ready().then(function () {
                var dbInfo = self.__dbInfo;
                var keyPrefix = dbInfo.keyPrefix;
                var keyPrefixLength = keyPrefix.length;
                var length = localStorage.length;
                var iterationNumber = 1;

                for (var i = 0; i < length; i++) {
                  var _key2 = localStorage.key(i);
                  if (_key2.indexOf(keyPrefix) !== 0) {
                    continue;
                  }
                  var value = localStorage.getItem(_key2);
                  if (value) {
                    value = dbInfo.serializer.deserialize(value);
                  }

                  value = iterator(value, _key2.substring(keyPrefixLength), iterationNumber++);
                  if (value !== void 0) {
                    return value;
                  }
                }
              });

              executeCallback(promise, callback);
              return promise;
            }

            function key(n, callback) {
              var self = this;
              var promise = self.ready().then(function () {
                var dbInfo = self.__dbInfo;
                var result = undefined;
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
              var self = this;
              var promise = self.ready().then(function () {
                var dbInfo = self.__dbInfo;
                var length = localStorage.length;
                var keys = [];

                for (var i = 0; i < length; i++) {
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
              var self = this;
              var promise = self.keys().then(function (keys) {
                return keys.length;
              });

              executeCallback(promise, callback);
              return promise;
            }

            function remove(key, callback) {
              var self = this;
              if (typeof key !== 'string') {
                globalObject.console.warn(key + ' used as a key, but it is not a string.');
                key = String(key);
              }

              var promise = self.ready().then(function () {
                var dbInfo = self.__dbInfo;
                localStorage.removeItem(dbInfo.keyPrefix + key);
              });

              executeCallback(promise, callback);
              return promise;
            }

            function set(key, value, callback) {
              var self = this;
              if (typeof key !== 'string') {
                globalObject.console.warn(key + ' used as a key, but it is not a string.');
                key = String(key);
              }

              var promise = self.ready().then(function () {
                if (value === undefined) {
                  value = null;
                }
                var originalValue = value;

                return new _Promise(function (resolve, reject) {
                  var dbInfo = self.__dbInfo;
                  dbInfo.serializer.serialize(value, function (value, error) {
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
                promise.then(function (result) {
                  callback(null, result);
                }, function (error) {
                  callback(error);
                });
              }
            }

            var localStorageWrapper = {
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
          (function () {
            var BASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

            var BLOB_TYPE_PREFIX = '~~truck_box_type~';
            var BLOB_TYPE_PREFIX_REGEX = /^~~truck_box_type~([^~]+)~/;
            var SERIALIZED_MARKER = '__lfsc__:';
            var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;
            var TYPE_ARRAYBUFFER = 'arbf';
            var TYPE_BLOB = 'blob';
            var TYPE_INT8ARRAY = 'si08';
            var TYPE_UINT8ARRAY = 'ui08';
            var TYPE_UINT8CLAMPEDARRAY = 'uic8';
            var TYPE_INT16ARRAY = 'si16';
            var TYPE_INT32ARRAY = 'si32';
            var TYPE_UINT16ARRAY = 'ur16';
            var TYPE_UINT32ARRAY = 'ui32';
            var TYPE_FLOAT32ARRAY = 'fl32';
            var TYPE_FLOAT64ARRAY = 'fl64';
            var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;
            var globalObject = this;

            function __createBlob(parts, properties) {
              parts = parts || [];
              properties = properties || {};

              try {
                return new Blob(parts, properties);
              } catch (err) {
                if (err.name !== 'TypeError') {
                  throw err;
                }

                var BlobBuilder = globalObject.BlobBuilder || globalObject.MSBlobBuilder || globalObject.MozBlobBuilder || globalObject.WebKitBlobBuilder;

                var builder = new BlobBuilder();
                for (var i = 0; i < parts.length; i += 1) {
                  builder.append(parts[i]);
                }

                return builder.getBlob(properties.type);
              }
            }

            function serialize(value, callback) {
              var valueString = '';
              if (value) {
                valueString = value.toString();
              }

              if (value && (value.toString() === '[object ArrayBuffer]' || value.buffer && value.buffer.toString() === '[object ArrayBuffer]')) {
                var buffer = undefined;
                var marker = SERIALIZED_MARKER;

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
                var fileReader = new FileReader();

                fileReader.onload = function () {
                  var str = BLOB_TYPE_PREFIX + value.type + '~' + bufferToString(this.result);
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
              var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
              var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);
              var blobType = undefined;
              if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
                var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
                blobType = matcher[1];
                serializedString = serializedString.substring(matcher[0].length);
              }
              var buffer = stringToBuffer(serializedString);

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
              var bufferLength = serializedString.length * 0.75;
              var len = serializedString.length;
              var i = undefined;
              var p = 0;
              var encoded1 = undefined,
                  encoded2 = undefined,
                  encoded3 = undefined,
                  encoded4 = undefined;
              if (serializedString[serializedString.length - 1] === '=') {
                bufferLength--;
                if (serializedString[serializedString.length - 2] === '=') {
                  bufferLength--;
                }
              }
              var buffer = new ArrayBuffer(bufferLength);
              var bytes = new Uint8Array(buffer);

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
              var bytes = new Uint8Array(buffer);
              var base64String = '';
              var i = undefined;

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

            var truckBoxSerializer = {
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
          var CustomDrivers = {};
          var DriverType = {
            INDEXEDDB: 'asyncStorage',
            LOCALSTORAGE: 'localStorageWrapper',
            WEBSQL: 'webSQLStorage'
          };
          var DefaultDriverOrder = [DriverType.INDEXEDDB, DriverType.WEBSQL, DriverType.LOCALSTORAGE];
          var LibraryMethods = ['clear', 'get', 'each', 'key', 'keys', 'size', 'remove', 'set'];

          var DefaultConfig = {
            description: '',
            driver: DefaultDriverOrder.slice(),
            name: 'truckbox',
            size: 4980736,
            boxName: 'keyvaluepairs',
            version: 1.0
          };

          var driverSupport = (function (self) {
            var indexedDB = indexedDB || self.indexedDB || self.webkitIndexedDB || self.mozIndexedDB || self.OIndexedDB || self.msIndexedDB;
            var result = {};
            result[DriverType.WEBSQL] = !!self.openDatabase;
            result[DriverType.INDEXEDDB] = !!(function () {
              if (typeof self.openDatabase !== 'undefined' && self.navigator && self.navigator.userAgent && /Safari/.test(self.navigator.userAgent) && !/Chrome/.test(self.navigator.userAgent)) {
                return false;
              }
              try {
                return indexedDB && typeof indexedDB.open === 'function' && typeof self.IDBKeyRange !== 'undefined';
              } catch (e) {
                return false;
              }
            })();

            result[DriverType.LOCALSTORAGE] = !!(function () {
              try {
                return self.localStorage && 'setItem' in self.localStorage && self.localStorage.setItem;
              } catch (e) {
                return false;
              }
            })();

            return result;
          })(window);

          var isArray = Array.isArray || function (arg) {
            return Object.prototype.toString.call(arg) === '[object Array]';
          };

          function callWhenReady(truckBoxInstance, libraryMethod) {
            truckBoxInstance[libraryMethod] = function () {
              var __args = arguments;
              return truckBoxInstance.ready().then(function () {
                return truckBoxInstance[libraryMethod].apply(truckBoxInstance, __args);
              });
            };
          }

          function extend() {
            for (var i = 1; i < arguments.length; i++) {
              var arg = arguments[i];

              if (arg) {
                for (var key in arg) {
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
            for (var driver in DriverType) {
              if (DriverType.hasOwnProperty(driver) && DriverType[driver] === driverName) {
                return true;
              }
            }

            return false;
          }

          var TruckBox = (function () {
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

            TruckBox.prototype.config = function (options) {
              if (typeof options === 'object') {
                if (this.__ready) {
                  return new Error("Can't call config() after truckbox " + 'has been used.');
                }
                for (var i in options) {
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

            TruckBox.prototype.defineDriver = function (driverObject, callback, errorCallback) {
              var promise = new _Promise(function (resolve, reject) {
                try {
                  var _ret = (function () {
                    var driverName = driverObject.__driver;
                    var complianceError = new Error('Custom driver not compliant; see Truck Box documentation');
                    var namingError = new Error('Custom driver name already in use: ' + driverObject.__driver);
                    if (!driverObject.__driver) {
                      reject(complianceError);
                      return {
                        v: undefined
                      };
                    }
                    if (isLibraryDriver(driverObject.__driver)) {
                      reject(namingError);
                      return {
                        v: undefined
                      };
                    }

                    var customDriverMethods = LibraryMethods.concat('__initStorage');
                    for (var i = 0; i < customDriverMethods.length; i++) {
                      var customDriverMethod = customDriverMethods[i];
                      if (!customDriverMethod || !driverObject[customDriverMethod] || typeof driverObject[customDriverMethod] !== 'function') {
                        reject(complianceError);
                        return {
                          v: undefined
                        };
                      }
                    }

                    var supportPromise = _Promise.resolve(true);
                    if ('__support' in driverObject) {
                      if (driverObject.__support && typeof driverObject.__support === 'function') {
                        supportPromise = driverObject.__support();
                      } else {
                        supportPromise = _Promise.resolve(!!driverObject.__support);
                      }
                    }

                    supportPromise.then(function (supportResult) {
                      driverSupport[driverName] = supportResult;
                      CustomDrivers[driverName] = driverObject;
                      resolve();
                    }, reject);
                  })();

                  if (typeof _ret === 'object') return _ret.v;
                } catch (e) {
                  reject(e);
                }
              });

              promise.then(callback, errorCallback);
              return promise;
            };

            TruckBox.prototype.driver = function () {
              return this.__driver || null;
            };

            TruckBox.prototype.getDriver = function (driverName, callback, errorCallback) {
              var self = this;
              var getDriverPromise = (function () {
                if (isLibraryDriver(driverName)) {
                  switch (driverName) {
                    case self.INDEXEDDB:
                      return new _Promise(function (resolve, reject) {
                        resolve(asyncStorage);
                      });
                    case self.LOCALSTORAGE:
                      return new _Promise(function (resolve, reject) {
                        resolve(localStorageWrapper);
                      });
                    case self.WEBSQL:
                      return new _Promise(function (resolve, reject) {
                        resolve(webSQLStorage);
                      });
                  }
                } else if (CustomDrivers[driverName]) {
                  console.log('Using: ' + driverName);
                  return _Promise.resolve(CustomDrivers[driverName]);
                }

                return _Promise.reject(new Error('Driver not found.'));
              })();

              getDriverPromise.then(callback, errorCallback);
              return getDriverPromise;
            };

            TruckBox.prototype.getSerializer = function (callback) {
              var serializerPromise = new _Promise(function (resolve, reject) {
                resolve(truckBoxSerializer);
              });
              if (callback && typeof callback === 'function') {
                serializerPromise.then(function (result) {
                  callback(result);
                });
              }
              return serializerPromise;
            };

            TruckBox.prototype.ready = function (callback) {
              var self = this;

              var promise = self.__driverSet.then(function () {
                if (self.__ready === null) {
                  self.__ready = self.__initDriver();
                }

                return self.__ready;
              });

              promise.then(callback, callback);
              return promise;
            };

            TruckBox.prototype.setDriver = function (drivers, callback, errorCallback) {
              var self = this;

              if (!isArray(drivers)) {
                drivers = [drivers];
              }

              var supportedDrivers = this.__getSupportedDrivers(drivers);

              function setDriverToConfig() {
                self.__config.driver = self.driver();
              }

              function initDriver(supportedDrivers) {
                return function () {
                  var currentDriverIndex = 0;

                  function driverPromiseLoop() {
                    while (currentDriverIndex < supportedDrivers.length) {
                      var driverName = supportedDrivers[currentDriverIndex];
                      currentDriverIndex++;

                      self.__dbInfo = null;
                      self.__ready = null;

                      return self.getDriver(driverName).then(function (driver) {
                        self.__extend(driver);
                        setDriverToConfig();

                        self.__ready = self.__initStorage(self.__config);
                        return self.__ready;
                      })['catch'](driverPromiseLoop);
                    }

                    setDriverToConfig();
                    var error = new Error('No available storage method found.');
                    self.__driverSet = _Promise.reject(error);
                    return self.__driverSet;
                  }

                  return driverPromiseLoop();
                };
              }

              var oldDriverSetDone = this.__driverSet !== null ? this.__driverSet['catch'](function () {
                return _Promise.resolve();
              }) : _Promise.resolve();

              this.__driverSet = oldDriverSetDone.then(function () {
                var driverName = supportedDrivers[0];
                self.__dbInfo = null;
                self.__ready = null;

                return self.getDriver(driverName).then(function (driver) {
                  self.__driver = driver.__driver;
                  setDriverToConfig();
                  self.__wrapLibraryMethodsWithReady();
                  self.__initDriver = initDriver(supportedDrivers);
                });
              })['catch'](function () {
                setDriverToConfig();
                var error = new Error('No available storage method found.');
                self.__driverSet = _Promise.reject(error);
                return self.__driverSet;
              });

              this.__driverSet.then(callback, errorCallback);
              return this.__driverSet;
            };

            TruckBox.prototype.supports = function (driverName) {
              return !!driverSupport[driverName];
            };

            TruckBox.prototype.__extend = function (libraryMethodsAndProperties) {
              extend(this, libraryMethodsAndProperties);
            };

            TruckBox.prototype.__getSupportedDrivers = function (drivers) {
              var supportedDrivers = [];
              for (var i = 0, len = drivers.length; i < len; i++) {
                var driverName = drivers[i];
                if (this.supports(driverName)) {
                  supportedDrivers.push(driverName);
                }
              }
              return supportedDrivers;
            };

            TruckBox.prototype.__wrapLibraryMethodsWithReady = function () {
              for (var i = 0; i < LibraryMethods.length; i++) {
                callWhenReady(this, LibraryMethods[i]);
              }
            };

            TruckBox.prototype.createInstance = function (options) {
              return new TruckBox(options);
            };

            return TruckBox;
          })();

          var truckBox = new TruckBox();
          return truckBox;
        })(window)
      });
    }
  };
});
$__System.register('4', ['3', '31', '6f'], function (_export) {
  // Truck Module - Model:
  'use strict';

  return {
    setters: [function (_) {}, function (_2) {}, function (_f) {}],
    execute: function () {

      $.extend({

        /**
         * Factory to create a model.
         *
         * @param {any} data The data for the model. Can be just "" or [].
         * @param {string} handle A handle used by models to annouce their changes. When a view is bound to a model, a mediator listens for the model's handle to update the view.
         * @return {object} A model.
         */
        Model: function Model(data, handle) {

          // Define handle name:
          var __handle = handle || $.uuid();
          // Init private data:
          var __data = data || '';
          data = null;

          // Used for boxing a model:
          var __name = undefined;
          var __boxName = undefined;
          var __key = undefined;
          var __autobox = false;
          var __lastBoxTime = undefined;
          var __lastModifiedTime = 0;

          var checkPublicationName = function checkPublicationName(__handle) {
            return typeof __handle === 'string';
          };

          var propagateDataLoop = function propagateDataLoop(handle, data) {
            if ($.mediators[handle]) {
              $.mediators[handle].forEach(function (cntrl) {
                if (cntrl && cntrl.callback) {
                  cntrl.callback.call(cntrl.callback, data);
                }
              });
            }
          };

          var propagateData = function propagateData(__handle, data, doNotPropogate) {
            if (!doNotPropogate) {
              propagateDataLoop(__handle, data);
            } else if (doNotPropogate && checkPublicationName(doNotPropogate) === 'string') {
              propagateDataLoop(doNotPropogate, data);
            }
          };

          // Return closure to encapsulate data:
          var mod = {};
          $.extend(mod, {

            key: function key() {
              return __key;
            },

            // Get size of array data:
            size: function size() {
              if (mod.hasData() && mod.isIterable()) {
                return __data.length;
              }
            },

            // Define getter:
            eq: function eq(prop) {
              if (Array.isArray(__data)) {
                if (__data && isNaN(prop)) {
                  return __data[prop];
                } else if (__data && !isNaN(prop) && prop < 0) {
                  return __data[__data.length - 1];
                } else if (__data && !isNaN(prop) && prop > -1) {
                  return __data[prop];
                }
              } else if (mod.hasData()) {
                return __data[prop];
              }
            },

            // Allow setting a property value on an object.
            // This is for objects that are not iterable.
            setProp: function setProp(prop, value, doNotPropogate) {
              if (!prop || mod.hasData() && mod.isIterable()) {
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
            getProp: function getProp(prop) {
              if (!prop || mod.hasData() && mod.isIterable()) {
                return;
              } else {
                return __data[prop];
              }
            },

            // Replace a single object with another.
            // This is for objects that are not iterable.
            setObject: function setObject(obj, doNotPropogate) {
              if (!obj || mod.hasData() && mod.isIterable()) {
                return;
              }
              __data = obj;
              __lastModifiedTime = Date.now();
              propagateData(__handle, __data, doNotPropogate);
            },

            // Merge new object into existing object.
            // New properties will be added,
            // existing properties will be updated.
            mergeObject: function mergeObject(obj, doNotPropogate) {
              if (!obj || $.type(obj) !== 'object') return;
              var temp = mod.getData();
              $.extend(temp, obj);
              mod.setObject(temp, doNotPropogate);
            },

            // Define push for collections.
            // Add item to end of collection:
            push: function push(data, doNotPropogate) {
              if (!data) return;
              if (Array.isArray(__data)) {
                __data.push(data);
                __lastModifiedTime = Date.now();
                propagateData(__handle, data, doNotPropogate);
                if (__autobox) {
                  mod.box({
                    key: __key
                  });
                }
              }
            },

            // Define pop for collections.
            // Remove item from end of collection:
            pop: function pop(doNotPropogate) {
              if (mod.hasData() && mod.isIterable()) {
                var _data = __data.pop();
                __lastModifiedTime = Date.now();
                propagateData(__handle, _data, doNotPropogate);
                if (__autobox) {
                  mod.box({
                    key: __key
                  });
                }
                return _data;
              }
            },

            // Unshift for collections.
            // Add item to beginning of collection:
            unshift: function unshift(data, doNotPropogate) {
              if (!data) return;
              if (Array.isArray(__data)) {
                __data.unshift(data);
                __lastModifiedTime = Date.now();
                propagateData(__handle, data, doNotPropogate);
                if (__autobox) {
                  mod.box({
                    key: __key
                  });
                }
              }
            },

            // Shift for collections.
            // Remove item from beginning of collection:
            shift: function shift(doNotPropogate) {
              if (mod.hasData() && mod.isIterable()) {
                var __d = __data.shift();
                __lastModifiedTime = Date.now();
                propagateData(__handle, __d, doNotPropogate);
                if (__autobox) {
                  mod.box({
                    key: __key
                  });
                }
                return __d;
              }
            },

            // Define concat for collections.
            // Merge one array into view model:
            concat: function concat(data, doNotPropogate) {
              if (!data) return;
              if (Array.isArray(__data)) {
                __data.push.apply(__data, data);
                __lastModifiedTime = Date.now();
                propagateData(__handle, __data, doNotPropogate);
                if (__autobox) {
                  mod.box({
                    key: __key
                  });
                }
              }
            },

            // Define insert for collections.
            // Insert data at position:
            insert: function insert(position, data, doNotPropogate) {
              if (!position) return;
              if (mod.hasData() && mod.isIterable()) {
                var len = data.length;
                // The position is greater than the collection,
                // so add to end of collection:
                if (position >= len - 1) {
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
                mod.box({
                  key: __key
                });
              }
            },

            // Define unique for collections.
            // Remove duplicates from view model:
            unique: function unique(doNotPropogate) {
              var len = __data.length;
              var ret = [];
              var obj = {};

              if (mod.hasData() && mod.isIterable()) {
                for (var i = 0; i < len; i++) {
                  var arrayItem = JSON.stringify(__data[i]);
                  var arrayItemValue = __data[i];
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
                  $.mediators[doNotPropogate].forEach(function (handle) {
                    handle.callback.call(handle.callback, data);
                  });
                }
              } else {
                $.dispatch(__handle, __data);
              }
              if (__autobox) {
                mod.box({
                  key: __key
                });
              }
            },

            // Get the index of data from a collection:
            index: function index(prop, value) {
              if (mod.hasData() && mod.isIterable()) {
                if (value) {
                  for (var i = 0; i < __data.length; i++) {
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
            filter: function filter() {
              for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              if (mod.hasData() && mod.isIterable()) {
                return __data.filter.apply(__data, args);
              }
            },

            // Map the data of a collection:
            map: function map() {
              for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }

              if (mod.hasData() && mod.isIterable()) {
                return __data.map.apply(__data, args);
              }
            },

            // Pluck the property value from a collection:
            pluck: function pluck(property) {
              if (!property) return;
              var ret = [];
              if (mod.hasData() && mod.isIterable()) {
                var len = mod.size();
                for (var i = 0; i < len; i++) {
                  ret.push(__data[i][property]);
                }
                return ret;
              }
            },

            sort: function sort(args) {
              __lastModifiedTime = Date.now();
              return __data.sort.call(__data, args);
            },

            reverse: function reverse() {
              __lastModifiedTime = Date.now();
              __data.reverse();
              if (__autobox) {
                mod.box({
                  key: __key
                });
              }
            },

            // Sort the data of a collection:
            sortBy: function sortBy() {
              for (var _len3 = arguments.length, props = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                props[_key3] = arguments[_key3];
              }

              var orderBy = function orderBy(args) {
                return function (a, b) {
                  var sortByProperty = function sortByProperty(property) {
                    // Default sort order:
                    var sortOrder = 1;
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
                    return function (a, b) {
                      var result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
                      return result * sortOrder;
                    };
                  };

                  // Loop over all properties and sort
                  // objects based on those properties:
                  //===================================
                  var i = 0;
                  var result = 0;
                  var numberOfProperties = props.length;
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
              if (mod.hasData() && mod.isIterable()) {
                return __data.sort(orderBy.apply(null, props));
              }
            },

            // Enable user to delete either an object property,
            // or an index of a collection;
            'delete': function _delete(data, doNotPropogate) {
              var pos = undefined;
              if (data !== 0 && !data) return;
              if (mod.hasData() && mod.isIterable()) {
                pos = __data.indexOf(data);
                __data.splice(pos, 1);
                __lastModifiedTime = Date.now();
              } else if (mod.hasData()) {
                __lastModifiedTime = Date.now();
                delete __data[data];
              }
              propagateData(__handle, __data, doNotPropogate);
              if (__autobox) {
                mod.box({
                  key: __key
                });
              }
            },

            // Enable callback execution with model:
            run: function run(callback) {
              callback.call(callback, mod, __data);
            },

            // For the model to announce its current data state:
            poke: function poke() {
              if (mod.hasData() && mod.isIterable() && __handle) {
                $.mediators[__handle].forEach(function (handle) {
                  handle.callback.call(handle.callback, data);
                });
              }
            },

            // Get the current model handle:
            getHandle: function getHandle() {
              return __handle;
            },

            // Set the handle that the model uses.
            // If a handle was set up at initialization,
            // it will be replace with this handel
            setHandle: function setHandle(handle) {
              if (handle && typeof handle === 'string') {
                __handle = handle;
              }
            },

            // Delete all data in the model:
            purge: function purge() {
              if ($.type(__data) === 'array') {
                __data.length = 0;
              } else if ($.type(__data) === 'object') {
                for (k in __data) if (!(__data[k] instanceof Function)) delete __data[k];
              }
              if (__autobox) {
                mod.box({
                  key: __key
                });
              }
            },

            // Determine if the model has any data:
            hasData: function hasData() {
              if ($.type(__data) === 'array' && __data.length || $.type(__data) === 'object' && !$.isEmptyObject(__data)) {
                return true;
              } else {
                return false;
              }
            },

            // Returns whether the model's data is
            // an array or an object:
            getType: function getType() {
              if (Array.isArray(__data)) {
                return 'array';
              } else if (typeof __data === 'object') {
                return 'object';
              } else {
                return;
              }
            },

            isIterable: function isIterable() {
              if (Array.isArray(__data)) {
                return true;
              } else {
                return false;
              }
            },

            forEach: function forEach(callback) {
              if (mod.hasData() && mod.isIterable()) {
                var value = undefined;
                var i = -1;
                var len = __data.length;
                while (++i < len) {
                  value = callback.call(__data[i], __data[i], i);
                  if (value === false) {
                    break;
                  }
                }
              }
            },

            // Get all current data from model:
            getData: function getData() {
              if (mod.hasData()) {
                return __data;
              }
            },

            // Set a value on an object property in a stack,
            // or replace the object with another:
            setItemProp: function setItemProp(index, prop, value, doNotPropogate) {
              if (mod.hasData() && mod.isIterable()) {
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
                mod.box({
                  key: __key
                });
              }
            },

            // Get the value of a property on an object in a stack,
            // or get the whole object at that index.
            getItemProp: function getItemProp(index, prop) {
              if (mod.hasData() && mod.isIterable()) {
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

            deleteItemProp: function deleteItemProp(index, prop, doNotPropogate) {
              if (mod.hasData() && mod.isIterable()) {
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
                mod.box({
                  key: __key
                });
              }
            },

            getLastModTime: function getLastModTime() {
              return __lastModifiedTime;
            },

            box: function box(options) {
              /*
                options = {
                  key: key,
                  boxName: name
                }
              */

              if (!options) return;
              var value = undefined;
              __autobox = options.autobox || __autobox;
              __name = options.name || $.Box.__config.name;
              __boxName = options.boxName || 'keyvaluepairs';
              __key = options.key || mod.getHandle();

              // Box the model's data:
              value = mod.getData();
              $.Box.set(__key, value).then(function (item) {
                __lastBoxTime = Date.now();
              });
            },

            setToAutobox: function setToAutobox(options) {
              __autobox = true;
              __name = options.name || $.Box.__config.name;
              __boxName = options.boxName || 'keyvaluepairs';
              __key = options.key || mod.getHandle();
            },

            isBoxed: function isBoxed() {
              return __lastBoxTime ? true : false;
            },

            isAutoBoxed: function isAutoBoxed() {
              return __autobox ? true : false;
            },

            getLastBoxTime: function getLastBoxTime() {
              return __lastBoxTime;
            }

          });
          return mod;
        }
      });
    }
  };
});
$__System.register('70', ['3', '4'], function (_export) {
  // Truck Widget - Router:
  'use strict';

  return {
    setters: [function (_) {}, function (_2) {}],
    execute: function () {

      $(function () {
        $.extend({
          //===============
          // Define Router:
          //===============
          TruckRoutes: $.Model([], 'Truck-Routes'),

          Router: function Router() {

            $.receive('Truck-Routes', $.noop);

            return {
              addRoute: function addRoute(options) {
                if ($.type(options) === 'array') {
                  options.forEach(function (item) {
                    if (!$.mediators[item.route]) {
                      $.mediators[item.route] = $.MediatorStack();
                      $.mediators[item.route].push({
                        token: $.uuid(),
                        callback: item.callback,
                        exec: true,
                        count: 0
                      });
                    }
                  });
                }
              },

              getFullRoute: function getFullRoute() {
                return $.TruckRoutes.getData().join('/');
              },

              getRoutesStack: function getRoutesStack() {
                return $.TruckRoutes.getData();
              },

              getCurrentLoc: function getCurrentLoc() {
                var temp = undefined.getFullRoute().split('/');
                return temp[temp.length - 1];
              },

              dispatch: function dispatch(route) {
                var temp = undefined;
                var id = undefined;
                if (route.match(/\:/)) {
                  temp = route.split(':');
                  id = temp[1];
                  route = temp[0];
                }
                if ($.mediators[route]) {
                  $.mediators[route].getData()[0].callback(id);
                }
              },

              pushRoute: function pushRoute(route) {
                return $.TruckRoutes.push(route);
              },

              popRoute: function popRoute() {
                return $.TruckRoutes.pop();
              },

              unshiftRoute: function unshiftRoute(route) {
                return $.TruckRoutes.unshift(route);
              },

              shiftRoute: function shiftRoute() {
                return $.TruckRoutes.shift();
              },

              insert: function insert(position, route) {
                if ($.TruckRoutes.size() >= position) {
                  $.TruckRoutes.push(route);
                } else {
                  $.TruckRoutes.splice(position, 0, route);
                }
              },

              eq: function eq(number) {
                return $.TruckRoutes.eq(number);
              },

              indexOf: function indexOf(route) {
                return $.TruckRoutes.indexOf(route);
              },

              'delete': function _delete(route, baseRouteOnly) {
                if (baseRouteOnly) {
                  $.TruckRoutes['delete'](route);
                } else {
                  $.TruckRoutes.forEach(function (r) {
                    if (r && route === r.split(':')[0]) {
                      $.TruckRoutes['delete'](r);
                    }
                  });
                }
              }
            };
          }
        });

        $.extend($.Router, {
          dispatch: function dispatch(route) {
            if (!route) return;
            var temp = undefined;
            var id = undefined;
            if (route.match(/\:/)) {
              temp = route.split(':');
              id = temp[1];
              route = temp[0];
            }
            if ($.mediators[route]) {
              $.mediators[route].getData()[0].callback(id);
            }
          }
        });

        $.extend($.TruckRoutes, {
          getFullRoute: function getFullRoute() {
            return this.getData().join('/');
          }
        });

        // Set up initial route:
        if ($('screen').size()) {
          $.TruckRoutes.push($('screen')[0].id, true);
        }
      });
    }
  };
});
$__System.register('2a', ['3', '30', '70', '1b'], function (_export) {
  // Truck Widget - Navigation Module:
  'use strict';

  return {
    setters: [function (_) {}, function (_2) {}, function (_3) {}, function (_b) {}],
    execute: function () {

      $(function () {
        // Private variable to track navigation state:
        var isNavigating = false;
        // get screen by id:
        var getScreen = function getScreen(screen) {
          return $('#' + screen);
        };

        // Handle state of screens:
        var makeScreenCurrent = function makeScreenCurrent(screen) {
          screen = $(screen);
          screen.addClass('current');
          screen.removeClass('previous');
          screen.removeClass('next');
        };
        var makeScreenPrevious = function makeScreenPrevious(screen) {
          screen = $(screen);
          screen.removeClass('current');
          screen.removeClass('next');
          screen.addClass('previous');
        };
        var makeScreenNext = function makeScreenNext(screen) {
          screen = $(screen);
          screen.removeClass('current');
          screen.removeClass('previous');
          screen.addClass('next');
        };

        $.extend({

          ///////////////////////////////
          // Navigate to Specific Article
          ///////////////////////////////
          GoToScreen: function GoToScreen(destination) {
            if (isNavigating) return;
            isNavigating = true;
            $.TruckRoutes.push(destination);
            var currentScreen = $.screens.getCurrent();
            var destinationScreen = (function () {
              var temp;
              var regex = /:/img;
              temp = regex.test(destination) ? destination.split(':')[0] : destination;
              return getScreen(temp);
            })();
            if (currentScreen[0]) currentScreen[0].scrollTop = 0;
            if (destinationScreen[0]) destinationScreen[0].scrollTop = 0;
            makeScreenPrevious(currentScreen);
            makeScreenCurrent(destinationScreen);
            $.Router.dispatch(destination);
            setTimeout(function () {
              isNavigating = false;
            }, 500);
          },

          ////////////////////////////////////
          // Navigate Back to Previous Article
          ////////////////////////////////////
          GoBack: function GoBack() {
            var currentScreen = $.screens.getCurrent();
            $.TruckRoutes.pop();
            var desintation = $.TruckRoutes.eq(-1);
            var dest = $.TruckRoutes.eq(-1).split(':')[0];
            var destinationScreen = getScreen(dest);
            if ($.TruckRoutes.size() === 0) {
              dest = $.screens.eq(0);
              $.TruckRoutes.push(dest[0].id);
            }
            if (currentScreen[0]) currentScreen[0].scrollTop = 0;
            if (destinationScreen[0]) destinationScreen[0].scrollTop = 0;
            $.Router.dispatch(desintation);
            makeScreenNext(currentScreen);
            makeScreenCurrent(destinationScreen);
            if ($.TruckRoutes.size() === 1) return;
          },

          isNavigating: false,

          //////////////////////////////////////
          // Navigate Back to Non-linear Article
          //////////////////////////////////////
          GoBackToScreen: function GoBackToScreen(destination) {
            var position = $.TruckRoutes.index(destination);
            var destinationScreen = getScreen(destination);
            var temp = undefined;
            while ($.TruckRoutes.size() > position + 1) {
              temp = $.TruckRoutes.pop();
              temp = getScreen(temp);
              makeScreenNext(temp);
            }
            makeScreenCurrent(destinationScreen);
            $.Router.dispatch(destination);
          }
        });

        ///////////////////////////////////////////////////////////
        // Make sure that navs and articles have navigation states:
        ///////////////////////////////////////////////////////////

        ///////////////////////////
        // Initialize Back Buttons:
        ///////////////////////////
        $('body').on('tap', '.back', function () {
          if (this.hasAttribute('disabled')) return;
          $.GoBack();
        });

        ////////////////////////////////
        // Handle navigation list items:
        ////////////////////////////////

        var handleNavigationEvent = function handleNavigationEvent(element) {
          element = $(element);
          if ($.isNavigating) return;
          if (!element.hazAttr('data-goto')[0]) return;
          if (element.closest('ul').is('.deletable')) return;
          var destination = element.attr('data-goto');
          if (!destination) return;
          element.addClass('selected');
          setTimeout(function () {
            element.removeClass('selected');
          }, 1000);
          // Handle navigation:
          if ($.isAndroid || $.isChrome) {
            setTimeout(function () {
              $.GoToScreen(destination);
            }, 200);
          } else {
            $.GoToScreen(destination);
          }
        };
        $('body').on('tap', 'li', function () {
          handleNavigationEvent($(this));
        });
        $('body').on('doubletap', 'li', function () {
          if (!$.isNavigating) {
            handleNavigationEvent($(this));
          }
        });
      });
    }
  };
});
$__System.register('71', ['3', '1b', '2a'], function (_export) {
  // Truck Widget - Tab Bar:
  'use strict';

  return {
    setters: [function (_) {}, function (_b) {}, function (_a) {}],
    execute: function () {

      $.extend({
        //=========================================
        // Creates a Tab Bar for Toggling Articles:
        //=========================================
        TabBar: function TabBar(options) {
          /*
          var options = {
            id: 'mySpecialTabbar',
            labels: ["Refresh", "Add", "Info", "Downloads", "Favorite"],
            icons: ["refresh", "add", "info", "downloads", "favorite"],
            screens: [],
            selected: 2,
            showIcons: false // set to true for Android and Windows
          }
          */
          if (!options) return;
          var id = $.uuid();
          var settings = {
            selected: 0
          };
          $.extend(settings, options);
          if (!settings.icons.length) {
            settings.icons = settings.labels;
          }
          if (!settings.id) {
            settings.id = id;
          } else {
            id = settings.id;
          }

          // Private variable to keep track of screens:
          var __tabbarScreens = $();

          var screens = $();
          var screenPrefix = '#';

          if (settings.screens) {
            settings.screens.forEach(function (screen) {
              if (!/screenPrefix/img.test(screen)) {
                __tabbarScreens.push($(screenPrefix + screen)[0]);
                $(screenPrefix + screen).addClass('tabScreen');
              } else {
                __tabbarScreens.concat($(screen)[0]);
                $(screen).addClass('tabScreen');
              }
            });
          } else {
            settings.labels.forEach(function (screen, idx) {
              __tabbarScreens.push(screens.eq(idx));
            });
          }
          var selectedScreen = undefined;
          var showIcons = settings.showIcons ? ' class="showIcons" ' : '';

          // Helper: Set Screen to Current:
          //===============================
          var setToCurrent = function setToCurrent(element) {
            $(element).removeClass('previous').removeClass('next').addClass('current');
            $(element).attr('aria-hidden', 'false');
          };

          // Helper: Set Screen to Next:
          //============================
          var setToNext = function setToNext(element) {
            $(element).removeClass('current').addClass('next');
            $(element).attr('aria-hidden', 'true');
          };

          // Create tabs:
          //=============
          var makeTab = function makeTab(label, icon, idx) {
            var tab = '<button role="tab" class="' + icon;
            if (settings.selected === idx) {
              tab += ' selected';
            }
            tab += '"';
            if (settings.screens && settings.screens.length) {
              tab += ' data-id="' + settings.screens[idx] + '"';
            }
            tab += '><span class="icon"></span><label>' + settings.labels[idx] + '</label></button>';
            return tab;
          };
          // Create tab bar:
          //================
          var tabbarTmpl = $('<tabbar role="tabpanel"' + showIcons + '></tabbar>');
          tabbarTmpl[0].id = settings.id;
          tabbarTmpl.addClass('tabbar');

          setToNext($('screen'));
          selectedScreen = $('screen').eq(settings.selected);
          setToCurrent(selectedScreen);

          if (settings.labels.length) {
            settings.labels.forEach(function (label, idx) {
              tabbarTmpl.append(makeTab(label, settings.icons[idx], idx));
            });
          }
          $('body').prepend(tabbarTmpl);

          // Get id of appended tab bar:
          var tabbar = $('#' + settings.id);

          // Private variables to manage tab bar:
          var __tabbarButtons = tabbar.find('button');
          var __selectedTabbarButton = __tabbarButtons.eq(settings.selected);
          var __selectedTabbarScreen = __tabbarScreens.eq(settings.selected);

          // Setup events on tabs:
          //======================
          $(function () {

            $.TruckRoutes.purge();
            $.TruckRoutes.push(__tabbarScreens.eq(settings.selected)[0].id);

            var tabbarButtons = tabbar.find('button');
            $.Router.dispatch(__selectedTabbarScreen[0].id);
            tabbarButtons.forEach(function (button, idx) {
              $(button).data('truck-route', __tabbarScreens.eq(idx)[0].id);
            });

            // Tap on tab:
            tabbar.on('tap', 'button', function () {
              var routes = $(this).data('truck-route').split('/');
              var fullRoute = $.TruckRoutes.getFullRoute();

              // This tab holds a navigation list:
              if (routes.length > 1) {
                __tabbarButtons.hazClass('selected').data('truck-route', fullRoute);
                __tabbarButtons.hazClass('selected').removeClass('selected').addClass('next');
                // Set this tab to `selected`:
                $(this).addClass('selected');
                // Deal with previously selected tab and screen:
                $('screens').removeClass('current').addClass('next').attr('aria-hidden', true);
                $('screens').removeClass('previous').addClass('next').attr('aria-hidden', true);
                var navRoutesFull = $(this).data('truck-route');
                var navRoutes = navRoutesFull.split('/');
                navRoutes.forEach(function (route, idx) {
                  var routing = route.split(':');
                  var whichRoute = routing[0];
                  if (idx !== routes.length - 1) {
                    $('#' + whichRoute).removeClass('next').addClass('previous').attr('aria-hidden', true);
                  } else {
                    $('#' + whichRoute).removeClass('next').addClass('current').attr('aria-hidden', false);
                  }
                });
                // Take care of routes:
                $.TruckRoutes.purge();
                $.TruckRoutes.concat(navRoutes);
                $.Router.dispatch(routes[routes.length - 1]);

                // This tab has a single screen:
              } else {

                  __tabbarButtons.hazClass('selected').data('truck-route', fullRoute);
                  __tabbarButtons.hazClass('selected').removeClass('selected').addClass('next');
                  // Deal with previously selected tab and screen:
                  $('screen').removeClass('current').addClass('next').attr('aria-hidden', true);
                  $('screen').removeClass('previous').addClass('next').attr('aria-hidden', true);
                  // Set this tab to `selected`:
                  $(this).addClass('selected');
                  // Make this tab's screen `current`:
                  $.screens.eq($(this).index()).removeClass('next').removeClass('previous').addClass('current').attr('aria-hidden', false);
                  // Take care of routes:
                  $.TruckRoutes.purge();
                  $.TruckRoutes.concat(routes);
                  $.Router.dispatch(fullRoute);
                }
            });
          });

          return {

            getSelectedTab: function getSelectedTab() {
              return __selectedTabbarButton;
            },

            getSelectedScreen: function getSelectedScreen() {
              return __selectedTabbarScreen;
            },

            setSelectedTab: function setSelectedTab(position) {
              tabbar.find('button').iz('.selected').removeClass('selected').addClass('next');
              tabbar.children('button').eq(position).addClass('selected');
              setToNext(__tabbarScreens.iz('.current')[0]);
              setToCurrent(__tabbarScreens.eq(position)[0]);
            }
          };
        }
      });
    }
  };
});
$__System.register('1', ['2', '3', '6', '7', '11', '15', '17', '18', '19', '22', '23', '24', '25', '26', '27', '28', '29', '71', '1f', '1b', '1a', '2a', '1d', '1e', '2b', '2c'], function (_export) {
  // Import Truck core:           :
  'use strict';

  return {
    setters: [function (_2) {}, function (_) {}, function (_3) {}, function (_4) {}, function (_5) {}, function (_6) {}, function (_7) {}, function (_8) {}, function (_9) {}, function (_10) {}, function (_11) {}, function (_12) {}, function (_13) {}, function (_14) {}, function (_15) {}, function (_16) {}, function (_17) {}, function (_18) {}, function (_f) {}, function (_b) {}, function (_a) {}, function (_a2) {}, function (_d) {}, function (_e) {}, function (_b2) {}, function (_c) {}],
    execute: function () {}
  };
});

// Import Truck modules:

// Import Truck widgets:
})
(function(factory) {
  factory();
});
//# sourceMappingURL=truck.js.map
