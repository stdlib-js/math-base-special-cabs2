/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var EPS = require( '@stdlib/constants-float64-eps' );
var abs = require( '@stdlib/math-base-special-abs' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var tryRequire = require( '@stdlib/utils-try-require' );


// VARIABLES //

var cabs2 = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( cabs2 instanceof Error )
};


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cabs2, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the squared absolute value of a complex number', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var re;
	var im;
	var y;
	var i;

	re = data.re;
	im = data.im;
	expected = data.expected;

	for ( i = 0; i < re.length; i++ ) {
		y = cabs2( new Complex128( re[ i ], im[ i ] ) );
		if ( y === expected[ i ] ) {
			t.strictEqual( y, expected[ i ], 're: '+re[i]+'. im: '+im[i]+'. Expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = EPS * abs( expected[i] );
			t.ok( delta <= tol, 'within tolerance. re: '+re[i]+'. im: '+im[i]+' y: '+y+'. Expected: '+expected[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'if either the real or imaginary component is `NaN`, the function returns `NaN`', opts, function test( t ) {
	var v;

	v = cabs2( new Complex128( NaN, 3.0 ) );
	t.strictEqual( isnan( v ), true, 'returns NaN' );

	v = cabs2( new Complex128( 5.0, NaN ) );
	t.strictEqual( isnan( v ), true, 'returns NaN' );

	v = cabs2( new Complex128( NaN, NaN ) );
	t.strictEqual( isnan( v ), true, 'returns NaN' );

	t.end();
});
