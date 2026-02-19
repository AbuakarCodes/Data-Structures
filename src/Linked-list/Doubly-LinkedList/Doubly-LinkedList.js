import { append, getAtreverseIndex, prepend, removeAtIndex, printForward } from "./CRUD.js"

class Doubly_LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
        this.append = append
        this.prepend = prepend
        this.removeAtIndex = removeAtIndex
        this.getAtreverseIndex = getAtreverseIndex
       this.printForward = printForward
    }



}

const data = new Doubly_LinkedList()
data.append("Elihi buksh")
data.append("Majeed")
data.append("Zahid")
data.append("abubakar")
data.append("Ashar")
const values =  data.printForward()
const IndexdValue = data.getAtreverseIndex(3).value
data.removeAtIndex(0)
console.log(data) 



