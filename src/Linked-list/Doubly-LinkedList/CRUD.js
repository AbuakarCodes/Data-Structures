class node {
    constructor(val, prev = null, next = null) {
        this.prev = prev
        this.value = val
        this.next = next
    }
}

function append(value) {
    const newNode = new node(value)
    if (!this.head) {
        this.head = this.tail = newNode
    } else {
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
    }
    this.length++
}

function prepend(value) {

    if (!this.head) return this.append(value)

    const newNode = new node(value)
    newNode.next = this.head
    this.head.prev = newNode
    this.head = newNode


    this.length++
}

function removeAtIndex(index) {
    if (index < 0 || index >= this.length) return -1

    if (index === 0) {
        this.length--
        return this.head = this.head.next
    }

    let counter = 0
    let currentElement = this.head
    while (counter < index - 1) {
        currentElement = currentElement.next
        counter++
    }

    currentElement.next = currentElement.next.next
    currentElement.prev = currentElement
    this.length--
    return this.head
}

function getAtreverseIndex(param) {
    if (param < 0 || param > this.length) return -1
    if (param === 0) {
        return this.tail
    }

    let counter = 0
    let currentElement = this.tail
    while (counter < param) {
        currentElement = currentElement.prev
        counter++
    }

    return currentElement

}

function printForward() {
    let values = []

    let firstElement = this.head
    for (let index = 0; index < this.length; index++) {
        if (index === 0) values.push(firstElement.value)
        else {
            firstElement = firstElement.next
            values.push(firstElement.value)
        }
    }
    return values
}

export { append, prepend, removeAtIndex, getAtreverseIndex, printForward }