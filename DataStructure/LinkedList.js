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
}

const linkedList = new LinkedList();
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.prepand("desai");
linkedList.prepand("Shatish");

linkedList.traverseWithArray();
