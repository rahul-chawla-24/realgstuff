class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.adjacentList = new Map();
  }

  addVertex(item) {
    this.adjacentList.set(item, []);
  }

  addEdges(one, two) {
    this.adjacentList.get(one).push(two);
    this.adjacentList.get(two).push(one);
  }
  print() {
    console.log(this.adjacentList);
  }
}

let firstGraph = new Graph();
firstGraph.addVertex("A");
firstGraph.addVertex("B");
firstGraph.addVertex("C");
firstGraph.addVertex("D");
firstGraph.addEdges("A", "B");
firstGraph.addEdges("C", "B");
firstGraph.addEdges("D", "B");
firstGraph.print();
