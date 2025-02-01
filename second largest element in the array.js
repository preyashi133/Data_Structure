// Method 1 - It's not used when there is duplicates value
// Time Complexity : O(N * logN)
// Space Complexity : O(1)

function large(a){
    a.sort((c,b) => b-c);
    return(a[1]);
}

let a = [1,2,4,7,5];
console.log(large(a));

// Method 2
// Time Complexity : O(N)
// Space Complexity : O(1)

function secondlargest(array){
    let largest = -Infinity;
    let secondlargest = -Infinity;

    for(let i=0; i<array.length; i++){
        if(array[i]>largest){
            secondlargest=largest; 
            largest = array[i];
        } 
        else if(array[i] !== largest && array[i]>secondlargest){
            secondlargest = array[i];
        } 
    }  return secondlargest;
}
let array = [1,3,7,7,5,4];
console.log(secondlargest(array));