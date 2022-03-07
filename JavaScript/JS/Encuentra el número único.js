/*
Hay una matriz con algunos números
Todos los números son iguales excepto uno. 
¡Intenta encontrarlo!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

*/
function findUniq(arr) {
    arr.sort((a,b)=>a-b);
    return arr[0]==arr[1]?arr.pop():arr[0]
  }
console.log(findUniq([1,2,3,1,1,1,1,2,2,2]));
