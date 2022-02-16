class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const newNode = { value: value, next: null };
    if (!this.head) {
      this.head = newNode;
    }
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  }

  traverseWithArray() {
    const linkedListArray = [];

    let head = this.head;

    while (head) {
      linkedListArray.push(head);
      head = head.next;
    }
    linkedListArray.map((val, index) =>
      console.log(`${index} => ${val.value}`)
    );
  }

  prepand(value) {
    let newNode = { value: value, next: null };
    newNode.next = this.head;
    this.head = newNode;
  }

  deleteNodeWithSpecificValue(value) {
    if (!this.head) {
      return;
    }

    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let current = this.head;
    while (current && current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }

    if (this.tail.value === value) {
      this.tail = current.next;
    }
  }

  find(value) {
    if (!this.head) {
      return;
    }

    let current = this.head;
    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
  }

  insertAfter(value, afterValue) {
    const existingNode = this.find(afterValue);

    if (existingNode) {
      let newNode = { value: value, next: existingNode.next };
      existingNode.next = newNode;
    }
  }
}

const linkedList = new LinkedList();
linkedList.push(1);
linkedList.push(1);
linkedList.push(2);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
// linkedList.push(4);
// linkedList.prepand("Shatish");
// linkedList.prepand("desai");

// linkedList.deleteNodeWithSpecificValue(4);
// console.log(linkedList.find(2));
linkedList.insertAfter("S",4)

linkedList.traverseWithArray();
