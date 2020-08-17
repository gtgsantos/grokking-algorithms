// exercises

//2.1 - list

//2.2 - list

//2.3 - array

//2.4 i'll have to reallocate a new array with the new position within, and sort all data 

//2.5 faster


import { createArray, timecheck } from './util'
import {defaultSort, selectionSort, quickSort} from './sort-algorithms'



function main(arraySize) {
    var arrayData = createArray(arraySize);
  
     timecheck(true)
     console.log('------')
     console.log('default js sort')
     var defaultSortedArray= defaultSort([...arrayData]);
     timecheck(false)
    
     timecheck(true)
     console.log('------')
     console.log('selection sort')
     var selectionSortedArray = selectionSort([...arrayData]);    
     timecheck(false)

    timecheck(true)
    console.log('------')
     console.log('quickSort sort')
    var quickSortArray = quickSort([...arrayData])
    timecheck(false)

}



main(8000)
