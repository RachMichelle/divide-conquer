function findFloor(arr, x) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    // x is lower than the lowest value in the array, floor does not exist
    if (arr[leftIndex] > x) {
        return -1;
    }

    // x is higher than the highest value in array, floor will be last value in array
    if (arr[rightIndex] < x) {
        return arr[rightIndex];
    }

    while (leftIndex <= rightIndex) {
        let midIndex = Math.floor((leftIndex + rightIndex) / 2);
        let midVal = arr[midIndex];
        let prevVal = arr[midIndex - 1];
        // let nextVal = arr[midIndex + 1]

        // the previous value is greater than or equal to x, need lower value. check left.
        // not checking to see if middle value is x--x may be duplicate in array, so the middle value being >= x does not mean the previous value is the floor.
        if (prevVal >= x) {
            rightIndex = midIndex-1;
        }
        // the middle value is less than x, need higher value. check right.
        else if (midVal < x) {
            leftIndex = midIndex+1;
        }
        // the middle value is equal to x, but the previous value is not less than x (duplicate value). check further left
        else if (midVal === x && prevVal >= x){
            rightIndex = midIndex+1;
        }
        // midvalue is x or the next highest value from x and previos value is lower (not duplicate), previous value is floor
        else {
            return prevVal;
        }
  }
}

// module.exports = findFloor