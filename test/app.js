var expect = require("chai").expect;
var App  = require("../app.js");
var myApp = new App();

console.log('running test/app.js');

var assert = require("chai").assert;

assert.equal(myApp.subtractFromMyNumber(2), 5);
assert.equal(myApp.subtractFromMyNumber(6), 1);
assert.equal(myApp.subtractFromMyNumber(7), 0);
assert.equal(myApp.subtractFromMyNumber(8), -1);
assert.equal(myApp.subtractFromMyNumber(1000), -993);

