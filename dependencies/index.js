const {declare} = require('@babel/helper-plugin-utils')

module.exports = declare((api, {target = 'client'} = {}) => {
  api.assertVersion(7)

  return {
    presets: [
      target === 'server'
        ? require.resolve('./server')
        : require.resolve('./client'),
    ],
  }
})
