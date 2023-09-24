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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# cabs2

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the squared [absolute value][absolute-value] of a double-precision [complex][@stdlib/complex/float64] floating-point number.

<section class="intro">

The [absolute value][absolute-value] of a [complex][@stdlib/complex/float64] number is defined as

<!-- <equation class="equation" label="eq:absolute_value_complex" align="center" raw="|a + bi| = \sqrt{a^2 + b^2}" alt="Absolute value"> -->

```math
|a + bi| = \sqrt{a^2 + b^2}
```

<!-- <div class="equation" align="center" data-raw-text="|a + bi| = \sqrt{a^2 + b^2}" data-equation="eq:absolute_value_complex">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@d4edb68b52a6c646be5683023c5a24890300727f/lib/node_modules/@stdlib/math/base/special/cabs2/docs/img/equation_absolute_value_complex.svg" alt="Absolute value">
    <br>
</div> -->

<!-- </equation> -->

which corresponds to the length of a vector from the origin to a complex value plotted in the complex plane.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import cabs2 from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cabs2@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/math-base-special-cabs2/tags). For example,

```javascript
import cabs2 from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cabs2@v0.1.0-esm/index.mjs';
```

#### cabs2( z )

Computes the squared [absolute value][absolute-value] of a double-precision [complex][@stdlib/complex/float64] floating-point number.

```javascript
import Complex128 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64@esm/index.mjs';

var y = cabs2( new Complex128( 5.0, 3.0 ) );
// returns 34.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Be careful to avoid overflow and underflow.
-   Depending on the environment, this function _may_ have better performance than computing the [absolute value][absolute-value] of a [complex][@stdlib/complex/float64] number and then squaring. Hence, where appropriate, consider using `cabs2()` over [`cabs()`][@stdlib/math/base/special/cabs].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable max-len -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import Complex128 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64@esm/index.mjs';
var discreteUniform = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform' ).factory;
import cabs2 from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cabs2@esm/index.mjs';

// Create a PRNG to generate uniformly distributed pseudorandom integers:
var rand = discreteUniform( -50, 50 );

// Compute the squared absolute value for a set of random numbers...
var z;
var i;
for ( i = 0; i < 100; i++ ) {
    z = new Complex128( rand(), rand() );
    console.log( 'cabs2(%s) = %d', z.toString(), cabs2( z ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/cabs`][@stdlib/math/base/special/cabs]</span><span class="delimiter">: </span><span class="description">compute an absolute value of a complex number.</span>
-   <span class="package-name">[`@stdlib/math-base/special/abs2`][@stdlib/math/base/special/abs2]</span><span class="delimiter">: </span><span class="description">compute the squared absolute value of a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-cabs2.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-cabs2

[test-image]: https://github.com/stdlib-js/math-base-special-cabs2/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/math-base-special-cabs2/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-cabs2/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-cabs2?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-cabs2.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-cabs2/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-cabs2/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-cabs2/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-cabs2/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-cabs2/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-cabs2/main/LICENSE

[absolute-value]: https://en.wikipedia.org/wiki/Absolute_value

[@stdlib/math/base/special/cabs]: https://github.com/stdlib-js/math-base-special-cabs/tree/esm

[@stdlib/complex/float64]: https://github.com/stdlib-js/complex-float64/tree/esm

<!-- <related-links> -->

[@stdlib/math/base/special/abs2]: https://github.com/stdlib-js/math-base-special-abs2/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
