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

## Configure Webpack

```sh
npm install --save-dev babel-loader
```

```js
// webpack.config.js
const target = process.env.BUILD_TARGET // 'client' | 'server'

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
              presets: [['babel-preset-zhihu', {target}]],
            },
          },
          {
            exclude: /@babel\/runtime/,
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              configFile: false,
              presets: [['babel-preset-zhihu/dependencies', {target}]],
              compact: false,
            },
          },
        ],
      },
    ],
  },
}
```
