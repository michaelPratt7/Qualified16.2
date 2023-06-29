// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 
  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false
    if (!encode) shift *= -1
    let output = ""
     for (let i = 0; i < input.length; i++) {
       const inputLetter = input[i].toLowerCase();
       const inputLetterPosition = alphabet.indexOf(inputLetter);
       let newPosition = inputLetterPosition + shift;
       if (!alphabet.includes(inputLetter)) {
        output += inputLetter;
       }
       else if (newPosition < 0) {
        newPosition = (newPosition % 26) + 26;
        output += alphabet[newPosition];
    }
         else {
        newPosition = newPosition % 26;
        output += alphabet[newPosition];
         }
       }
       return output
     }
  return {
   caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
