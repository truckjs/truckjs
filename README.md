#Truck

##An MVC Framework for Mobile Web Apps

###We're pleased to announce that all the development efforts that we put into TruckJS have now been incorporated directly into ChocolateChip-UI. Originally we thought this would be too difficult, so we created a completely separate framework.

####It was great to being able to break out of the mold and try new approaches to solve tough problems in app development. We came up with some cool features for TruckJS. In time we realized that we could bring all those features over to ChocolateChip-UI. On doing so, we simplified some of TruckJS's approaches. We really like out it turned out. If you liked what you found in TruckJS, you're really going to like the new versioni of ChocolateChip-UI.

####Please visit [ChocolateChip-UI](https://chocolatechip-ui.github.io) to learn more about how you can build the best apps with great features.

Truck provides you with tools for creating amazing Web apps for mobile devices. Using themes, it gives you the native look and feel of Android, iOS and Windows Phone from one code base.

Truck is built with ES6 features and uses Babel to transpile it to ES5 for current browsers. The number one reason we chose to use ES6 was so we could use ES6 modules. Using these with Babel and JSPM allows you to create a final build with just the parts you need. There is simply no reason to load all modules and widgets into your project if you are only going to use a few.

To learn more about TruckJS, please visit the [TruckJS website](http://rbiggs.github.io).

##Getting Started

To use TruckJS, install it with NPM:

```
npm i -g truckjs
```

This will give you the full TruckJS project. To see what Truck has to offer, you can use the command line tool to put all the examples on your desktop:

```
truckjs --examples
```

After running this, you will find a folder called "TruckJS-examples" on your desktop. The examples are double-clickable, unless they involve `fetch`, which requires a server instance to make data calls. 

This version of TruckJS used by the examples is for demonstration purposes only. It has all the modules and widgets bundled together. Please read ahead for how to set up a development project with `truckjs`.

##Setting up a Development Project

To create a project, you need to have the NPM module installed, as described above in `Getting Started`. Once this is done, you can create a project as follows:

```
truckjs -n myproject -t navigation
```

This will create a simle project named `myproject` that supports basic navigation. There are a number of parameters you can use to create the type of project you want:

- `-n` Provide the name for your project. This must be lowercase as it will be assigned to your project's package.json file.
- `-t` The type of project. Truck has four types: "default" (a simple list), "navigation", "slideout" and "tabbar". If no type is provided it goes to default.
- `-o` The mobile platform to target: "android", "ios", "windows". If no value is provided, it defaults to "ios".

###Using JSPM and Babel
You can also create a project that uses JSPM and Babel. This allows you to use ES6 mobule imports and ES6 systax in your project. To do so, you use any of the previous flags described about, but you also provide the flag `-j`. This flag triggers the creation of a project with JSPM/Babel/BrowserSync. This is your best option. Not using it results in a static project. Using this option gives you a dynamic project with live reload using a server instance. Your code will be parsed, dependencies determined and a custom bundle created for your project. It also allows you to write your app in ES6 and let Bable transpile it to ES5. 

Just add the `-j` flag to your project creationg command:

```
truckjs -n myproject -t navigation -o android -j
```

After creating the project, `cd` to the folder and run `npm install`. This will take some time. When it is done, run `jsmp install`. This type of project has the following folder structure:

```
|-- config.js      // used by JSPM
+-- data           // holds your project's JSON data
    |-- app.js     // your main development file
+-- dist           // where your final transpiled code goes
    |-- app.bundle.js  // your output that is used by index.html
|-- gulpfile.js    // you project's gulp file, used for running server. 
+-- images         // holds your images
|-- index.html     // your main app document
|-- jsconfig.json  // used by IDEs to understand your project structure
+-- jspm_packages  // packages used by JSPM
+-- node_modules   // the projects node modules
|-- package.json   // used by NPM to setup your project
+-- src            // source for modules and widgets
    |-- domstack.js
    +-- modules
    |-- truck.js
    +-- widgets
```

The first time you use your project, you need to build it:

```
gulp build
```

This takes about 5 seconds. When it is done, run

```
gulp serve
```

This will load your project in your browser. This also watches the following files: `index.html`, `dev/app.js`, `dist/app.bundle.js`. When you edit and save anything in `index.html` or `dev/app.js`, JSPM will reprocess your imports, calculate the dependencies, transpile the code to ES5 and bundle the result as `app.bundle.js` in your `dist` folder. Then it will reload the page in the browser. Determining the dependencies, transpiling and combining them into a bundle and take some time, usually 5-6 seconds. So while working on your `app.js` file, only save when you are ready to transpile and bundle.

###Importing Modules and Widgets

Using JSPM to develop your app allows you to use the origin ES6 source files for Truck's modules and wigets. Using the ES6 module import syntax, you can tell JSPM to build you a result with only those files. JSPM takes the dependencies you've defined and bundles them up into one file: app.bundle.js, which you'll find in the `dist` folder. You `index.html` loads that by default. When you choose a type of project, the command creates a file in the `dev` folder that imports what modules and widgets needed for it. If you want more modules or widgets to use, you can import them yourself. Below is how you would do it:


```
// Import these modules:
import '../src/modules/form';
import '../src/widgets/popup';
import '../src/modules/promises';

// Import these widgets:
import '../src/widgets/range';
import '../src/widgets/switches';
```
When you run build, JSPM will check all the dependencies and bundle up what you need. It checks for circular references and only loads one instance of each dependency, event when it is imported more than one by other modules.

###Available Modules:

- anim
- box
- component
- environment
- fetch
- form
- formatters
- mediators
- model
- oop
- promises
- stack
- validators
- view

###Available Widgets:

- activity-indicator
- block
- buttons
- center
- editable
- multi-select-list
- navbar
- navigation
- paging
- popover
- popup
- range
- router
- screens
- segmented
- select-list
- setup
- sheets
- slideout
- stepper
- switches
- tabbar

To learn more about the TruckJS modules and widgets, please refer to the [documentation](http://truckjs.io/docs/models/models-intro.html).
