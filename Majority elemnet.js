// Problem Statement: Given an array of N integers, write a program to return an element that occurs more than N/2 times in the given array. You may consider that such an element always exists in the array.
// Example 1:
// Input Format
// : N = 3, nums[] = {3,2,3}
// Result
// : 3


//Method 1:
// Time Complexity : O(N)
// Space Complexity: O(1)

// function count(a){
//     let n = a.length;
//     let count=0;
//     for(let i=0; i<n; i++){
//         let num=a[i];
//         for(let j=0; j<n; j++){
//             if(a[j]==num);
//             count++;
//         }

//         if(count>Math.floor(n/2)) return "yes";
//     }
// }

// const a = [3,3,2]
// console.log(count(a));

//Method 2:
// Time Complexity : O(N)
// Space Complexity: O(1)

function count2(array){
    let n1=array.length;
    let count=0; 
    let el; 

    for(let i=0; i<n1; i++){
        if(count===0){
            count=1;
             el =array[i];
        }
        else if(el==array[i]){
            count++;
        }
        else{
            count--;
        }
    }

    let count1=0;

    for(let i=0; i<n1; i++){
        if(array[i] === el){
            count1++;
        }
    }

    if(count1 > Math.floor(n1/2)){
        return el; 
    }
return -1;
}
const array = [2, 2, 1, 1, 1, 2, 2];
console.log(count2(array));