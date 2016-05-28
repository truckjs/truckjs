
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