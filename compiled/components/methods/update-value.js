'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (e) {

  if (e.type === 'change' || e.type === 'keyup' && !this.lazy) {
    this.curValue = e.target.value;
    this.validateRemote();
  }
};