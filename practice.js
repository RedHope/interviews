'use strict';

// fizzBuzz();

function timeOut() {
    const array = [10, 12, 15, 21];

    for (var i = 0; i < array.length; i++) {
        (function(index, value) {
            setTimeout(function() {
                console.log('Index : ' + index + ', value: ' + value);
            }, 3000);
        })(i, array[i]);
    }
}

function filter(args, comparator) {
    var result = [];
    if (!Array.isArray(args)) {
        throw new Error(`${args} is not an array`);
    }

    args.forEach(function(element) {
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
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log('fizzbuzz', i);
        } else if (i % 5 === 0) {
            console.log('buzz', i);
        } else if (i % 3 === 0) {
            console.log('fizz', i);
        }
    }
}

function intervaledCall(f) {
    return (func => {
        setInterval(() => {
            func.call({});
        }, 50);
    })(f);
}

function dummy() {
    console.log('called');
}

// intervaledCall(dummy);

function flattenArray(arr) {
    if (!Array.isArray(arr)) {
        throw new Error(`${arr} is not an array`);
    }

    let clone = arr.slice(0);
    let flatList = [];

    while (clone.length > 0) {
        let item = clone.shift();

        if (Array.isArray(item)) {
            clone = item.concat(clone);
        } else {
            flatList.push(item);
        }
    }

    return flatList;
}

// console.log(flattenArray([1, 2, 3, [[4]], [[[5]]], [6], [[7]]]));

/**
 * Lets say you have two strings: 'the' and 'The cop has a  nice little hat.'
 * Write a function that will check each character from first string and count the same in the second string.
 * Return the total count.
 * For example, character 't' occurred 3 times (case sensitive), character 'h' occurred 3 times and character 'e' occurred 3 times in the second string.
 * Total count = 9.
 */

function findCount(s, s1) {
    s = s.split('');
    s1 = s1.split('');
    let resultsCount = 0;
    for (let i = 0; i <= s1.length; i++) {
        if (s.includes(s1[i])) {
            resultsCount++;
        }
    }

    return resultsCount;
}
// console.log(findCount('the', 'The cop has a  nice little hat.'));

/** 1st 25 fibonnacci numbers */

function printFibonacci(n) {
    const result = [0, 1];
    for (let i = 1, j = 0; i < n; i++) {
        result.push(result[j] + result[i]);
        j++;
    }
    return result;
}
// console.log(printFibonacci(25));

/**
 * function that returns a map of the totaled  occurrences of elements within an array.
 */
function totalOccurrences(arr) {
    return arr.reduce((acc, curr) => {
        if (acc[curr]) {
            acc[curr] = acc[curr] + 1;
        } else {
            acc[curr] = 1;
        }
        return acc;
    }, {});
}
// console.log(totalOccurrences([1, 2, 3, 4, 2, 34, 1, 54 ,3, 4, 5, 3, 23, 4, 6]))
/**
 * Write a function that takes a number as input and outputs the biggest number with the same set of digits.
 * @param {Array} arr 
 */
function arrangeNumbers(arr) {
    const arr1 = arr.sort().reverse();
    return arr1.join('');
}

/**
 * Write a function that takes a number as input and outputs the biggest number with the same set of digits, input is a string
 * @param {String} string 
 */
function stringArrangeNumbers(string) {
    const arr1 = string.split('').sort().reverse();
    return arr1.join('');
}
// console.log(stringArrangeNumbers('62832'))
// console.log(arrangeNumbers([3, 6, 1, 3, 6, 7]));

/**
 * get the next greater number with the same set of digits
 * @param {String} string 
 */
function findNextGreater(string) {
    const arr1 = string.split('');
    let swapNumber = '';
    let swapPosition;
    for(var i = arr1.length -1; i >0; i--) {
        if (arr1[i] > arr1[i-1]) {
            swapNumber =  arr1[i- 1];
            swapPosition = i-1;
            break;
        }
    }
    for(var i = arr1.length -1; i >0; i--) {
        if (swapNumber < arr1[i]) {
            arr1[swapPosition] = arr1[i];
            arr1[i] = swapNumber;
            break;
        }
    }

    const slice = arr1.slice(swapPosition +1).sort();
    return arr1.slice(0, swapPosition +1).concat(slice).join('');
}
// console.log(findNextGreater('423862'));

/**
 * Find an element in a sorted and rotated array.
 */
function findElement(arr, el) {
    let position = -1;
    let sliced;
    if(el > arr[(arr.length -1)/2]) {
        sliced = arr.slice((arr.length -1)/2)
    }
}
