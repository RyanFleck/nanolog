export function sum(a, b) {
    return a + b;
}

export function product(a, b) {
    return a * b;
}

export function difference(a, b) {
    return a - b;
}

export function quotient(a, b) {
    return a / b;
}

export class Test {
    constructor(name) {
        this.name = name;
        this.id = 123;
    }

    hello() {
        console.log(this.name);
    }
}
