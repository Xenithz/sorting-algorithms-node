function quickSort(targetArray, low, high) {
    if(low < high) {
        let pivot = partition(targetArray, low, high);
        quickSort(targetArray, low, pivot -1);
        quickSort(targetArray, pivot + 1, high);
    }
}

function partition(targetArray, low, high) {
    let pivot = targetArray[high];
    let smallerElement = low - 1;

    for(i = low; i <= high - 1; i++) {
        if(targetArray[i] < pivot) {
            smallerElement++;

            let temp = targetArray[smallerElement];
            targetArray[smallerElement] = targetArray[i];
            targetArray[i] = temp;
        }
    }

    let temp = targetArray[smallerElement + 1];
    targetArray[smallerElement + 1] = targetArray[high];
    targetArray[high] = temp;
    return smallerElement + 1;
}

module.exports = quickSort;