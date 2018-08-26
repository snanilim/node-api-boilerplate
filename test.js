// class animal {
//     constructor(message) {
//         this.message = message;
//     }
// }


// class Cat extends animal {
//     constructor({ message }) {
//         super({ message });
//     }
// }

// const pet = new Cat({ message: 'messagessss' });

// console.log(pet.message);

// const a = 1;

// const foo = () => {
//     const a = 3;
//     console.log(a);
// };

// foo();
// console.log(a);
const inc = n => n + 1;
const double = n => n + 1;
console.log(inc(double(2)));
