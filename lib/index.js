/**
 * Alphabet numbers code parser ( 1 &#x3D;&gt; &#x27;a&#x27;,  &#x27;a&#x27; &#x3D;&gt; 1)
 * @module alnum
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get asNum () { return d(require('./as_num')) },
  get asString () { return d(require('./as_string')) },
  get constants () { return d(require('./constants')) }
}
