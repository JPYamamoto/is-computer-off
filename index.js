/*!
 * is-computer-off <https://github.com/JPYamamoto/is-computer-off>
 *
 * Copyright (c) 2020, Juan Pablo Yamamoto.
 * Released under the MIT License.
 */

'use strict';

var isComputerOn = require('is-computer-on');

module.exports = function isComputerOff() {
  return !isComputerOn();
};
