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
  //Add an item at the start
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

  set(index, val) {
    let newNode = this.get(index);
    if (newNode != null) {
      newNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return null;

    if (index === 0) {
      this.unshift(val);
    } else if (index === this.length) {
      this.push(val);
    } else {
      let prevNode = this.get(index - 1);
      let newNode = new Node(val);
      let nextNode = prevNode.next;
      prevNode.next = newNode;
      newNode.prev = prevNode;
      newNode.next = nextNode;
      nextNode.prev = newNode;
      console.log(this);
    }
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === 0) {
      this.shift();
    } else if (index === this.length - 1) {
      this.pop();
    } else {
      let foundNode = this.get(index);
      let prevNode = foundNode.prev;
      let afterNode = foundNode.next;
      prevNode.next = afterNode;
      afterNode.prev = prevNode;

      foundNode.prev = null;
      foundNode.next = null;
      console.log(this);
      this.length--;
      return foundNode;
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

console.log(list.remove(2));
