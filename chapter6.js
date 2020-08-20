
function graph() {
    var graph = []
    graph.push()
    graph['you'] = ['alice', 'bob', 'claire']
    graph['bob'] = ['anuj', 'peggy']
    graph['alice'] = ['peggy']
    graph['claire'] = ['thom', 'jonny']
    graph['anuj'] = []
    graph['peggy'] = []
    graph['thom'] = []
    graph['jonny'] = []

    return graph;
}
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
function breadthFirstGraph(graph, graphNodeNames, nodeTargetName) {    
    // var nodeName = graphNodeNames.pop()
    console.log(graphNodeNames)
    var nodeName = graphNodeNames.shift();
    // console.log(nodeName)
    if (nodeName === nodeTargetName) {
        // console.log('found it')
    } else {               

        breadthFirstGraph(graph, graphNodeNames.concat(graph[nodeName]).unique(), nodeTargetName)
    }
}

var graph = graph()

breadthFirstGraph(graph, graph['you'], 'anuj');