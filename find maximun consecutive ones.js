// Problem Statement: Given an array that contains only 1 and 0 return the count of maximum consecutive ones in the array.
// Examples:
// Input: prices = {1, 1, 0, 1, 1, 1}
// Output: 3

//Method 1: 
// Time Complexity: O(n)
// Space Complexity: O(1)

function consecutive_one(a)
{
    let maxi= 0;
    let count = 0; 

    for(let i=0 ; i<a.length; i++){
        if(a[i] === 1){
            count++;
        } else{
            count = 0;
        }
        maxi = Math.max(maxi,count); 
    }
    return maxi; 
}

let array = [1,1,0,0,1,1,1,1,0]
console.log(consecutive_one(array))