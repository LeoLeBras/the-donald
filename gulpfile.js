const gulp = require('gulp')
const replace = require('gulp-replace')

gulp.task('copy-static-to-dist', () => {
  gulp.src([
    'static/*.html',
    'static/*.txt',
  ]).pipe(gulp.dest('dist/'));
  gulp.src([
    'static/images/*',
  ]).pipe(gulp.dest('dist/images/'));
  gulp.src([
    'static/fonts/*',
  ]).pipe(gulp.dest('dist/fonts/'));
})

gulp.task('replace-path', () => {
  gulp.src([
    'dist/bundle.js',
    'dist/style.css',
  ]).pipe(replace('http://localhost:3001/', 'http://donald-trump.mickaelzhang.com/'))
    .pipe(gulp.dest('dist/'));
})
