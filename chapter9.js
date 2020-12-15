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


mapObjectsByWeightAndValue = (mappedObjects, equipments, weight) => {   
    var returnObject = undefined
    for (let i = 0; i < equipments.size; i++) {
        var equipment = Object.prototype.clone(equipments.get(i));

        if (weight == 4) {
            console.log('>>>> ', equipment.name)
        }

        if (equipment.weight <= weight) {            
            
            equipment = checkForLinks(mappedObjects, equipment, weight)        
            if (returnObject == undefined  || (calculateTotalPrice(equipment) > calculateTotalPrice(returnObject))) {                
                returnObject = Object.prototype.clone(equipment)

            }
        }
    }

    return returnObject
}

checkForLinks = (mappedObjects, returnedObject, limitWeight) => {
    var mapLevel = mappedObjects.size    
    if (mapLevel > 0) {
        var remainingWeightPositive = limitWeight > returnedObject.weight
        
        if (remainingWeightPositive) {                     
            var linkObject = Object.prototype.clone(mappedObjects.getAt(mapLevel, (limitWeight - returnedObject.weight)))            
            // if (linkObject.name !== returnedObject.name) {
            if (!checkForSameName(returnedObject, linkObject.name)) {
                returnedObject.link = linkObject       
            }
        }
    }
    
    return returnedObject
}

checkForSameName = (equipment, name) => {
    var isDifferent = false
        
    if (equipment.link !== undefined) {
        isDifferent = isDifferent || checkForSameName(equipment.link, name)
    } else if (equipment.name === name) {
        isDifferent = true
    }

    return isDifferent
}

processSubgroupEquipmentsMap = (mappedObjects, subGroupOfEquipments, maxWeight) => {
    var equipmentMap = new Map()
    
    for (let actualWeight = 1; actualWeight <= maxWeight; actualWeight++) {        
        var equipment =  mapObjectsByWeightAndValue(mappedObjects, subGroupOfEquipments, actualWeight)                
        // equipment = checkForLinks(mappedObjects, equipment, actualWeight)        
        equipmentMap.set(actualWeight, Object.prototype.clone(equipment))
    }
    
    return equipmentMap
}

processEquipmentsMap = (mapOfEquipments, maxWeight) => {
    var totalMap = new Map()

    var subGroupOfEquipments = new Map()

    for (let mapIndex = 0; mapIndex < mapOfEquipments.size; mapIndex++) {                
        subGroupOfEquipments.set(mapIndex, mapOfEquipments.get(mapIndex))
        var subprocessMap = processSubgroupEquipmentsMap(totalMap, subGroupOfEquipments, maxWeight)
        totalMap.set(totalMap.size + 1, subprocessMap)
    }

    return totalMap
}


returnEquipmentAsString = (equipmentObject) => {
    var linkString = undefined    
    if (equipmentObject.link != undefined) {
        linkString = returnEquipmentAsString(equipmentObject.link)
    }

    return '\n'.concat('[name: ', equipmentObject.name,
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

returnMapOfEquipmentsMapsAsString = (mapOfEquipmentsMap) => {
    let returnString = ''
    
    mapOfEquipmentsMap.forEach(element => {
        returnString +=returnEquipmentListAsString(element) + '\n\n'
    });
    
    return returnString
}



module.exports = {
    returnEquipmentListAsString, returnEquipmentAsString,
    checkForLinks, mapObjectsByWeightAndValue,
    calculateTotalPrice, createEquipmentsArray,
    processSubgroupEquipmentsMap, processEquipmentsMap, checkForSameName
} 