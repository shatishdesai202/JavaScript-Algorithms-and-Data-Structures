class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  traverse() {
    let current = this.head;
    if (!current) {
      return console.error("List is Empty");
    }
    while (current) {
      console.log("traverse " + JSON.stringify(current));
      current = current.next;
    }
  }

  push(value) {
    let newNode = new Node(value);
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

  pop() {
    if (!this.head) {
      return "List is empty";
    }
    let currentNode = this.head;
    let newTail = currentNode;
    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }
    return console.log(currentNode);
  }

  removeNodeFromStart() {
    let current = this.head;
    if (!current) {
      return console.log(
        "List is Empty, not performed removeNodeFromStart opretion"
      );
    }
    if (!current.next) {
      this.head = null;
      this.tail = null;
    }
    this.head = current.next;
    this.length--;
    current.next = null;
    console.log("removeNodeFromStart", current);
    return current;
  }

  addNodeFromStart(value) {
    let newNode = new Node(value);
    let current = this.head;

    if (!current) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head = newNode;
      this.head.next = current;
    }
    this.length++;
    return console.log(this);
  }

  getNodeFromSpecificPosition(position) {
    if (position < 0 || position >= this.length)
      return console.log("Out of Bound");
    let counter = 0;
    let current = this.head;
    while (counter !== position) {
      current = current.next;
      counter++;
    }
    return current;
  }

  setValueAtSpecificPosition(position, value) {
    let foundNode = this.getNodeFromSpecificPosition(position);

    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  setNodeAtSpecificPosition(position, value) {
    if (position < 0 || position > this.length) return false;
    if (position === this.length) return !!this.push(value);
    if (position === 0) return !!this.addNodeFromStart(value);

    let newNode = new Node(value);
    let prev = this.getNodeFromSpecificPosition(position - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  removeNodeAtSpecificPosition(position) {
    if (position < 0 || position >= this.length) return undefined;
    if (position === 0) return this.removeNodeFromStart();
    console.log("@@@@@@", this.length);
    if (position === this.length - 1) return this.pop();
    let previousNode = this.getNodeFromSpecificPosition(position - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    console.log("removeNodeAtSpecificPosition    :", removed);
    return removed;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return console.log(arr);
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next = null;
    let previous = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = previous;
      previous = node;
      node = next;
    }
    return this;
  }
}

let list = new SinglyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.pop();

list.removeNodeFromStart(); // 2,3
list.addNodeFromStart(0); //0,2,3
console.log(
  "list.getNodeFromSpecificPosition(0)",
  list.getNodeFromSpecificPosition(1)
); //2

list.setValueAtSpecificPosition(1, "shatish b."); // [ 0,  'shatish b.', 3 ]
list.setNodeAtSpecificPosition(1, "SHATISH B DESAI"); // [ 0, 'SHATISH B DESAI', 'shatish b.', 3 ]
list.removeNodeAtSpecificPosition(1); // [ 0, 'shatish b.', 3 ]

list.traverse();
list.print();
list.reverse();
list.print();
// console.log(list.traverse());
// let SinglyLinkedListInstance = new SinglyLinkedList();
// SinglyLinkedListInstance.push("shatish");
// SinglyLinkedListInstance.push("bharatbhai");
// SinglyLinkedListInstance.push("desai");
// SinglyLinkedListInstance.setNodeAtSpecificPosition(0, "Mr.");
// console.log(
//   "SinglyLinkedListInstance.removeNodeAtSpecificPosition(1)",
//   SinglyLinkedListInstance.removeNodeAtSpecificPosition(1)
// );

// console.log(SinglyLinkedListInstance.print());
// console.log(SinglyLinkedListInstance.reverse());
// console.log(SinglyLinkedListInstance.print());
// SinglyLinkedListInstance.setValueAtSpecificPosition(0, "123456789");
// SinglyLinkedListInstance.push(".");
// SinglyLinkedListInstance.push("desai");
// SinglyLinkedListInstance.pop();
// SinglyLinkedListInstance.pop();
// SinglyLinkedListInstance.pop();
// SinglyLinkedListInstance.removeNodeFromStart();
// SinglyLinkedListInstance.removeNodeFromStart();
// SinglyLinkedListInstance.removeNodeFromStart();
// SinglyLinkedListInstance.addNodeFromStart("shatish");
// SinglyLinkedListInstance.addNodeFromStart("bharatbhai");
// SinglyLinkedListInstance.addNodeFromStart("desai");

// console.log(
//   "SinglyLinkedListInstance.getNodeFromSpecificPosition(1)",
//   SinglyLinkedListInstance.getNodeFromSpecificPosition(1)
// );
// SinglyLinkedListInstance.traverse();
