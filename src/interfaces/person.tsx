export interface person {
    name: string
    shirtColor: string
}


const alex: person = {name: "alex", shirtColor: "red"}
const {name, shirtColor} = alex
console.log(name);

