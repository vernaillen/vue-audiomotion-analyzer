import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript'

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist/',
      entryFileNames: '[name].esm.js',
      chunkFileNames: '[name]-[hash].esm.js',
      format: 'es',
      sourcemap: true,
    },
    {
      dir: 'dist/',
      format: 'commonjs',
      preferConst: true,
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({
      tsconfig: false,
      experimentalDecorators: true,
      module: 'es2015',
    }),
    vue(/* VuePluginOptions */),
  ],
  external: ['audiomotion-analyzer', 'vue'],
}
