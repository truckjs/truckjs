
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