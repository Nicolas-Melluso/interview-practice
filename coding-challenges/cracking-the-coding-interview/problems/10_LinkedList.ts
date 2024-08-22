// 10. *Implement a Linked List*;

// Create the data structure with the corresponding initial functions:

export type Node<T> = {
  next?: Node<T> | undefined;
  value: T;
};

export class LinkedList<T> {
  head: Node<T> | undefined;
  tail: Node<T> | undefined;
  length: number;

  constructor(head?: Node<T>) {
    if (head) {
      this.head = head;
      this.tail = head;
      this.length = 1;
    }
  }

  push(value: T) {
    const newNode: Node<T> = { value };

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  filter(callback: (value: T) => boolean): LinkedList<T> {
    const filteredList = new LinkedList<T>();
    let current = this.head;
    while (current) {
      if (callback(current.value)) {
        filteredList.push(current.value);
      }
      current = current.next;
    }
    return filteredList;
  }

  visit(callback: (value: T) => void): void {
    let current = this.head;
    while (current) {
      callback(current.value);
      current = current.next;
    }
  }

  remove(value: T): void {
    if(!this.head) {
      return;
    }

    if(this.head.value === value) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    let current = this.head;
    while(current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        if (!current.next) {
          this.tail = current;
        }
        this.length--;
        return;
      }
      current = current.next;
    }
  }

  merge(otherList: LinkedList<T>) {
    if (!otherList.head) return;

    if (!this.head) {
      this.head = otherList.head;
      this.tail = otherList.tail;
    } else {
      this.tail!.next = otherList.head;
      this.tail = otherList.tail;
    }
    this.length += otherList.length;
  }

  print(): void {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  // extra

  find(value: T): Node<T> | undefined {
    let current = this.head;

    while (current) {
        if (current.value === value) {
            return current;
        }
        current = current.next;
    }

    return undefined;
  }

  get(index: number): Node<T> | undefined {
    let current = this.head;
    let count = 0;

    while (current) {
        if (count === index) {
            return current; 
        }
        count++;
        current = current.next;
    }

    return undefined;
  }
  
  iterator(): LinkedListIterator<T> {
    return new LinkedListIterator(this.head);
}
}

export class LinkedListIterator<T> implements Iterator<T> {
  private current: Node<T> | undefined;

  constructor(head: Node<T> | undefined) {
      this.current = head;
  }

  next(): IteratorResult<T> {
      if (this.current) {
          const value = this.current.value;
          this.current = this.current.next;
          return { value: value, done: false };
      } else {
          return { value: undefined, done: true };
      }
  }
}