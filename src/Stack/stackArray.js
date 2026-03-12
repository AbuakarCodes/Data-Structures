export class stack {
    constructor() {
        this.Array = []
    }
    push(value) {
        this.Array.push(value)
        return value
    }

    pop() {
        if (this.Array.length < 1) throw Error("Empty stack")
        let popedVAlue = this.Array[this.Array.length - 1]
        this.Array.pop()
        return popedVAlue
    }

    size() {
        return this.Array.length
    }
    print() {
        console.log(this.Array)
    }
}

let stack1 = new stack();
stack1.push(1)
stack1.push(2)
stack1.push(3)
stack1.pop()

// console.log(stack1.push("Zahid"))
// console.log(stack1.push("abubakar"))
// console.log(stack1.pop())

// console.log(stack1.Array)