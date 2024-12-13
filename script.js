class l1 {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(value) {
        const newl1 = new l1(value);
        newl1.next = this.head;
        this.head = newl1;
    }

    addLast(value) {
        const newl1 = new l1(value);
        if (!this.head) {
            this.head = newl1;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newl1;
    }

    remove(value) {
        if (!this.head) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
        }
    }

    find(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) return current;
            current = current.next;
        }
        return null;
    }

    printList() {
        let current = this.head;
        const result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join('.'));
    }
}
const list = new LinkedList();

list.addFirst(140);
list.addFirst(60);
list.addLast(50);
list.addLast(72);
list.printList(); 
list.remove(10);
list.printList();
console.log(list.find(50));