const { merge } = require('webpack-merge')
const entries = require('./webpack.entries.js')
const common = require('./webpack.common.js')

module.exports = merge(entries, common, {
    mode : 'development',
    output: {
      filename: '[name].bundle.js'
    },
})
