let fn1 = () => new Promise(resolve => {
    console.log('fn1');
    setTimeout(() => resolve(2), 1500)
});

let fn2 = () => new Promise(resolve => {
    console.log('fn2');
    setTimeout(() => resolve(3), 500)
});

let fn3 = () => new Promise(resolve => {
    console.log('fn3');
    setTimeout(() => resolve(4), 200)
});

function promiseReduce(asyncFunctions, reduce, initialValue) {
    return asyncFunctions.reduce(
        (memo, value) => {
            return memo
                .then(previous => Promise.all([previous, value()]))
                .then(([previous, current]) => reduce(previous, current))
        },
        Promise.resolve(initialValue)
    )
}

// some tests
promiseReduce(
    [fn1, fn2, fn3],
    function (memo, value) {
        console.log('myReduce', memo, value);
        return memo * value
    },
    5
)
    .then(console.log);