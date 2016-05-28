
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