'use strict';

var isAlphaNumeric = require( './../lib' );

console.log( isAlphaNumeric( 'b1e2e3p' ) );
// returns true

console.log( isAlphaNumeric( '' ) );
// returns false

console.log( isAlphaNumeric( 1 ) );
// returns false
