/**
*
*	VALIDATE: alphanumeric
*
*
*	DESCRIPTION:
*		- Validates if a value is an alphanumeric string.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2015.
*
*/

'use strict';

// MODULES //

var isString = require( 'validate.io-string' );

// REGEX //

var re = /^[a-z0-9]+$/i;

// ISALPHANUMERIC //

/**
* FUNCTION: isAlphaNumeric( value )
*	Validates if a value is an alphanumeric string.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating if a value is an alphanumeric string
*/
function isAlphaNumeric( value ) {
	return isString( value ) && re.test( value );
} // end FUNCTION isAlphaNumeric()


// EXPORTS //

module.exports = isAlphaNumeric;
