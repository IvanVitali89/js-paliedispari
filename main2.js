
const numberToAdd = numberRandom (1,5);
const numberChoise = prompt ('inserisci un numero tra 1 e 5');
const oddEven = prompt ('secondo te è pari o dispari');
realNumber = Number(numberChoise);
console.log(realNumber);
console.log(oddEven);
console.log(numberToAdd);
const numberSum = realNumber + numberToAdd;
console.log(`la somma è ${numberSum}`);



if( evenOdd(numberSum)=== oddEven){
    alert('Hai vinto')
} else {
    alert('Hai perso');
}






/**
 * genera numero random tra 1 e 5
 *
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function numberRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


/**
 * La funzione che definisce se il numero è pari o dispari
 * @param {number} numToCheck
 * @returns {string} "even" se il numero è pari, "odd" se il numero è dispari
 */
function evenOdd(numToCheck) {
    let result = "";
    if(numToCheck % 2 === 0) {
      result = "pari";
    } else {
      result = "dispari";
    }
    return result;
  }