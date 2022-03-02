/*
Tu tarea es crear una función que realice cuatro operaciones matemáticas básicas.

La función debe tomar tres argumentos: operación (cadena/caracter), valor1 (número), valor2 (número).
La función debe devolver el resultado de los números después de aplicar la operación elegida.
*/

operaciones=(operador="",valor_1=undefine,valor_2=undefine)=>{
    if(operador==="+"){
        return valor_1 + valor_2;
    }
    if(operador ==="-"){
        return valor_1 - valor_2;
    }
    if(operador==="*"){
        return valor_1 * valor_2;
    }
    if(operador==="/"){
        return valor_1 / valor_2;
    }
}
console.log(operaciones("/",4,5))

