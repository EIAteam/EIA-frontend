'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  //BASE_API: '"https://www.easy-mock.com/mock/5a78fb43fa09d13585f9b1fe"'
  BASE_API: '"http://127.0.0.1:8000/"'
})
