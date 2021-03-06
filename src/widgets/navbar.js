// Truck Widget - Adjust Navbar for iOS:
import '../truck';
import './setup';

$(() => {

  //===============================
  // Method to center H1 in Navbar.
  // Check on widths of siblings:
  //===============================
  $.extend({
    AdjustNavbarLayout: (screen) => {
      if (!$('link[href*=ios]')[0]) return;
      screen = $(screen);
      const h1 = screen.find('h1');
      const siblings = h1.siblings();
      let whichSide;
      let oppositeSide;
      const rtl = ($('html').attr('dir') === 'rtl');
      let amount = 0;
      let hidden = false;
      let visibleSibling;

      const calculateLongest = (a, b) => {
        let widthA = a[0].clientWidth;
        let widthB = b[0].clientWidth;
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
          amount = (widthB - widthA);
        } else if (widthA > widthB) {
          whichSide = 'margin-right';
          oppositeSide = 'margin-left';
          if (rtl) {
            whichSide = 'margin-left';
            oppositeSide = 'margin-right';
          }
          amount = (widthA - widthB);
        } else {
          amount = 0;
        }
      };

      function handleOneSibling(sib) {
        const sibling = sib || h1.siblings();
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
        siblings.forEach(item => {
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
      let props = {};
      props[whichSide] = amount;
      // props[oppositeSide] = 0;
      let sibwidth = 0;
      if (siblings.size()) {
        siblings.forEach(function(item) {
          sibwidth += $(item)[0].clientWidth;
        });
      }
      // alert(amount)
      const headerWidth = screen.find('nav').width() / 2;
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
  setTimeout(() => {
    $('screen').forEach(screen => {
      $.AdjustNavbarLayout(screen);
    });
  });
});