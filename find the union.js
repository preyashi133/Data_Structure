// Problem Statement: Given two sorted arrays, arr1, and arr2 of size n and m. Find the union of two sorted arrays.
// The union of two arrays can be defined as the common and distinct elements in the two arrays.NOTE: Elements in the union should be in ascending order.
// Examples
// Input: n = 5,m = 5.
// arr1[] = {1,2,3,4,5}  
// arr2[] = {2,3,4,4,5}
// Output: {1,2,3,4,5}

function unionarray(a,b){
    let union = []; 
    let i=0; 
    let j=0; 

    while(i<a.length && j<b.length){
        if(a[i] <= b[j]){
            if(union.length == 0 || union[union.length-1]!= a[i]) {
            union.push(a[i]);
            i++; 
            }
        else{
            if(union.length == 0 || union[union.length-1] != b[j]) {
            union.push(b[j]);
            j++;    
            }
        }
        }
    }

    while(i < a.length){
        if(union[union.length - 1] !== a[i]){
            union.push(a[i]);
            i++;
        }

    }

    while(j < b.length){
        if(union[union.length - 1] !== b[j]){
            union.push(b[j]);
            j++;
        }
    }
    return union; 
}

let a = [1,2,3,4,5];
let b = [2,3,4,7,8];

console.log(unionarray(a,b));