/**
 *
 * Project Euler Problem 5
 * =======================
 *
 * 2520 is the smallest number that can be divided by each of the numbers
 * from 1 to 10 without any remainder.
 *
 * What is the smallest number that is evenly divisible by all of the numbers
 * from 1 to 20?
 *
 */
var utils = require('../utils/reusables.js');

function main(limit) {
  var i = 1,
    n_range = utils.range(1, limit),
    divisible = 1,
    divisibles = [];

  while (true) {
    var is_divisible = false;
    for (var n in n_range) {
      if (i % n_range[n] != 0) {
        divisibles = [];
        continue;
      } else {divisibles.push(true)}
    }

    if (divisibles.length == limit) {
      divisible = i;
      break;
    }

    i+=1;

  }
  return divisible;
}

utils.show_answer('05', main(20));
