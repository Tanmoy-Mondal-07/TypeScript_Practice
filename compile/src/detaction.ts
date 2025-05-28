function detacttype(val: number | string) {
    if (typeof val === "string") {
        return val.toLowerCase()
    }
    return val + 3
}

function provideId(id: string | null) {
    if (!id) {
        console.log('messing id');
        return
    }
    return id.toLowerCase()
}

interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isadmin(account: User | Admin) {
    if ("isAdmin" in account) {
        return account.isAdmin
    }
}

function isadmin0(account: Date | string) {
    if (account instanceof Date) {
        return account.toUTCString()
    }
}

type Fish = { swim: () => void }
type Bird = { fly: () => void }

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined // return true
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet
        return "pet is fish"
    }
}

interface Circle {
    kind: "circle"
    radius: number
}

interface Square {
    kind: "square"
    side: number
}

interface Rectangle {
    kind: "rectangle"
    height: number
    width: number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
    }
    // return shape.side * shape.side
}

function getArea(shape: Shape){
    switch (shape.kind) {
        case "circle":
            
            break;

        case "square":
            
            break;
            
        case "rectangle":
            
            break;

        default:
            const defaultshape: never = shape
            return defaultshape
    }
}