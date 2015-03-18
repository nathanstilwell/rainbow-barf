/*jshint eqnull: true, browser: true */
/*global require: false*/

'use strict';
var gulp = require('gulp');
var mocha = require('gulp-mocha');


gulp.task('watch', function watchTask () {
  gulp.watch(['test/**/*.js'], ['test']);
});

gulp.task('test', function () {
  return gulp.src('test/*.js', {read: false})
         .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('default', ['test', 'watch']);