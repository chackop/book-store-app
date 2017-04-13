'use strict'

module.exports = [
  {
    method: 'GET',
    path: '/css/{param*}',
    handler: {
      directory: {
        path: 'lib/assets/css',
        listing: false
      }
    }
  },
  {
    method: 'GET',
    path: '/js/{param*}',
    handler: {
      directory: {
        path: 'lib/assets/js',
        listing: true
      }
    }
  }
]
