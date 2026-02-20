import { append } from "./Circular_CRUD.js"

class Circular_LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
        this.append = append
    }
}
const data = new Circular_LinkedList()
data.append("abubakar")
data.append("zahid")
console.log(data)