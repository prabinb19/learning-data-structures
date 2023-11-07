class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return undefined;
    let current = this.root;
    while (true) {
      if (value === current.value) {
        return current;
      } else {
        if (value < current.value) {
          if (current.left === null) {
            return false;
          } else {
            current = current.left;
          }
        } else {
          if (current.right === null) {
            return false;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  //SEARCHINGN IN TREES
  // Breadth First Search
  //Going from siblings nodes to sibling nodes
  BFS() {
    let data = [],
      queue = [],
      node = this.root;

    queue.push(this.root);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  //Depth First Search goes down from the root searching
  //PreOrder DFS searches all of left first and moves to the right
  PreOrderDFS() {
    let visited = [];
    let current = this.root;

    function helperNode(node) {
      if (node === null) return;
      visited.push(node.value);
      if (node.left != null) helperNode(node.left);
      if (node.right != null) helperNode(node.right);
    }

    helperNode(current);

    return visited;
  }
  //Search where you visit all the children first (left --> right) before the root
  PostOrderDFS() {
    let visited = [];
    let current = this.root;

    function helperNode(node) {
      if (node === null) return undefined;
      if (node.left != null) helperNode(node.left);
      if (node.right != null) helperNode(node.right);
      visited.push(node.value);
    }
    helperNode(current);
    return visited;
  }

  // It explores the left subtree, visits the current node, and then explores the right subtree in a binary tree."
  InOrderDFS() {
    let visited = [];
    let current = this.root;

    function helperNode(node) {
      if (node === null) return undefined;
      if (node.left != null) helperNode(node.left);
      visited.push(node.value);
      if (node.right != null) helperNode(node.right);
    }
    helperNode(current);
    return visited;
  }
}

let tree = new BinarySearchTree();

tree.insert(70);
tree.insert(62);

tree.insert(54);
tree.insert(64);
tree.insert(52);
tree.insert(57);
tree.insert(56);
tree.insert(77);
tree.insert(75);
tree.insert(81);
tree.insert(80);
tree.insert(82);

console.log(tree.PostOrderDFS());
