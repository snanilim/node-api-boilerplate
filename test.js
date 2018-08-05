class animal{
    constructor(message){
        this.message = message;
    }
}


class cat extends animal{
    constructor({message}){
        super({message});
    }
    
}

var pet = new cat({message:'messagessss'});

console.log(pet.message);
