import { stack } from "./stackArray.js";

function postFixEval(param) {
    let expression = param.split("")
    let Stack = new stack()

    for (let index = 0; index < expression.length; index++) {
        const element = expression[index];

        if (!isNaN(element)) {
            Stack.push(element)
        } else {
            let operand2 = Stack.pop()
            let operand1 = Stack.pop()

            let evaluation = eval(`${operand1} ${element} ${operand2}`)
            Stack.push(evaluation)
        }
    }
    return Stack.pop()

}

console.log(postFixEval("12+6-"))
console.log(postFixEval("23+5*"))