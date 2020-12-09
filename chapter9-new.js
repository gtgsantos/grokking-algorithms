Map.prototype.getAt = function (...positions) {
    var result = undefined
    if (this != undefined) {
        if (positions.length > 0) {
            var itemArray = this.get(positions.shift())

            if (itemArray != undefined) {
                if (positions.length == 1) {                    
                    result = itemArray.get(positions.shift())
                } else {
                    result = itemArray.getAt.apply(itemArray, positions)
                }
            }
        } else {
            result = this
        }
    }
    return result

}


createEquipmentsArray = () => {
    var equipments = new Map()
    equipments.set(0, {
        name: "guitar",
        weight: 1,
        price: 1500,
        link: undefined
    })

    equipments.set(2, {
        name: "laptop",
        weight: 3,
        price: 2000,
        link: undefined
    })

    equipments.set(1, {
        name: "stereo",
        weight: 4,
        price: 3000,
        link: undefined
    })

    return equipments
}

calculateTotalPrice = (equipmentSelected) => {
    var equipmentReference = equipmentSelected
    var totalPrice = 0
    console.log(equipmentReference)
    if (equipmentReference != undefined) {
        totalPrice = equipmentReference.price

        while (equipmentReference.link != null) {
            equipmentReference = equipmentReference.link
            totalPrice += equipmentReference.price
        }
    }
    return totalPrice
}


mapObjectsByWeightAndValue = (equipments, weight) => {

    var returnObject = undefined
    for (let i = 0; i < equipments.size; i++) {
        var equipment = equipments.get(i);

        if (equipment.weight <= weight) {

            if (returnObject == undefined
                || equipment.price > returnObject.price) {
                returnObject = equipment
            }
        }
    }

    return returnObject
}

checkForLinks = (mappedObjects, returnedObject, limitWeight) => {
   
    var mapLevel = mappedObjects.size
    var remainingWeight = limitWeight - returnedObject.weight
    console.log('>>>>>>>> ', remainingWeight, ' - ', mapLevel)
    if (remainingWeight > 0 && mapLevel > 0) { 
            console.log('><><><> ', mappedObjects)       
        // returnedObject.link = mappedObjects.getAt(remainingWeight, mapLevel)
        returnedObject.link = mappedObjects.getAt((mapLevel - 1), remainingWeight)
    }
    return returnedObject
}

returnEquipmentAsString = (equipmentObject) => {
    var linkString = undefined
    if (equipmentObject.link != undefined) {
        linkString = returnEquipmentAsString(equipmentObject.link)
    }

    return ''.concat('[name: ', equipmentObject.name,
        ' - weight: ', equipmentObject.weight,
        ' - price: ', equipmentObject.price,
        ' - link: ', linkString, ']')
}

returnEquipmentListAsString = (equipmentList) => {
    let returnString = ''
    equipmentList.forEach(element => {
        returnString += this.returnEquipmentAsString(element)
    });
    return returnString
}


module.exports = {
    returnEquipmentListAsString, returnEquipmentAsString,
    checkForLinks, mapObjectsByWeightAndValue,
    calculateTotalPrice, createEquipmentsArray
} 