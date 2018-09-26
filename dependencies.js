const {declare} = require('@babel/helper-plugin-utils')

module.exports = declare((api, opts) => {
  api.assertVersion(7)
  api.cache(true)

  return {
    sourceType: 'unambiguous',
    presets: [
      [require('@babel/preset-env').default, {forceAllTransforms: true}],
    ],
    plugins: [
      [require('@babel/plugin-transform-runtime').default, {helpers: false}],
      require('@babel/plugin-syntax-dynamic-import').default,
      // https://github.com/babel/babel/issues/7215
      require('@babel/plugin-transform-destructuring').default,
    ],

    env: {
      test: {
        presets: [
          [require('@babel/preset-env').default, {targets: {node: 'current'}}],
        ],
        plugins: [require('babel-plugin-transform-dynamic-import').default],
      },
    },
  }
})
