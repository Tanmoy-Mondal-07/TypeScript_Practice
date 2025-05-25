"use strict";
console.log("typescript");
// class User {
//     public email: string // by default everything is public
//     name: string
//     private readonly city: string = "city" // readonly and not accessable outside the class
//     constructor(email: string, name: string) {
//         this.email = email
//         this.name = name
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "city";
    }
    deleteToken() {
        console.log("token deleted");
    }
    get getEmail() {
        return `email ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        this._courseCount = courseNum;
    }
}
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const clash = new User("abcd@gmail.com", "clash");
