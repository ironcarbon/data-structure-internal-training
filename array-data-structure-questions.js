// 1. Sum without highest and lowest number

function sumExceptHighestLowest(arr) {
    if (arr == null) {
        return 0;
    } else if (arr.length < 2) {
        return 0;
    } else {
        let sorted = arr.sort((a, b) => a - b);
        let newSorted = sorted.slice(1, -1);
        let sum = 0;
        for (let el of newSorted) {
            sum += el;
        }
        return sum;
    }
}

sumExceptHighestLowest([3, 8, 16, 5])

  // 2.