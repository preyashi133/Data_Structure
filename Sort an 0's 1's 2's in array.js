// Problem Statement: Given an array consisting of only 0s, 1s, and 2s. Write a program to in-place sort the array without using inbuilt sort functions. ( Expected: Single pass-O(N) and constant space)
// Input:
//  nums = [2,0,2,1,1,0]
// Output
// : [0,0,1,1,2,2]


// Method 1: Sorting 
// Time Complexity: O(n log n )
// Space Complexity: O()

function sort(array,){
    array.sort((a,b) => a-b)
    return array; 
}

const array = [2,2,0,0,1,1,2]
console.log(sort(array));

// Method:2 -  Dutch National flag algorithm
// Time Complexity: O(n)
// Space Complexity: O(1)

function sort2(a){
    let low = mid = 0;
    let high = a.length-1;

    for(let i= 0; i<a.length; i++){
        if(a[mid]==0){
            [a[low], a[mid]] = [a[mid], a[low]]; 
            low++;
            mid++;
        }
        else if(a[mid]==1){
            mid++;
        }
        else{
            [a[mid],a[high]] = [a[high],a[mid]]; 
            high--; 
        }
    } return a; 
}


const a = [2,2,0,0,1,1,2];
console.log(sort2(a));