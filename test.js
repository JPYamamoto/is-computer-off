/*!
 * is-computer-off <https://github.com/JPYamamoto/is-computer-off>
 *
 * Copyright (c) 2020 Juan Pablo Yamamoto.
 * Licensed under the MIT license.
 */

'use strict';

require('mocha');
var assert = require('assert');
var isComputerOff = require('./');

describe('isComputerOff', function() {
  it('should return false if the computer is off:', function() {
    assert(!isComputerOff());
  });
});
