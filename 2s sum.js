// Problem Statement: Given an array of integers arr[] and an integer target.

// 1st variant: Return YES if there exist two numbers such that their sum is equal to the target. Otherwise, return NO.

// 2nd variant: Return indices of the two numbers such that their sum is equal to the target. Otherwise, we will return {-1, -1}.

// Example 1:
// Input Format: N = 5, arr[] = {2,6,5,8,11}, target = 14
// Result: YES (for 1st variant)
//        [1, 3] (for 2nd variant)
// Explanation: arr[1] + arr[3] = 14. So, the answer is “YES” for the first variant and [1, 3] for 2nd variant.

// Method 1 : Two pointer approch 
// Time Complexity : O(n2)
// Space Complexity : O(1)

function sum(arr,target){
    for(let i=0; i<arr.length; i++){
        for(j=i+1; i<arr.length; i++){
            if(arr[i] + arr[j] === target){
                return "yes" + arr[i] + arr[j]; 
                
            }
        }
    } return "No";
}

const arr = [2,6,5,8,11];
console.log(sum(arr,14));

// Method:2 
// Time Complexity : O(N) + O(N*logN)
// Space Complexity : O(1)

function sum2(array,tar){
    let n= array.length; 
    let first = 0;
    let last = n-1;
    while(first<last){  
        let add =  array[first] + array[last];
        if(add === tar){
            return "yes" + array[first] + array[last]; 
        }
        else if(add<tar){
            first++;}
        else{
            last--; 
        } 
    } return "No"; 
}
const array = [2,6,5,8,11]
sum2(array,14);

const array2 = [12,9,5,4,2]
sum2(array2,14);


