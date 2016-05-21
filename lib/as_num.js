/**
 * Convert to number
 * @function asNum
 * @param {string} str - String value
 * @returns {number} Numeric value
 */
'use strict'

const { CHAR_CODE_START, CHAR_CODE_RANGE } = require('./constants')

/** @lends asNum */
function asNum (str) {
  let num = 0
  let { length } = str
  for (let i = 0; i < length; i++) {
    let charCode = str.charCodeAt(i)
    let base = Math.pow(CHAR_CODE_RANGE, length - i - 1)
    num += (charCode - CHAR_CODE_START + 1) * base
  }
  return num
}

module.exports = asNum
