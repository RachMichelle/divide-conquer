function countZeroes(arr) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    if (arr[rightIndex] === 1) {
        return 0
    }

    if (arr[leftIndex] === 0){
        return arr.length;
    }

    while (leftIndex <= rightIndex) {
        let midIndex = Math.floor((leftIndex + rightIndex) / 2);
        let midVal = arr[midIndex];
        let prevVal = arr[midIndex - 1];

        if (midVal === 1) {
            leftIndex = midIndex;
        }
        else if (midVal === 0 && prevVal === 0) {
            rightIndex = midIndex;
        }
        else {
            return arr.length - midIndex;
        }
    }
}


// module.exports = countZeroes()