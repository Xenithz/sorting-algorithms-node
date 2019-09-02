const quickSort = require('./algorithms/quick-sort');

let arr = [4, 2 ,3, 1];

quickSort(arr, 0, arr.length - 1);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);    
}