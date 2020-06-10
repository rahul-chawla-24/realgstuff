class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(value) {
    let node = new Node(value);
    if (!this.head && !this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  remove(value) {
    if (this.head.value == value) {
      this.head.next = this.head;
    }
    let current = this.head;
    let prev;
    while (current) {
      if (current.next && current.next.value == value) {
        current.next = current.next.next;
      }
      prev = current;
      current = current.next;
    }
    this.tail = prev;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
    console.log("Tail : ", this.tail);
  }
}

let head = new LinkedList();

head.push(1);
head.push(2);
head.push(6);
head.push(3);
head.push(4);
head.push(5);
head.push(6);
head.remove(6);
head.print();
