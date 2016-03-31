var gulp        = require('gulp');
var jshint      = require('gulp-jshint');
var install     = require('gulp-install');
var mocha       = require('gulp-mocha');

// Default task
gulp.task('default', ['clean','test'], function() {
  gulp.start('');
});

gulp.task('clean', [], function() {
  console.log('running clean task in gulp file now...'); 
});

// Execute unit tests
gulp.task('test', function () {
  return gulp.src('test/*.js', {read: false})
             .pipe(mocha({reporter: 'spec'}));
});

// JSHint
gulp.task('lint-app', function() {
  return gulp.src(['./app.js', './lib/*.js'])
             .pipe(jshint())
             .pipe(jshint.reporter('default', { verbose: true }))
             .pipe(jshint.reporter('fail'));
});
