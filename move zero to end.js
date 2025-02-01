// Problem Statement: You are given an array of integers, your task is to move all the zeros in the array to the end of the array and move non-negative integers to the front by maintaining their order.
// Time Complexity : O(N)
// Space Complexity : O(1)

function movezero(a){
    let j = -1;

    for(let i=0; i<a.length; i++){
        if(a[i] === 0)
        {
        j=i; 
        break;
        }
    }

    if(j === -1) return a; 

    for(let i=j+1; i<a.length; i++){
        if(a[i]!== 0){
            [a[i],a[j]] = [a[j],a[i]];
            j++;
        }
    }
    return a; 
}

let array = [0,0,1,2,0,4,5,0];
console.log(movezero(array)); 

// Method 2
// Time Complexity: O(N) + O(X) + O(N-X) ~ O(2*N), where N = total no. of elements, X = no. of non-zero elements, and N-X = total no. of zeros.
// Space Complexity: O(N)

function movezero2(a){
    let temp =[];
    let size = a.length; 

    for(let i= 0; i<a.length; i++){
        if(a[i] !== 0){
            temp.push(a[i]);
        }
    }

    for(let i=0; i<temp.length; i++){
        a[i] = temp[i]; 
    }

    for(let i=temp.length; i<size; i++){
        a[i] = 0; 
    }

    return a; 

}

let array2 = [0,0,1,2,0,4,5,0];
console.log(movezero2(array2)); 
