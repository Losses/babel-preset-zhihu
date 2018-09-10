const {declare} = require('@babel/helper-plugin-utils')

module.exports = declare((api, opts) => {
  api.assertVersion(7)
  api.cache(true)

  return {
    presets: [
      [require('@babel/preset-env').default, {useBuiltIns: 'entry'}],
      [require('@babel/preset-react').default, {useBuiltIns: true}],
    ],
    plugins: [
      [
        require('@babel/plugin-transform-runtime').default,
        {useESModules: 'auto'},
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
          [
            require('@babel/preset-react').default,
            {development: true, useBuiltIns: true},
          ],
        ],
      },

      test: {
        presets: [
          [
            require('@babel/preset-env').default,
            {targets: {node: 'current'}, useBuiltIns: 'entry'},
          ],
          [
            require('@babel/preset-react').default,
            {development: true, useBuiltIns: true},
          ],
        ],
        plugins: [require('babel-plugin-transform-dynamic-import').default],
      },
    },
  }
})
