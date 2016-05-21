alnum
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/okunishinishi/node-alnum
[bd_travis_url]: http://travis-ci.org/okunishinishi/node-alnum
[bd_travis_shield_url]: http://img.shields.io/travis/okunishinishi/node-alnum.svg?style=flat
[bd_license_url]: https://github.com/okunishinishi/node-alnum/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-alnum
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-alnum.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-alnum.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/okunishinishi/node-alnum
[bd_gemnasium_shield_url]: https://gemnasium.com/okunishinishi/node-alnum.svg
[bd_npm_url]: http://www.npmjs.org/package/alnum
[bd_npm_shield_url]: http://img.shields.io/npm/v/alnum.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Alphabet numbers code parser ( 1 => 'a',  'a' => 1)

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>
Installation
-----

```bash
$ npm install alnum --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>
Usage
---------

```javascript
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

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/okunishinishi/node-alnum/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------


<!-- Links End -->
