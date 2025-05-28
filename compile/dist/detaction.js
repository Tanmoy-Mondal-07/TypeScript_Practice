"use strict";
function detacttype(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log('messing id');
        return;
    }
    return id.toLowerCase();
}
function isadmin(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
function isadmin0(account) {
    if (account instanceof Date) {
        return account.toUTCString();
    }
}
function isFish(pet) {
    return pet.swim !== undefined; // return true
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "pet is fish";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    // return shape.side * shape.side
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            break;
        case "square":
            break;
        case "rectangle":
            break;
        default:
            const defaultshape = shape;
            return defaultshape;
    }
}
