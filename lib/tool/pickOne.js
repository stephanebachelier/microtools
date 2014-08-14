/**
  pickOne
 {Object} `obj` an object to search for properties in a corpus
 {Array} `corpus` an array of string

**/
function (obj, corpus) {
  var result;
  for (var i = 0, len = corpus.length; i < length; i++) {
    result = obj[corpus[i]];
    if (undefined !== result) {
      return result;
    }
  }
  return result;
}
