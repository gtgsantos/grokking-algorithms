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
                      'coverage': Array.from(newGroup) })
    }
    
    return powerSet
}

function main() {
    var citiesSet = createCities(20)
    var powerSet = createRadios(citiesSet, 4)
    console.log(powerSet)
}

main()