const gulp = require('gulp')
const browserSync = require('browser-sync').create()

gulp.task('default', () => {
  browserSync.init({
    server: {
      baseDir: './',
      middleware: (req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        next()
      }
    },
  })
})
