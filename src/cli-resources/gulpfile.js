var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var jspm = require('gulp-jspm');
var sourcemaps = require('gulp-sourcemaps');

// Static Server & watching files:
gulp.task('serve', function () {
  browserSync({
    server: './',
    port: 4040,
    browser: ['google chrome']
  }).reload;
  gulp.watch('./index.html').on('change', reload);
  gulp.watch('./dev/app.js', ['build']);
  gulp.watch('./dist/app.bundle.js').on('change', reload);
});

// Process app.js:
gulp.task('build', function () {

  gulp.src('./dev/app.js')
    .pipe(sourcemaps.init())
    .pipe(jspm({selfExecutingBundle: true, minify: true, mangle: true}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/'));
});

// Process app.js and load page in browser:
gulp.task('default', ['build', 'serve'], reload);