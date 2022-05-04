class Graph {
  constructor() {
    this.elem = new Map();
    this.vertices = 0;
    this.edges = 0;
    this.visited = {};
  }

  addVertex(vertex) {
    this.elem.set(vertex);
    this.vertices++;
  }
}

var graph = new Graph();
graph.addVertex(2);
console.log(graph);
