


Array.prototype.unique = function () {
    var a = this.concat();
    for (var i = 0; i < a.length; ++i) {
        for (var j = i + 1; j < a.length; ++j) {
            if (a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};

function graph() {
    var graph = []
    graph.push()
    graph['you', [{ name: 'alice', parent: undefined, visited: false },
    { name: 'bob', parent: undefined, visited: false },
    { name: 'claire', parent: undefined, visited: false }]]

    graph['bob', [{ name: 'anuj', parent: undefined, visited: false },
    { name: 'peggy', parent: undefined, visited: false }
    ]]

    graph['alice', [{ name: 'peggy', parent: undefined, visited: false }]]

    graph['claire', [{ name: 'thom', parent: undefined, visited: false },
    { name: 'jonny', parent: undefined, visited: false }]]

    graph['anuj', []]
    graph['peggy', []]
    graph['thom', []]
    graph['jonny', []]

    return graph;
}

function breadthFirstGraph(graph, graphNodeNames, nodeTargetName, parentNode) {
    // var node = graphNodeNames.shift();
    var node = graphNodeNames.pop();
    if (!node.visited) {
        node.visited = true
        node.parent = parentNode
        if (node.name === nodeTargetName) {
            var found = node
            console.log('->', found.name)
            while (found.parent != undefined) {
                found = found.parent
                console.log('->', found.name)
            }

        } else {
            breadthFirstGraph(graph, graphNodeNames.concat(graph[node.name]).unique(), nodeTargetName, node)
        }
    }

}

//  var graph = graph()
//  breadthFirstGraph(graph, graph['you'], 'anuj');


function getSecondaryKeys(primaryKey, graph) {
    var returnArray = []
    graph.forEach((value, key) => {
        if (key.includes(primaryKey + '-')) {
            returnArray.push(key)
        }
    })

    return returnArray.map((field) => {
        var splitted = field.split('-')

        return splitted[1]
    })
}

function recreateKey(primaryKey, secondaryKey) {
    return primaryKey + '-' + secondaryKey
}

function weightedGraph() {
    var graph = new Map()

    graph.set('start-a', 6)
    graph.set('start-b', 2)
    graph.set('a-fin', 1)
    graph.set('b-a', 3)
    graph.set('b-fin', 5)

    return graph;
}

function weightedCosts() {
    var costs = new Map()

    costs.set('start', 0)
    costs.set('a', Number.MAX_SAFE_INTEGER)
    costs.set('b', Number.MAX_SAFE_INTEGER)
    costs.set('fin', Number.MAX_SAFE_INTEGER)

    return costs
}

function weightedParents() {
    var costs = new Map()

    costs.set('a', 'start')
    costs.set('b', 'start')
    costs.set('fin', undefined)

    return costs
}

function getMinorWeight(wCosts, visited) {
    var minorKey = undefined


    wCosts.forEach((value, key) => {
        // console.log(visited)
        if ((minorKey === undefined || value < wCosts.get(minorKey)) && !visited.has(key)) {
            minorKey = key
        }
    });
    
    return minorKey
}

function dijkstraGraph(wGraph, wCosts, wParents) {
    var visited = new Map()

    while (visited.size < wCosts.size) {
        var minorCostKey = getMinorWeight(wCosts, visited)        
        var wCost = wCosts.get(minorCostKey)
        visited.set(minorCostKey, minorCostKey)

        getSecondaryKeys(minorCostKey, wGraph).forEach((secondaryKey) => {
            var edgeKey = recreateKey(minorCostKey, secondaryKey)
            var edgeWeight = wGraph.get(edgeKey)

            var weightToNode = edgeWeight + wCost
            if (weightToNode < wCosts.get(secondaryKey)) {
                wParents.set(secondaryKey, minorCostKey)
                wCosts.set(secondaryKey, weightToNode)
            }
        })
    }

}

export { dijkstraGraph }