// Truck Widget - Router:
import '../truck';
import '../modules/model';

$(() => {
  $.extend({
    //===============
    // Define Router:
    //===============
    TruckRoutes: $.Model([], 'Truck-Routes'),

    Router: () => {

      $.receive('Truck-Routes', $.noop);

      return {
        addRoute: options => {
          if ($.type(options) === 'array') {
            options.forEach(function(item) {
              if (!$.mediators[item.route]) {
                $.mediators[item.route] = $.MediatorStack();
                $.mediators[item.route].push({
                  token: $.uuid(),
                  callback: item.callback,
                  exec: true,
                  count: 0
                });
              }
            });
          }
        },

        getFullRoute: () => $.TruckRoutes.getData().join('/'),

        getRoutesStack: () => $.TruckRoutes.getData(),

        getCurrentLoc: () => {
          const temp = this.getFullRoute().split('/');
          return temp[temp.length - 1];
        },

        dispatch: route => {
          let temp;
          let id;
          if (route.match(/\:/)) {
            temp = route.split(':');
            id = temp[1];
            route = temp[0];
          }
          if ($.mediators[route]) {
            $.mediators[route].getData()[0].callback(id);
          }
        },

        pushRoute: route => $.TruckRoutes.push(route),

        popRoute: () => $.TruckRoutes.pop(),

        unshiftRoute: route => $.TruckRoutes.unshift(route),

        shiftRoute: () => $.TruckRoutes.shift(),

        insert: (position, route) => {
          if ($.TruckRoutes.size() >= position) {
            $.TruckRoutes.push(route);
          } else {
            $.TruckRoutes.splice(position, 0, route);
          }
        },

        eq: number => $.TruckRoutes.eq(number),

        indexOf: route => $.TruckRoutes.indexOf(route),

        delete: (route, baseRouteOnly) => {
          if (baseRouteOnly) {
            $.TruckRoutes.delete(route);
          } else {
            $.TruckRoutes.forEach(function(r) {
              if (r && route === r.split(':')[0]) {
                $.TruckRoutes.delete(r);
              }
            });
          }
        }
      };
    }
  });

  $.extend($.Router, {
    dispatch: route => {
      if (!route) return;
      let temp;
      let id;
      if (route.match(/\:/)) {
        temp = route.split(':');
        id = temp[1];
        route = temp[0];
      }
      if ($.mediators[route]) {
        $.mediators[route].getData()[0].callback(id);
      }
    }
  });

  $.extend($.TruckRoutes, {
    getFullRoute: function() {
      return this.getData().join('/');
    }
  });

  // Set up initial route:
  if ($('screen').size()) {
    $.TruckRoutes.push($('screen')[0].id, true);
  }

});