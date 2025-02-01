function rotate(a){
    let temp = a[0]; 
    for(let i=0; i<array.length; i++){
        a[i] = a[i+1];
    }
    a[array.length-1] = temp; 
    return a; 
}

let array = [1,2,3,4,5,6,7]; 
console.log(rotate(array));