ordenDescendenteCifras=(numero)=>{
    numero=numero.toString();
    return parseInt(numero.split("").reverse().join(""));
}

console.log(ordenDescendenteCifras([123456789]));


