// Problem Statement: Given an array of integers, rotating array of elements by k elements either left or right.
// Examples:
// Input: N = 7, array[] = {1,2,3,4,5,6,7} , k=2 , right
// Output: 6 7 1 2 3 4 5
// Explanation: array is rotated to right by 2 position .

//Time Complexity: O(N)
//Space Complexity: O(1)

function rotate(array, start, end){

while(start<=end){
  let temp = array[start] ;
  array[start] = array[end];
  array[end] = temp;
  start++;
  end--;
}

}

function rightrotate(array,n,k){
    rotate(array, n, n-k-1);
    rotate(array, n-k , n-1);
    rotate(array, 0, n-1);

    return array; 

}


let a = [1,2,3,4,5,6,7];
console.log(rightrotate(a,7,3));
console.log(rightrotate(a,7,2));
