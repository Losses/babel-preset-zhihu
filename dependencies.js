const {declare} = require('@babel/helper-plugin-utils')

module.exports = declare((api, opts) => {
  api.assertVersion(7)
  api.cache(true)

  return {
    presets: [require('@babel/preset-env').default],
    plugins: [
      // https://github.com/babel/babel/issues/7215
      require('@babel/plugin-transform-destructuring').default,
    ],
  }
})
