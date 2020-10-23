//import {reverseDefaultSort} from './sort-algorithms'

function selectPositionBestFit(equipments, limitWeight, equipmentIndex, mappedEquipments) {

    for (let index = equipments.length - 1; index >= 0; index--) {

        var equipmentSelected
        var positionEquipmentSelected
        if (equipments[index].weight <= limitWeight) {

            if ((equipmentSelected === undefined)
                || (equipmentSelected != undefined
                    && (equipments[index].weight > equipmentSelected.weight))) {

                    // if (equipmentSelected.weight < limitWeight && )
                    
                equipmentSelected = equipments[index]
                positionEquipmentSelected = index
            }


        }

    }
    mappedEquipments[equipmentIndex, limitWeight] = equipmentSelected

    return positionEquipmentSelected
}

function createEquipmentsArray() {
    var equipments = []
    equipments[0] = {
        name: "guitar",
        weight: 1,
        price: 1500,
        link: undefined
    }

    equipments[2] = {
        name: "laptop",
        weight: 3,
        price: 2000,
        link: undefined
    }

    equipments[1] = {
        name: "stereo",
        weight: 4,
        price: 3000,
        link: undefined
    }
    return equipments
}

function main() {

    var equipments = createEquipmentsArray()

    var returnMap = createMapForWeights(equipments)

    printmap(returnMap)
}

function createMapForWeights(equipments) {
    let mapStuff = [[]]

    // let equipmentsLength = equipments.length     
    // for (let index = 1; index <= equipmentsLength; index++) {        
    const weightLimit = 4;
    const equipmentsQty = equipments.length

    for (let equipmentIndex = 1; equipmentIndex <= equipmentsQty; equipmentIndex++) {
        var subGroupEquipments = equipments.slice(0, equipmentIndex)
        for (let weightIndex = 1; weightIndex <= weightLimit; weightIndex++) {           

            var positionBestFitForWeight = selectPositionBestFit(subGroupEquipments, weightIndex, equipmentIndex, mapStuff)
            var bestFitForWeight = equipments[positionBestFitForWeight]
          //  console.log('index: ', weightIndex, ' - bestFit: ', bestFitForWeight)


            //only add this block of code if you want to remove object after select it

            // if (positionBestFitForWeight === 0) {                
            //     equipments.shift()  
            // } else if (positionBestFitForWeight === equipments.length) {        
            //     equipments.pop()
            // } else {       
            //     equipments.splice(positionBestFitForWeight, 1)
            // }
            //mapStuff.set(weightIndex, bestFitForWeight)
            //console.log('equip: ', equipmentIndex, ' - weight: ', weightIndex, ' - best: ', bestFitForWeight)


            // mapStuff[equipmentIndex, weightIndex] = bestFitForWeight

        }
    }
    
    return mapStuff
}

function printmap(mapToPrint) {
    mapToPrint.forEach(element => {
        console.log(element)
    });
}

main()
