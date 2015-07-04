/*global require, process*/

'use strict';
var gulp = require('gulp');
var gutil = require('gulp-util');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');
var coveralls = require('gulp-coveralls');
var env = process.env.NODE_ENV || 'development';
var reporter;

if ('development' === env) {
  reporter = 'nyan';
}

if ('ci' === env || 'test' === env) {
  reporter = 'list';
}

function reportCoverageToCoveralls () {
  gutil.log('Sending LCOV data to Coveralls.io');
  gulp.src('test/coverage/**/lcov.info')
    .pipe(coveralls());
}

gulp.task('test', function (done) {
  gulp.src(['lib/**/*.js', 'index.js'])
    .pipe(istanbul())
    .pipe(istanbul.hookRequire()) // Force `require` to return covered files
    .on('finish', function () {
      gulp.src(['test/*.js'])
        .pipe(mocha({reporter: reporter}))
        .pipe(istanbul.writeReports({
          dir: 'test/coverage'
        }))
        .on('end', function () {
          if ('ci' === env) {
            reportCoverageToCoveralls();
          }
          done();
        });
    });
});
