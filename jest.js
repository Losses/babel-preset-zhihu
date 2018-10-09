const {createTransformer} = require('babel-jest')

const isDependency = filename => filename.indexOf('/node_modules/') !== -1

const transformer = createTransformer()
const dependenciesTransformer = createTransformer({
  presets: [require.resolve('./dependencies')],
  configFile: false,
})

module.exports = {
  canInstrument: true,

  getCacheKey(fileData, filename, configString, options) {
    if (isDependency(filename)) {
      return dependenciesTransformer.getCacheKey(
        fileData,
        filename,
        configString,
        options,
      )
    }
    return transformer.getCacheKey(fileData, filename, configString, options)
  },

  process(src, filename, config, transformOptions) {
    if (isDependency(filename)) {
      return dependenciesTransformer.process(
        src,
        filename,
        config,
        transformOptions,
      )
    }
    return transformer.process(src, filename, config, transformOptions)
  },
}
