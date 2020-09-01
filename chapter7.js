//for some code, check graph-algorithm.js

import { dijkstraGraph } from './graph-algorithm'

function weightedGraph71() {
    var graph = new Map()

    graph.set('start-a', 5) 
    graph.set('start-b', 2)

    graph.set('a-c', 4)
    graph.set('a-d', 2)

    graph.set('b-a', 8)
    graph.set('b-d', 7)

    graph.set('c-d', 6)
    graph.set('c-fin', 3)

    graph.set('d-fin', 1)

    return graph;
}

function weightedCosts71() {
    var costs  = new Map()

    costs.set('start', 0)
    costs.set('a', Number.MAX_SAFE_INTEGER)
    costs.set('b', Number.MAX_SAFE_INTEGER)
    costs.set('c', Number.MAX_SAFE_INTEGER)
    costs.set('d', Number.MAX_SAFE_INTEGER)
    costs.set('fin', Number.MAX_SAFE_INTEGER)

    return costs
}

function weightedParents71() {
    var costs  = new Map()

    costs.set('a', 'start')
    costs.set('b', 'start')
    costs.set('c', undefined)
    costs.set('d', undefined)
    costs.set('fin', undefined)

    return costs
}


var wGraph71 = weightedGraph71()
var wCosts71 = weightedCosts71()
var wParents71 = weightedParents71()

//-------------


function weightedGraph72() {
    var graph  = new Map()

    graph.set('start-a', 10)

    graph.set('a-b', 20)

    graph.set('b-c', 1)
    graph.set('b-fin', 30)

    graph.set('c-a', 1)

    return graph;
}

function weightedCosts72() {
    var costs = new Map()

    costs.set('start', 0)
    costs.set('a', Number.MAX_SAFE_INTEGER)
    costs.set('b', Number.MAX_SAFE_INTEGER)
    costs.set('c', Number.MAX_SAFE_INTEGER)
    costs.set('fin', Number.MAX_SAFE_INTEGER)

    return costs
}

function weightedParents72() {
    var costs = new Map()

    costs.set('a', 'start')
    costs.set('b', undefined)
    costs.set('c', undefined)
    costs.set('fin', undefined)

    return costs
}


var wGraph72 = weightedGraph72()
var wCosts72 = weightedCosts72()
var wParents72 = weightedParents72()

//-------------

function weightedGraph73() {
    var graph = new Map()

    graph.set('start-a', 2)
    graph.set('start-b', 2)

    graph.set('a-fin', 2)
    graph.set('a-c', 2)

    graph.set('b-a', 2)

    graph.set('c-b', -1)
    graph.set('c-fin', 2)

    return graph;
}

function weightedCosts73() {
    var costs = new Map()

    costs.set('start', 0)
    costs.set('a', Number.MAX_SAFE_INTEGER)
    costs.set('b', Number.MAX_SAFE_INTEGER)
    costs.set('c', Number.MAX_SAFE_INTEGER)
    costs.set('fin', Number.MAX_SAFE_INTEGER)

    return costs
}

function weightedParents73() {
    var costs = new Map()

    costs.set('a', 'start')
    
    costs.set('b',  undefined)
    costs.set('c', undefined)
    costs.set('fin', undefined)

    return costs
}


var wGraph73 = weightedGraph73()
var wCosts73 = weightedCosts73()
var wParents73 = weightedParents73()



// console.log('exercise 7.1')
// console.table(wParents71)
dijkstraGraph(wGraph71, wCosts71, wParents71)
// console.table(wParents71)
//console.table(wCosts71)

///////////
// console.log('exercise 7.2')
// console.table(wParents72)
dijkstraGraph(wGraph72, wCosts72, wParents72)
// console.table(wParents72)
// console.table(wCosts72)
///////////
// console.log('exercise 7.3')
// console.table(wParents73)
dijkstraGraph(wGraph73, wCosts73, wParents73)
// console.table(wParents73)
// console.table(wCosts73)


console.log('exercise 7.1 weight:', wCosts71.get('fin'))
console.log('exercise 7.2 weight:', wCosts72.get('fin'))
console.log('exercise 7.3 weight:', wCosts73.get('fin'))

