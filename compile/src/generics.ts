const score1: Array<number> = []
const score2: Array<string> = []

function id1(val: boolean | number): boolean | number {
    return val
}

function id2(val: any): any {
    return val
}

function id3<Type>(val: Type): Type {
    return val
}

function id4<T>(val: T): T {
    return val
}

function getserchproducts<T>(products: T[]): T {
    return products[0]
}

const getMoresearcgproducts = <T,>(products: T[]): T => {
    return products[0]
}

interface database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends database>(v1: T, v2: U): object {
    return {
        v1,
        v2
    }
}

// anotherFunction(5, {})

interface Ouiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T> {
    public cart: T[] = []

    addToCart(products: T) {
        this.cart.push(products)
    }
}