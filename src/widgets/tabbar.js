// Truck Widget - Tab Bar:
import '../truck';
import './setup';
import './navigation';

$.extend({
  //=========================================
  // Creates a Tab Bar for Toggling Articles:
  //=========================================
  TabBar: options => {
    /*
    var options = {
      id: 'mySpecialTabbar',
      labels: ["Refresh", "Add", "Info", "Downloads", "Favorite"],
      icons: ["refresh", "add", "info", "downloads", "favorite"],
      screens: [],
      selected: 2,
      showIcons: false // set to true for Android and Windows
    }
    */
    if (!options) return;
    let id = $.uuid();
    let settings = {
      selected: 0
    };
    $.extend(settings, options);
    if (!settings.icons.length) {
      settings.icons = settings.labels;
    }
    if (!settings.id) {
      settings.id = id;
    } else {
      id = settings.id;
    }

    // Private variable to keep track of screens:
    let __tabbarScreens = $();

    let screens = $();
    const screenPrefix = '#';

    if (settings.screens) {
      settings.screens.forEach(screen => {
        if (!/screenPrefix/img.test(screen)) {
          __tabbarScreens.push($(screenPrefix + screen)[0]);
          $(screenPrefix + screen).addClass('tabScreen');
        } else {
          __tabbarScreens.concat($(screen)[0]);
          $(screen).addClass('tabScreen');
        }
      });
    } else {
      settings.labels.forEach((screen, idx) => {
        __tabbarScreens.push(screens.eq(idx));
      });
    }
    let selectedScreen;
    const showIcons = settings.showIcons ? ' class="showIcons" ' : '';

    // Helper: Set Screen to Current:
    //===============================
    const setToCurrent = element => {
      $(element).removeClass('previous').removeClass('next').addClass('current');
      $(element).attr('aria-hidden', 'false');
    };

    // Helper: Set Screen to Next:
    //============================
    const setToNext = element => {
      $(element).removeClass('current').addClass('next');
      $(element).attr('aria-hidden', 'true');
    };

    // Create tabs:
    //=============
    const makeTab = (label, icon, idx) => {
      let tab = `<button role="tab" class="${ icon }`;
      if (settings.selected === idx) {
        tab += ' selected';
      }
      tab += '"';
      if (settings.screens && settings.screens.length) {
        tab += ` data-id="${ settings.screens[idx] }"`;
      }
      tab += `><span class="icon"></span><label>${ settings.labels[idx] }</label></button>`;
      return tab;
    };
    // Create tab bar:
    //================
    let tabbarTmpl = $(`<tabbar role="tabpanel"${ showIcons }></tabbar>`);
    tabbarTmpl[0].id = settings.id;
    tabbarTmpl.addClass('tabbar');

    setToNext($('screen'));
    selectedScreen = $('screen').eq(settings.selected);
    setToCurrent(selectedScreen);

    if (settings.labels.length) {
      settings.labels.forEach((label, idx) => {
        tabbarTmpl.append(makeTab(label, settings.icons[idx], idx));
      });
    }
    $('body').prepend(tabbarTmpl);



    // Get id of appended tab bar:
    let tabbar = $('#' + settings.id);

    // Private variables to manage tab bar: 
    const __tabbarButtons = tabbar.find('button');
    const __selectedTabbarButton = __tabbarButtons.eq(settings.selected);
    const __selectedTabbarScreen = __tabbarScreens.eq(settings.selected);




    // Setup events on tabs:
    //======================
    $(() => {

      $.TruckRoutes.purge();
      $.TruckRoutes.push(__tabbarScreens.eq(settings.selected)[0].id);

      const tabbarButtons = tabbar.find('button');
      $.Router.dispatch(__selectedTabbarScreen[0].id);
      tabbarButtons.forEach((button, idx) => {
        $(button).data('truck-route', __tabbarScreens.eq(idx)[0].id);
      });

      // Tap on tab:
      tabbar.on('tap', 'button', function() {
        const routes = $(this).data('truck-route').split('/');
        const fullRoute = $.TruckRoutes.getFullRoute();

        // This tab holds a navigation list:
        if (routes.length > 1) {
          __tabbarButtons.hazClass('selected').data('truck-route', fullRoute);
          __tabbarButtons.hazClass('selected').removeClass('selected').addClass('next');
          // Set this tab to `selected`:
          $(this).addClass('selected');
          // Deal with previously selected tab and screen:
          $('screens').removeClass('current').addClass('next')
            .attr('aria-hidden', true);
          $('screens').removeClass('previous').addClass('next')
            .attr('aria-hidden', true);
          let navRoutesFull = $(this).data('truck-route');
          const navRoutes = navRoutesFull.split('/');
          navRoutes.forEach((route, idx) => {
            const routing = route.split(':');
            let whichRoute = routing[0];
            if (idx !== routes.length - 1) {
              $('#' + whichRoute).removeClass('next').addClass('previous').attr('aria-hidden', true);
            } else {
              $('#' + whichRoute).removeClass('next').addClass('current').attr('aria-hidden', false);
            }
          });
          // Take care of routes:
          $.TruckRoutes.purge();
          $.TruckRoutes.concat(navRoutes);
          $.Router.dispatch(routes[routes.length - 1]);

          // This tab has a single screen:
        } else {

          __tabbarButtons.hazClass('selected').data('truck-route', fullRoute);
          __tabbarButtons.hazClass('selected').removeClass('selected').addClass('next');
          // Deal with previously selected tab and screen:
          $('screen').removeClass('current').addClass('next')
            .attr('aria-hidden', true);
          $('screen').removeClass('previous').addClass('next')
            .attr('aria-hidden', true);
          // Set this tab to `selected`:
          $(this).addClass('selected');
          // Make this tab's screen `current`:
          $.screens.eq($(this).index()).removeClass('next').removeClass('previous')
            .addClass('current').attr('aria-hidden', false);
          // Take care of routes:
          $.TruckRoutes.purge();
          $.TruckRoutes.concat(routes);
          $.Router.dispatch(fullRoute);

        }
      });
    });

    return {

      getSelectedTab: () => {
        return __selectedTabbarButton;
      },

      getSelectedScreen: () => {
        return __selectedTabbarScreen;
      },

      setSelectedTab: (position) => {
        tabbar.find('button').iz('.selected').removeClass('selected').addClass('next');
        tabbar.children('button').eq(position).addClass('selected');
        setToNext(__tabbarScreens.iz('.current')[0]);
        setToCurrent(__tabbarScreens.eq(position)[0]);
      }
    };
  }
});