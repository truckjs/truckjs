// import TruckJS library:
import '../src/truck';
// View pulls in its module dependencies -
// mediator, model and Box:
import '../src/modules/view';
import '../src/modules/fetch';
// Navigation pulls in its widget dependencies - 
// setup, router and navigation:
import '../src/widgets/tabbar';

$(() => {

  // Fetch data:
  //============
  fetch('./data/music.json')
    .then($.json)
    .then(obj => {
      musicView.render(obj);
    });  
  fetch('./data/docs.json')
    .then($.json)
    .then(obj => {
      docsView.render(obj);
    });
  fetch('./data/recipes.json')
    .then($.json)
    .then(obj => {
      recipesView.render(obj);
    });
  fetch('./data/favorites.json')
    .then($.json)
    .then(obj => {
      favoritesView.render(obj);
    });

  // Options for Tab Bar:
  //=====================
  const opts = {
     icons: ["music", "docs", "recipes", "top_rated"],
     labels: ["Music", "Docs", "Recipes", "Favs"],
     selected: 1,
     screens: ["music", "documents", "recipes", "favorites"],
     showIcons: false
  };
  // Init Tab Bar:
  //==============
  $.MyTabbar = $.TabBar(opts);
  // Music View:
  //============
  let musicView = $.View({
    element: "#musicList",
    variable: "music",
    template:
    `<li>
      <img  data-src="{= music.image }" height="80px">
      <div>
        <h3>{= music.title }</h3>
        <h4>{= music.album }</h4>
        <p>{= music.description }</p>
      </div>
    </li>`
  });
  // Docs View:
  //===============
  let docsView = $.View({
    element: "#docsList",
    variable: "doc",
    template:
    `<li class="center-vertical">
      <h3>{= doc.title }</h3>
      <h4>{= doc.subtitle }</h4>
      <aside>
        <span class="counter">{= doc.amount }</span>
      </aside>
    </li>`
  });
  // Recipes View:
  //==================
  let recipesView = $.View({
    element: "#recipesList",
    variable: "recipe",
    template:
    `<li>
      <div>
        <h3>{= recipe.name }</h3>
        <h4>Ingredients</h4>
        <ul>
          {{ recipe.ingredients.forEach(function(ingredient) { }}
            <li>{= ingredient }</li>
          {{ }); }}
        </ul>
        <h4>Directions</h4>
        <ol>
          {{ recipe.directions.forEach(function(direction) { }}
            <li>{= direction }</li>
          {{ }); }}
        </ol>
      </div>
    </li>`
  });
  // Favorites View:
  //====================
  let favoritesView = $.View({
    element: "#favoritesList",
    template:
    `<li>
      <h3>{= data }</h3>
    </li>`
  });
});