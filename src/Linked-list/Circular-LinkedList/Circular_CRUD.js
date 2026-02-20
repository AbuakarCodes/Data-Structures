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




export { append, prepend }