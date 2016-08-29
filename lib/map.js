'use strict';

let numbers = [1,4,,32];

const addThree = function(element, index) {
  return element + 3;
};

let numberThree = numbers.map(addThree);

let map = function(array, callback) {

let newArray = [];

  for (let i = 0; i < array.length; i++) {
      newArray.push(callback(array[i]));
  }

  return newArray;
};

module.exports = map;
