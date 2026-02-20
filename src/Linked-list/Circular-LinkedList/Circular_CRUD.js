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

function removeAtIndex(index) {
    if (index > this.length) return -1
    if (index === 0) {
        this.length--
        this.head = this.head.next
        this.tail.next = this.head
        return
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




export { append, prepend, removeAtIndex }