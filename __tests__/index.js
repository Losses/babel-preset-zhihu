import {transform} from '@babel/core'

describe('transform', () => {
  const defaultOptions = {
    envName: 'development',
    configFile: false,
    presets: ['module:.'],
  }

  const t = (code, options = {}) =>
    transform(code, {...defaultOptions, ...options})
      .code.split(process.cwd())
      .join('<cwd>')

  test('normal', () => {
    expect(t(`const fn = () => {}`)).toMatchSnapshot()
  })

  test('inject runtime', () => {
    expect(t(`async function* fn() {}`)).toMatchSnapshot()
  })

  test('compile modules', () => {
    expect(t(`import React from 'react'`)).toMatchSnapshot()
    expect(
      t(`import React from 'react'`, {
        caller: {name: 'test', supportsStaticESM: true},
      }),
    ).toMatchSnapshot()
  })
})
