
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

function main() {

    var mapa1 = new Map()
    mapa1.set(0, 'nao1')
    mapa1.set(1, 'nao2')
    mapa1.set(2, 'achou')

    var mapa2 = new Map()
    mapa2.set(0, mapa1)

    var mapa3 = new Map()
    mapa3.set(0, mapa2)

    var mapa4 = new Map()
    mapa4.set(0, mapa3)

    // console.log(mapa1)
    console.log(mapa4.getAt())

    // console.log(returnMap[0])
    // console.log(returnMap[1])
    // console.log(returnMap[0,0] === undefined)
    // console.log(returnMap[0,1] === undefined)
    // console.log(returnMap[1,0] === undefined)
    // console.log(returnMap[1,1] === undefined)


}

main()