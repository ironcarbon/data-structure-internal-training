//STACKS & QUEUES

//Stacks
// google
// udemy
// youtube

//Arrays -- allow cache locality (accessing items are next to each other it is better)


// Linked Lists (they are scattered all over the memory) ---- extra memory associated with them bcs it hold on to those pointers.But they also have more dynamic memory.



//Queues

//Matt--Joy--Samir--Pavel

//Arrays -- never built with array
//Linked Lists



class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top;
    }
    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.top) {
            return null;
        }
        if (this.top === this.bottom) {
            this.bottom = null;
        }

        //const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return this;
    }
}

const myStack = new Stack();
console.log(myStack)
myStack.peek()
myStack.push('google')
myStack.push('udemy')
myStack.push('discord')
//myStack.peek()
myStack.pop();
myStack.peek();