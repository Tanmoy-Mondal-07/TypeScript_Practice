interface User {
    email: string,
    userId: number
    googleId?: string
    readonly dbid: number //readonly
    // startTrail: () => string
    startTrail(): string
    getCoupon(cuponname: string): number
}

interface User {
    githubToken: string // re opaning the interface
}

const you: User = {
    email: "ctitku", 
    userId: 5, 
    dbid: 25,
    startTrail: () => {
        return "string"
    },
    getCoupon: (name: "ryvrc") => {
        return 10
    },
    githubToken: "github"
}


interface Admin extends User { // u can extand how much u want to
    role: "admin" | "ta" | "learner"
}

const me: Admin = {
    email: "ctitku", 
    role:"admin",
    userId: 5, 
    dbid: 25,
    startTrail: () => {
        return "string"
    },
    getCoupon: (name: "ryvrc") => {
        return 10
    },
    githubToken: "github"
}