// import TruckJS library:
import '../src/truck';
// View pulls in its module dependencies -
// mediator, model and Box:
import '../src/modules/view';
import '../src/modules/fetch';
// Navigation pulls in its widget dependencies - 
// setup, screens and router:
import '../src/widgets/navigation';

$(() => {

  // Initialize empty model:
  //========================
  let LumsModel = $.Model([], "luminaries-handle");

  // Fetch data and put in model:
  //=============================
  fetch('./data/lums.json')
    .then($.json)
    .then(function(obj) {
      // Put data in model:
      LumsModel.concat(obj);
    });

  // Init views:
  //=============
  let App = {
    VIPView: $.View({
      element: "#arrayTemplate1", 
      model: LumsModel,
      startIndexFrom: 1,
      events: [{
        event: "tap",
        element: "li",
        callback: function() {
          console.log($(this).text());
        }
      }],
      template: 
      `<li data-goto='detail:{= data.guid }'>
        <h3>{= $.view.index }: {= data.firstName } {= data.lastName }</h3>
        <aside>
          <disclosure></disclosure>
        </aside>
      </li>`
    }),
    
    chosenPersonView: $.View({
      element: "#chosenPersonList",
      template: 
      `<li>
        <img src='{= data.image }'>
        <div>
          <h3>First Name: {= data.firstName }</h3>
          <h3>Last Name: {= data.lastName }</h3>
        </div>
      </li>`
    }),

    // Setup Router:
    router: $.Router()
  };

  // Render views:
  //==============
  App.VIPView.render();


  // Define Routes:
  //===============
  App.router.addRoute([
    {
      // Route for detail screen:
      route: "detail",

      // Capture id in callback:
      callback: id => {
        // Get current view model:
        var model = App.VIPView.getModel().getData();
        // Filter model with id passed in route:
        var whichPerson = model.filter(function(person) {
          return person.guid === id;
        })[0];
        // Output peron"s name:
        $("#chosenPerson").text("Welcome, " + whichPerson.firstName + ".");
        // Output full route:
        $(".fullRoute").text($.TruckRoutes.getFullRoute());
        // App.chosenPersonView.empty();
        App.chosenPersonView.render(whichPerson);
      }
    }
  ]);
});