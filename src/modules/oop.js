// Truck Module - OOP:
import '../truck';

$.extend({

  // Mixin one object into another:
  //===============================
  mixin: (sourceObj, targetObj) => {
    for (let key in sourceObj) {
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
  clone: obj => {
    if (typeof Object.create != 'function') {
      Object.create = (() =>{
        function Temp() {}
        const hasOwn = Object.prototype.hasOwnProperty;

        return O => {
          if (typeof O != 'object') {
            throw TypeError('Object prototype may only be an Object or null');
          }
          Temp.prototype = O;
          let obj = new Temp();
          Temp.prototype = null;
          if (arguments.length > 1) {
            const Properties = Object(arguments[1]);
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
    return Object.create(obj);
  }
});