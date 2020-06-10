// solution from line 105
class Node {
  constructor(value = null) {
    this.left = null;
    this.right = null;
    this.parent = null;
    this.value = value;
  }

  insert(value) {
    if (!this.value) {
      this.value = value;
      return;
    }

    // Inserting to the left for values less than the current value
    if (value <= this.value) {
      if (this.left) {
        return this.left.insert(value);
      } else {
        this.left = new Node(value);
        this.left.parent = this;
      }

      // Insert to the right for the values greater than the current value
    } else {
      if (this.right) {
        return this.right.insert(value);
      } else {
        this.right = new Node(value);
        this.right.parent = this;
      }
    }
  }

  find(value) {
    if (this.value === value) {
      return this;
    }

    if (value < this.value && this.left) {
      return this.left.find(value);
    }

    if (value > this.value && this.right) {
      return this.right.find(value);
    }

    return null;
  }

  findMin(value) {
    if (!this.left) {
      return this;
    } else {
      return this.left.findMin();
    }
  }

  printInOrder(value) {
    if (this.left) {
      this.left.printInOrder();
    }

    console.log(this.value);

    if (this.right) {
      this.right.printInOrder();
    }
  }
}

class BST {
  constructor() {
    this.root = new Node();
  }

  insert(value) {
    this.root.insert(value);
  }

  find(value) {
    return this.root.find(value);
  }

  findMin(value) {
    return this.root.findMin();
  }

  printInOrder(value) {
    this.root.printInOrder();
  }
}

let b1 = new BST();
b1.insert(100);
b1.insert(50);
b1.insert(150);
b1.insert(80);
b1.insert(200);
b1.insert(70);
b1.insert(85);
b1.printInOrder();

class Solution {
  constructor() {}
  calcDiameter(bst) {
    return this.calcDiameterhHelper(bst.root);
  }

  calcDiameterhHelper(root) {
    // console.log(root);
    if (root == null) {
      return 0;
    }
    let optionOne = this.calcHeight(root.left) + this.calcHeight(root.right);
    let optionTwo = this.calcDiameterhHelper(root.left);
    let optionThree = this.calcDiameterhHelper(root.right);

    return Math.max(optionOne, Math.max(optionTwo, optionThree));
  }

  calcHeight(root) {
    if (root == null) {
      return 0;
    }
    return (
      1 + Math.max(this.calcHeight(root.left), this.calcHeight(root.right))
    );
  }
}

const diameter = root => {
  if (root == null) {
    return 0;
  }
  let optionOne = height(root.left) + height(root.right);
  let optionTwo = diameter(root.left);
  let optionThree = diameter(root.right);

  return Math.max(optionOne, Math.max(optionTwo, optionThree));
};

const height = root => {
  if (root == null) {
    return 0;
  }
  return 1 + Math.max(height(root.left), height(root.right));
};

//  console.log(b1)
let solution = new Solution();
// console.log(diameter(b1.root));
console.log(solution.calcDiameter(b1));

// Time complexity of the solution is based upon height of the tree
// i.e = O(nlogn) in the case when tree is balanced
// and O(n*n) in its worst case which is if tree has nodes only in one direction
//  so we can say time complexity is O(n*h) where h is height

// Space complexity is O(1) only constant Space required
