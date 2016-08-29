'use strict';

let numbers = [3, 4, 7, 12, 1046];

const isEven = function(element) {
  return (element % 2 === 0);
}

numbers.every(isEven);

const every = function(array, callback) {

  for (let i = 0; i < array.length; i++) {
    if (!(callback(array[i]))){
      return false;
    }
  }

  return true;
};

module.exports = every;
