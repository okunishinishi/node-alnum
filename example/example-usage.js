'use strict'

const alnum = require('alnum')
const { equal } = require('assert')

// Convert number to alphabet
{
  let { asString } = alnum
  equal(asString(1), 'a')
  equal(asString(26), 'z')
  equal(asString(27), 'aa')
}

// Convert alphabet to number
{
  let { asNum } = alnum
  equal(asNum('a'), 1)
  equal(asNum('z'), 26)
  equal(asNum('aa'), 27)
}
