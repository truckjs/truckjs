// Truck Widget - Screens:
import '../truck';

$(() => {
  //=================================
  // Interface for the app's screens:
  //=================================
  $.extend({
    screens: $('screen')
  });
  $.extend($.screens, {
    getCurrent: function() {
      return this.hazClass('current');
    },

    getNext: function() {
      return this.hazClass('next');
    },

    getPrevious: function() {
      return this.hazClass('previous');
    }
  });
});