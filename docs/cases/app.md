# Configure For App

```sh
npm install --save-dev babel-preset-zhihu @babel/core
npm install --save @babel/runtime core-js
```

```js
// babel.config.js
module.exports = {
  presets: ['babel-preset-zhihu'],
}
```

## Add polyfills

```js
// required polyfills
import 'core-js/fn/symbol'
import 'core-js/fn/object/assign'
```

## Configure Webpack

```sh
npm install --save-dev babel-loader
```

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        oneOf: [
          {
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
          {
            exclude: /@babel\/runtime/,
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              configFile: false,
              presets: ['babel-preset-zhihu/dependencies'],
              compact: false,
            },
          },
        ],
      },
    ],
  },
}
```
