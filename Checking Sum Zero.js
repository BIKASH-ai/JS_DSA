// [-5,-4,-3,-2,0,2,4,6,8]

function checkingSumZero(array) {
    for (let number of array) {
        for (let j=1; j<array.length; j++) {
            if (number + array[j] === 0) {
                return [number , array[j]];
            }
        }
    }
}
const result = checkingSumZero ([-5,-4,-3,-2,0,2,4,6,8]);
console.log (result);

// o(n^2) quadratic time complexity