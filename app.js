'use strict';

var myNumber = 7;
  
function Constructor() {
  console.log('running app.js');
};

this.subtractFromMyNumber = function (amount) {
  console.log('running function in app.js');
  console.log('myNumber:' + this.myNumber);
  return (myNumber - amount);
};

module.exports = Constructor;

