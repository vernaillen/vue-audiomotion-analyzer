import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist/',
      entryFileNames: '[name].esm.js',
      chunkFileNames: '[name]-[hash].esm.js',
      format: 'es',
      sourcemap: true,
      exports: 'default',
    },
    {
      dir: 'dist/',
      format: 'commonjs',
      preferConst: true,
      sourcemap: true,
      exports: 'default',
    },
  ],
  plugins: [
    typescript({
      tsconfig: false,
      experimentalDecorators: true,
      module: 'es2015',
    }),
    vue(/* VuePluginOptions */),
    commonjs(),
    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    resolve(),

    // Resolve source maps to the original source
    sourceMaps(),
  ],
  external: ['audiomotion-analyzer', 'vue'],
}
