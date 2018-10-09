import {transform} from '@babel/core'

test('transform dependencies', () => {
  expect(
    transform(`const fn = () => {}`, {
      envName: 'development',
      configFile: false,
      presets: ['./dependencies'],
    }).code,
  ).toMatchSnapshot()
})
