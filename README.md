# babel-preset-zhihu

```shell
npm install --save-dev babel-preset-zhihu @babel/core @babel/runtime core-js
```

```js
// babel.config.js
module.exports = {
  presets: ['babel-preset-zhihu'],
}
```

```js
// required polyfills
import 'core-js/fn/symbol'
import 'core-js/fn/object/assign'
```

## Webpack

```js
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

## Jest

```json
{
  "jest": {
    "transform": {
      "\\.js$": "babel-preset-zhihu/jest"
    }
  }
}
```
