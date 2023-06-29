const {substitution} = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution", () => {
  it("returns false if the alphabet string isn't exactly 26 characters in length", () =>{
    substitution(input ="thinkful", alphabet = "short",);
    let actual = substitution(input, alphabet, encode)
    expect(actual).to.be.false
  })
  it("returns false if there are duplicates of characters within the alphabet string", () => {
    substitution(input = "thinkful", alphabet = "abcabcabcabcabcabcabcabcyz");
    let actual = substitution(input, alphabet, encode)
    expect(actual).to.be.false
  })
  it("should ignore capital letters and maintain spaces", () => {
    substitution(input = "You are an excellent spy", alphabet = "xoyqmcgrukswaflnthdjpzibev", encode = true);
    let actual = substitution(input, alphabet, encode)
    let expected = "elp xhm xf mbymwwmfj dne"
    expect(actual).to.eql(expected)
  })
  it("correctly translates the given phrase, based on the alphabet given to the function", () => {
    substitution(input = "y&ii$r&", alphabet = "$wae&zrdxtfcygvuhbijnokmpl", encode = false);
    let actual = substitution(input, alphabet, encode)
    let expected = "message"
    expect(actual).to.eql(expected)
  })
})
