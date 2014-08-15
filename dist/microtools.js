/*! microtools - v0.2.1
 *  Release on: 2014-08-16
 *  Copyright (c) 2014 Stéphane Bachelier
 *  Licensed MIT */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], function () {
      return (root.returnExportsGlobal = factory());
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    root['microtools'] = factory();
  }
}(this, function () {

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
  

  return microtools;


}));
