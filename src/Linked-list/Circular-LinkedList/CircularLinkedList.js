import { append, prepend } from "./Circular_CRUD.js"

class Circular_LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
        this.append = append
        this.prepend = prepend
    }
}
const data = new Circular_LinkedList()
data.append("zahid")
data.append("abubakar")
data.prepend("Mujeed") 
console.log(data)