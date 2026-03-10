import { append, josephusProblem, prepend, removeAtIndex } from "./Circular_CRUD.js"

class Circular_LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
        this.append = append
        this.prepend = prepend
        this.removeAtIndex = removeAtIndex
    }
}
const data = new Circular_LinkedList()
// data.prepend("Mujeed") 
// data.append("zahid")
// data.append("abubakar")


const result =  josephusProblem(data,0)
console.log(result.removeAtIndex(0))

 
console.log(data)