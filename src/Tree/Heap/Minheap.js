export class MinHeap {
    constructor(compareFn) {
        this.array = [null];
        this.currentSize = 0;
        this.compare = compareFn || ((a, b) => a < b);
    }

    isEmpty() { return this.currentSize === 0; }
    getSize() { return this.currentSize; }
    getMin() { return this.isEmpty() ? null : this.array[1]; }

    insert(x) {
        if (x == null) return;

        const hole = ++this.currentSize;
        this.array[hole] = x;
        this.prelocateUP(hole);
    }

    remove(value) {
        if (this.isEmpty()) return;

        let idx;

        if (value != null) {
            idx = this.array.indexOf(value);
            if (idx === -1) return;
        } else {
            idx = 1;
        }

        let lastElem = this.array.pop();
        this.currentSize--;

        if (idx > this.currentSize) return;

        this.array[idx] = lastElem;

        let parentIdx = Math.floor(idx / 2);

        if (
            idx > 1 &&
            this.compare(this.array[idx], this.array[parentIdx])
        ) {
            this.prelocateUP(idx);
        } else {
            this.perculatedown(idx);
        }
    }

    update(value, newValue) {
        let idx = this.array.indexOf(value);
        if (idx === -1) return;

        this.array[idx] = newValue;

        let parentIdx = Math.floor(idx / 2);

        if (
            idx > 1 &&
            this.compare(this.array[idx], this.array[parentIdx])
        ) {
            this.prelocateUP(idx);
        } else {
            this.perculatedown(idx);
        }
    }

    prelocateUP(index) {
        if (index == null) throw Error("index is required");

        while (
            index > 1 &&
            this.compare(
                this.array[index],
                this.array[Math.floor(index / 2)]
            )
        ) {
            let parent = Math.floor(index / 2);

            [this.array[index], this.array[parent]] =
                [this.array[parent], this.array[index]];

            index = parent;
        }
    }

    perculatedown(index) {
        if (index == null || index > this.currentSize)
            throw Error("valid index is required");

        const size = this.currentSize;

        while (2 * index <= size) {
            let left = 2 * index;
            let right = 2 * index + 1;
            let SmlChild = left;

            if (
                right <= size &&
                this.compare(this.array[right], this.array[left])
            ) {
                SmlChild = right;
            }

            if (
                !this.compare(
                    this.array[SmlChild],
                    this.array[index]
                )
            ) break;

            [this.array[SmlChild], this.array[index]] =
                [this.array[index], this.array[SmlChild]];

            index = SmlChild;
        }
    }
}