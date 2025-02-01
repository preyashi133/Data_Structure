//Problem Statement: Given an array, and an element num the task is to find if num is present in the given array or not. If present print the index of the element or print -1.
// Example 1:
// Input: arr[]= 1 2 3 4 5, num = 3
// Output: 2
// Explanation: 3 is present in the 2nd index

// Time Complexity:
// Space Complexity: 

function linear(a,num){
    for(let i=0; i<a.length; i++){
        if(a[i] == num){
            return i; 
        }
    } return false; 

}

let array = [1,2,3,4,5]
let num= 3;
let num2= 10; 

console.log(linear(array,num));
console.log(linear(array,num2));