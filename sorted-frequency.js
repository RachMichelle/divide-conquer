function sortedFrequency(arr, x) {
    // use findFirstInstance and findLastInstance to determine index to use for calculation

    let first = findFirstInstance(arr,x)
    let last = findLastInstance(arr,x)

    // rule out x not in array
    if (first === -1 || last === -1){
        return -1
    }

    // calculate count. using first index subtracted from last index +1 (to make sure last number is included in count)

    let count = (last +1) - first;

    return count;
    
}

function findFirstInstance(arr, x) {
    // find the first instance of value x in array
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    // the first value in array is x--return 0
    if (arr[0] === x) {
        return 0;
    }

    while (leftIndex <= rightIndex) {
        let midIndex = Math.floor((leftIndex + rightIndex) / 2);
        let midVal = arr[midIndex];
        let prevVal = arr[midIndex - 1];

        // middle value is less than x, check right
        if (midVal < x) {
            leftIndex = midIndex + 1;
        }
        // middle value is greater than x, check left
        else if (midVal > x) {
            rightIndex = midIndex - 1;
        }
        // middle value is x, but previous value is also x, so it's not the first instance. check left for lower previous value indicating first instance x (previous value could not be greater because array is sorted)
        else if (midVal === x && prevVal === x) {
            rightIndex = midIndex - 1;
        }
        // middle value is x and previous value is lower than x, indicating first instance
        else {
            return midIndex;
        }
    }
    // x is not in array
    return -1
}

function findLastInstance(arr, x) {
    // find the last instance of value x in array
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    // last value in array is x--return last index
    if (arr[rightIndex] === x) {
        return rightIndex
    }

    while (leftIndex <= rightIndex) {
        let midIndex = Math.floor((leftIndex + rightIndex) / 2);
        let midVal = arr[midIndex];
        let nextVal = arr[midIndex + 1];

        // middle value is less than x, check right
        if (midVal < x) {
            leftIndex = midIndex + 1;
        }
        // middle value is greater than x, check left
        else if (midVal > x) {
            rightIndex = midIndex - 1;
        }
        // middle value is x, but next value is also x, so it's not the last instance. check right for higher next value indicating last instance x (next value could not be lower because array is sorted)
        else if (midVal === x && nextVal === x) {
            leftIndex = midIndex + 1;
        }
        // middle value is x and nextVal is higher than x, indicating last instance
        else {
            return midIndex;
        }
    }
    // x is not in array
    return -1
}

// module.exports = sortedFrequency