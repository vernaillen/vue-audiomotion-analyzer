import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist/',
      entryFileNames: '[name].esm.js',
      chunkFileNames: '[name]-[hash].esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [typescript(), vue()],
  external: ['audiomotion-analyzer', 'vue'],
}
