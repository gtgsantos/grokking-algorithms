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
        var indexEquipment = equipments[index]
        if (indexEquipment.weight <= yIndex) {

            var lastMaxEquipment = undefined
            if (xIndex > 0) {

                lastMaxEquipment = mappedEquipments[(xIndex - 1), yIndex]
                // console.log('lastMaxEquipment: ', lastMaxEquipment)
            }
            console.log('xIndex: ', xIndex)
            if (indexEquipment.weight < yIndex) {
                var remainingWeight = yIndex - indexEquipment.weight
                var equipmentWithSameRemainingWeight = mappedEquipments[(xIndex - 1), remainingWeight]

                if (xIndex === 0) { // quer dizer que é a primeira linha    
                    console.log("!!!!")                
                    if (mappedEquipments[xIndex, yIndex] == undefined) {
                        mappedEquipments[xIndex, yIndex] = equipmentSelected
                    } else if (indexEquipment.weight > mappedEquipments[xIndex, yIndex].weight)
                        mappedEquipments[xIndex, yIndex] = equipmentSelected
                }

            } else {
                var totalPrice = calculateTotalPrice(equipmentWithSameRemainingWeight)

                var lastMaxPrice = 0
                if (lastMaxEquipment != undefined) {
                    lastMaxPrice = calculateTotalPrice(lastMaxEquipment)
                }
                // console.log('lastMaxEquipment: ', lastMaxEquipment, "- totalPrice: ", totalPrice)
                //    console.log('last: ', lastMaxEquipment, ' - total: ', totalPrice)
                if (lastMaxEquipment < totalPrice) {
                    var equipmentSelected = equipments[index].link = equipmentWithSameRemainingWeight
                    mappedEquipments[xIndex, yIndex] = equipmentSelected
                }
            }



        }
    }
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
            mapStuff = selectPositionBestFit(subGroupEquipments, weightIndex, equipmentIndex, mapStuff)
            //var bestFitForWeight = equipments[positionBestFitForWeight]
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
