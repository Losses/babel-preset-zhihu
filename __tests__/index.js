import {transform} from '@babel/core'

test('transform', () => {
  expect(
    transform(`const fn = () => {}`, {
      envName: 'development',
      configFile: false,
      presets: ['module:.'],
    }).code,
  ).toMatchSnapshot()
})
