var gulp = require('gulp');
var pkg = require('./package.json');
var jspm = require('gulp-jspm');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var replace = require('replace-in-file');
var path = require("path");
var ncp = require('ncp').ncp;
var noop = function() {};
var osTypes = ['truck-android','truck-ios','truck-windows'];

// Create Truck core DOM library:
gulp.task('truck-full', function () {
  gulp.src('./src/truck-full.js')
    .pipe(sourcemaps.init())
    .pipe(jspm({selfExecutingBundle: true, minify: false}))
    .pipe(rename('truck.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/'));
});

// Copy dist files to examples:
gulp.task('examples-dist', function() {
  ncp.limit = 16;
  ncp('dist', 'examples/dist',noop);
  ncp('dist', 'examples-rtl/dist',noop);
});

// Copy styles to dist and examples:
var cssDirectory = 'src/styles/';
var cssFileNames = [
  'truck-android.css',
  'truck-ios.css',
  'truck-windows.css'
];

var cssFiles = cssFileNames.map(function (f) {
  return path.join(cssDirectory, f);
});    

gulp.task('styles', function() {
  cssFiles.forEach(function(file, idx) {
    gulp.src([file, 'src/styles/grids.css', 'src/styles/cards.css'])
      .pipe(concat(cssFileNames[idx]))
      .pipe(gulp.dest('dist/styles'))
      .pipe(cssnano({safe: true}))
      .pipe(rename(osTypes[idx] + '.min.css'))
      .pipe(gulp.dest('dist/styles'));
  });  
});

// Create Truck core DOM library minified:
gulp.task('truck-full-minify', function () {
  gulp.src('./src/truck-full.js')
    .pipe(sourcemaps.init())
    .pipe(jspm({selfExecutingBundle: true, minify: true, mangle: true}))
    .pipe(rename('truck.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/'));
});

// Truck core files:
var truckBundle = [
  'truck-open',
  'dom-query',
  'extend',
  'utilities',
  'types',
  'strings',
  'dom',
  'data',
  'serialize',
  'params',
  'events',
  'event-aliases',
  'gestures',
  'collection-utilities',
  'truck-close'
].map(function (file) {
  return './src/core/' + file + '.js'
});

///////////////////////////////
// Create Truck core library,
// Will be used by 'truck-full' 
// & 'truck-full-minify' tasks,
// so must be run first.
///////////////////////////////
gulp.task('truck-core', function() {
  gulp.src('./src/core/domstack.js')
    .pipe(gulp.dest('./src/'));

  gulp.src(truckBundle)
    .pipe(concat('truck.js'))
    .pipe(gulp.dest('./src/'));

  setTimeout(function() {
    replace({
      replace: /VERSION_NUMBER/g,
      with: pkg.version,
      files: [
        "./src/truck.js"
      ],
    });
  }, 150);
});

gulp.task('typings', function() {
  ncp.limit = 16;
  ncp('src/typings', 'typings', noop);
});

// Create bundle of all Truck modules and widgets:
gulp.task('default', ['styles', 'truck-full', 'truck-full-minify', 'examples-dist', 'typings']);