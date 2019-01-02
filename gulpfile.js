'use strict';

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

// výpis chybových hlášek
var onError = function (err) {
  console.log(err);
  this.emit('end');
};

gulp.task('autoprefixer', () =>
  {
    return gulp.src('src/css/*.css')
      .pipe(autoprefixer({
        grid: true
      }))
      .pipe(gulp.dest('dist/css'));
  }
);

// aliasy tasků
// defaultni task
gulp.task('default', ['autoprefixer']);
