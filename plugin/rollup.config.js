import vue from 'rollup-plugin-vue'
import path from 'path'
import { promises as fsp } from 'fs'
import ts from 'rollup-plugin-typescript2'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import chalk from 'chalk'

const pkg = require('./package.json')
const name = pkg.name

const banner = `/*!
  * ${pkg.name} v${pkg.version}
  * (c) ${new Date().getFullYear()} Wouter Vernaillen
  * @license MIT
  */`

// ensure TS checks only once for each build
let hasTSChecked = false

const outputConfigs = {
  // each file name has the format: `dist/${name}.${format}.${ext}`
  // format being a key of this object
  mjs: {
    file: pkg.module,
    format: `es`,
  },
  cjs: {
    file: 'dist/vue-audiomotion-analyzer.cjs',
    format: `cjs`,
  },
  global: {
    file: pkg.unpkg,
    format: `iife`,
  },
  browser: {
    file: 'dist/vue-audiomotion-analyzer.esm-browser.js',
    format: `es`,
  },
}

const stubs = {
  'dist/vue-audiomotion-analyzer.cjs': 'vue-audiomotion-analyzer.cjs.js',
  'dist/vue-audiomotion-analyzer.mjs': 'vue-audiomotion-analyzer.esm-bundler.js',
  'dist/vue-audiomotion-analyzer.prod.cjs': 'vue-audiomotion-analyzer.cjs.prod.js',
}

const packageBuilds = Object.keys(outputConfigs)
// in vue-audiomotion-analyzer there are not that many
const packageConfigs = packageBuilds.map(buildName => createConfig(buildName, outputConfigs[buildName]))

// only add the production ready if we are bundling the options
packageBuilds.forEach(buildName => {
  if (buildName === 'cjs') {
    packageConfigs.push(createProductionConfig(buildName))
  } else if (buildName === 'global') {
    packageConfigs.push(createMinifiedConfig(buildName))
  }
})

export default packageConfigs

function createConfig(buildName, output, plugins = []) {
  if (!output) {
    console.log(chalk.yellow(`invalid format: "${buildName}"`))
    process.exit(1)
  }

  output.sourcemap = !!process.env.SOURCE_MAP
  output.banner = banner
  output.externalLiveBindings = false
  output.globals = {
    vue: 'Vue',
    // devtools are not global in iife
    // '@vue/devtools-api': 'VueDevtoolsApi',
  }

  const isProductionBuild = /\.prod\.[cm]?js$/.test(output.file)
  const isGlobalBuild = buildName === 'global'
  const isRawESMBuild = buildName === 'browser'
  const isNodeBuild = buildName === 'cjs'
  const isBundlerESMBuild = buildName === 'mjs'

  if (isGlobalBuild) output.name = 'VueRouter'

  const shouldEmitDeclarations = !hasTSChecked

  const tsPlugin = ts({
    check: !hasTSChecked,
    tsconfig: path.resolve(__dirname, 'tsconfig.json'),
    cacheRoot: path.resolve(__dirname, 'node_modules/.rts2_cache'),
    tsconfigOverride: {
      compilerOptions: {
        sourceMap: output.sourcemap,
        declaration: shouldEmitDeclarations,
        declarationMap: shouldEmitDeclarations,
      },
      exclude: ['__tests__', 'test-dts'],
    },
  })
  // we only need to check TS and generate declarations once for each build.
  // it also seems to run into weird issues when checking multiple times
  // during a single build.
  hasTSChecked = true

  const external = ['vue']
  if (!isGlobalBuild) {
    external.push('@vue/devtools-api')
  }

  const nodePlugins = [vue(), resolve(), commonjs()]

  return {
    input: `src/index.ts`,
    // Global and Browser ESM builds inlines everything so that they can be
    // used alone.
    external,
    plugins: [
      tsPlugin,
      createReplacePlugin(
        isProductionBuild,
        isBundlerESMBuild,
        // isBrowserBuild?
        isGlobalBuild || isRawESMBuild || isBundlerESMBuild,
        isGlobalBuild,
        isNodeBuild,
      ),
      ...nodePlugins,
      ...plugins,
    ],
    output,
    // onwarn: (msg, warn) => {
    //   if (!/Circular/.test(msg)) {
    //     warn(msg)
    //   }
    // },
  }
}

function createReplacePlugin(isProduction, isBundlerESMBuild, isBrowserBuild, isGlobalBuild, isNodeBuild) {
  const replacements = {
    __COMMIT__: `"${process.env.COMMIT}"`,
    __VERSION__: `"${pkg.version}"`,
    __DEV__: isBundlerESMBuild
      ? // preserve to be handled by bundlers
        `(process.env.NODE_ENV !== 'production')`
      : // hard coded dev/prod builds
        JSON.stringify(!isProduction),
    // this is only used during tests
    __TEST__: 'false',
    // If the build is expected to run directly in the browser (global / esm builds)
    __BROWSER__: isBrowserBuild,
    __FEATURE_PROD_DEVTOOLS__: isBundlerESMBuild ? `__VUE_PROD_DEVTOOLS__` : 'false',
    // is targeting bundlers?
    __BUNDLER__: JSON.stringify(isBundlerESMBuild),
    __GLOBAL__: JSON.stringify(isGlobalBuild),
    // is targeting Node (SSR)?
    __NODE_JS__: JSON.stringify(isNodeBuild),
  }
  // allow inline overrides like
  //__RUNTIME_COMPILE__=true yarn build
  Object.keys(replacements).forEach(key => {
    if (key in process.env) {
      replacements[key] = process.env[key]
    }
  })
  return replace({
    preventAssignment: true,
    values: replacements,
  })
}

function createProductionConfig(format) {
  const extension = format === 'cjs' ? 'cjs' : 'js'
  const descriptor = format === 'cjs' ? '' : `.${format}`
  return createConfig(format, {
    file: `dist/${name}${descriptor}.prod.${extension}`,
    format: outputConfigs[format].format,
  })
}

function createMinifiedConfig(format) {
  const { terser } = require('rollup-plugin-terser')
  return createConfig(
    format,
    {
      file: `dist/${name}.${format}.prod.js`,
      format: outputConfigs[format].format,
    },
    [
      terser({
        module: /^esm/.test(format),
        compress: {
          ecma: 2015,
          pure_getters: true,
        },
      }),
    ],
  )
}
