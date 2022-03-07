
//primera forma
const elevarCuadrado=(number)=>{    
    res ="";
    let contador=0;
    number=number.toString();
    let separador= number.split("");
    for(let i = 0; i<separador.length;i++){
        res = res + (number[i]*number[i]).toString();
        
    }
    return Number(res);
}

console.log(elevarCuadrado("12345"))

//segunda forma
const cuadradoDigitos=(num)=>{
    let number = ''+num;
    let newNum = new Array();
    number.split('').map(n=>{
        newNum.push(Math.pow(n,2));
    })
    return parseInt(newNum.join(''))
}
console.log(cuadradoDigitos("2345"));

//tercera forma

function squareDigits(num){
return Number(('' + num).split('').map(function (val) { 
    return val * val; }).join(''));
    
}
console.log(squareDigits(45));

