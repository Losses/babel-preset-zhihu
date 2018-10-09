import {transform} from '@babel/core'

describe('transform', () => {
  const options = {
    envName: 'development',
    configFile: false,
    presets: ['module:.'],
  }

  test('normal', () => {
    expect(transform(`const fn = () => {}`, options).code).toMatchSnapshot()
  })

  test('inject runtime', () => {
    expect(transform(`function* fn() {}`, options).code).toMatchSnapshot()
  })
})
