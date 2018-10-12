# Jest Integration

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
