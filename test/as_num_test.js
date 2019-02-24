/**
 * Test case for asNum.
 * Runs with mocha.
 */
'use strict'

const asNum = require('../lib/as_num.js')
const assert = require('assert')

describe('as-num', () => {

  it('As num', () => {
    assert.equal(asNum('a'), 1)
    assert.equal(asNum('b'), 2)
    assert.equal(asNum('z'), 26)
    assert.equal(asNum('aa'), 27)
    assert.equal(asNum('ba'), 53)
  })
})

/* global describe, before, after, it */
