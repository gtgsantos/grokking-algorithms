


Array.prototype.unique = function() {
    var a = this.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};

function graph() {
    var graph = []
    graph.push()
    graph['you'] = [{name:'alice', parent: undefined, visited: false}, 
                    {name:'bob', parent: undefined, visited: false}, 
                    {name:'claire', parent: undefined, visited: false}]

    graph['bob'] = [{name:'anuj', parent: undefined, visited: false}, 
                    {name:'peggy', parent: undefined, visited: false}
                ]

    graph['alice'] = [{name:'peggy', parent: undefined, visited: false}]

    graph['claire'] = [{name:'thom', parent: undefined, visited: false}, 
                       {name:'jonny', parent: undefined, visited: false}]

    graph['anuj'] = []
    graph['peggy'] = []
    graph['thom'] = []
    graph['jonny'] = []

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

// var graph = graph()
// breadthFirstGraph(graph, graph['you'], 'anuj');


function getSecondaryKeys(primaryKey, graph) {
    return Object.keys(graph)
    .filter((value) => value.includes(primaryKey+'-'))
    .map(( field ) => {        
        var splitted = field.split('-')
        return splitted[1]
    })
}

function recreateKey (primaryKey, secondaryKey) {
    return primaryKey + '-' + secondaryKey
}

function weightedGraph() {
    var graph = new Array()

    graph['start-a'] = 6
    graph['start-b'] = 2
    graph['a-fin'] = 1
    graph['b-a'] =  3
    graph['b-fin'] = 5

    return graph;
}

function weightedCosts() {
    var costs = []

    costs['a'] = 6
    costs['b'] = 2
    costs['fin'] = Number.MAX_SAFE_INTEGER

    return costs
}

function weightedParents() {
    var costs = []

    costs['a'] = 'start'
    costs['b'] = 'start'
    costs['fin'] = undefined

    return costs
}

function dijkstraGraph(primaryKey, destinyKey, wGraph, wCosts, wParents) {
    
    getSecondaryKeys(primaryKey, wGraph).forEach((secondaryKey) => {            
        var edgeWeight = wGraph[recreateKey(primaryKey, secondaryKey)] 
        
        var beginNodeWeight = wCosts[primaryKey]
        var endNodeWeight = wCosts[secondaryKey]

        // console.log('start: ', primaryKey, " - end: ", secondaryKey)

        if ((beginNodeWeight + edgeWeight) < endNodeWeight) {
            wCosts[secondaryKey] = (beginNodeWeight + edgeWeight)
            wParents[secondaryKey] = primaryKey
        }
        if (secondaryKey !== destinyKey) {
            dijkstraGraph(secondaryKey, destinyKey, wGraph, wCosts, wParents)
        }
    })


}

var wGraph = weightedGraph()
var wCosts = weightedCosts()
var wParents = weightedParents()

console.table(wParents)
console.log('running dijkstra...')
 dijkstraGraph('start', 'fin', wGraph, wCosts, wParents)
console.table(wParents)

