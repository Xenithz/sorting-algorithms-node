const quickSort = require('./algorithms/quick-sort');
const bubbleSort = require('./algorithms/bubble-sort');

let arr = [4, 2 ,3, 1];

// quickSort(arr, 0, arr.length - 1);
bubbleSort(arr);


for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);    
}