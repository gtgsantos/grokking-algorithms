
function graph() {
    var graph = []
    graph.push()
    graph['you'] = [{name:'alice', parent: undefined, visited: false}, 
                    {name:'bob', parent: undefined, visited: false}, 
                    {name:'claire', parent: undefined, visited: false}]

    graph['bob'] = [{name:'anuj', parent: undefined, visited: false}, 
                    {name:'peggy', parent: undefined, visited: false}]

    graph['alice'] = [{name:'peggy', parent: undefined, visited: false}]

    graph['claire'] = [{name:'thom', parent: undefined, visited: false}, 
                       {name:'jonny', parent: undefined, visited: false}]

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

var graph = graph()

breadthFirstGraph(graph, graph['you'], 'anuj');


//exercises

//6.1: S -> () -> F => 2 steps

//6.2: CAB -> CAT -> BAT => 2 steps

//6.3 - 
// A: invalid
// B: valid
// C: invalid


//6.4 - Wake up -> brush teeth -> exercise -> shower -> get dressed -> eat breakfast -> pack lunch

