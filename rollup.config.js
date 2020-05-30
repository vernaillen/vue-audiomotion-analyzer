import commonjs from 'rollup-plugin-commonjs'
import resolve from "rollup-plugin-node-resolve"
import babel from 'rollup-plugin-babel'
import VuePlugin from 'rollup-plugin-vue'

const version = process.env.VERSION || require('./package.json').version
const banner =
    '/*!\n' +
    ' * vue-audiomotion-analyzer.js \n' +
    ' * A Vue wrapper for Henrique Avila Vianna\'s excellent audioMotion-analyzer \n' +
    ' * @version ' + version + '\n' +
    ' * @author Wouter Vernaillen <https://github.com/vernaillen>\n' +
    ' * @license AGPL-3.0-or-later\n' +
    ' */\n'

export default [
    {
        input: 'src/index.js',
        output: {
            file: 'vue-audiomotion-analyzer.js',
            format: 'umd',
            name: 'VueAudioMotionAnalyzer',
            banner: banner
        },
        plugins: [
            VuePlugin(/* VuePluginOptions */),
            resolve(),
            commonjs(),
            babel({
                runtimeHelpers: true,
                exclude: 'node_modules/**',
                extensions: ['.js', '.vue']
            })
        ]
    },
    {
        input: 'src/index.js',
        output: {
            file: 'vue-audiomotion-analyzer.esm.js',
            format: 'es',
            name: 'VueAudioMotionAnalyzer',
            banner: banner
        },
        plugins: [
            VuePlugin(/* VuePluginOptions */),
            resolve(),
            commonjs(),
            babel({
                runtimeHelpers: true,
                exclude: 'node_modules/**',
                extensions: ['.js', '.vue']
            })
        ]
    }
]
