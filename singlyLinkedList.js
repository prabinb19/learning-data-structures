//piece of data - val
//reference to the next node- next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  //Add to the beginning of the Linked List
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //Remove and return the last item of the Linked List
  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      // If the list becomes empty after popping, update the head as well
      this.head = null;
    }
    return current.val;
  }

  //Remove and return the first node from the Linked List
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) {
      // If the list becomes empty after popping, update the head as well
      this.head = null;
      this.tail = null;
    }
    return currentHead.val;
  }

  unshift(val) {
    let newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
      this.length++;
    }
    return this;
  }

  getVal(val) {
    if (val < 0 || val >= this.length) return null;
    let counter = 0;
    let current = this.head;

    while (counter !== val) {
      current = current.next;
      counter++;
    }

    return current;
  }

  setVal(index, newVal) {
    let oldVal = this.getVal(index);
    if (!oldVal) {
      return false;
    } else {
      oldVal.val = newVal;
    }
    console.log(this);
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    if (index === this.length) {
      this.push(val); //Insert at the end
    } else if (index === 0) {
      this.unshift(val); //Insert at the beginning
    } else {
      let newNode = new Node(val);
      let prevNode = this.getVal(index - 1); //Getting the node before the insertion point
      let currentNode = prevNode.next; //Getting the node at the insertion point

      prevNode.next = newNode;
      newNode.next = currentNode;
      this.length++;
    }
    console.log(this);
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return null;

    let removedNode;
    if (index === this.length) {
      removedNode = this.pop(); //Insert at the end
    } else if (index === 0) {
      removedNode = this.shift(); //Insert at the beginning
    } else {
      let prevNode = this.getVal(index - 1);
      removedNode = prevNode.next;
      prevNode.next = prevNode.next.next;
      this.length--;
    }
    return removedNode.val;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

let list = new SinglyLinkedList();
list.push(8);
list.push(1);
list.push(3);
list.push(900);

console.log(list.reverse());
