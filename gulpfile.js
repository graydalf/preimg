var del = require('del');
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
  scripts: { globs: ['src/**/*.js'], options: { base: 'src' } }
};

gulp.task('clean', function() {
  return del(['dist']);
});

gulp.task('scripts', function() {
  return (gulp
      .src(paths.scripts.globs, paths.scripts.options)
      .pipe(require("gulp-rename")(function(path){
        path.dirname = "/";
      }))
      .pipe(gulp.dest('dist/')) );
});

gulp.task('scripts-min', function() {
  return (gulp
      .src(paths.scripts.globs, paths.scripts.options)
      .pipe(sourcemaps.init())
      .pipe(
        require('gulp-uglify')({
          compress: {
            drop_console: true // discard calls to console.* functions
          }
        })
      )
      .pipe(require("gulp-rename")(function(path){
        path.dirname = "/";
        path.basename += '.min';
      }))
      .pipe(
        sourcemaps.write('/', {
          addComment: false
        })
      )
      .pipe(gulp.dest('dist/')) );
});

/**
 * hot building
 */
gulp.task('watch', function() {
  gulp.watch(paths.scripts.globs, ['scripts', 'scripts-min']);
});

/**
 * default open watch after builded all
 */
gulp.task('default', ['scripts', 'scripts-min']);