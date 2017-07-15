const merge = require('webpack-merge')
const webpack = require('webpack')
const baseWebpackConfig = require('./webpack.base.config.js')

module.exports = merge(baseWebpackConfig,{
  devtool:'source-map',
  plugins:[
    new webpack.DefinePlugin({
      'process.dev':{
        NODE_ENV:JSON.stringify('development')
      }
    })
  ]
})