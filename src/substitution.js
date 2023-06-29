// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const actualAlphabet = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
   if(!alphabet) return false
   if(alphabet.length != 26) return false
   for (let i = 0; i < alphabet.length; i++) {
     for (let j = i+1; j < alphabet.length; j++) {
       if(alphabet[i]===alphabet[j]) return false
     }
   }
    let lowerInput = input.toLowerCase()
    let encodedMessage = ""
    for (let i = 0; i < lowerInput.length; i++) {
      if(lowerInput[i] === " ") {
        encodedMessage += lowerInput[i]
      }
     else if (encode) {
      let index = actualAlphabet.indexOf(lowerInput[i])
      encodedMessage += alphabet[index]
     }
      else {
        let index = alphabet.indexOf(lowerInput[i])
        encodedMessage += actualAlphabet[index]
      }
    }
    return encodedMessage
  }
  
  
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
