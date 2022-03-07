/*
Dada una matriz de enteros, devuelva una nueva 
matriz con cada valor duplicado. 
Por ejemplo: [1, 2, 3] --> [2, 4, 6]
*/
const x = [1,2,3]

function maps(x){
  
    return x.map(n => n*2);
  }

  console.log(maps([1, 2, 3]))