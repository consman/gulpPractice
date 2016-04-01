'use strict';

var myNumber = 7;

class MyApp {
  Constructor() {
   console.log('initializing MyApp...')

  };
  
  subtractFromMyNumber (amount) {
    console.log('running function...')
    return (myNumber - amount);
  };
};

module.exports = MyApp;

