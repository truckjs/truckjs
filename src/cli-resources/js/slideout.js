// import TruckJS library:
import '../src/truck';
// View pulls in its module dependencies -
// mediator, model and Box:
import '../src/modules/view';
import '../src/modules/fetch';
// Navigation pulls in its widget dependencies - 
// setup  and navigation:
import '../src/widgets/slideout';

$(() => {

  // Placeholders for data:
  let music;
  let docs; 
  let recipes;
  let favorites;

  let templates = [];
  // Music Template:
  templates[0] = 
  `<li>
    <img src='{= data.image }'>
    <div>
      <h3>{= data.title }</h3>
      <h4>{= data.album }</h4>
      <p>{= data.description }</p>
    </div>
  </li>`;

  // Documents Template:
  templates[1] = 
  `<li class="center-vertical">
    <h3>{= data.title }</h3>
    <h4>{= data.subtitle }</h4>
    <aside>
      <span class="counter">{= data.amount }</span>
    </aside>
  </li>`;

  // Recipes Template:
  templates[2] = 
  `<li>
    <div>
      <h3>{= data.name }</h3>
      <h4>Ingredients</h4>
      <ul>
        {{ data.ingredients.forEach(function(ingredient) { }}
          <li>{= ingredient }</li>
        {{ }); }}
      </ul>
      <h4>Directions</h4>
      <ol>
        {{ data.directions.forEach(function(direction) { }}
          <li>{= direction }</li>
        {{ }); }}
      </ol>
    </div>
  </li>`;

  // Favorites Template:
  templates[3] = 
  `<li>
    <h3>{= data }</h3>
  </li>`;

  let app = {
    // Define view:
    listView: $.View({
      element: "#myList"
    }),

    // Define router:
    router: $.Router()
  }

  // Define initial state of View:
  //==============================
  
  app.listView.setTemplate(templates[0]);
  // This may not be ready in time.
  // See fetch for music data above for fallback:
  app.listView.render(music);

  // Setup Slide Out:
  //=================
  let AppSlideOut = $.SlideOut();
  // Notice names have `:` to 
  // indicate id for routing.
  // Id will be used to render view.
  AppSlideOut.populate([
    { "choice:music": "Music" },
    { "choice:documents": "Documents"},
    { "choice:recipes": "Recipes" },
    { "choice:favorites": "Favorites" }
  ]);

  // Define routes to handle ids
  // from slide out menu items:
  //===========================
  app.router.addRoute([
    {
      // The route:
      route: "choice", 
      // Callback to handle passed id:
      callback: id => {
        // Method to render templates in switch statement:
        var renderChosenTemplate = function(template, item) {
          app.listView.setTemplate(template);
          app.listView.render(item);
        };
        // Handle passed id:
        switch (id) {
          case "music":
            renderChosenTemplate(templates[0], music);
            break;
          case "documents":
            renderChosenTemplate(templates[1], docs);
            break;
          case "recipes":
            renderChosenTemplate(templates[2], recipes);
            break;
          case "favorites":
            renderChosenTemplate(templates[3], favorites);
            break;
        }
      }
    }
  ]);

  // Fetch data:
  //============
  fetch('./data/music.json')
    .then(function(response) {
      return response.json();
    })
    .then((obj) => {
      music = obj;
      // Render listView with data:
      app.listView.render(music);
    });  
  fetch('./data/docs.json')
    .then(function(response) {
      return response.json();
    })
    .then((obj) => {
      docs = obj;
    });
  fetch('./data/recipes.json')
    .then(function(response) {
      return response.json();
    })
    .then((obj) => {
      recipes = obj;
    });
  fetch('./data/favorites.json')
    .then(function(response) {
      return response.json();
    })
    .then((obj) => {
      favorites = obj;
    });
});