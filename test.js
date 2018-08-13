class animal {
    constructor(message) {
        this.message = message;
    }
}


class Cat extends animal {
    constructor({ message }) {
        super({ message });
    }
}

const pet = new Cat({ message: 'messagessss' });

console.log(pet.message);
