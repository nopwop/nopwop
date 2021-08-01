const { merge } = require('webpack-merge')
const entries = require('./webpack.entries.js')
const common = require('./webpack.common.js')

module.exports = merge(entries, common, {
    mode : 'production',
    output: {
      filename: '[name].min.js'
    },
})
