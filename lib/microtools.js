/* jshint unused: false */
'use strict';

var microtools = {
  /**
   * Pick a property of an object based on a corpus of fields
   *
   * @example
   *    pickOne({
   *       foo: 'bar',
   *       fish: {
   *         name: 'Nemo',
   *         type: 'Clown fish'
   *       }
   *    }, ['bird', 'mammal', 'fish']);
   *    => {name: 'Nemo', type: 'Clown fish'}
   *
   *    pickOne({
   *       foo: 'bar',
   *       fish: {
   *         name: 'Nemo',
   *         type: 'Clown fish'
   *       },
   *       mammal: {
   *         name: 'Simba',
   *         type: 'Lion'
   *       }
   *    }, ['bird', 'mammal', 'fish']);
   *    => {name: 'Simba', type: 'Lion'}
   *
   * @param {object} obj - an object to search for a property in a corpus of strings
   * @param {array} corpus - an array of string
   * @return {mixed} the first property found or undefined
  **/
  pickOne: function (obj, corpus) {
    var result;
    for (var i = 0, len = corpus.length; i < len; i += 1) {
      result = obj[corpus[i]];
      if (undefined !== result) {
        return result;
      }
    }
    return result;
  }
};
