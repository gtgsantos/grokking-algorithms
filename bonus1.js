import { createArrayComplete } from './util'
import { quickSort } from './sort-algorithms'

function createTravelBoxes(arrayBoxes) {
    var halfLength = (arrayBoxes.length % 2 == 0 ? (arrayBoxes.length / 2) : ((arrayBoxes.length + 1) / 2))    

    var travelBoxes = []
    for (var i = 0; i < halfLength; i++) {
        var lightest = arrayBoxes.shift()
        var heaviest = arrayBoxes.pop()

        travelBoxes.push({
            "lightest": lightest,
            "heaviest": heaviest
        })
    }
    return travelBoxes
}



function main() {
    var boxes = createArrayComplete(10, 30, 1)
    console.log('goods to deliver: ', boxes)
    boxes = quickSort([...boxes])

    createTravelBoxes(boxes).forEach(element => {
        console.log('travelBox[', element.lightest, ', ', (element.heaviest !== undefined ? element.heaviest : '-'), ']= ', element.lightest +
            (element.heaviest === undefined ? 0 : element.heaviest))
    });

}



//optimizing quantity of travels to deliver all goods
main()