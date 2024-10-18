alert('Non scrivere il nome con la prima lettera maiuscola');
const firstWord = prompt("Dimmi un nome è ti dirò se è palindromo");

if ( firstWord === reverseString(firstWord)){
    alert('il nome è palindromo');
} 
else {
    alert('non è palindromo');
    

    
}






/**
 * Inverte la stringa
 *
 * @param {string} name1
 * @returns {boolean}
 */
function reverseString(name1){
    const splitString = name1.split("");
    const reverseArray = splitString.reverse();
    const joinArray = reverseArray.join("");
    return joinArray;
}