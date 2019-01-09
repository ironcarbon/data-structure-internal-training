//Stacks with array solution

//Last In First Out  LIFO
class Stack {
    constructor() {
        this.array = []
    }

    peek() {
        return this.array[this.array.length - 1]

    }

    push(value) {
        this.array.push(value);
        return this;

    }
    pop() {
        this.array.pop(this.array.length - 1)
        return this;
    }
}

const myStack = new Stack();

myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.pop();
myStack.peek()

