import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: 'src/js/bootstrap.js',
    output: [{
      file: 'dist/js/bootstrap.js',
      format: 'iife',
      name: 'bootstrap'
    }, {
      file: 'dist/js/bootstrap.min.js',
      format: 'iife',
      name: 'bootstrap',
      plugins: [
        terser()
      ]
    }],
    plugins: [
      resolve(),
      commonjs(),
      babel({
        babelHelpers: 'bundled'
      })
    ]
  },
  {
    input: 'src/js/index.js',
    output: [{
      file: 'dist/js/index.js',
      format: 'iife',
      name: 'index'
    }, {
      file: 'dist/js/index.min.js',
      format: 'iife',
      name: 'index',
      plugins: [
        terser()
      ]
    }],
    plugins: [
      resolve(),
      commonjs(),
      babel({
        babelHelpers: 'bundled'
      })
    ]
  }
]
