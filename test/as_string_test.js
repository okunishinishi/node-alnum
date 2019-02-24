/**
 * Test case for asString.
 * Runs with mocha.
 */
'use strict'

const asString = require('../lib/as_string.js')
const assert = require('assert')

describe('as-string', () => {

  it('As string', () => {
    assert.equal(asString(1), 'a')
    assert.equal(asString(25), 'y')
    assert.equal(asString(26), 'z')
    assert.equal(asString(27), 'aa')
    assert.equal(asString(53), 'ba')
  })
})

/* global describe, before, after, it */
