// Everybody knows a little german, right? But remembering the correct articles is a tough job. Write yourself a little helper, that returns the noun with the matching article:

// each noun containing less than 2 vowels has the article "das"
// each noun containing 2/3 vowels has the article "die"
// each noun containing more than 3 vowels has the article "der"
// Caution: Vowels are "a,e,i,o,u". Umlaute (ä ö ü) are also being counted!

// (This Kata is a joke, there is no such grammar rule!)

function derDieDas(wort){
     
    let vowelCount = 0;
    
    for(let i = 0; i <= wort.length - 1; i++) {
      if(wort[i] === 'a' || wort[i] === 'e' || wort[i] === 'i' || wort[i] === 'o' || wort[i] === 'u' || wort[i] === 'ä' || wort[i] === 'ö' || wort[i] === 'ü' || wort[i] === 'A' || wort[i] === 'E' || wort[i] === 'I' || wort[i] === 'O' || wort[i] === 'U' || wort[i] === 'Ä' || wort[i] === 'Ö' || wort[i] === 'Ü') {
        vowelCount += 1;
      };
    };
    
    if(vowelCount < 2) {
      return 'das ' + wort;
    } else if(vowelCount === 2 || vowelCount === 3) {
      return 'die ' + wort;
    } else {
      return 'der ' + wort; 
    };
};