// const p = new Promise((resolve, reject) => {
//     resolve(1);
// });

// p.then((result) => {
//     console.log(result);
// });

// const po = (a, (result) => {
//     ao(a);
//     console.log(result);
// });

// const ao = (a, callback) => {

// };

// po(1);

// const user = () => {
//     const ccc = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('call user');
//             resolve([{ id: 1, user: 'nilim' }, { id: 2, user: 'mamun' }]);
//         }, 2000);
//     });
//     return ccc;
// };


// const stack = (userName) => {
//     const aaa = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('call stack');
//             resolve({ id: 1, project: 'api' });
//         }, 2000);
//     });
//     return aaa;
// };

// const commit = (stackName) => {
//     const bbb = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error('Error On Commit'));
//         });
//     });
//     return bbb;
// };

// console.log('after');
// user((res) => {
//     stack(res[0].user, (resStack) => {
//         commit(resStack, (resCommit) => {
//             console.log(resCommit);
//         });
//     });
// });
//  user()
//     .then(res => stack(res[0].user))
//     .then(resStack => commit(resStack))
//     .catch(err => console.log(err));

// const final = async () => {
//     try {
//         const res = await user();
//         const resStack = await stack(res[0].user);
//         await commit(resStack);
//     } catch (err) {
//         console.log(err);
//     }
// };

// final();

// console.log('before');

// const g = n => n + 1;
// const f = x => x + 1;

// const doSum = x => f(g(x));

// console.log(doSum(20));

// const trace = label => value => dalue => {
//     console.log(`${ label }: ${ value }`);
//     return dalue;
//   };
// trace('aaa')('bbbb')('ccc');

// const peoples = [
//     { name: 'John Doe', age: 16 },
//     { name: 'Thomas Calls', age: 19 },
//     { name: 'Liam Smith', age: 20 },
//     { name: 'Jessy Pinkman', age: 18 },
// ];

// const coffeeLovers = ['John Doe', 'Liam Smith', 'Jessy Pinkman'];

// const filterPeople = () => {
//     const result = peoples
//     .filter(people => people.age >= 18)
//     .map((people) => {
//         const item = people;
//         item.coffeeLover = coffeeLovers.includes(people.name);
//         return item;
//     })
//     .sort((a, b) => a.age - b.age)
//     .reduce((total, perItem) => {
//         const value = total + perItem.age;
//         return value;
//     }, 0);

//     return result;
// };

// console.log(filterPeople());

// const ADD_VALUE = 'ADD_VALUE';

// const sumReducer = (state = {}, action = {}) => {
//     const { type, payload } = action;

//     switch (type) {
//         case ADD_VALUE:
//             // const value = state + payload.value;
//             console.log(state);
//             return [...state, { value: payload.value }];
//         default: return state;
//     }
// };


// const actions = [
//     { type: 'ADD_VALUE', payload: { value: 1 } },
//     { type: 'ADD_VALUE', payload: { value: 1 } },
//     { type: 'ADD_VALUE', payload: { value: 1 } },
// ];

// const result = actions.reduce(sumReducer, {});

// console.log(result);

// const listArr = [
//     { uri: 'a', id: 123, ov: 'qwerty' },
//     { uri: 'b', id: 321, ov: 'qwerty' },
//     { uri: 'c', id: 123, ov: 'qwerty' },
//     { uri: 'a', id: 321, ov: 'qwerty' },
//     { uri: 'b', id: 123, ov: 'qwerty' },
//     { uri: 'c', id: 312, ov: 'qwerty' },
//     { uri: 'a', id: 1234, ov: 'qwerty' },
//     { uri: 'b', id: 321, ov: 'qwerty' },
// ];
// const data = [];
// const filterArr = () => {
//     listArr.forEach((value) => {
//         if (typeof data[value.uri] === 'undefined') {
//             data[value.uri] = {
//                 id: [],
//             };
//         }
//         // process.id.push(value.id);
//         data[value.uri].id.push(value.id);
//     });
// };
// filterArr();

// var add = function add(x) {
//     console.log(x);
//     return function (y) {
//         console.log(y);
//       return x + y;
//     };
//   };

// const news = a => b => add(a)(b);

// console.log(news(1)(2));


// exports.authorize = function () {
//     var roles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : User.roles;
//     return function (req, res, next) {
//       return passport.authenticate('jwt',
//      { session: false },
//      handleJWT(req, res, next, roles))(req, res, next);
//     };
//   };


const news = function news(a) {
    return function (b) {
        console.log('a', a);
        console.log('b', b);
      return a % b;
    };
};


const newCall = (a) => {
    console.log(a(6));
};

// const call = news(3);
console.log(newCall(news(3)));
