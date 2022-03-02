/*Dado el triángulo de números impares consecutivos:

            1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
*/

var numbers;
function rowSumOddNumbers(numbers){
   return  Math.pow(numbers,3);
}
console.log(`la suma de  filas es : `, rowSumOddNumbers(6) )