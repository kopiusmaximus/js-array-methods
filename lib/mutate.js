'use strict';

// Write a function, mutate, that takes an array and a function as arguments
// and **does* change the original array based on the return value of invoking
// transform.

let numbers = [1, 4,, 27];

const double = function (element) {
  return element * 2;
};

const mutate = function(array, transform) {

for (let i = 0, max = array.length; i < max; i++) {
  array[i] = transform(array[i]);
}

return array;
};

module.exports = mutate;
