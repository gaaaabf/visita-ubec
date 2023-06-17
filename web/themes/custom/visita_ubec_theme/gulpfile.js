'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var notify = require('gulp-notify');
var concat = require('gulp-concat');
sass.compiler = require('node-sass');

var config = {
  nodeModules: './node_modules'
}

function css() {
  return gulp.src('./scss/**/*.scss')
  .pipe(sass({
     outputStyle: 'compressed',
   }).on("error", notify.onError(function (error) { return "Error: " + error.message; })))
  .pipe(gulp.dest('./css/'));
};

// function copy_js() {
//   return gulp.src([
//     // config.nodeModules + '/flickity/dist/flickity.pkgd.min.js',
//   ])
//   .pipe(gulp.dest('./js'));
// }

gulp.task('sass', gulp.series(css));