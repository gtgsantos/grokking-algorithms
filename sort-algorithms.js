function defaultSort(numberArray) {
    return numberArray.sort((a, b) => a - b)
}

function reverseDefaultSort(numberArray) {
    return numberArray.sort((a, b) => b - a)
}


function findSmallest(numberArray) {
    var smallestPosition = 0
    var smallestValue = numberArray[smallestPosition];
    
    numberArray.forEach((element, index) => {
        if (element < smallestValue) {
            smallestValue = element;            
            smallestPosition = index;
        }
    });
    return smallestPosition;
}


function selectionSort(numberArray) {
    var length = numberArray.length
    var newArray = numberArray
    var returnArray = [];
    
    for(var i = 0; i < length; i++) {
        var position = findSmallest(newArray);        
        var valor = newArray.pop(position)        
        returnArray.push(valor);
    }
    return returnArray;
}


function quickSort(numberArray) {
    if (numberArray.length > 2) {
        var pivot = numberArray.pop(0)
        var leftArray = []
        var rightArray = []
        numberArray.forEach(element => {
            if (element > pivot) {
                rightArray.push(element)
            } else if (element < pivot) {
                leftArray.push(element)
            }
        });
        var ret = quickSort(leftArray)
        ret.push(pivot);
        ret = ret.concat(quickSort(rightArray))        
        return ret
        
    } else {        
        return numberArray
    }
}



export {defaultSort, reverseDefaultSort, selectionSort, quickSort}

