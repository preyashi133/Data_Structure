// Problem Statement: Given an integer N and an array of size N-1 containing N-1 numbers between 1 to N. Find the number(between 1 to N), that is not present in the given array.
// Example 1:
// Input Format:
//  N = 5, array[] = {1,2,4,5}
// Result: 3

function missing(array,n){
    let max = (n * (n+1)) / 2;
    let sum = 0; 
    for(let i=0; i<array.length; i++){
        sum= sum+array[i];
    }
    return m = max- sum; 
}

let array = [1,2,4,5]
let n = 5; 
console.log(missing(array,n))
