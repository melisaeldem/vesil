const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

// SASS'ı derle
gulp.task('css', function() {
  return gulp.src('./assets/sass/style.scss')
    .pipe(sass().on('error', sass.logError)) // Hata yakalama
    .pipe(gulp.dest('./assets/css/'));
});

// CSS'i küçült
gulp.task('minify-css', function() {
  return gulp.src('./assets/css/style.css')
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./assets/css/'));
});

// Değişiklikleri izle
gulp.task('watch', function() {
  gulp.watch('./assets/sass/**/*.scss', gulp.series('css', 'minify-css'));
});

// Varsayılan görev
gulp.task('default', gulp.series('css', 'minify-css', 'watch'));
