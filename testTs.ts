/* let hello: string;
let newNum: boolean;

hello = 'asde';
newNum = '124'; 

console.log(hello); */

// const newFun = function(value1:any, value2?:any):any{
//     return value1 + value2;
// }
// console.log(newFun('a'));

interface userInterface{
    name: string;
    email: string;
    age: number;

}

class User implements userInterface{
    name: string;
    email: string;
    age: number;

    constructor(name: string, email: string, age: number){
        this.name = name;
        this.email = email;
        this.age = age;

        console.log(`hello ${this.name}`);
    }

    private register(boi){
        console.log(`${this.name} your new boi is ${boi}`);
    }

    payInvoice(){
        console.log(`${this.name} please pay bill`);
    }
}

class Member extends User {
    id: number;
    
    constructor(id: number, name, email, age){
        super(name, email, age);
        this.id = id;
    }

    payInvoice(){
        super.payInvoice();
    }
}

// const nilim = new User('nilim', 'email', 12);

// nilim.register('mughol');

const nilim: User = new Member(123, 'nilim', 'email', 12);

nilim.payInvoice();
