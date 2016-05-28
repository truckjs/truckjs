// Truck Module - Mediator:
import '../truck';

$.extend({
    
  /**
   * Used by $.Mediator as mediator store. Do not touch!
   */
  MediatorStack: (array) => {
    let __array = [];
    if (array && Array.isArray(array)) {
      let i = -1;
      const len = array.length;
      while (++i < len) {
        __array[i] = array[i];
      }
    } else if (array) {
      const arr = Array.prototype.slice.apply(arguments);
      arr.forEach(function(ctx, idx) {
        __array[idx] = ctx;
      });
    }
    return {

      size: () => __array.length,

      push: data => __array.push(data),

      eq: index => {
        if (index < 0) {
          return __array[__array.length + index];
        } else {
          return __array[index];
        }
      },

      indexOf: () => __array.indexOf.apply(__array, arguments),

      forEach: callback => {
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

      setExecutable: (token, exec) => {
        __array.forEach(receiver => {
          if (receiver.token === token) {
            receiver.exec = exec;
            delete receiver.stopAfter;
          }
        });
      },

      setStopAfter: (token, stopAfter) => {
        __array.forEach(receiver => {
          if (receiver.token === token) {
            receiver.stopAfter = stopAfter;
          }
        });
      },

      splice: () => __array.splice.apply(__array, arguments),

      getData: () => __array
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
  Mediator: (handle, callback) => {
    if (!$.mediators[handle]) {
      $.mediators[handle] = $.MediatorStack(); // jshint ignore:line
    }
    let __exec = true;
    let __stopAfter;
    const token = ($.uuid());
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

      run: data => {
        if(!mtor.exec) return;
        if (__stopAfter && __stopAfter > 0) {
          callback.call(this, data);
          __stopAfter--;
          if(!mtor.stopCount) mtor.count++;
          $.mediators[handle].setStopAfter(token, __stopAfter);
          if (__stopAfter === 0) {
            mtor.exec = false;
            $.mediators[handle].setExecutable(token, false);
          }
        } else {
          if (callback) {
            callback.call(this, data);
            if (!mtor.stopCount) mtor.count++;
          }
        }
      },

      stop: stopAfter => {
        if (stopAfter) {
          __stopAfter = stopAfter;
          $.mediators[handle].setStopAfter(token, stopAfter);
        } else {
          mtor.exec = false;
          $.mediators[handle].setExecutable(token, false);
        } 
      },

      start: () => {
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
  receive: (handle, callback) => {
    return $.Mediator(handle, callback);
  },

  /**
   * Method to create a dispatcher which sends a handle and any possible data to a receiver or mediator.
   *
   * @param {string} handle The handle to dispatch to.
   * @param {any} args The data, if any, to send with the dispatch.
   * @return {boolean}
   */
  dispatch: (handle, args) => {
    if (!$.mediators[handle]) {
      return false;
    }
    setTimeout(() => {
      let len = $.mediators[handle] ? $.mediators[handle].size() : 0;
      while (len--) {
        if (!$.mediators[handle].eq(len).exec) return;
        let stopAfter = $.mediators[handle].eq(len).stopAfter;
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
  startDispatch: mediator => {
    setTimeout(() => {
      for (let m in $.mediators) {
        if ($.mediators[m] && $.mediators[m].size()) {
          $.mediators[m].forEach((item, i) => {
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
  stopDispatch: mediator => {
    setTimeout(() => {
      for (let m in $.mediators) {
        if ($.mediators[m] && $.mediators[m].size()) {
          $.mediators[m].forEach((item, i) => {
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