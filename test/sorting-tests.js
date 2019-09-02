const assert = require('assert');
const bubbleSort = require('../algorithms/bubble-sort');
const quickSort = require('../algorithms/quick-sort');

describe('Bubble sort', function() {
    describe('#bubbleSort()', function() {
        it('Array should be sorted from lowest to highest', function() {
            let expectedArray = [1, 2, 3, 4, 5];
            let testArray = [5, 2, 3, 1, 4];
            bubbleSort(testArray);
            assert.deepEqual(testArray, expectedArray);
        });
    });
});

describe('Quick sort', function() {
    describe('#quickSort()', function() {
        it('Array should be sorted from lowest to highest', function() {
            let expectedArray = [1, 2, 3, 4, 5];
            let testArray = [5, 2, 3, 1, 4];
            quickSort(testArray, 0, testArray.length - 1);
            assert.deepEqual(testArray, expectedArray);
        });
    });
});