const merge = require('webpack-merge')
const webpack = require('webpack')
const baseWebpackConfig = require('./webpack.base.config.js')

module.exports = merge(baseWebpackConfig,{
  plugin:[
    new webpack.DefinePlugin({
      'process_env':{
        NODE_ENV:JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize:true,
      compress:{
        warning:false
      }
    })
  ]
})