/*
Dado un número aleatorio no negativo, debe devolver los dígitos de este 
número dentro de una matriz en orden inverso.


Example:
348597 => [7,9,5,8,4,3]
0 => [0]
*/


function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }

console.log(digitize(348597));


function maps(x){
   x=[];
   let suma;

   for(var i=0; i<x.length; i++){
       suma = x[i] + x[i];
   }    
   return suma;
}

function aaaa(array) {
    var array = [];
    for(var i = 0; i<array.length; i++) {
        var sum = array[i] + array[i];
    }
    return sum;
};

console.log(aaaa([2,4,5,6,7,8]));
console.log(maps(4,4,5,6,7,8,7))
