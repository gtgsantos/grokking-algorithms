
import { assertEquals, assertStrictEquals, assertThrows } from 'https://deno.land/std@0.76.0/testing/asserts.ts';
import {
    printmap, calculateTotalPrice, createMapForWeights,
    selectPositionBestFit, mapEquipmentsZeroIndex, createEquipmentsArray
} from '../chapter9-new.js'



Deno.test("Create Equipments Array", function (): void {
    var equipments = new Map()
    equipments.set(0, { name: "guitar", weight: 1, price: 1500, link: undefined })
    equipments.set(2, { name: "laptop", weight: 3, price: 2000, link: undefined })
    equipments.set(1, { name: "stereo", weight: 4, price: 3000, link: undefined })

    var equipmentsArray = createEquipmentsArray();


    assertEquals(equipmentsArray, equipments);
});

Deno.test("Calculate total price: equipment without link", function (): void {
    var equipment = { name: "guitar", weight: 1, price: 1500, link: undefined }
    var resultPrice = calculateTotalPrice(equipment)

    assertEquals(resultPrice, 1500);
});

Deno.test("Calculate total price: equipment with link (first level)", function (): void {

    let equipment = {
        name: "guitar", weight: 1, price: 1500, link:
            { name: "laptop", weight: 3, price: 2000, link: undefined }
    }

    var resultPrice = calculateTotalPrice(equipment)
    assertEquals(resultPrice, 3500);

});

Deno.test("Calculate total price: equipment with link (fourth level)", function (): void {

    let equipment = {
        name: "guitar", weight: 1, price: 1500, link:
        {
            name: "laptop", weight: 3, price: 2000, link:
            {
                name: "book", weight: 1, price: 200, link:
                    { name: "stereo", weight: 4, price: 3000, link: undefined }
            }
        }
    }

    var resultPrice = calculateTotalPrice(equipment)
    assertEquals(resultPrice, 6700);

});

// Deno.test("Printmap: printing a equipment", function (): void {

//     var equipment = {
//         name: "guitar", weight: 1, price: 1500, link:
//             { name: "laptop", weight: 3, price: 2000, link: undefined }
//     }
//     var mapEquip = new Map()
//     mapEquip.set(1, equipment)

//     var equipmentString = '# name: guitar, price: 1500'

//     var resultPrice = printmap(mapEquip)
//     assertEquals(resultPrice, equipmentString);

// });

// console.log('####: ' + objeto)

// Deno.test({
//   name: "testing example",
//   fn(): void {
//     assertEquals("world", "world");
//     assertEquals({ hello: "world" }, { hello: "world" });
//   },
// });

// Deno.test("isStrictlyEqual", function (): void {
//     const a = {};
//     const b = a;
//     assertStrictEquals(a , b);
//   });



//   // This test failsassertThrows
// //   Deno.test("isNotStrictlyEqual", function (): void {
// //     const a = {};
// //     const b = {};
// //     assertStrictEquals(a, b);
// //   });

//   Deno.test("example", function (): void {
//     assertEquals("world", "world");
//     assertEquals({ hello: "world" }, { hello: "world" });
//   });

//   Deno.test("doesThrow", function (): void {
//     assertThrows((): void => {
//       throw new TypeError("hello world!");
//     });
//     assertThrows((): void => {
//       throw new TypeError("hello world!");
//     }, TypeError);
//     assertThrows(
//       (): void => {
//         throw new TypeError("hello world!");
//       },
//       TypeError,
//       "hello",
//     );
//   });