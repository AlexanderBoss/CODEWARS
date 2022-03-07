/*
Tome 2 cadenas s1 y s2 que incluyan solo letras de ato z. 
Devuelve una nueva cadena ordenada, la más larga posible, 
que contiene letras distintas, 
cada una tomada solo una vez, provenientes de s1 o s2

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/
//primera forma
function letrasOrdenadas(a,b){
    
    return (a+b).split('').filter(onlyUnique).sort().join('');
    
    function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
    }
}
console.log(letrasOrdenadas("aretheyhere", "yestheyarehere"));

//segunda forma
const longestarray = (s1, s2) => [...new Set(s1+s2)].sort().join('')
console.log(longestarray("aretheyhere", "yestheyarehere"))

//tercera forma
function longest(s1, s2) {
    return Array.from(new Set(s1 + s2)).sort().join('');
}
console.log(longest("aretheyhere", "yestheyarehere"))
  
