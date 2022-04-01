/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

// TypeScript Version: 2.0

/// <reference types="https://cdn.jsdelivr.net/gh/stdlib-js/types@main/index.d.ts"/>

import { Complex128 } from '@stdlib/types/object';

/**
* Computes the squared absolute value of a double-precision complex floating-point number.
*
* ## Notes
*
* -   The absolute value of a complex number is its distance from zero.
*
* @param z - complex number
* @returns squared absolute value
*
* @example
* var Complex128 = require( `@stdlib/complex/float64` );
*
* var v = cabs2( new Complex128( 5.0, 3.0 ) );
* // returns 34.0
*/
declare function cabs2( z: Complex128 ): number;


// EXPORTS //

export = cabs2;
