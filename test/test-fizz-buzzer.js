'use strict';
// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzbuzz
const  fizzBuzzer = require('../fizzBuzzer.js');

describe('fizzBuzzer', function() {
  it('should identify non-numbers; if a number divisible by 15, return FizzBuzz etc.', function () {
    const normalCases = [{
      num: 30,
      expected: 'fizz-buzz'
    }, {
      num: 25,
      expected: 'buzz'
    }, {
      num: 3,
      expected: 'fizz'

    }];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should throw an error if input is not a number', function () {
    const badCases = [
      'foobar', 'elephant', '!!'
    ];
    badCases.forEach(function (input) {
      expect(function () {
        fizzBuzzer(input);
      }).to.throw(Error);});});

});

