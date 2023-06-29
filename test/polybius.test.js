const {polybius} = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
  it("should output a string while maintaining spaces", () => {
    polybius(input = "Hello world");
    let actual = polybius(input, encode = true)
    let expected = "3251131343 2543241341"
    expect(actual).to.eql(expected)
  })
  it("should ignore capital letters", () => {
    polybius(input = "ThinKFuL");
    let actual = polybius(input, encode = true)
    let expected = "4432423352125413"
    expect(actual).to.eql(expected)
  })
  it("should have an even number of characters while decoding", () => {
    polybius(input ="3251131343 2543241341", false);
    let actual = polybius(input, encode = false)
    let expected = "hello world"
    expect(actual).to.eql(expected)
  })
  it("translates 42 to (i/j) when decoding", () => {
    polybius(input = "4432423352125413", false);
    let actual = polybius(input, encode = false)
    let expected = "th(i/j)nkful"
    expect(actual).to.eql(expected)
  })
  it("translates i and j to 42 when encoding", () => {
    polybius(input = "thinkful");
    let actual = polybius(input, encode = true)
    let expected = "4432423352125413"
    expect(actual).to.eql(expected)
  })
})
