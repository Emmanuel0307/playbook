export class pokemon {
    constructor (name){
        this.name = name
    }

    sayHello(message){
        console.log("Mi pokemon",`${this.name}` , "te saluda!!!");
    }
    sayMessage(message1){
        console.log(`Mi pokemon ${this.name} dice ${message1}`)
    }
}