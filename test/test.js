/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isAlphaNumeric = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-alphanumeric', function tests() {

	it( 'should export a function', function test() {
		expect( isAlphaNumeric ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		var bool;

		bool = isAlphaNumeric( 'b1e2e3p' );
		assert.ok( bool );

		bool = isAlphaNumeric( new String('b1e2e3p') );
		assert.ok( bool );
	});

	it( 'should negatively validate', function test() {
		var values = [
			'',
			5,
			null,
			undefined,
			true,
			NaN,
			function(){},
			[],
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( badValue( values[i] ) );
		}
		function badValue( value ) {
			return isAlphaNumeric( value );
		}
	});

});
