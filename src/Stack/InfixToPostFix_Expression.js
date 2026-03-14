import { stack } from "./stackArray.js";

export function InfixtopElementostFix_Expression(params) {
    const Infix = params.split("")
    let PostFix = []
    const Stack = new stack()

    for (let index = 0; index < Infix.length; index++) {
        const element = Infix[index];

        if (!isNaN(element)) {
            PostFix.push(element)
        }
        else {
            while (!Stack.isEmpty() && hasHigherPrecedence(Stack.topElement(), element)) {
                let a = Stack.pop()
                PostFix.push(a)
            }
            PostFix.push(element)
        }

    }
    for (let index = 0; index < Stack.Array.length; index++) {
        const element = Stack.Array[index];
        PostFix.push(element)
    }
    return PostFix.join("")
}

function hasHigherPrecedence(op1, op2) {
    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
        '^': 3
    };

    return precedence[op1] > precedence[op2];
}


console.log(InfixtopElementostFix_Expression("1*2+3"))