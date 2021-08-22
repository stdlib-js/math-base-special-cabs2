<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# abs2

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Compute the squared [absolute value][absolute-value] of a complex number.

<section class="intro">

The [absolute value][absolute-value] of a complex number is defined as

<!-- <equation class="equation" label="eq:absolute_value_complex" align="center" raw="|a + bi| = \sqrt{a^2 + b^2}" alt="Absolute value"> -->

<div class="equation" align="center" data-raw-text="|a + bi| = \sqrt{a^2 + b^2}" data-equation="eq:absolute_value_complex">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@d4edb68b52a6c646be5683023c5a24890300727f/lib/node_modules/@stdlib/math/base/special/cabs2/docs/img/equation_absolute_value_complex.svg" alt="Absolute value">
    <br>
</div>

<!-- </equation> -->

which corresponds to the length of a vector from the origin to a complex value plotted in the complex plane.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-cabs2
```

</section>

<section class="usage">

## Usage

```javascript
var cabs2 = require( '@stdlib/math-base-special-cabs2' );
```

#### cabs2( re, im )

Computes the squared [absolute value][absolute-value] of a `complex` number comprised of a **real** component `re` and an **imaginary** component `im`.

```javascript
var y = cabs2( 5.0, 3.0 );
// returns 34.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Be careful to avoid overflow and underflow.
-   Depending on the environment, this function _may_ have better performance than computing the [absolute value][absolute-value] of a `complex` number and then squaring. Hence, where appropriate, consider using `cabs2()` over [`cabs()`][@stdlib/math/base/special/cabs].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex128 = require( '@stdlib/complex-float64' );
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var real = require( '@stdlib/complex-real' );
var imag = require( '@stdlib/complex-imag' );
var cabs2 = require( '@stdlib/math-base-special-cabs2' );

var re;
var im;
var z;
var i;

for ( i = 0; i < 100; i++ ) {
    re = round( randu()*100.0 ) - 50.0;
    im = round( randu()*100.0 ) - 50.0;
    z = new Complex128( re, im );
    console.log( 'cabs2(%s) = %d', z.toString(), cabs2( real(z), imag(z) ) );
}
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-cabs2.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-cabs2

[test-image]: https://github.com/stdlib-js/math-base-special-cabs2/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-base-special-cabs2/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-cabs2/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-cabs2?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-cabs2.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-cabs2/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-cabs2/main/LICENSE

[absolute-value]: https://en.wikipedia.org/wiki/Absolute_value

[@stdlib/math/base/special/cabs]: https://github.com/stdlib-js/math-base-special-cabs

</section>

<!-- /.links -->
