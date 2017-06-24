/* Give an algorithm that returns true if a string contains properly nested and
balanced parentheses, and false otherwise. For full credit, identify the
position of the first offending parenthesis if the string is not properly
nested and balanced. */

var properlyNested = function(string) {
  var indexedParens = [];

  for (var i = 0; i < string.length; i++) {
    if (string[i] === "(") {
      indexedParens.push([i, string[i]]);
    } else if (string[i] === ")") {
      if (indexedParens.length === 0) {
        return i;
      } else {
        indexedParens.pop();
      }
    }
  }

  if (indexedParens.length === 0) {
    return true;
  } else {
    return indexedParens[0][0];
  }
};


module.exports = properlyNested;
