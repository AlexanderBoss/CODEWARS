/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

*/
const mySet = new Set();
mySet.add(1)
mySet.add(2)
mySet.add(2)
console.log(mySet);




numeroOrdenado=(el)=>{
    return el.sort();
}
console.log(numeroOrdenado([2,4,5,6,7,8,9,10]))




var uniqueInOrder= function(iterable){
    let arr=[];
    for(let i=0;i < iterable.length;i++){
        if(iterable[i] !== iterable[i+1]){
            arr.push(iterable[i]);
        }
       
    }

    return arr;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder([1,2,2,3,3]))