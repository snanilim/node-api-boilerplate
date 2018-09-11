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

const peoples = [
    { name: 'John Doe', age: 16 },
    { name: 'Thomas Calls', age: 19 },
    { name: 'Liam Smith', age: 20 },
    { name: 'Jessy Pinkman', age: 18 },
];

const coffeeLovers = ['John Doe', 'Liam Smith', 'Jessy Pinkman'];

const filterPeople = () => {
    const result = peoples.map((people) => coffeeLovers.includes(people.name) ? people : '');
    return result;
};

console.log(filterPeople());
