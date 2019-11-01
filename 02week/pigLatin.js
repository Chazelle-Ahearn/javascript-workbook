'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  // Your code here
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  word = word.toLowerCase().trim();
  let firstVowel= 0;
  // const firstLetter = word[0];

  //most basic case where the word starts with a vowel
  //Just return word with 'yay' on the end
  for(let i=0; i < word.length; i++){
    // if (vowels.includes(firstLetter)){
    // return word + 'yay';
    // } else {return word + 'ay';
  // }
    for (let j=0; j < vowels.length; j++){
      if(word[i] === vowels[j]){
        firstVowel= i;
        const firstString = word.slice(0,firstVowel);
        const secondString = word.slice(firstVowel);
        if(firstVowel === 0){
          return secondString + firstString + 'yay';
        }
         return secondString +firstString + 'ay';
      }
    }
  }
  


}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
    it ('Should separate two words and return them together', ()  => {
      assert.equal(pigLatin('Hop Fest'), 'Ophay Estfay');
      assert.equal(pigLatin('halloween candy'), 'alloweenhay andycay');

    });
  });
} else {

  getPrompt();

}
