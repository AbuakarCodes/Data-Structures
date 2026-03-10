class stack {
    constructor() {
        this.Array = []
    }
    push(value) {
        this.Array.push(value)
        this.Array
    }

    pop(){
        if (this.Array.length < 1)  throw Error("Empty stack")
        this.Array.pop()
    }

    size(){
        return this.Array.length
    }
    print(){
        console.log(this.Array)
    }
}

let stack1 = new stack();
stack1.push(1)
stack1.push(2)
stack1.push(3)
stack1.pop()
console.log(stack1) 