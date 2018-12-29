'use strict';
const Factory = require('../lib/db/factory');
const DBSymbol = Symbol('Application#db');
module.exports = {
  get db() {
    if (!this[DBSymbol]) {
      this[DBSymbol] = Factory('mysql', this.mysql);
    }
    return this[DBSymbol];
  },
};