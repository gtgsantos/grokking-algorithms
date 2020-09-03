// no code, only smalltalk

//8.1 - Pack the biggest crates first, then second biggest, and so on... (obviously there's no optimal solution)


//8.2 - similar to previous question. Put in beggining of list the item with highest point value, then the second item, and so on.

//8.3 quicksort is not greedy

//8.4 breadth-first search is not greedy 

//8.5 dijkstra algorithm is greedy 

//8.6 its a np-complete problem

//8.7 its a np-complete problem

//8.8 its a np-complete problem


import { convertNumberToCharacter } from './util'

function createCities(numberOfCities) {

    var citiesSet = new Set()

    while (citiesSet.size < numberOfCities) {
        var city = convertNumberToCharacter(Math.floor(Math.random() * (25 - 0)) + 0)
        city += convertNumberToCharacter(Math.floor(Math.random() * (25 - 0)) + 0)
        citiesSet.add(city)
    }

    return citiesSet
}

Set.prototype.compareTo = function (comparingSet) {
    if (this.size !== comparingSet.size) return false;
    for (var a of this) if (!comparingSet.has(a)) return false;
    return true;
}



function createRadios(citiesSet, maxGroupSize) {
    var citiesArray = Array.from(citiesSet)
    var powerSet = new Set()
    var alreadyGroupedCities = new Set()

    var radioNumber= 0;
    while (!alreadyGroupedCities.compareTo(citiesSet)) {
        
        var newGroup = new Set()
        var citiesInGroup = Math.floor(Math.random() * (maxGroupSize - 1)) + 1
        for (var i = 0; i < citiesInGroup; i++) {
            var city = citiesArray[Math.floor(Math.random() * (citiesSet.size - 0)) + 0]
            newGroup.add(city)
            alreadyGroupedCities.add(city)
        }

        powerSet.add({'name': ('Radio' + radioNumber++),
                      'coverage': Array.from(newGroup),
                      'qtyCities': newGroup.size })
    }
    
    return powerSet
}

Array.prototype.contains = function (comparingArray) {
    // console.log(comparingArray)    
    // if (comparingArray.size > 0) {
        comparingArray.forEach(element1 => {
            var contains = false
            console.log('---------------element1: ', element1)
            this.forEach(element2 => {
                console.log('element2: ', element2)
                if (element1 === element2) {
                    console.log('is true')
                    contains = true
                }
    
                if (!contains) {
                    return false
                }
            })
            return true
        });    
    // } else {
    //     return false
    // }
    
}

function getRadiosOptimal(powerSet, citiesSet) {
    var powerArray = Array.from(powerSet)
    powerArray.sort((a, b) => (a.qtyCities < b.qtyCities) ? 1 : -1)
    var totalCities = Array.from(citiesSet)

    var broadcastCities =  []
    var counter = 0;    
    // while (!totalCities.contains(broadcastCities)) {        
    while(counter < (powerArray.length-1)) {        
        // if (counter < (powerArray.length-1)  && !broadcastCities.contains(powerArray[counter].coverage)) {
        if ( !broadcastCities.contains(powerArray[counter].coverage)) {
            broadcastCities = broadcastCities.concat(powerArray[counter].coverage)
            // console.log('entrou1: ', broadcastCities.length, ' - ', totalCities.length)
        } else if (counter >= (powerArray.length -1)) {
            // console.log('entrou2')
             break
        }

        counter++

    }
}

function main() {
    var citiesSet = createCities(20)
    var powerSet = createRadios(citiesSet, 4)

    getRadiosOptimal(powerSet, citiesSet)
  //  console.log(getRadiosOptimal(powerSet, citiesSet))
}

main()