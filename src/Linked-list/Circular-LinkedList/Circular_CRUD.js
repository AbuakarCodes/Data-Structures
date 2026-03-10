class node {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}


function append(value) {
    const newNode = new node(value)
    if (this.head == null) {
        this.head = this.tail = newNode
        newNode.next = newNode
    } else {
        let currentElement = this.head
        while (currentElement.next != this.head) {
            currentElement = currentElement.next
        }

        currentElement.next = newNode
        newNode.next = this.head
        this.tail = newNode
    }
    this.length++
}

function prepend(value) {

    const newNode = new node(value)
    if (this.head == null) this.append(value)
    else {
        newNode.next = this.head
        this.tail.next = newNode
        this.head = newNode
        this.length++
    }
}

// function removeAtIndex(index) {
//     if (index > this.length) return -1
//     if (index === 0) {
//         this.length--
//         this.head = this.head.next
//         this.tail.next = this.head
//         return
//     }


//     let counter = 0
//     let currentElement = this.head
//     while (counter < index - 1) {
//         currentElement = currentElement.next
//         counter++
//     }

//     currentElement.next = currentElement.next.next

//     this.length--
//     return this.head
// }

function removeAtIndex(index) {

    if (index < 0 || index >= this.length) return -1;

    // Case: only one node
    if (this.length === 1) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        return;
    }

    // Case: remove head
    if (index === 0) {
        this.head = this.head.next;
        this.tail.next = this.head;
        this.length--;
        return;
    }

    let current = this.head;
    let counter = 0;

    while (counter < index - 1) {
        current = current.next;
        counter++;
    }

    // If removing tail
    if (current.next === this.tail) {
        this.tail = current;
    }

    current.next = current.next.next;
    this.length--;
}

function josephusProblem(person, k) {

    let index = 0;

    while (person.length > 1) {
        index = (index + k - 1) % person.length;
        person.removeAtIndex(index);
    }

    return person.head; // or person[0] depending on structure
}


export { append, prepend, removeAtIndex, josephusProblem }