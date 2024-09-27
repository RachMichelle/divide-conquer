function findRotatedIndex(arr, x) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;


    while (leftIndex <= rightIndex) {
        let midIndex = Math.floor((leftIndex + rightIndex) / 2);
        let midVal = arr[midIndex];
        let leftVal = arr[leftIndex];
        let rightVal = arr[rightIndex];

        // array rotated, left num greather than right
        if (leftVal >= rightVal){
            // middle value too large, and x is less than the beginning of the array--need to look at right side for smaller numbers due to rotation
            if (midVal > x && x < leftVal){
                leftIndex = midIndex +1;
            }
            // middle value too large, but x is larger than the beginning of the array, which means all numbers on right will be too small. Look left. 
            else if (midVal > x && x >= leftVal){
                rightIndex = midIndex -1;
            }
             // middle value too small, but x is less than the end of the array, which means all numbers on left will be too large. Look right.
             else if (midVal < x && x <= rightVal){
                leftIndex = midIndex +1;
            }
            // middle value too small and x is greater than the last number in the array--need to look at left side for larger numbers due to rotation
            else if (midVal < x && x > rightVal){
                rightIndex = midIndex -1;
            }
            else {
                return midIndex;
            }
        }
        // array has reduced in a way that it is going in regular ascending order
        else if (leftVal <= rightVal){
            // middle value is too large, need to look at left side
            if (midVal > x){
                rightIndex = midIndex -1;
            }
            // middle value is too small, need to look at right side
            else if (midVal < x){
                leftIndex = midIndex +1;
            }
            else {
                return midIndex;
            }
        }
    }
    return -1;
}

// module.exports = findRotatedIndex{}
