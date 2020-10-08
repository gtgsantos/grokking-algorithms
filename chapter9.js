//import {reverseDefaultSort} from './sort-algorithms'

function selectPositionBestFit(equipments, limitWeight) {
        
    for (let index = equipments.length -1 ; index >= 0; index--) {
                
        var  equipmentSelected
        var  positionEquipmentSelected
        if (equipments[index].weight <= limitWeight) {
            
            if ((equipmentSelected === undefined) 
            || (equipmentSelected != undefined 
                && (equipments[index].weight > equipmentSelected.weight))) {                
                equipmentSelected = equipments[index]        
                positionEquipmentSelected = index
            }
            
     
        } 
        
    }
    
    return positionEquipmentSelected
}

function createEquipmentsArray() {
    var equipments = []
    equipments[0] = {
        name: "guitar",
        weight: 1,
        price: 1500
    }

    equipments[2] = {
        name: "laptop",
        weight: 3,        
       price: 2000
    }

    equipments[1] = {
        name: "stereo",
        weight: 4,        
        price: 3000
    }
    return equipments 
}

function main ()  {
     
    var equipments = createEquipmentsArray()
    
    var returnMap = createMapForWeights(equipments)

    printmap(returnMap)
}

function createMapForWeights(equipments) {
    var mapStuff = new Map()
    
    let equipmentsLength = equipments.length 
    for (let index = 1; index <= equipmentsLength; index++) {        
                
        var positionBestFitForWeight = selectPositionBestFit(equipments, index)        
        var bestFitForWeight = equipments[positionBestFitForWeight]        
        console.log('index: ', index, ' - bestFit: ' , bestFitForWeight)
        

        //only add this block of code if you want to remove object after select it
        
        // if (positionBestFitForWeight === 0) {                
        //     equipments.shift()  
        // } else if (positionBestFitForWeight === equipments.length) {        
        //     equipments.pop()
        // } else {       
        //     equipments.splice(positionBestFitForWeight, 1)
        // }
        mapStuff.set(index, bestFitForWeight)       
    }
    return mapStuff
}

    function printmap(mapToPrint)  {        
        mapToPrint.forEach(element => {
            console.log(element)
        });
    }

main()
