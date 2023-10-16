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
}

const list = new DoublyLinkedList();

list.push(1);
list.push(3);
list.push(6);
list.push(1000);
console.log(list.push(2));
