/**
 * Convert to alphabet string
 * @function asString
 * @param {number} num - Numeric value
 * @returns {string} String value
 */
'use strict'

const { CHAR_CODE_START, CHAR_CODE_RANGE } = require('./constants')

/** @lends asString */
function asString (num) {
  let str = ''
  if (num <= 0) {
    throw new Error('Number should start with 1')
  }
  if (num > CHAR_CODE_RANGE) {
    str = asString(parseInt(num / CHAR_CODE_RANGE))
  }
  str += String.fromCharCode(CHAR_CODE_START + (num - 1) % CHAR_CODE_RANGE)
  return str
}

module.exports = asString
