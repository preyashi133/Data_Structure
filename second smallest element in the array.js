// Method 1 - It's not used when there is duplicates value
// Time Complexity : O(N * logN)
// Space Complexity : O(1)

function Small(a){
    a.sort((c,b) => c-b);
    return(a[1]);
}

let a = [1,2,4,7,5];
let b = [1,1,3,7,7,5,4];
console.log(Small(a));
console.log(Small(b)); // It will not work when there is a duplicate value

// Method 2
// Time Complexity : O(N)
// Space Complexity : O(1)

function secondsmallest(array){
    let smallest = Infinity;
    let secondsmallest = Infinity;

    for(let i=0; i<array.length; i++){
        if(array[i]<smallest){
            secondlargest=smallest; 
            smallest = array[i];
        } 
        else if(array[i] !== smallest && array[i]<secondsmallest){
            secondsmallest = array[i];
        } 
    }  return secondsmallest;
}
let array = [1,1,3,7,7,5,4];
console.log(secondsmallest(array));