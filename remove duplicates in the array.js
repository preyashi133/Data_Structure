// Problem Statement: Given an integer array sorted in non-decreasing order, remove the duplicates in place such that each unique element appears only once. The relative order of the elements should be kept the same.
// If there are k elements after removing the duplicates, then the first k elements of the array should hold the final result. It does not matter what you leave beyond the first k elements.
// Note: Return k after placing the final result in the first k slots of the array.

// Method 1
// Time Complexity: O(N)
// Space Complexity: O(1)

function remove(a){
    let i=0;
    for(let j=1; j<a.length; j++){
        if(a[i] !== a[j]){
           i++;
           a[i] = a[j];
        }  
    } return i+1; 
}

let a = [1,2,2,2,3,3,3];
let k = remove(a);

console.log("After removing the duplicates")
    for(let i= 0; i<k; i++){
        console.log(a[i]);
    }

// Method 2 - Using Hash set 
// Time Complexity: O(N*log(N)) + O(N);
// Space Complexity: O(N)

function removeduplicate(arr){
    let set = new Set(arr)
    let uniquearray = Array.from(set);
    for(let i =0; i<uniquearray.length; i++){
        arr[i] = uniquearray[i];
    }
    return uniquearray.length; 
}

const arr = [1, 1, 2, 2, 2, 3, 3];
const k1 = removeduplicate(arr);

console.log("The array after removing duplicate elements is:");
for (let i = 0; i < k; i++) {
  console.log(arr[i]);
}