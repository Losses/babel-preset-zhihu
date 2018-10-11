# babel-preset-zhihu

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

```js
// required polyfills
import 'core-js/fn/symbol'
import 'core-js/fn/object/assign'
```

## Customize

### Decorators

```js
// babel.config.js
module.exports = {
  presets: ['babel-preset-zhihu'],
  plugins: [['@babel/plugin-proposal-decorators', {legacy: true}]],
}
```

### TypeScript

```js
// babel.config.js
module.exports = {
  presets: ['babel-preset-zhihu', '@babel/preset-typescript'],
}
```

### Flow

```js
// babel.config.js
module.exports = {
  presets: ['babel-preset-zhihu', '@babel/preset-flow'],
}
```

## For Library

```js
// babel.config.js
module.exports = {
  presets: ['babel-preset-zhihu/library'],
}
```

## Webpack Configure

```sh
npm install --save-dev babel-loader
```

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

## Jest Configure

```sh
npm install --save-dev babel-jest babel-core@bridge
```

```json
{
  "jest": {
    "transform": {
      "\\.js$": "babel-preset-zhihu/jest"
    },
    "transformIgnorePatterns": ["/node_modules/@babel/runtime/"]
  }
}
```
