// Problem Statement: Given an array, we have to find the largest element in the array.

// Example 1:
// Input:
//  arr[] = {2,5,1,3,0};
// Output:
//  5
// Explanation:
//  5 is the largest element in the array. 

// Example2:
// Input:
//  arr[] = {8,10,5,7,9};
// Output:
//  10
// Explanation:
//  10 is the largest element in the array. 


// Method 1 - Linear Search
// Time Complexity: O(N) 
// Space Complexity: O(1)

function large(a) {
    let large = a[0];
    for (let i = 0; i < a.length; i++) {
        if (a[i] > large) {
            large = a[i];
        }
    }
    console.log("Largest element in the array " + large); 
}

let a = [1, 2, 3, 4, 5];
large(a); // Output: 5


// // Method 2 - Sorting
// // Time Complexity: O(N * log(N)) 
// // Space Complexity: O(N)

function sorting(array) {
    array.sort((a, b) => b - a);  
    return array[0];  
}

let array = [1, 2, 3, 4, 5, 6];
console.log("Largest element in the array " + sorting(array));  
