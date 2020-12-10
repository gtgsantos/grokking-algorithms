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

Object.prototype.clone = function (obj) {
    
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
    
}

createEquipmentsArray = () => {
    var equipments = new Map()
    equipments.set(0, { name: "guitar", weight: 1, price: 1500, link: undefined})
    equipments.set(2, {name: "laptop", weight: 3, price: 2000, link: undefined})
    equipments.set(1, {name: "stereo", weight: 4, price: 3000, link: undefined})
    return equipments
}

calculateTotalPrice = (equipmentSelected) => {
    var equipmentReference = equipmentSelected
    var totalPrice = 0    
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
    if (mapLevel > 0) {
        var remainingWeight = limitWeight - returnedObject.weight
        
        if (remainingWeight > 0) {                     
            returnedObject.link = mappedObjects.getAt(mapLevel, remainingWeight)

            
        }
    }
    
    return returnedObject
}

processSubgroupEquipmentsMap = (mappedObjects, subGropupOfEquipments, maxWeight) => {
    var equipmentMap = new Map()

    for (let actualWeight = 1; actualWeight <= maxWeight; actualWeight++) {
        var equipment =  mapObjectsByWeightAndValue(subGropupOfEquipments, actualWeight)        
        
        equipment = checkForLinks(mappedObjects, equipment, actualWeight)
        
        equipmentMap.set(actualWeight, Object.prototype.clone(equipment))
    }

    return equipmentMap
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
        returnString += returnEquipmentAsString(element)
    });
    return returnString
}


module.exports = {
    returnEquipmentListAsString, returnEquipmentAsString,
    checkForLinks, mapObjectsByWeightAndValue,
    calculateTotalPrice, createEquipmentsArray,
    processSubgroupEquipmentsMap
} 