// const chapter9 = require('./chapter9-new');
const { returnEquipmentListAsString, returnEquipmentAsString,
    checkForLinks, mapObjectsByWeightAndValue,
    calculateTotalPrice, createEquipmentsArray } = require('./chapter9-new');

// test('should check the equipment list', () => {
//     var expected = new Map()
//     expected.set(0, { name: "guitar", weight: 1, price: 1500, link: undefined })
//     expected.set(2, { name: "laptop", weight: 3, price: 2000, link: undefined })
//     expected.set(1, { name: "stereo", weight: 4, price: 3000, link: undefined })


//     const result = createEquipmentsArray()

//     for (let i = 0; i < expected.size; i++) {
//         expect(result.get(i).name).toBe(expected.get(i).name);
//     }
// })

// test('should calculate total price without link', () => {
//     let equipments = createEquipmentsArray()

//     expect(calculateTotalPrice(equipments.get(0))).toBe(1500)

// })


// test('should calculate total price with 2 level link chain', () => {
//     let equipments = createEquipmentsArray()
//     var equipmentRoot = equipments.get(0)
//     equipmentRoot.link = equipments.get(1)
//     equipmentRoot.link.link = equipments.get(2)

//     expect(calculateTotalPrice(equipmentRoot)).toBe(6500)

// })

// test('should return a object\'s string with nested link Object', () => {
//     var output = returnEquipmentAsString({
//         name: "guitar", weight: 1, price: 1500, link: {
//             name: "laptop", weight: 3, price: 2000, link: undefined
//         }
//     })

//     expect(output).toBe('[name: guitar - weight: 1 - price: 1500 - link: [name: laptop - weight: 3 - price: 2000 - link: undefined]]')
// })


// test('should return one Object by weight', () => {
//     var inputMap = new Map()
//     inputMap.set(0, { name: "guitar", weight: 1, price: 1500, link: undefined })
//     inputMap.set(1, { name: "stereo", weight: 4, price: 3000, link: undefined })
//     inputMap.set(2, { name: "laptop", weight: 3, price: 2000, link: undefined })

//     var expected = returnEquipmentAsString({ name: "guitar", weight: 1, price: 1500, link: undefined })

//     var output = mapObjectsByWeightAndValue(inputMap, 1)

//     expect(returnEquipmentAsString(output)).toBe(expected)
// })

// test('should not return an object, because theres no object with weight equals 1', () => {
//     var inputMap = new Map()
//     inputMap.set(0, { name: "guitar", weight: 2, price: 1500, link: undefined })
//     inputMap.set(1, { name: "stereo", weight: 4, price: 3000, link: undefined })
//     inputMap.set(2, { name: "laptop", weight: 3, price: 2000, link: undefined })

//     expect(mapObjectsByWeightAndValue(inputMap, 1)).toBe(undefined)
// })

// test('should map one Object by weight and value', () => {
//     var inputMap = new Map()
//     inputMap.set(0, { name: "guitar", weight: 1, price: 1500, link: undefined })
//     inputMap.set(1, { name: "stereo", weight: 1, price: 3000, link: undefined })
//     inputMap.set(2, { name: "laptop", weight: 3, price: 2000, link: undefined })

//     var expected = returnEquipmentAsString({ name: "stereo", weight: 1, price: 3000, link: undefined })

//     var output = mapObjectsByWeightAndValue(inputMap, 1)

//     expect(returnEquipmentAsString(output)).toBe(expected)
// })

// test('should add an Equipment as link from inputObject', () => {
//     var mapObjects = new Map()
//     var mapObjectsLevel = new Map()

//     mapObjects.set(1, mapObjectsLevel)
//     mapObjectsLevel.set(1, { name: "laptop", weight: 1, price: 2000, link: undefined })

//     const inputObject = { name: "guitar", weight: 1, price: 1500, link: undefined };

//     const expected = returnEquipmentAsString(
//         { name: "guitar", weight: 1, price: 1500, link: { name: "laptop", weight: 1, price: 2000, link: undefined } });

//     const output = returnEquipmentAsString(checkForLinks(mapObjects, inputObject, 2))

//     expect(output).toBe(expected)
// })

test('should add an Equipment as link from inputObject, considering theres two levels of inner map Objects', () => {
    var mapObjects = new Map()
    var mapObjectsLevel1 = new Map()
    var mapObjectsLevel2 = new Map()

    mapObjects.set(1, mapObjectsLevel1)
    mapObjectsLevel1.set(1, { name: "laptop", weight: 1, price: 2000, link: undefined })
    
    mapObjects.set(2, mapObjectsLevel2)
    mapObjectsLevel2.set(1, { name: "videogame", weight: 2, price: 2000, link: undefined })

    const inputObject = { name: "guitar", weight: 3, price: 1500, link: undefined };

    const expected = returnEquipmentAsString(
        { name: "guitar", weight: 3, price: 1500, link: { name: "laptop", weight: 1, price: 2000, link: undefined } });

    const output = returnEquipmentAsString(checkForLinks(mapObjects, inputObject, 4))
// este teste está errado
    expect(output).not().toBe(expected)
})


