const path = require('path')
const {declare} = require('@babel/helper-plugin-utils')

module.exports = ({
  targets,
  ignoreBrowserslistConfig = false,
  forceAllTransforms = false,
  absoluteRuntime = false,
} = {}) => {
  return declare(api => {
    api.assertVersion(7)

    return {
      // https://github.com/webpack/webpack/issues/4039#issuecomment-419284940
      sourceType: 'unambiguous',
      presets: [
        [
          require('@babel/preset-env').default,
          {targets, ignoreBrowserslistConfig, forceAllTransforms},
        ],
      ],
      plugins: [
        [
          require('@babel/plugin-transform-runtime').default,
          {
            absoluteRuntime: absoluteRuntime
              ? path.dirname(require.resolve('@babel/runtime/package.json'))
              : false,
          },
        ],
        require('@babel/plugin-syntax-dynamic-import').default,
        // https://github.com/babel/babel/issues/7215
        require('@babel/plugin-transform-destructuring').default,
      ],

      env: {
        test: {
          presets: [
            [
              require('@babel/preset-env').default,
              {targets: {node: 'current'}, ignoreBrowserslistConfig: true},
            ],
          ],
          plugins: [require('babel-plugin-transform-dynamic-import').default],
        },
      },
    }
  })
}
