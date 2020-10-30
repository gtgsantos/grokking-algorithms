//import {reverseDefaultSort} from './sort-algorithms'
function createEquipmentsArray() {
    var equipments = new Map()
    equipments.get(0, {
        name: "guitar",
        weight: 1,
        price: 1500,
        link: undefined
    })

    equipments.get(2, {
        name: "laptop",
        weight: 3,
        price: 2000,
        link: undefined
    })

    equipments.get(1, {
        name: "stereo",
        weight: 4,
        price: 3000,
        link: undefined
    })

    return equipments
}

function main() {

    var equipments = createEquipmentsArray()

    // var returnMap = createMapForWeights(equipments)

    //////////////////////////////////
    var returnMap = new Map()//Array(Array());
    selectPositionBestFit(equipments, 0, 3, returnMap)

    //////////////////////////////////

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

function selectPositionBestFit(equipments, xIndex, weightLimit, mappedEquipments) {
    //  console.log('mappedEquipments', mappedEquipments)

    for (let index = 0; index < equipments.length; index++) {
        var yIndex = weightLimit - 1
        var indexEquipment = equipments.getAt(index)
        // console.log('yindex: ', yIndex)
        //console.log('xindex: ', xIndex, ' - yIndex: ', yIndex, ' - weight: ', weightLimit, ' - index: ', index)
        // console.log('indexEquipment.weight: ', indexEquipment.weight)               
        if (indexEquipment.weight <= weightLimit) {

            if (xIndex === 0) {
                // mapEquipmentsZeroIndex(mappedEquipments, yIndex, indexEquipment)
                if ((mappedEquipments.getAt(xIndex, yIndex) === undefined)
                    || (mappedEquipments(xIndex, yIndex).price < indexEquipment.price)) {
                    mappedEquipments.getAt(xIndex).set(yIndex, indexEquipment)
                }
            } else {
                if ((mappedEquipments.getAt(xIndex, yIndex) === undefined)
                    || (mappedEquipments(xIndex, yIndex).price < indexEquipment.price)) {
                    mappedEquipments.getAt(xIndex).set(yIndex, indexEquipment)
                }

            }
            // console.log('x: ',(mappedEquipments[xIndex][yIndex] === undefined))
            // if (mappedEquipments[xIndex, yIndex] === undefined) {
            //     mappedEquipments[xIndex, yIndex] = indexEquipment
            // }
        }
        // var lastMaxEquipment = undefined

        // if (xIndex > 0) {
        //     lastMaxEquipment = mappedEquipments[(xIndex - 1), (weightLimit - 1)]
        //     //console.log('lastMaxEquipment: ', lastMaxEquipment)
        //     mappedEquipments[xIndex, yIndex] = lastMaxEquipment
        // }

        // if (indexEquipment.weight < weightLimit) {
        //     var remainingWeight = weightLimit - indexEquipment.weight
        //     var equipmentWithSameRemainingWeight = mappedEquipments[(xIndex - 1), remainingWeight]

        //     if (xIndex === 0) {                     
        //         // quer dizer que é a primeira linha
        //         console.log('mappedEquipments[', xIndex, ', ', weightLimit, ']')
        //         if (mappedEquipments[xIndex, weightLimit] == undefined) {
        //             console.log('111')

        //             mappedEquipments[xIndex, weightLimit] = equipmentSelected
        //         } else if (indexEquipment.weight > mappedEquipments[xIndex, weightLimit].weight)
        //         console.log('222')
        //             mappedEquipments[xIndex, weightLimit] = equipmentSelected
        //     }

        // } else {
        //     var totalPrice = calculateTotalPrice(equipmentWithSameRemainingWeight)

        //     var lastMaxPrice = 0
        //     if (lastMaxEquipment != undefined) {
        //         lastMaxPrice = calculateTotalPrice(lastMaxEquipment)
        //     }
        //     // console.log('lastMaxEquipment: ', lastMaxEquipment, "- totalPrice: ", totalPrice)
        //     //    console.log('last: ', lastMaxEquipment, ' - total: ', totalPrice)
        //     if (lastMaxEquipment < totalPrice) {
        //         var equipmentSelected = equipments[index].link = equipmentWithSameRemainingWeight
        //         mappedEquipments[xIndex, weightLimit] = equipmentSelected
        //     }
        // }

    }

    printmap(mappedEquipments)
    return mappedEquipments
}


function mapEquipmentsZeroIndex(mappedEquipments, yIndex, indexEquipment) {
    var xIndex = 0

    if ((mappedEquipments.getAt(xIndex, yIndex) === undefined)
        || (mappedEquipments(xIndex, yIndex).price < indexEquipment.price)) {
        mappedEquipments.getAt(xIndex).set(yIndex, indexEquipment)
    }
}

function createMapForWeights(equipments) {
    let mapStuff = [[]]

    const weightLimit = 4;
    const equipmentsQty = equipments.length

    for (let equipmentIndex = 0; equipmentIndex < equipmentsQty; equipmentIndex++) {
        var subGroupEquipments = equipments.slice(0, equipmentIndex + 1)
        for (let weightIndex = 1; weightIndex <= weightLimit; weightIndex++) {
            //console.log('x: ', equipmentIndex, '- y: ', weightIndex)

            //mapStuff = selectPositionBestFit(subGroupEquipments, equipmentIndex, weightIndex, mapStuff)
        }
    }

    return mapStuff
}

function printmap(mapToPrint) {
    console.log('@@@', mapToPrint.keys())

    if (mapToPrint.keys() != undefined) {
        mapToPrint.keys().forEach(element1 => {
            this.get(element1).forEach(element2 => {
                var objeto = this.get(element2)
                console.log('####: ' + objeto)
            });
        });
    }

    
    // for (var x = 0; x < mapToPrint.length; x++) {
    mapToPrint.getAt(x).keys().forEach(element1 => {
        var xDimensionObject = this.get(element1)

        if (xDimensionObject != undefined) {
            if (xDimensionObject.keys().length > 1) {
                xDimensionObject.keys().forEach(element2 => {
                    console.log('@@: ', xDimensionObject.getAt(element2))
                })
            } else {
                console.log(xDimensionObject)
            }
        }

        // mapToPrint.forEach(element => {
        //     console.log(element)
        // });
    })
}

main()
