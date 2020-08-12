function defaultSort(numberArray) {
    return numberArray.sort((a, b) => a - b)
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



export {defaultSort, selectionSort}

