// Truck Module - View:
import '../truck';
import './model';

//=============
// Define View:
//=============

$.extend({

  /* jshint, evil: false, validthis:true, unused:false, smarttabs: true, nonew false */
  view: {
    index: 0
  },

  helpers: {},

  defineHelper: callback => {
    $.extend($.helpers, callback);
  },


  View: options => {
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
    let __element;
    if (!options) options = {};
    if (options && options.element) {
      __element = $(options.element) || $();
    }
    const $this = this;
    let __template = options.template;
    let __model = options.model;
    let __mediator = options.mediator;
    let __index = options.index || 1;
    let __rendered = false;
    let __variable = options.variable || 'data';
    let __events = options.events || [];
    let __isBoundTo = options.model;
    let __dontGetTemplate = options.noTemplate || false;
    let __startIndexFrom = options.startIndexFrom || false;
    let __canRender = true;
    let __startFrom = 0;
    let __stopAfter = 0;
    let __restartTime = 0;
    let __renderViewEveryTime = false;
    let __lastRenderTime = 0;
    const __re = /data-src/img;
    let __escapeHTML = options.escapeHTML || false;
    let __renderCount = 0;
    let __es6Template = options.es6Template || false;

    //===================
    // Private Functions:
    //===================
    
    let parsedTemplate;

    const parseView = (template, variable) => {
      const interpolate = /\{=([\s\S]+?)\}/img;
      variable = variable || 'data';
      template.replace("'", "\'");
      /* jshint ignore:start */
      const Template = new Function(variable,
        "var p=[];" + "p.push('" + template
        .replace(/[\r\t\n]/g, " ")
        .split("'").join("\\'")
        .replace(interpolate, "',$1,'")
        // Executable:
        .split('{{').join("');")
        .split('}}').join("p.push('") + "');" +
        "return p.join('');");
      return Template;
      /* jshint ignore:end */
    };

    // Binding any events provided in View options:
    const handleEvents = () => {
      if (!__element) return;
      if (__events.length) {
        __events.forEach(item => {
          if (item && item.element === 'self' || item && !item.element) {
            __element.on(item.event, item.callback);
          } else {
            __element.on(item.event, item.element, item.callback);
          }
        });
      }
    };

    // Get template from element:
    const extractTemplate = () => {
      if (!__element || !__element.size()) return;
      if (__es6Template) return;
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
    var view = {}
    $.extend(view, {

      render: (data, append) => {
        if (!__element) return;
        let __data = data;

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
        const renderIterableData = data => {
          if ($.type(data) === 'boolean') return;
          const Data = data ? data : __model;
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
        const interateModelToTemplate = (Data, append) => {
          if (!append) {
            __element.empty();
          }
          if (__startIndexFrom) $.view.index = __startIndexFrom;
          Data.forEach(item => {
            __index += 1;
            if (__escapeHTML) {
              item = $.escapeHTML(item);
            }
            if (parsedTemplate) {
              __element.append(parsedTemplate(item));
              $.view.index += 1;
            } else if (__template) {

            }
          });
          __lastRenderTime = Date.now();
          __rendered = true;
          $.view.index = 1;
        };
        /* jshint ignore:start */
        // Render view with object of key/value pairs:
        var renderSingleObjectView = append => {
          __model.run((m, d) => {
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
        var bindModelToView = handle => {
          if (!handle || typeof handle !== 'string') return;
          if (!$.mediators[handle]) $.mediators[handle] = $.MediatorStack();
          $.mediators[handle].push({
            token: $.uuid(),
            callback: () => {
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
          data.forEach(item => {
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
        if (__model && Object.keys(__model).indexOf('poke') > -1) {
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

      empty: () => {
        if (!__element) return;
        __element.empty();
      },

      resetIndex: () => {
        if (!__element) return;
        __index = 0;
        __element.data('index', 0);
        $.view.index = 0;
      },

      startIndexFrom: number => {
        if (!__element) return;
        if (number === 0 || (number && !isNaN(number))) {
          __startIndexFrom = number;
          $.view.index = number;
          view.render();
        }
      },

      getTemplate: () => {
        return __template;
      },

      setTemplate: template => {
        if (!template) return;
        __template = template;
      },

      getModel: () => {
        return __model;
      },

      setModel: model => {
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

      getMediator: () => {
        return __mediator.getData()[0];
      },

      isRendered: () => {
        return __rendered;
      },

      isEmpty: () => {
        if (!__element) return;
        if (typeof jQuery === 'undefined' && __element.objectType && __element.objectType === 'domstack') {
          if (__element.array[0].children.length) return false;
        } else if (__element[0].children.length) {
          return false;
        } else {
          return true;
        }
      },

      bind: model => {
        if (!model) return;
        var mediator = $.Mediator(model.getHandle());
        __mediator = mediator;
        var __v = this;
        __model = model;
        mediator.run(data => {
          if (!__element) return;
          __v.render();
        });
        if (!__element) return;
        view.render();
      },

      unbind: () => {
        __model = undefined;
      },

      addEvent: (events, replace) => {
        if (replace) {
          __events = events & events.length ? events : [events];
        } else {
          if (events && events.length) {
            events.forEach(event => {
              __events.push(event)
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
      off: (event, element, callback) => {
        __element.off(event, element, callback);
      },

      getElement: () => {
        return __element;
      },

      setElement: element => {
        if (!element) return;
        __element = $(element);
        $(element).empty();
        handleEvents();
      },

      stop: after => {
        // Stop after x number of times:
        if (!isNaN(after)) {
          __stopAfter = after;
          __startFrom = 0;

          // Else stop immediately:
        } else {
          __canRender = false;
        }
      },

      isStopped: () => {
        return !__canRender;
      },

      restart: time => {
        // Restart after designated time:
        if (!isNaN(time)) {
          __restartTime = (Date.now() + (time * 1000));
          __canRender = false;

          // Else restart immediately:
        } else {
          __canRender = true;
          view.render();
        }
      },

      getRestartTime: () => {
        return __restartTime;
      },

      renderViewAfter: (time, data) => {
        if (!time || isNaN(time) || time <= 0) return;
        var view = this;
        setTimeout(() => {
          view.render(data);
        }, time * 1000);
      },

      renderViewEvery: (time, callback) => {
        if (!time || isNaN(time)) return;
        if (Object.keys(__model).indexOf('poke') > -1) {

          // if the user set loop to stop:
          __renderViewEveryTime = true;
          var view = this;

          // Define loop for rendering view:
          var loop = (view, callback) => {
            if (!__renderViewEveryTime) return;

            // Use setTimeout to loop:
            setTimeout(() => {
              // If the model changed since last render:
              if (__lastRenderTime < __model.getLastModTime()) {

                if (callback && $.type(callback) === 'function') {
                  callback.apply(view);
                }
                view.render();
              }

              loop(this, callback);
            }.bind(view), time * 1000);
          };
          loop(view, callback);
        }
      },

      // set flag to stop renderViewEvery:
      stopRenderViewEvery: () => {
        __renderViewEveryTime = false;
      },

      getLastRenderTime: () => {
        return __lastRenderTime;
      },

      escapeHTML: boolean => {
        if (boolean) {
          __escapeHTML = true;
        }
      },

      isEscapingHTML: () => {
        return __escapeHTML;
      },

      getRenderCount: () => {
        return __renderCount;
      }
    });
    return view;
  }
});