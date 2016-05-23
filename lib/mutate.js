'use strict';

// mutate() takes an array and a callback, calls the callback on each
// member of the array, mutates the original array and returns it.
const mutate = function(array, transform) {
  for (let i = 0, max = array.length; i < max; i++) {
    array[i] = transform(array[i]);
  }

  return array;
};

module.exports = mutate;
