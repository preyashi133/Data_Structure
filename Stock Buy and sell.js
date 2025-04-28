// Problem Statement: You are given an array of prices where prices[i] is the price of a given stock on an ith day.
// Example 1:
// Input:
//  prices = [7,1,5,3,6,4]
// Output:
//  5
// Explanation:
//  Buy on day 2 (price = 1) and 
// sell on day 5 (price = 6), profit = 6-1 = 5

// Method 1:
// Time Complexity: O(n2)
// Space Complexity: O(1)

function sell(array){
    const n = array.length; 
    let maxi = 0;
    for(let i=0; i<n;i++){
        for(let j=i+1; j<n; j++){
            if(array[i]<array[j]){
                let sum = array[j] - array[i];
                maxi = Math.max(sum, maxi)
            }
        }
    }
       return "Maximum profit is:" +maxi;
}

const array = [7,1,5,3,6,4]
console.log(sell(array));

// Method 1:
// Time Complexity: O(n)
// Space Complexity: O(1)

function sell(a){
let n = a.length;
let min = Infinity;
let maxi = 0;

for(let i=0; i<n; i++){
   min = Math.min(min, a[i]);
   maxi= Math.max(maxi, a[i] - min)
}

return "Maximum profit is : " +maxi;
}

const a = [7,1,5,3,6,4];
console.log(sell(a));