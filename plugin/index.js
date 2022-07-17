/* eslint-disable no-undef */
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/vue-audiomotion-analyzer.prod.cjs')
} else {
  module.exports = require('./dist/vue-audiomotion-analyzer.cjs')
}
