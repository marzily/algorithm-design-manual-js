var expect = require("chai").expect;
var parens = require("../../../src/ch3-DataStructureExercises/stacksQueuesAndLists/balancedParentheses");

describe("Balanced Parentheses", function() {
  it("returns true when parentheses are properly nested", function() {
    var input = "((())())()";
    var result = parens.properlyNested(input);

    expect(result).to.be.true;
  });

  it ("returns first index when parentheses are not properly nested", function () {
    var input = ")()(";
    var result = parens.properlyNested(input);

    expect(result).to.equal(0);
  });

  it ("returns first index when parentheses are not closed", function () {
    var input = "())";
    var result = parens.properlyNested(input);

    expect(result).to.equal(2);
  });

  it ("returns first index when there is a hanging parenthesis", function() {
    var input = "(";
    var result = parens.properlyNested(input);

    expect(result).to.equal(0);
  });
});
