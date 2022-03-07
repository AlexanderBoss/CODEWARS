/*
En este kata, creará una función que toma una lista de
enteros no negativos y cadenas y devuelve una nueva lista con
las cuerdas se filtraron.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
*/

function filter_list(listado) {
    
    return listado.filter( str => typeof (str) == "number" )
    
}
console.log(filter_list([1,2,'a','b']))
console.log(filter_list([1,2,'a','b']))
