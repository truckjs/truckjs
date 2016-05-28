// Truck Widget - Navigation Module:
import '../truck';
import './setup';
import './screens';
import './router';

$(() => {
  // Private variable to track navigation state:
  let isNavigating = false;
  // get screen by id:
  const getScreen = screen => $('#' + screen);

  // Handle state of screens:
  const makeScreenCurrent = screen => {
    screen = $(screen);
    screen.addClass('current');
    screen.removeClass('previous');
    screen.removeClass('next');
  };
  const makeScreenPrevious = screen => {
    screen = $(screen);
    screen.removeClass('current');
    screen.removeClass('next');
    screen.addClass('previous');
  };
  const makeScreenNext = screen => {
    screen = $(screen);
    screen.removeClass('current');
    screen.removeClass('previous');
    screen.addClass('next');
  };

  $.extend({

    ///////////////////////////////
    // Navigate to Specific Article
    ///////////////////////////////
    GoToScreen: destination => {
      if (isNavigating) return;
      isNavigating = true;
      $.TruckRoutes.push(destination);
      const currentScreen = $.screens.getCurrent();
      const destinationScreen = (function() {
        var temp;
        var regex = /:/img;
        temp = regex.test(destination) ?
          destination.split(':')[0] : destination;
        return getScreen(temp);
      })();
      if (currentScreen[0]) currentScreen[0].scrollTop = 0;
      if (destinationScreen[0]) destinationScreen[0].scrollTop = 0;
      makeScreenPrevious(currentScreen);
      makeScreenCurrent(destinationScreen);
      $.Router.dispatch(destination);
      setTimeout(function() {
        isNavigating = false;
      }, 500);
    },

    ////////////////////////////////////
    // Navigate Back to Previous Article
    ////////////////////////////////////
    GoBack: () => {
      const currentScreen = $.screens.getCurrent();
      $.TruckRoutes.pop();
      const desintation = $.TruckRoutes.eq(-1);
      let dest = $.TruckRoutes.eq(-1).split(':')[0];
      const destinationScreen = getScreen(dest);
      if ($.TruckRoutes.size() === 0) {
        dest = $.screens.eq(0);
        $.TruckRoutes.push(dest[0].id);
      }
      if (currentScreen[0]) currentScreen[0].scrollTop = 0;
      if (destinationScreen[0]) destinationScreen[0].scrollTop = 0;
      $.Router.dispatch(desintation);
      makeScreenNext(currentScreen);
      makeScreenCurrent(destinationScreen);
      if ($.TruckRoutes.size() === 1) return;
    },

    isNavigating: false,

    //////////////////////////////////////
    // Navigate Back to Non-linear Article
    //////////////////////////////////////
    GoBackToScreen: destination => {
      const position = $.TruckRoutes.index(destination);
      const destinationScreen = getScreen(destination);
      let temp;
      while ($.TruckRoutes.size() > position + 1) {
        temp = $.TruckRoutes.pop();
        temp = getScreen(temp);
        makeScreenNext(temp);
      }
      makeScreenCurrent(destinationScreen);
      $.Router.dispatch(destination);
    }
  });


  ///////////////////////////////////////////////////////////
  // Make sure that navs and articles have navigation states:
  ///////////////////////////////////////////////////////////

  ///////////////////////////
  // Initialize Back Buttons:
  ///////////////////////////
  $('body').on('tap', '.back', function() {
    if (this.hasAttribute('disabled')) return;
    $.GoBack();
  });

  ////////////////////////////////
  // Handle navigation list items:
  ////////////////////////////////

  const handleNavigationEvent = element => {
    element = $(element);
    if ($.isNavigating) return;
    if (!element.hazAttr('data-goto')[0]) return;
    if (element.closest('ul').is('.deletable')) return;
    var destination = element.attr('data-goto');
    if (!destination) return;
    element.addClass('selected');
    setTimeout(function() {
      element.removeClass('selected');
    }, 1000);
    // Handle navigation:
    if ($.isAndroid || $.isChrome) {
      setTimeout(function() {
        $.GoToScreen(destination);
      }, 200);
    } else {
      $.GoToScreen(destination);
    }
  };
  $('body').on('tap', 'li', function() {
    handleNavigationEvent($(this));
  });
  $('body').on('doubletap', 'li', function() {
    if (!$.isNavigating) {
      handleNavigationEvent($(this));
    }
  });
});