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


function createArray(numParam) {
    var maxNum = 1000000000;
    var minNum = 1;
    return createArrayComplete(numParam, maxNum, minNum)
}

function createArrayComplete(numParam, maxNum, minNum) {


    var numberArray = [];

    for (var i = 0; i < numParam; i++) {
        numberArray.push(Math.floor(Math.random() * (maxNum - minNum)) + minNum)
    }

    return numberArray;
}

function pickRandomNumber(numberArray) {
    var pickPosition = Math.floor(Math.random() * (numberArray.length - 0)) + 0

    return numberArray[pickPosition];
}

function convertNumberToCharacter(num) {
    return String.fromCharCode(num + 65)
}

export  {sleep, timecheck, createArray, createArrayComplete, pickRandomNumber, convertNumberToCharacter};