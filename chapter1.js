import {sleep, timecheck, createArray, pickRandomNumber}   from './util'
import {defaultSort} from './sort-algorithms'

//exercises

//1.1 : log2 7
//1.2 : log2 8

//1.3: O(log2 n)
//1.4  O(n)
//1.5  O(n)
//1.6  O(n)


function main(arraySize) {
    var arrayData = createArray(arraySize);

    var sortedArray = defaultSort(arrayData);

    var randomNumberFromArray = pickRandomNumber(sortedArray);


    timecheck(true)
    binarySearch(randomNumberFromArray, sortedArray)
    timecheck(false)

    timecheck(true)
    binarySearchRecursiveStart(randomNumberFromArray, sortedArray)
    timecheck(false)

    timecheck(true)
    linearSearch(randomNumberFromArray, sortedArray)
    timecheck(false)


}

  function binarySearch(target, numberArray) {
    var lowPosition = 0
    var topPosition = numberArray.length - 1
    var midValue;
    var jumps = 0;
    while (lowPosition <= topPosition) {
        sleep(1);
        jumps++;
        var midBase = topPosition - lowPosition
        var midPosition = ((midBase % 2) === 0 ? midBase / 2 : (midBase - 1) / 2) + lowPosition
        midValue = numberArray[midPosition]
        if (target < midValue) {
            topPosition = midPosition
        } else if (target > midValue) {
            lowPosition = midPosition
        } else {
            console.log('----------------')
            console.log('- binary search -')            
            break;
        }

    }
}

function binarySearchRecursiveStart(target, numberArray) {
    var lowPosition = 0
    var topPosition = numberArray.length - 1

    var position =  binarySearchRecursive(lowPosition, topPosition, numberArray, target)
    console.log('----------------')
    console.log('- recursive binary search -')
    
}

function binarySearchRecursive(lowPosition, topPosition, numberArray, target) {    
    sleep(1);        
    var midBase = topPosition - lowPosition
    var midPosition = ((midBase % 2) === 0 ? midBase / 2 : (midBase - 1) / 2) + lowPosition
    var midValue = numberArray[midPosition]

    if (target < midValue) {
        binarySearchRecursive(lowPosition, midPosition, numberArray, target)            
    } else if (target > midValue) {
        binarySearchRecursive(midPosition, topPosition, numberArray, target)            
    } else {        
        return midPosition
    }   
}


 function linearSearch(target, numberArray) {
    for (var i = 0; i < numberArray.length; i++) {
        sleep(1)
        if (numberArray[i] === target) {
            console.log('----------------')
            console.log('- linear search -')
            break;
        }

    }
}

main(128000)
