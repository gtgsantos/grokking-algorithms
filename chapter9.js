//import {reverseDefaultSort} from './sort-algorithms'

function selectPositionBestFit(equipments, limitWeight) {
        
    for (let index = equipments.length -1 ; index >= 0; index--) {
        
        //const element = array[index];
        var  equipmentSelected
        var  positionEquipmentSelected
        if (//(equipments[index].weight === limitWeight) || 
         (equipments[index].weight <= limitWeight)) {
            
            if ((equipmentSelected === undefined) 
            || (equipmentSelected != undefined 
                && (equipments[index].weight > equipmentSelected.weight))) {                
                equipmentSelected = equipments[index]
            //    console.log('index: ', index, ' - limitWeight: ', limitWeight, ' - equipmentSelected: ', equipmentSelected)
                positionEquipmentSelected = index
            }
            
     //       console.log('equipmentSelected: ', equipmentSelected)
            //break
        } 
        
    }
    //console.log('---------------------- selected: ', equipmentSelected)
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
        // weight: 3,
        weight: 3,
       price: 2000
    }

    equipments[1] = {
        name: "stereo",
        // weight: 4,
        weight: 3,
        price: 3000
    }
    return equipments 
}

function main ()  {
     
    var equipments = createEquipmentsArray()
    
    
     var returnMap = createMapForWeights(equipments)

    printmap(returnMap)
    

    //console.log('1: ', selectPositionBestFit(equipments, 3))
    //console.log('2: ', selectPositionBestFit(equipments, 5))
}

function createMapForWeights(equipments) {
    var mapStuff = new Map()
    
    let equipmentsLength = equipments.length 
    for (let index = 1; index <= equipmentsLength; index++) {        
                
        var positionBestFitForWeight = selectPositionBestFit(equipments, index)
        var bestFitForWeight = equipments[positionBestFitForWeight]        
        
        if (positionBestFitForWeight === 0) {                
            equipments.shift()  
        } else if (positionBestFitForWeight === equipments.length) {        
            equipments.pop()
        } else {       
            equipments.splice(positionBestFitForWeight, 1)
        }
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
