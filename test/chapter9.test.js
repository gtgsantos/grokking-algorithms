
const { returnEquipmentListAsString, returnEquipmentAsString,
    checkForLinks, mapObjectsByWeightAndValue,
    calculateTotalPrice, createEquipmentsArray,
    processSubgroupEquipmentsMap, processEquipmentsMap } = require('../chapter9');

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

// test('should add an Equipment as link from inputObject with 1 of weight, considering theres two levels of inner map Objects', () => {
//     var mapObjects = new Map()
//     var mapObjectsLevel1 = new Map()
//     var mapObjectsLevel2 = new Map()

//     mapObjects.set(1, mapObjectsLevel1)
//     mapObjectsLevel1.set(1, { name: "laptop", weight: 1, price: 2000, link: undefined })
    
//     mapObjects.set(2, mapObjectsLevel2)
//     mapObjectsLevel2.set(1, { name: "lighter", weight: 1, price: 200, link: undefined })
//     mapObjectsLevel2.set(2, { name: "videogame", weight: 2, price: 2000, link: undefined })

//     const inputObject = { name: "guitar", weight: 3, price: 1500, link: undefined };

//     const expected = returnEquipmentAsString(
//         { name: "guitar", weight: 3, price: 1500, link: { name: "lighter", weight: 1, price: 200, link: undefined } });

//     const output = returnEquipmentAsString(checkForLinks(mapObjects, inputObject, 4))
    
//     expect(output).toBe(expected)
// })

// test('should add an Equipment as link from inputObject with 2 of weight, considering theres two levels of inner map Objects', () => {
//     var mapObjects = new Map()
//     var mapObjectsLevel1 = new Map()
//     var mapObjectsLevel2 = new Map()

//     mapObjects.set(1, mapObjectsLevel1)
//     mapObjectsLevel1.set(1, { name: "laptop", weight: 1, price: 2000, link: undefined })
    
//     mapObjects.set(2, mapObjectsLevel2)
//     mapObjectsLevel2.set(1, { name: "lighter", weight: 1, price: 200, link: undefined })
//     mapObjectsLevel2.set(2, { name: "videogame", weight: 2, price: 2000, link: undefined })

//     const inputObject = { name: "guitar", weight: 3, price: 1500, link: undefined };

//     const expected = returnEquipmentAsString(
//         { name: "guitar", weight: 3, price: 1500, link: { name: "videogame", weight: 2, price: 2000, link: undefined } });

//     const output = returnEquipmentAsString(checkForLinks(mapObjects, inputObject, 5))
    
//     expect(output).toBe(expected)
// })


// test('should create a 2nd level Equipment map based on amount of equipment (two types) has on equipment map and the weight given', () => {

//     var mappedObjects = new Map()   
//     var mapObjectsLevel1 = new Map()
//     mappedObjects.set(1, mapObjectsLevel1)
//     mapObjectsLevel1.set(1, { name: "laptop", weight: 1, price: 2000, link: undefined })
//     mapObjectsLevel1.set(2, { name: "laptop", weight: 1, price: 2000, link: undefined })
//     mapObjectsLevel1.set(3, { name: "laptop", weight: 1, price: 2000, link: undefined })
//     mapObjectsLevel1.set(4, { name: "laptop", weight: 1, price: 2000, link: undefined })

//     var inputMap = new Map()    
//     inputMap.set(0, { name: "laptop", weight: 1, price: 2000, link: undefined })
//     inputMap.set(1, { name: "stereo", weight: 2, price: 3000, link: undefined })


//     var output = processSubgroupEquipmentsMap(mappedObjects, inputMap, 4)

//     var expected = new Map()    
//     expected.set(1, { name: "laptop", weight: 1, price: 2000, link: undefined })
//     expected.set(2, { name: "stereo", weight: 2, price: 3000, link: undefined })
//     expected.set(3, { name: "stereo", weight: 2, price: 3000, link: { name: "laptop", weight: 1, price: 2000, link: undefined } })
//     expected.set(4, { name: "stereo", weight: 2, price: 3000, link: { name: "laptop", weight: 1, price: 2000, link: undefined } })

    
//     expect(returnEquipmentListAsString(output)).toBe(returnEquipmentListAsString(expected))
    
// })


// test('should create a 1nd level Equipment map based on amount of equipment (two types) has on equipment map and the weight given', () => {

//     var mappedObjects = new Map()       

//     var inputMap = new Map()    
//     inputMap.set(0, { name: "guitar", weight: 1, price: 1500, link: undefined })
//     inputMap.set(1, { name: "stereo", weight: 3, price: 3000, link: undefined })


//     var output = processSubgroupEquipmentsMap(mappedObjects, inputMap, 4)

//     var expected = new Map()    
//     expected.set(1, { name: "guitar", weight: 1, price: 1500, link: undefined })
//     expected.set(2, { name: "guitar", weight: 1, price: 1500, link: undefined })
//     expected.set(3, { name: "stereo", weight: 3, price: 3000, link: undefined })
//     expected.set(4, { name: "stereo", weight: 3, price: 3000, link: undefined })

    
//     expect(returnEquipmentListAsString(output)).toBe(returnEquipmentListAsString(expected))    
// })


// test('should create a 1nd level Equipment map based on amount of equipment (two types) has on equipment map and the weight given', () => {

//     var mappedObjects = new Map()   
    
//     var inputMap = new Map()    
//     inputMap.set(0, { name: "guitar", weight: 1, price: 1500, link: undefined })
//     inputMap.set(1, { name: "stereo", weight: 2, price: 2000, link: undefined })
//     inputMap.set(2, { name: "laptop", weight: 3, price: 3000, link: undefined })

//     var output = processSubgroupEquipmentsMap(mappedObjects, inputMap, 4)

//     var expected = new Map()    
//     expected.set(1, { name: "guitar", weight: 1, price: 1500, link: undefined })
//     expected.set(2, { name: "stereo", weight: 2, price: 2000, link: undefined })
//     expected.set(3, { name: "laptop", weight: 3, price: 3000, link: undefined })
//     expected.set(4, { name: "laptop", weight: 3, price: 3000, link: undefined })

//     expect(returnEquipmentListAsString(output)).toBe(returnEquipmentListAsString(expected))
    
// })

// test('should create and process a equipments map, returning a map of best weights and prices equipments for two equipments', () => {
//     var inputMap = new Map()    
//     inputMap.set(0, { name: "guitar", weight: 1, price: 1500, link: undefined })
//     inputMap.set(1, { name: "stereo", weight: 2, price: 2000, link: undefined })
//     // inputMap.set(2, { name: "laptop", weight: 3, price: 3000, link: undefined })

//     const output = processEquipmentsMap(inputMap, 4)

//     var expected = new Map()    
//     var expectedLvl1 = new Map()    
//     expectedLvl1.set(1, { name: "guitar", weight: 1, price: 1500, link: undefined })
//     expectedLvl1.set(2, { name: "guitar", weight: 1, price: 1500, link: undefined })
//     expectedLvl1.set(3, { name: "guitar", weight: 1, price: 1500, link: undefined })
//     expectedLvl1.set(4, { name: "guitar", weight: 1, price: 1500, link: undefined })
//     expected.set(1, expectedLvl1)

//     var expectedLvl2 = new Map()    
//     expectedLvl2.set(1, { name: "guitar", weight: 1, price: 1500, link: undefined })
//     expectedLvl2.set(2, { name: "stereo", weight: 2, price: 2000, link: undefined })
//     expectedLvl2.set(3, { name: "stereo", weight: 2, price: 2000, link: { name: "guitar", weight: 1, price: 1500, link: undefined } })
//     expectedLvl2.set(4, { name: "stereo", weight: 2, price: 2000, link: { name: "guitar", weight: 1, price: 1500, link: undefined } })
//     expected.set(2, expectedLvl2)
    
//     expect(returnMapOfEquipmentsMapsAsString(output)).toBe(returnMapOfEquipmentsMapsAsString(expected))
// })


// test('should create and process a equipments map, returning a map of best weights and prices equipments for three equipments', () => {
//     var inputMap = new Map()    
//     inputMap.set(0, { name: "guitar", weight: 1, price: 1500, link: undefined })
//     inputMap.set(1, { name: "stereo", weight: 2, price: 2000, link: undefined })
//     inputMap.set(2, { name: "laptop", weight: 3, price: 3000, link: undefined })

//     const output = processEquipmentsMap(inputMap, 4)

//     var expected = new Map()    
//     var expectedLvl1 = new Map()    
//     expectedLvl1.set(1, { name: "guitar", weight: 1, price: 1500, link: undefined })
//     expectedLvl1.set(2, { name: "guitar", weight: 1, price: 1500, link: undefined })
//     expectedLvl1.set(3, { name: "guitar", weight: 1, price: 1500, link: undefined })
//     expectedLvl1.set(4, { name: "guitar", weight: 1, price: 1500, link: undefined })
//     expected.set(1, expectedLvl1)

//     var expectedLvl2 = new Map()    
//     expectedLvl2.set(1, { name: "guitar", weight: 1, price: 1500, link: undefined })
//     expectedLvl2.set(2, { name: "stereo", weight: 2, price: 2000, link: undefined })
//     expectedLvl2.set(3, { name: "stereo", weight: 2, price: 2000, link: { name: "guitar", weight: 1, price: 1500, link: undefined } })
//     expectedLvl2.set(4, { name: "stereo", weight: 2, price: 2000, link: { name: "guitar", weight: 1, price: 1500, link: undefined } })
//     expected.set(2, expectedLvl2)

//     var expectedLvl3 = new Map()    
//     expectedLvl3.set(1, { name: "guitar", weight: 1, price: 1500, link: undefined })
//     expectedLvl3.set(2, { name: "stereo", weight: 2, price: 2000, link: undefined })
//     expectedLvl3.set(3, { name: "laptop", weight: 3, price: 3000, link: undefined })
//     expectedLvl3.set(4, { name: "laptop", weight: 3, price: 3000, link: { name: "guitar", weight: 1, price: 1500, link: undefined } })
//     expected.set(3, expectedLvl3)
    
//     expect(returnMapOfEquipmentsMapsAsString(output)).toBe(returnMapOfEquipmentsMapsAsString(expected))
// })


test('should create and process a equipments map, returning a map of best weights and prices equipments for three equipments and five weights', () => {
    var inputMap = new Map()    
    inputMap.set(0, { name: "guitar", weight: 1, price: 1500, link: undefined })
    inputMap.set(1, { name: "stereo", weight: 2, price: 2000, link: undefined })
    inputMap.set(2, { name: "laptop", weight: 4, price: 4000, link: undefined })

    const output = processEquipmentsMap(inputMap, 5)

    var expected = new Map()    
    var expectedLvl1 = new Map()    
    expectedLvl1.set(1, { name: "guitar", weight: 1, price: 1500, link: undefined })
    expectedLvl1.set(2, { name: "guitar", weight: 1, price: 1500, link: undefined })
    expectedLvl1.set(3, { name: "guitar", weight: 1, price: 1500, link: undefined })
    expectedLvl1.set(4, { name: "guitar", weight: 1, price: 1500, link: undefined })
    expectedLvl1.set(5, { name: "guitar", weight: 1, price: 1500, link: undefined })
    expected.set(1, expectedLvl1)

    var expectedLvl2 = new Map()    
    expectedLvl2.set(1, { name: "guitar", weight: 1, price: 1500, link: undefined })
    expectedLvl2.set(2, { name: "stereo", weight: 2, price: 2000, link: undefined })
    expectedLvl2.set(3, { name: "stereo", weight: 2, price: 2000, link: { name: "guitar", weight: 1, price: 1500, link: undefined } })
    expectedLvl2.set(4, { name: "stereo", weight: 2, price: 2000, link: { name: "guitar", weight: 1, price: 1500, link: undefined } })
    expectedLvl2.set(5, { name: "stereo", weight: 2, price: 2000, link: { name: "guitar", weight: 1, price: 1500, link: undefined } })
    expected.set(2, expectedLvl2)

    var expectedLvl3 = new Map()    
    expectedLvl3.set(1, { name: "guitar", weight: 1, price: 1500, link: undefined })
    expectedLvl3.set(2, { name: "stereo", weight: 2, price: 2000, link: undefined })
    expectedLvl3.set(3, { name: "guitar", weight: 1, price: 1500, link: { name: "stereo", weight: 2, price: 2000, link: undefined } })
    expectedLvl3.set(4, { name: "laptop", weight: 4, price: 4000, link: undefined })
    expectedLvl3.set(5, { name: "laptop", weight: 4, price: 4000, link: { name: "guitar", weight: 1, price: 1500, link: undefined } })
    expected.set(3, expectedLvl3)
       
    console.log(returnMapOfEquipmentsMapsAsString(output))
    console.log(returnMapOfEquipmentsMapsAsString(expected))
    // expect(returnMapOfEquipmentsMapsAsString(output)).toBe(returnMapOfEquipmentsMapsAsString(expected))
})


// test(`should create and process a equipments map, returning a map of best weights and prices equipments for four equipments with two equipmants with same weight and
// different values`, () => {
//     var inputMap = new Map()    
//     inputMap.set(0, { name: "guitar", weight: 1, price: 1500, link: undefined })    
//     inputMap.set(1, { name: "stereo", weight: 4, price: 3000, link: undefined })
//     inputMap.set(2, { name: "laptop", weight: 3, price: 2000, link: undefined })
//     inputMap.set(3, { name: "iphone", weight: 1, price: 2000, link: undefined })

//     const output = processEquipmentsMap(inputMap, 4)
   
        
//     console.log(returnMapOfEquipmentsMapsAsString(output))
// })


test(`should return true for object with same name at level 1`, () => {    

    expect(checkForSameName({ name: "guitar", weight: 1, price: 1500, link: undefined }, 'guitar')).toBe(true)    
   
})

test(`should return true for object with same name at level 2`, () => {

    expect(checkForSameName({ name: "stereo", weight: 4, price: 3000, link:
                                { name: "guitar", weight: 1, price: 1500, link: undefined }
                            }, 'guitar')).toBe(true)

})

test(`should return true for object with same name at level 3`, () => {

    expect(checkForSameName({ name: "iphone", weight: 1, price: 2000, link: 
                                { name: "stereo", weight: 4, price: 3000, link:
                                    { name: "guitar", weight: 1, price: 1500, link: undefined }
                                }
                            }, 'guitar')).toBe(true)
   
})

