//Problem Statement: Given a non-empty array of integers arr, every element appears twice except for one. Find that single one.
// Example 1:
// Input Format:
//  arr[] = {2,2,1}
// Result:
//  1


// Method 1
// Time Complexity : O(N * 2)
// Space Complexity: O(1)

function twice(a){
    for(let i=0; i<array.length; i++){
        let current = a[i];
        let count = 0; 
    for(let j =0; j<array.length; j++){
        if(a[j] ===  current){ 
            count++;
        }
    }

    if(count==1){
        return current; 
    } 

    } 
 return -1; 
   
}

let array = [1,2,2]
console.log(twice(array));

// Method 2 - using XOR 
// Time Complexity : O(N)
// Space Complexity: O(1)

function xor(a){
    let xor = 0; 

    for(let i=0; i<a.length; i++){
        xor = xor ^ a[i];
    }
    return xor; 
}

let array2 = [1,2,2,1,4]; 
console.log(xor(array2));