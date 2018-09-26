# babel-preset-zhihu

```shell
npm install --save-dev babel-preset-zhihu @babel/core @babel/runtime core-js
```

```js
// babel.config.js
module.exports = {
  extends: 'babel-preset-zhihu/config',
}
```

```js
// required polyfills
import 'core-js/fn/symbol'
import 'core-js/fn/object/assign'
```
