// Problem Statement: Given an array of size n, write a program to check if the given array is sorted in (ascending / Increasing / Non-decreasing) order or not. If the array is sorted then return True, Else return False.

// Time Complexity : O(N)
// Space Complexity : O(1)

function sort(array){
    for(let i=1; i<array.length; i++){
        if(array[i]<array[i-1]){
            return false; 
        }
    } return true; 
}

let array1 = [1,2,3,4,5,6];
let array2 = [1,2,5,6,3];

console.log(sort(array1));
console.log(sort(array2));