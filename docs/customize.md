# Customize

## Decorators

```js
// babel.config.js
module.exports = {
  presets: ['babel-preset-zhihu'],
  plugins: [['@babel/plugin-proposal-decorators', {legacy: true}]],
}
```

## TypeScript

```js
// babel.config.js
module.exports = {
  presets: ['babel-preset-zhihu', '@babel/preset-typescript'],
}
```

## Flow

```js
// babel.config.js
module.exports = {
  presets: ['babel-preset-zhihu', '@babel/preset-flow'],
}
```
