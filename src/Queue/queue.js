class Queue {
    constructor() {
        this.array = []
    }
    enqueue(value) {
        this.array.push(value)
    }
    dequeue() {
        if (this.isEmpty()) throw new Error("Queue is Empty")
        return this.array.splice(0, 1)
    }
    peek(){
        if (this.isEmpty()) throw new Error("Queue is Empty")
            return this.array[0]
    }
    size(){
         return this.array.length
    }
    isEmpty() {
        return Boolean(!this.array.length)
    }
}

// Assume your Queue class already exists
// Example: const q = new Queue();

const q = new Queue();

console.log("Initial Queue State");

// Test isEmpty()
console.log(q.isEmpty()); 
// Expected: true

// Test size()
console.log(q.size()); 
// Expected: 0



console.log("\n--- Enqueue Operations ---");

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

console.log(q.size()); 
// Expected: 3

console.log(q.peek()); 
// Expected: 10 (front element)



console.log("\n--- Dequeue Operations ---");

console.log(q.dequeue()); 
// Expected: 10

console.log(q.peek()); 
// Expected: 20

console.log(q.size()); 
// Expected: 2



console.log("\n--- More Enqueue ---");

q.enqueue(40);
q.enqueue(50);

console.log(q.size()); 
// Expected: 4

console.log(q.peek()); 
// Expected: 20



console.log("\n--- Dequeue Until Empty ---");

console.log(q.dequeue()); 
// Expected: 20

console.log(q.dequeue()); 
// Expected: 30

console.log(q.dequeue()); 
// Expected: 40

console.log(q.dequeue()); 
// Expected: 50



console.log("\n--- Final State ---");

console.log(q.isEmpty()); 
// Expected: true

console.log(q.size()); 
// Expected: 0

console.log(q.peek()); 
// Expected: undefined OR null (depends on your implementation)

console.log(q.dequeue()); 
// Expected: undefined OR null (queue already empty)