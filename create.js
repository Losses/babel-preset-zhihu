const path = require('path')
const {declare} = require('@babel/helper-plugin-utils')

module.exports = ({absoluteRuntime = true} = {}) => {
  return declare((api, opts) => {
    api.assertVersion(7)

    return {
      presets: [
        [require('@babel/preset-env').default, {forceAllTransforms: true}],
        require('@babel/preset-react').default,
      ],
      plugins: [
        [
          require('@babel/plugin-transform-runtime').default,
          {
            useESModules: 'auto',
            absoluteRuntime: absoluteRuntime
              ? path.dirname(require.resolve('@babel/runtime/package.json'))
              : false,
          },
        ],
        // https://github.com/facebook/create-react-app/issues/4263
        [
          require('@babel/plugin-proposal-class-properties').default,
          {loose: true},
        ],
        require('@babel/plugin-syntax-dynamic-import').default,
        // https://github.com/babel/babel/issues/7215
        require('@babel/plugin-transform-destructuring').default,
      ],

      env: {
        development: {
          presets: [
            [require('@babel/preset-react').default, {development: true}],
          ],
        },

        test: {
          presets: [
            [
              require('@babel/preset-env').default,
              {targets: {node: 'current'}},
            ],
            [require('@babel/preset-react').default, {development: true}],
          ],
          plugins: [require('babel-plugin-transform-dynamic-import').default],
        },
      },
    }
  })
}