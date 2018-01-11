'use strict';

// fizzBuzz();

function timeOut() {
    const array = [10, 12, 15, 21];

    for (var i = 0; i < array.length; i++) {

        (function (index, value) {
            setTimeout(function () {
                console.log('Index : ' + index + ', value: ' + value);
            }, 3000);
        }(i, array[i]));
    }
}

function filter(args, comparator) {
    var result = [];
    if (!Array.isArray(args)) { throw new Error(`${args} is not an array`)};

    args.forEach(function (element) {
        var comparatorResult = comparator.call(this, [element]);

        if (comparatorResult === true) {
            result.push(element);
        }
    }, this);

    return result;
}

function reduce(args, executor, initialValue) {
    var result = initialValue;

    for (var i = 0; i < args.length; i++) {
        result = executor.call(this, result, args[i]);
    }

    return result;
}

function reverse(string) {
    var result = '';

    for (var i = string.length; i > 0; i--) {
        result += string[i - 1];
    }

    return result;
}

function indexOf(array, element) {
    var result = -1;

    for (var i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return i;
        }
    }

    return result;
}

function fizzBuzz() {
    for (let i=1; i<=100; i++) {
        if (i%15 === 0) {
            console.log('fizzbuzz', i);
        } else if(i%5 === 0) {
            console.log('buzz', i);
        } else if(i%3 === 0) {
            console.log('fizz', i);
        }
    }
}

function intervaledCall(f) {
    return ((func) => {
        setInterval(() => {
            func.call({})
        }, 50)
    })(f);
}

function dummy() {
    console.log('called');
}

// intervaledCall(dummy);

function flattenArray(arr) {
    if (!Array.isArray(arr)) { throw new Error(`${arr} is not an array`)};

    let clone = arr.slice(0);
    let flatList = [];

    while(clone.length > 0) {
        let item = clone.shift();

        if(Array.isArray(item)) {
            clone = item.concat(clone);
        } else {flatList.push(item)}
    }

    return flatList;
}

console.log(flattenArray([1, 2, 3, [[4]], [[[5]]], [6], [[7]]]));