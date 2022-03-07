
/*----------------------------------------------------------------
Palabra de puntuación más alta


Dada una cadena de palabras, debe encontrar la palabra con
la puntuación más alta. Cada letra de una palabra puntúa 
según su posición en el alfabeto: a = 1, b = 2, c = 3, etc.
Debe devolver la palabra con la puntuación más alta como una cadena.
Si dos palabras tienen la misma puntuación, devuelve la palabra que
aparece primero en la cadena original. Todas las letras serán minúsculas
y todas las entradas serán válidas.







*/



//primera forma
function high(x){
    let result = '', value =0, counterValue = 0; 
  
    let splittedArray = x.split(' ');
  
    splittedArray.map(splitItem => {
      counterValue = 0;
  
      let splitItemArray = splitItem.split('');
  
      splitItemArray.map(splitChar => { 
        counterValue += splitChar.charCodeAt();
      })
  
      if(counterValue>value){
        result = splitItem;
        value = counterValue;
      }
    });
    return result;
  }

console.log(high('man i need a taxi up to ubud'));

//segunda forma
const  palabraMayor=(x)=>{
    let alphabets = [
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
      'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    
    let words = x.split(" ");
    let highestScore = 0;
    let highestScoreWord = "";
    
    for (let word of words) {
      let lettersSum = 0;
      
      for (let letter of word) {
        lettersSum += alphabets.indexOf(letter) + 1;
      }
      
      if (lettersSum > highestScore) {
        highestScore = lettersSum;
        highestScoreWord = word;
      }
    }
    
    return highestScoreWord;
  }
console.log(palabraMayor("what time are we climbing up the volcano"))

