function sum2(a) {
    return (b) => {
        if (typeof b !== 'undefined') {
            a = a + b;
            return sum2(a);
        }
        return a;
    }
}

// Some tests
console.log(sum2(1)());
console.log(sum2(1)(2)());
console.log(sum2(1)(2)(4)());
console.log(sum2(1)(2)(4));
console.log(sum2(0)(-1.1)());
console.log(sum2(0)('1')());
console.log(sum2(null)('tests')(1)());
console.log(sum2(null)(true)());
console.log(sum2(true)(true)());
console.log(sum2(true)(1)());

//--

function sum(a) {
    return function innerSum(b) {
        if (typeof b !== 'undefined') {
            a = a + b;
            return innerSum;
        }
        return a;
    }
}

// Some tests
console.log(sum(1)());
console.log(sum(1)(2)());
console.log(sum(1)(2)(4)());
console.log(sum(1)(2)(4));
console.log(sum(0)(-1.1)());
console.log(sum(0)('1')());
console.log(sum(null)('tests')(1)());
console.log(sum(null)(true)());
console.log(sum(true)(true)());
console.log(sum(true)(1)());


