// Truck Body - Navbar Auto Layout
(function() {
  $(function() {
    "use strict";
    // Method to center H1 in Navbar.
    // Check on widths of siblings:
    $.extend({
      AdjustNavbarLayout: function(screen) {
        if (!$('link[href*=ios]')[0]) return;
        screen = $(screen);
        var siblings = screen.find('h1').siblings();
        var whichSide;
        var oppositeSide;
        var amount = 0;
        var padding = 20;
        var oppositeAmount = 25;
        var h1 = screen.find('h1');
        var navWidth = screen.find('nav').width();

        var calculateLongest = function(a, b) {
          var widthA = a[0].clientWidth;
          var widthB = b[0].clientWidth;
          if (widthB > widthA) {
            whichSide = 'margin-left';
            oppositeSide = 'margin-right';
            amount = (widthB - widthA);
          } else if (widthA > widthB) {
            whichSide = 'margin-right';
            oppositeSide = 'margin-left';
            amount = (widthA - widthB);
          } else {
            amount = 0;
          }
        };

        // If one sibling:
        if (siblings.length === 1) {
          var sibling = h1.siblings().eq(0);
          amount = sibling.width();
          if (siblings.is(':first-child')) {
            whichSide = 'margin-right';
            oppositeSide = 'margin-left';
          } else if (siblings.eq(0).is(':last-child')) {
            whichSide = 'margin-left';
            oppositeSide = 'margin-right';
          }

          // If two siblings:
        } else if (siblings.length === 2) {
          calculateLongest(siblings.eq(0), siblings.eq(1));

          // H1 is alone:
        } else {
          whichSide = 'margin-left';
          oppositeSide = 'margin-right';
          amount = 0;
        }
        var props = {};
        props[whichSide.toString()] = amount;
        props[oppositeSide.toString()] = 0;
        var sibwidth = 0;
        if (siblings.size()) {
          siblings.forEach(function(item) {
            sibwidth += $(item).width();
          });
        }
        var headerWidth = screen.find('nav').width() / 2;
        if ((sibwidth + 20) > headerWidth) {
          h1.css({
            'margin-left': 0,
            'margin-right': 0
          });
        } else {
          h1.css(props);
        }
      }
    });
    $('screen').forEach(function(screen) {
      $.AdjustNavbarLayout(screen);
    });
  });
})();