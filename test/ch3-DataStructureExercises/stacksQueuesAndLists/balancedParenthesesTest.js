describe("1. Balanced Parentheses", function() {
  it("returns true when parentheses are properly nested", function() {
    var input = "((())())()";
    var result = properlyNested(input);

    assert(result);
  });

  it ("returns first index when parentheses are not properly nested", function () {
    var input = ")()(";
    var result = properlyNested(input);

    assert.equal(result, 0);
  });

  it ("returns first index when parentheses are not closed", function () {
    var input = "())";
    var result = properlyNested(input);

    assert.equal(result, 2);
  });

  it ("returns first index when there is a hanging parenthesis", function() {
    var input = "(";
    var result = properlyNested(input);

    assert.equal(result, 0);
  });
});
