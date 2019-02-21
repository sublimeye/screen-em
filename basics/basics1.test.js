/**
 * Return own enumerable keys of the object
 */
function keys() {
  // IMPLEMENT THIS FUNCTION
}

// DO NOT CHANGE THIS
it("should return keys of the object", () => {
  const input = { one: "1", two: "2", three: "3" };
  const expectedOutput = ["one", "two", "three"];

  expect(keys(input)).toEqual(expectedOutput);
});
