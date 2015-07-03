/*global require*/

'use strict';
var gulp = require('gulp');

gulp.task('watch', function watchTask () {
  gulp.watch(['test/**/*.js'], ['test']);
});
