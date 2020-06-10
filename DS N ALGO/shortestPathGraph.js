class Queue extends Array {
  enqueue(val) {
    this.push(val);
  }

  dequeue() {
    return this.shift();
  }

  peek() {
    return this[0];
  }

  isEmpty() {
    return this.length === 0;
  }
}

// The below example shows a framework of Graph class. We define two private variable i.e noOfVertices to store the number of vertices in the graph and AdjList, which stores a adjacency list of a particular vertex. We used a Map Object provided by ES6 in order to implement Adjacency list. Where key of a map holds a vertex and values holds an array of an adjacent node

// create a graph class
class Graph {
  // defining vertex array and
  // adjacent list
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }
  // addVertex(v) – It adds the vertex v as key to adjList and initialize its values with an array.
  addVertex(v) {
    // initialize the adjacent list with a
    // null array
    this.AdjList.set(v, []);
  }

  // addEdge(src, dest) – It adds an edge between the src and dest.
  addEdge(v, w) {
    // get the list for vertex v and put the
    // vertex w denoting edge between v and w
    this.AdjList.get(v).push(w);

    // Since graph is undirected,
    // add an edge from w to v also
    this.AdjList.get(w).push(v);
  }

  // Prints the vertex and adjacency list
  printGraph() {
    // get all the vertices
    var get_keys = this.AdjList.keys();

    // iterate over the vertices
    for (var i of get_keys) {
      // great the corresponding adjacency list
      // for the vertex
      var get_values = this.AdjList.get(i);
      var conc = "";

      // iterate over the adjacency list
      // concatenate the values into a string
      for (var j of get_values) conc += j + " ";

      // print the vertex and its adjacency list
      console.log(i + " -> " + conc);
    }
  }

  //implement your code here
  findShortestPathLengthUsingBFS(source, destination) {
    console.log(source, destination);
  }
}

// Using the above implemented graph class
var g = new Graph(6);
var vertices = ["A", "B", "C", "D", "E", "F"];
// adding vertices
for (var i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}
// adding edges
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("B", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

// prints all vertex and
// its adjacency list
// A -> B C
// B -> A D E
// C -> A
// D -> B E F
// E -> B D F
// F -> D E
g.printGraph();

class Solution {
  constructor() {}
  findShortestPathLength(startingNode, destinationNode) {
    if (!g.AdjList.get(destinationNode) || !g.AdjList.get(startingNode)) {
      return "Node Not Exist";
    } else if (startingNode == destinationNode) {
      return 0;
    }
    // create a visited array
    let visited = [];

    // Create an object for queue
    let q = new Queue();

    // add the starting node to the queue
    visited[startingNode] = true;

    q.enqueue(startingNode);

    let whoPushWhom = new Map();
    // loop until queue is element

    loopFirst: while (!q.isEmpty()) {
      // get the element from the queue
      let getQueueElement = q.dequeue();
      // passing the current vertex to callback funtion
      // console.log(getQueueElement);

      // get the adjacent list for current vertex
      let get_List = g.AdjList.get(getQueueElement);

      // loop through the list and add the element to the
      // queue if it is not processed yet
      for (let i in get_List) {
        let neigh = get_List[i];

        if (!visited[neigh]) {
          whoPushWhom.set(neigh, getQueueElement);
          //  console.log(neigh,getQueueElement)
          visited[neigh] = true;
          if (neigh == destinationNode) {
            q.enqueue(neigh);
            break loopFirst;
          }
          q.enqueue(neigh);
          // console.log(neigh,destinationNode)
        }
      }
    }

    let currNode = whoPushWhom.get(destinationNode);
    let count = 1;
    while (true) {
      if (currNode == startingNode) {
        return count;
      }
      // console.log(currNode)
      currNode = whoPushWhom.get(currNode);
      count++;
    }
  }
}

let solution = new Solution();
let source = prompt("Please enter your source");
let destination = prompt("Please enter your destination");
solution.findShortestPathLength(source, destination);

// Time Complexity
// time complexity depends upon destination node
// if it exist at last then we have to traverse whole graph
// which is O(n) and if it is in middle then  O(n/2)
// so we can say its O(D) where D is destination node

// Space Complexity
// space complexity will be also same as we are using map data structure O(D)
// storing from starting node to destination node
