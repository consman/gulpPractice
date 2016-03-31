'use strict';

var myNumber = 7;

function MyApp() {
  console.log('running app.js');
}

MyApp.prototype.subtractFromMyNumber = function (amount) {
  console.log('running function in app.js');
  console.log('myNumber:' + myNumber);
  return (myNumber - amount);
};

module.exports = MyApp;

