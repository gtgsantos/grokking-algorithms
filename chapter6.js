
function graph() {
    var graph = []
    graph.push()
    graph['you'] = ['alice', 'bob', 'claire']
    graph['bob'] = ['anuj', 'peggy']
    graph['alice'] = ['peggy']
    graph['claire'] = ['thom', 'jonny']
    graph['anuj'] = []
    graph['peggy'] = []
    graph['thom'] = ['claire']
    graph['jonny'] = []

    return graph;
}

function breadthFirstGraph(graph, graphNodeNames, nodeTargetName) {    
    var nodeName = graphNodeNames.pop()
    if (nodeName === nodeTargetName) {
        console.log('found it')
    } else {                
        breadthFirstGraph(graph, graphNodeNames.concat(graph[nodeName]), nodeTargetName)
    }
}

var graph = graph()

breadthFirstGraph(graph, graph['you'], 'anuj');