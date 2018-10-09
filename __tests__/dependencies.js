import {transform} from '@babel/core'

describe('transform dependencies', () => {
  const options = {
    envName: 'development',
    configFile: false,
    presets: ['./dependencies'],
  }

  test('normal', () => {
    expect(transform(`const fn = () => {}`, options).code).toMatchSnapshot()
  })

  test('inject runtime', () => {
    expect(
      transform(`function* fn() {}`, options)
        .code.split(process.cwd())
        .join('<cwd>'),
    ).toMatchSnapshot()
  })
})
