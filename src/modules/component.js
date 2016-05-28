// Truck Module - Component:
import '../truck';
import './view';

$.extend({
  Component: options => {
    var comp = $.Component;
    $[options.name] = () => {
      comp.options = options;
      delete comp.options.name
      return $.View(comp.options);
    };
  }
});