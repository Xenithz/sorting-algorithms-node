function bubbleSort(targetArray) {
    for(let i = 0; i < targetArray.length - 1; i++) {
        for(let j = 0; j < targetArray.length - i - 1; j++) {
            if(targetArray[j] > targetArray[j + 1]) {
                let temp = targetArray[j];
                targetArray[j] = targetArray[j +1];
                targetArray[j + 1] = temp;
            }
        }        
    }
}

module.exports = bubbleSort;