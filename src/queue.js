class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

export default class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    }
    
    if (!this.tail) {
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    const headNode = Object.assign(this.head, {});

    if (this.head !== this.tail) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return headNode.value;
  }

  toString() {
    if (!this.head === null) {
      return '[]';
    }

    let currentNode = this.head; 
    const beginning = '[';
    const ending = ']';
    let values = '';

    while (currentNode) {
      values += currentNode.value;
      
      if (currentNode.next) {
        values += ', ';
      }

      currentNode = currentNode.next;
    }
  
    return `${beginning}${values}${ending}`;
  }
}
