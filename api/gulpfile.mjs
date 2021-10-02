import gulp from 'gulp'
import newer from 'gulp-newer'
import dest from 'gulp-dest'
import sourcemaps from 'gulp-sourcemaps'
import babel from 'gulp-babel'
import del from 'del'
import nodemon from 'gulp-nodemon'
import path from 'path'
import { fileURLToPath } from 'url'

import * as constants from './constants/gulp.constant.mjs'

//we need to change up how __dirname is used for ES6 purposes
const __dirname = path.dirname(fileURLToPath(import.meta.url))

gulp.task('copy', () =>
  gulp
    .src(constants.PATHS.STATIC, { allowEmpty: true })
    .pipe(newer('.build/'))
    .pipe(dest('.build/')),
)

gulp.task('clean', (cb) => {
  del.sync(constants.CLEAN_PATH)
  cb()
})

gulp.task('babel', () =>
  gulp
    .src([...constants.PATHS.JS, '!gulp.mjs'], { base: '.' })
    .pipe(newer('.build/'))
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                node: '9.1',
              },
            },
          ],
        ],
        plugins: [
          '@babel/plugin-proposal-object-rest-spread',
          [
            'module-resolver',
            {
              root: ['.'],
              alias: {
                '@utils': 'utils/',
              },
            },
          ],
        ],
      }),
    )
    .pipe(
      sourcemaps.write('.', {
        includeContent: false,
        sourceRoot(file) {
          return path.relative(file.path, __dirname)
        },
      }),
    )
    .pipe(dest('.build/')),
)

gulp.task(
  'nodemon',
  gulp.series('copy', 'babel', () =>
    nodemon({
      exec: 'node --inspect',
      script: path.join('', 'index.mjs'),
      ext: 'js',
      ignore: ['node_modules/**/*.js', '.build/**/*.js'],
      tasks: ['copy', 'babel', 'bump'],
    }),
  ),
)

gulp.task(
  'default',
  gulp.series('clean', 'babel', 'nodemon', (cb) => {
    cb()
  }),
)
