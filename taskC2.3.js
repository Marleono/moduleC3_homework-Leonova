function nums(a) {
    return function(b) {
        return a + b
    }
};

const sum1 = nums(2);

const sum2 = sum1(3)

console.log(sum2); 