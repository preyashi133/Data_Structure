// Problem Statement: Given an integer array arr, find the contiguous subarray (containing at least one number) which
// has the largest sum and returns its sum and prints the subarray.
// Example 1:
// Input:
//  arr = [-2,1,-3,4,-1,2,1,-5,4] 

// Method 1: kadane's algorithms
// Time complexity: O(n)
// Space Complexity: O(1)

function sum(array){
    let n = array.length; 
    let maxi = Number.MIN_SAFE_INTEGER; 
    for(let i=0; i<n; i++){
        for(let j=i; j<n; j++){
            let sum=0; 
            for(let k=i; k<=j; k++){
                sum += array[k]; 
            }
            maxi = Math.max(sum,maxi)
        }
    } return maxi;    
}

const array =  [ -2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(sum(array))

function sum2(arr){
    let maxi = Number.MIN_SAFE_INTEGER;
    let sum=0; 
    let n= arr.length; 

    let start=0;
    let startrange=-1;
    let endrange = -1; 

    for(let i=0; i<n; i++){

        if(sum  == 0) start=i;

        sum += arr[i]; 

        if(sum>maxi){
            maxi= sum; 

            startrange = start;
            endrange = i;
        }

        if(sum<0){
            sum=0; 
        }
    } 
    for(let i=startrange; i<= endrange; i++){
        console.log("Range is: " +arr[i] + " "); 
    } 
    return maxi; 


}
const arr =  [ -2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(sum2(array))
