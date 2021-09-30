const changed = require('gulp-changed')
const gulp = require('gulp')
const squoosh = require('gulp-libsquoosh')

const paths = {
  images: {
    src: 'src/images/**',
    dest: 'dist/images/'
  }
}

function images () {
  return gulp.src(paths.images.src)
    .pipe(changed(paths.images.dest))
    .pipe(squoosh(
      {
        encodeOptions: {
          webp: {
            quality: 75
          }
        }
      }))
    .pipe(gulp.dest(paths.images.dest))
}

function watch () {
  gulp.watch(paths.images.src, images)
}

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
// const build = gulp.series(images, gulp.parallel(images, watch))
const build = gulp.series(gulp.parallel(watch))

/*
 * You can use CommonJS `exports` module notation to declare tasks
 */
exports.images = images
exports.watch = watch
exports.build = build
/*
 * Define default task that can be called by just running `gulp` from cli
 */
exports.default = build
