
class node {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}


function append(value) {
    const newNode = new node(value)
    if (this.head == null) {
        this.head = newNode
    } else {
        let currentElement = this.head
        while (currentElement.next != null) {
            currentElement = currentElement.next
        }
        currentElement.next = newNode
    }
    this.length++
}


function prepend(value) {
    const newNode = new node(value)
    const prevHead = this.head
    this.head = { value: newNode.value, next: prevHead }

    this.length++
}

function addAtIndex(index, value) {

    if (index === 0) this.prepend(new node(value))
    if (index === this.length) this.append(new node(value))
    if (index > this.length || index === 0) return -1

    const newNode = new node(value)
    let counter = 0
    let currentElement = this.head

    while (counter < index - 1) {
        currentElement = currentElement.next
        counter++
    }

    newNode.next = currentElement.next
    currentElement.next = newNode
    this.length++

}

function getAtIndex(index) {
    if (index === 0) return this.head
    if (index > this.length) return -1

    let currentElement = this.head
    let count = 0
    while (count < index) {
        currentElement = currentElement.next
        count++
    }
    return this.head

}

function removeAtIndex(index) {
    if (index > this.length) return -1
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
    this.length--
    return this.head
}

export { append, removeAtIndex, getAtIndex, addAtIndex, prepend }