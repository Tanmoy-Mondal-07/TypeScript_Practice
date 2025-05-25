let user: [string, number, boolean]
user = ["me", 50, true]
user = ["me", 50, "true"]

type typeUser = [string, number, boolean] // custome type
const newUser: typeUser = ["me", 50, true]

let users: (string | number)[] = [55, "arabeb", true, "argrebe", 25]

let typeEnum: "public" | "friends" | "privet"
typeEnum = "public" //just like a enum

