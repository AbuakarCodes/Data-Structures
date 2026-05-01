class MinHeap {
    constructor() {
        this.array = [null];
        this.currentSize = 0;
    }

    // ── helpers ──────────────────────────────────────────────
    isEmpty() { return this.currentSize === 0; }
    getSize() { return this.currentSize; }
    getMin() { return this.isEmpty() ? null : this.array[1]; }


    insert(x) {
        if (x == null) return
        const hole = ++this.currentSize
        this.array[hole] = x
        this.prelocateUP(hole)
    }

    remove(value) {

        let idx;

        // find index
        if (value != null) {
            idx = this.array.indexOf(value);
            // indexOf return -1 if valune not found
            if (idx === -1) return;
        } else {
            idx = 1
        }

        let lastElem = this.array.pop();

        // if removing last element
        if (idx === this.array.length) return;

        this.array[idx] = lastElem;

        let parentIdx = Math.floor(idx / 2);

        // decide direction
        if (idx > 1 && this.array[idx] < this.array[parentIdx]) this.percolateUp(idx);
        else this.percolateDown(idx);

    }

    update(value, newValue) {

        let idx = this.array.indexOf(value);

        if (idx === -1) return;

        this.array[idx] = newValue;

        let parentIdx = Math.floor(idx / 2);

        if (idx > 1 && this.array[idx] < this.array[parentIdx]) this.percolateUp(idx);
        else this.percolateDown(idx);

    } 

     prelocateUP(index) {
        if (index == null || index == undefined) throw Error("index is requied")

        while (hole > 1 && this.array[hole] < this.array[Math.floor(hole / 2)]) {
            [this.array[hole], this.array[Math.floor(hole / 2)]] = [this.array[Math.floor(hole / 2)], this.array[hole]]
            hole = this.array[Math.floor(hole / 2)]
        }

    }

    perculatedown(index) {
        if (index == null || index > this.array.length) throw Error("valid index is requied")

        const size = this.array.length - 1

        while (2 * index <= size) {
            // Check if left child exists. If the left child does not exist, the right child cannot exist either,
            // as that would violate the complete binary tree property of a min-heap. Therefore, if the left child
            // exists, it is guaranteed to be within the array bounds. We use (length - 1) to ignore index 0.

            let left = 2 * index
            let right = 2 * index + 1
            let SmlChild = left

            if (right <= size && this.array[right] <= this.array[left]) {
                SmlChild = right
            }

            if (this.array[SmlChild] >= this.array[index]) break

            [this.array[SmlChild], this.array[index]] = [this.array[index], this.array[SmlChild]]

            index = SmlChild
        }

    }
}