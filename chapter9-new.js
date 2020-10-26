//import {reverseDefaultSort} from './sort-algorithms'
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
var calculateTotalPrice = (equipmentSelected) => {
    var totalPrice = 0
    if (equipmentSelected != undefined) {
        totalPrice = equipmentSelected.price
        
        if (equipmentSelected.link != undefined) {
            totalPrice += calculateTotalPrice(equipmentSelected.link)
        }
        //lastMaxEquipment.price    
    }
    return totalPrice
}

function selectPositionBestFit(equipments, yIndex, xIndex, mappedEquipments) {
    
    for (let index = 0; index < equipments.length; index++) {

        var equipmentSelected
        var positionEquipmentSelected
        if (equipments[index].weight <= yIndex) {

            if ((equipmentSelected === undefined)
                || (equipmentSelected != undefined
                    && (equipments[index].weight > equipmentSelected.weight))) {

                        if (xIndex > 0) {
                            var lastMaxEquipment = mappedEquipments[(xIndex-1), yIndex]
                            

                            if (equipments[index].weight < yIndex) {
                                var remainingWeight = yIndex - equipments[index].weight
                                var equipmentWithSameRemainingWeight = mappedEquipments[(xIndex-1), remainingWeight]

                                var totalPrice = calculateTotalPrice(equipmentWithSameRemainingWeight)

                                var lastMaxPrice = 0
                                if (lastMaxEquipment != undefined) {
                                    lastMaxPrice = calculateTotalPrice(lastMaxEquipment)
                                }

                                //  if (equipmentWithSameRemainingWeight != undefined) {
                                //     totalPrice +=
                                // }
                               // console.log('lastMaxPrice: ',  lastMaxPrice, "  - totalprice: ", totalPrice )
                                if (lastMaxEquipment < totalPrice) {                                                                        
                                     equipmentSelected = equipments[index].link = equipmentWithSameRemainingWeight
                                }
                                
                            }
                            // if (lastMaxEquipment != undefined && calculateTotalPrice(lastMaxEquipment) < equipments[index].price) {

                            // }
                        }

                    // if (equipmentSelected.weight < limitWeight) && equipmentSelected.selec > ) {

                    // }
                    
                // equipmentSelected = equipments[index]
                // positionEquipmentSelected = index
            }
            
            // mappedEquipments[xIndex, yIndex] = equipmentSelected
        }

    }
    mappedEquipments[xIndex, yIndex] = equipmentSelected       
    // console.log('equipSelec: ', equipmentSelected)

    return mappedEquipments
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
    for (var x = 0; x < mapToPrint.length; x++) {
        var xDimensionObject = mapToPrint[x]
        if (xDimensionObject != undefined) {
            if (xDimensionObject.length > 1) {
                for (var y = 0; y < xDimensionObject.length; y++) {
                    console.log('@@: ', xDimensionObject[y])
                }
    
            } else {
    
                console.log(xDimensionObject) 
            }
        }

    }
    
    // mapToPrint.forEach(element => {
    //     console.log(element)
    // });
}

main()
