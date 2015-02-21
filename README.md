alphanumeric
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is an alphanumeric string.


## Installation

``` bash
$ npm install validate.io-alphanumeric
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var isAlphaNumeric = require( 'validate.io-alphanumeric' );
```

#### isAlphaNumeric( value )

Validates if a `value` is an alphanumeric `string`.

``` javascript
var value = 'b1e2e3p';

var bool = isAlphaNumeric( value );
// returns true
```


## Examples

``` javascript
var isAlphaNumeric = require( 'validate.io-alphanumeric' );

console.log( isAlphaNumeric( 'b1e2e3p' ) );
// returns true

console.log( isAlphaNumeric( '' ) );
// returns false

console.log( isAlphaNumeric( 1 ) );
// returns false
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-alphanumeric.svg
[npm-url]: https://npmjs.org/package/validate.io-alphanumeric

[travis-image]: http://img.shields.io/travis/validate-io/alphanumeric/master.svg
[travis-url]: https://travis-ci.org/validate-io/alphanumeric

[coveralls-image]: https://img.shields.io/coveralls/validate-io/alphanumeric/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/alphanumeric?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/alphanumeric.svg
[dependencies-url]: https://david-dm.org/validate-io/alphanumeric

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/alphanumeric.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/alphanumeric

[github-issues-image]: http://img.shields.io/github/issues/validate-io/alphanumeric.svg
[github-issues-url]: https://github.com/validate-io/alphanumeric/issues
