import { addAtIndex, append, getAtIndex, prepend, removeAtIndex } from "./BasicLinkedListOperations.js"

class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
        this.append = append
        this.prepend = prepend
        this.addAtIndex = addAtIndex
        this.getAtIndex = getAtIndex
        this.removeAtIndex = removeAtIndex
    }


}




const data = new LinkedList()



data.append(10)
data.append(11)
data.append(12)

data.prepend(111)
data.prepend(112)


data.addAtIndex(2, "abubakar")

data.removeAtIndex(2)
data.removeAtIndex(1)

data.getAtIndex(1)

console.log(data)

