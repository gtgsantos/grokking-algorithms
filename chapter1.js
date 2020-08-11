//exercises

//1.1 : log2 7
//1.2 : log2 8

//1.3: O(log2 n)
//1.4  O(n)
//1.5  O(n)
//1.6  O(n)


main = (arraySize) => {
    var arrayData = createArray(arraySize);
    timecheck(true)
    binarySearch(arrayData.number, arrayData.array)
    timecheck(false)

    timecheck(true)
    linearSearch(arrayData.number, arrayData.array)
    timecheck(false)


}

createArray = (numParam) => {

    var maxNum = 1000000000;
    var minNum = 1;

    var numberArray = [];

    for (i = 0; i < numParam; i++) {
        numberArray.push(Math.floor(Math.random() * (maxNum - minNum)) + minNum)
    }

    numberArray.sort((a, b) => a - b)

    var pickPosition = Math.floor(Math.random() * (numParam - 0)) + 0

    var pick = numberArray[pickPosition]
    return {
        'array': numberArray,
        'number': pick
    }
}

binarySearch = (target, numberArray) => {
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

linearSearch = (target, numberArray) => {
    for (i = 0; i < numberArray.length; i++) {
        sleep(1)
        if (numberArray[i] === target) {
            console.log('----------------')
            console.log('- linear search -')
            break;
        }

    }
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  

var startTime
var endTime
function timecheck(on) {

    if (on) {
        startTime = new Date();
    }


    if (!on) {
        endTime = new Date();
        var timeDiff = endTime - startTime;
        timeDiff /= 1000;

        var seconds = Math.round(timeDiff);
        console.log('found in ', timeDiff, 'ms')
    }
}



main(1000000)

