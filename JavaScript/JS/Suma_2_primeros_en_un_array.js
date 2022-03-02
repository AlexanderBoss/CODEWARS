/*
Cree una función que devuelva la suma de los dos números positivos
más bajos dada una matriz de mínimo 4 enteros positivos. No se
pasarán números flotantes ni enteros no positivos.
Por ejemplo, cuando se pasa una matriz como [19, 5, 42, 2, 77], la
salida debería ser 7.
*/

sumaDosValores=(numeros)=>{
    if(numeros instanceof Array ){
        let first = Math.min(...numeros);
        numeros.splice(numeros.indexOf(first),1);
        let second = Math.min(...numeros);
        return first + second;
    }else{
       console.log(" no es un arreglo")
    }


}
console.log("La suma de los 2 numeros menores [19, 5, 42, 2, 77] es :",sumaDosValores([19, 5, 42, 2, 77]) );

