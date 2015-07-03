/*global require, process*/

'use strict';
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');
var env = process.env.NODE_ENV || 'development';
var reporter;

if ('development' === env) {
  reporter = 'nyan';
}

if ('test' === env) {
  reporter = 'list';
}

gulp.task('test', function (cb) {
  gulp.src(['lib/**/*.js', 'index.js'])
    .pipe(istanbul())
    .pipe(istanbul.hookRequire()) // Force `require` to return covered files
    .on('finish', function () {
      gulp.src(['test/*.js'])
        .pipe(mocha({reporter: reporter}))
        .pipe(istanbul.writeReports())
        .on('end', cb);
    });
});
