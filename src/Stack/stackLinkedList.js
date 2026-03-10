import { LinkedList } from "../Linked-list/BasicLinkedlist/BasicLinkedList.js";

class stack {
    constructor() {
        this.List = new LinkedList()
    }

    push(value) {
        this.List.prepend(value)
    }

    pop() {
        if (this.List.length < 1) throw Error("Empty stack")
        this.List.removeAtIndex(0)
    }


}

let stack1 = new stack();
stack1.push(1)
stack1.push(2)
stack1.push(3)
stack1.pop()
console.log(stack1) 