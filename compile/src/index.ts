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
    protected _courseCount = 1

    readonly city: string = "city"
    constructor(
        public email: string,
        public name: string,
        // private userId: string
    ) {}

    private deleteToken(){
        console.log("token deleted");
    }

    get getEmail():string{
        return `email ${this.email}`
    }

    get courseCount():number{
        return this._courseCount
    }

    set courseCount(courseNum:number){
        this._courseCount = courseNum
    }
}

class subUser extends User{
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount =4
    }
}

const clash = new User("abcd@gmail.com", "clash")