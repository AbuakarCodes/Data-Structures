import { MinHeap } from "../Heap/Minheap.js";

export class PriorityQueue {
    constructor() {
        this.heap = new MinHeap((a, b) => a.priority < b.priority);
    }

    enqueue(value, priority) {
        this.heap.insert({ value, priority });
    }

    dequeue() {
        if (this.heap.isEmpty()) return null;

        const min = this.heap.getMin();
        this.heap.remove();

        return min;
    }

    peek() {
        return this.heap.getMin();
    }

    isEmpty() {
        return this.heap.isEmpty();
    }

    size() {
        return this.heap.getSize();
    }
}

const pq = new PriorityQueue();

// add tasks
pq.enqueue("Write code", 3);
pq.enqueue("Fix bugs", 1);
pq.enqueue("Read docs", 2);
pq.enqueue("Push to git", 1);

// process in priority order
console.log(pq.dequeue()); 
// { value: "Fix bugs", priority: 1 }

console.log(pq.dequeue()); 
// { value: "Push to git", priority: 1 }

console.log(pq.dequeue()); 
// { value: "Read docs", priority: 2 }

console.log(pq.dequeue()); 
// { value: "Write code", priority: 3 }