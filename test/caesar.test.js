const {caesar} = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
  it("should return false if shift is missing, is less than -25, greater than 25, or 0", () => {
caesar(input = "thinkful");
caesar(input = "thinkful", shift = 99);
caesar(input = "thinkful", shift = -26);
caesar(input = "thinkful", shift = 0);
    let actual = caesar(input, shift, encode = true)
    expect(actual).to.be.false
  })
  it("will ignore all capital letters, and maintain spaces and nonalphabetic symbols", () => {
    caesar(input = "This is a secret message!", shift = 8);
    let actual = caesar(input, shift, encode = true)
    let expected = "bpqa qa i amkzmb umaaiom!"
    expect(actual).to.eql(expected)
  })
  it("should wrap around the alphabet if a letter is shifted off", () => {
    caesar(input = "This is a secret message!", shift = 8);
    let actual = caesar(input, shift, encode = true)
    let expected = "bpqa qa i amkzmb umaaiom!"
    expect(actual).to.eql(expected)
  })
})
