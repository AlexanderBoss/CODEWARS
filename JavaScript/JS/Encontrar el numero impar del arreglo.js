/*
Dada una matriz de números enteros, 
encuentre el que aparece un número impar de veces.
 Siempre habrá un solo número entero que aparecerá 
 un número impar de veces.
 
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

function findOdd(A) {
    var count = 0;
    for(var i = 0; i<A.length; i++){
      for(var j = 0; j<A.length; j++){
        if(A[i] ==A[j]){
          count++;
        }
      }
      if(count % 2 != 0 ){
        return A[i];
      }
    }
  };

  
console.log(findOdd([2,5,5,4,5,5,6,1,3,4,5,6,7]));

function encontrarImpar(numero){
    var conteo=0;
    for(var i = 0; i<numero.length; i++){
        for (let j = 0; j < numero.length; j++) {
                if(numero[i] ==A[j]){
                    count++;
                }
            

        }
        if( (count % 2) != 0){
            return A[i];
        }

    }
}
console.log(encontrarImpar([]))