function findRotationCount(arr) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    // rule out no rotations, return 0 if true
    if (checkAscending(arr)) {
        return 0;
    }

    while (leftIndex <= rightIndex) {
        // looking for midvalue to be less than previous value, indicates lowest value&start of rotation
        let midIndex = Math.floor((leftIndex + rightIndex) / 2);
        let midVal = arr[midIndex];
        let prevVal = arr[midIndex - 1]
        let rightVal = arr[rightIndex];

        // middle value is greater than the value prior and less than the right end value--check left
        if (midVal > prevVal && midVal < rightVal) {
            rightIndex = midIndex-1;
        }

        //middle value is greater than value prior and less than the right end value--check right
        else if (midVal > prevVal && midVal > rightVal){
            leftIndex = midIndex +1;
        }
        
        // middle value is less than value prior indicating lowest-- the position of the middle index is equal to the number of rotations
        else {
            return midIndex;
        }
    }
}

// checks sorted array to see if first value is less than last value, indicating ascending order with no rotations
function checkAscending(arr){
    let leftVal = arr[0];
    let rightVal = arr[arr.length-1];

    if (rightVal > leftVal){
        return true;
    }
    return false;
}

// module.exports = findRotationCount