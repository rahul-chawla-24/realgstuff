// Class Heap

class Heap {
  constructor(compare) {
    this.array = [];
    if (compare) {
      this.compare = compare;
    } else {
      this.compare = this.defaultCompare;
    }
  }
  // by default using maxHeap
  defaultCompare(x, y) {
    return x > y;
  }
  // add items
  add(item) {
    this.array.push(item);
    this.heapifyUp();
  }

  heapifyUp(index) {
    let currentIndex = index || this.array.length - 1;
    while (
      this.hasParent(currentIndex) &&
      !this.compare(this.getparent(currentIndex), this.array[currentIndex])
    ) {
      this.swap(this.getParentIndex(currentIndex), currentIndex);
      currentIndex = this.getParentIndex(currentIndex);
    }
  }
  heapifyDown(index = 0) {
    let currentIndex = index;

    while (this.hasLeftChild(currentIndex)) {
      let smallestChildIndex = this.getLeftChildIndex(currentIndex);

      if (
        this.hasRightChild(smallestChildIndex) &&
        this.compare(
          this.getRightChild(currentIndex),
          this.getLeftchild(currentIndex)
        )
      ) {
        smallestChildIndex = this.getRightChildIndex(currentIndex);
      }

      if (
        this.compare(this.array[currentIndex], this.array[smallestChildIndex])
      ) {
        break;
      } else {
        this.swap(currentIndex, smallestChildIndex);
      }
      currentIndex = smallestChildIndex;
    }
  }
  find(item) {
    for (let i = 0; i < this.array.length; i++) {
      if (item === this.array[i]) {
        return i;
      }
    }
    return -1;
  }
  remove(item) {
    let currentIndex = this.find(item);

    if (currentIndex === -1) return;

    if (currentIndex == this.array.length - 1) {
      return this.array.pop();
    }

    this.array[currentIndex] = this.array.pop();

    let parent = this.getparent(currentIndex);

    if (
      this.hasLeftChild(currentIndex) &&
      (!parent || this.compare(parent, this.array[currentIndex]))
    ) {
      this.heapifyDown(currentIndex);
    } else {
      this.heapifyUp(currentIndex);
    }
  }
  // Utility functions
  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }
  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }
  getLeftchild(parentIndex) {
    return this.array[this.getLeftChildIndex(parentIndex)];
  }
  getRightChild(parentIndex) {
    return this.array[this.getRightChildIndex(parentIndex)];
  }
  getparent(childIndex) {
    return this.array[this.getParentIndex(childIndex)];
  }
  hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 0;
  }
  hasLeftChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.array.length;
  }
  hasRightChild(parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.array.length;
  }
  swap(indexOne, indexTwo) {
    let temp = this.array[indexOne];
    this.array[indexOne] = this.array[indexTwo];
    this.array[indexTwo] = temp;
  }
  print() {
    console.log(this.array);
  }
}
// Class MinHeap
class MinHeap extends Heap {
  constructor() {
    let compare = function(x, y) {
      return x < y;
    };
    super(compare);
  }
}
// Impementaion of MinHeap

let heap = new MinHeap();

heap.add(2);
heap.add(8);
heap.add(-1);
heap.add(11);
heap.add(5);
heap.print();

heap.remove(11);
heap.print();

heap.print();
