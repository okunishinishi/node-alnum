/**
 * Alphabet numbers code parser ( 1 &#x3D;&gt; &#x27;a&#x27;,  &#x27;a&#x27; &#x3D;&gt; 1)
 * @module alnum
 */

'use strict'


const asNum = require('./as_num')
const asString = require('./as_string')
const constants = require('./constants')

exports.asNum = asNum
exports.asString = asString
exports.constants = constants

module.exports = {
  asNum,
  asString,
  constants
}
