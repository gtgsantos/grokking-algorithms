//for some code, check graph-algorithm.js

import { dijkstraGraph } from './graph-algorithm'

function weightedGraph71() {
    var graph = new Array()

    graph['start-a'] = 5
    graph['start-b'] = 2

    graph['a-c'] = 4
    graph['a-d'] = 2

    graph['b-a'] = 8
    graph['b-d'] = 7

    graph['c-d'] = 6
    graph['c-fin'] = 3

    graph['d-fin'] = 1

    return graph;
}

function weightedCosts71() {
    var costs = []

    costs['start'] = 0
    costs['a'] = Number.MAX_SAFE_INTEGER
    costs['b'] = Number.MAX_SAFE_INTEGER
    costs['c'] = Number.MAX_SAFE_INTEGER
    costs['d'] = Number.MAX_SAFE_INTEGER
    costs['fin'] = Number.MAX_SAFE_INTEGER

    return costs
}

function weightedParents71() {
    var costs = []

    costs['a'] = 'start'
    costs['b'] = 'start'
    costs['c'] = undefined
    costs['d'] = undefined
    costs['fin'] = undefined

    return costs
}


var wGraph71 = weightedGraph71()
var wCosts71 = weightedCosts71()
var wParents71 = weightedParents71()

//-------------


function weightedGraph72() {
    var graph = new Array()

    graph['start-a'] = 10

    graph['a-b'] = 20

    graph['b-c'] = 1
    graph['b-fin'] = 30

    graph['c-a'] = 1

    return graph;
}

function weightedCosts72() {
    var costs = []

    costs['start'] = 0
    costs['a'] = Number.MAX_SAFE_INTEGER
    costs['b'] = Number.MAX_SAFE_INTEGER
    costs['c'] = Number.MAX_SAFE_INTEGER
    costs['fin'] = Number.MAX_SAFE_INTEGER

    return costs
}

function weightedParents72() {
    var costs = []

    costs['a'] = 'start'
    costs['b'] = undefined
    costs['c'] = undefined
    costs['fin'] = undefined

    return costs
}


var wGraph72 = weightedGraph72()
var wCosts72 = weightedCosts72()
var wParents72 = weightedParents72()

//-------------

function weightedGraph73() {
    var graph = new Array()

    graph['start-a'] = 2
    graph['start-b'] = 2

    graph['a-fin'] = 2
    graph['a-c'] = 2

    graph['b-a'] = 2

    graph['c-b'] = -1
    graph['c-fin'] = 2

    return graph;
}

function weightedCosts73() {
    var costs = []

    costs['start'] = 0
    costs['a'] = Number.MAX_SAFE_INTEGER
    costs['b'] = Number.MAX_SAFE_INTEGER
    costs['c'] = Number.MAX_SAFE_INTEGER
    costs['fin'] = Number.MAX_SAFE_INTEGER

    return costs
}

function weightedParents73() {
    var costs = []

    costs['a'] = 'start'
    costs['b'] = undefined
    costs['c'] = undefined
    costs['fin'] = undefined

    return costs
}


var wGraph73 = weightedGraph73()
var wCosts73 = weightedCosts73()
var wParents73 = weightedParents73()



console.log('exercise 7.1')
console.table(wParents71)
dijkstraGraph('start', 'fin', wGraph71, wCosts71, wParents71)
console.table(wParents71)
///////////
// console.log('exercise 7.2')
// console.table(wParents72)
// dijkstraGraph('start', 'fin', wGraph72, wCosts72, wParents72)
// console.table(wParents72)
///////////
// console.log('exercise 7.3')
// console.table(wParents73)
// dijkstraGraph('start', 'fin', wGraph73, wCosts73, wParents73)
// console.table(wParents73)


console.log('exercise 7.1 weight:', wCosts71['fin'])
// console.log('exercise 7.2 weight:', wCosts72['fin'])
// console.log('exercise 7.3 weight:', wCosts73['fin'])


