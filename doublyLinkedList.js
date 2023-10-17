class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let temp = new Node(val);
    if (this.head === null) {
      this.head = this.tail = temp;
    } else {
      this.tail.next = temp;
      temp.prev = this.tail;
      this.tail = temp;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.head === null) return undefined;

    let temp = this.tail;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.tail = temp.prev;
      this.tail.next = null;
      temp.prev = null;
      console.log(this);
    }
    this.length--;
    return temp;
  }
  //Shift- remove a node from the beginning

  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.head = temp.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;

    if (index <= this.length / 2) {
      let count = 0;
      let current = this.head;
      while (index != count) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      let count = this.length - 1;
      let current = this.tail;
      while (index != count) {
        current = current.prev;
        count--;
      }
      return current;
    }
  }
}

const list = new DoublyLinkedList();

list.push(1);
list.push(3);
list.push(6);
list.push(1000);
list.push(20);
list.push(49);

console.log(list.get(4));
