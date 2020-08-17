//exercises

//4.1
function sum(numberArray) {
    return (numberArray.length === 0 ? 0 : (numberArray.pop(0) + sum(numberArray)))
}


//mainSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15])

//4.2

function counter(numberArray) {
    return numberArray.pop() === undefined ? 0 : (1 + counter(numberArray))
}


//4.3

function biggestNumber(numberArray, returnNumber) {
    var numberIteration = numberArray.pop()
    if (numberIteration === undefined) {        
        return returnNumber
    } else if (numberIteration > returnNumber) {        
        return biggestNumber(numberArray, numberIteration)
    } else {        
        return biggestNumber(numberArray, returnNumber)
    }
}

//4.4

// check chapter1.js, method binarySearchRecursive


    function main(numberArray) {
        // console.log(sum(numberArray))
        // console.log(counter(numberArray))
        console.log(biggestNumber(numberArray, 0))
    }


    main([999999, 1, 2, 3, 10, 20, 2222, 30, 21])


//4.5 - O(n)

//4.6 - O(n)

//4.7 - O(1)

//4.8 - O(n^2)