const {declare} = require('@babel/helper-plugin-utils')

module.exports = declare((api, opts) => {
  api.assertVersion(7)
  api.cache(true)

  return {
    overrides: [
      {
        exclude: /node_modules/,
        presets: [require('..')],
      },
      {
        include: /node_modules/,
        presets: [require('../dependencies')],
      },
    ],
  }
})
