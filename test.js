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

const oldObj = [
    {
        remote_addr: '119.30.32.186',
    '-': '-',
    remote_user: '-',
    time_local: '[21/Sep/2018:23:55:03 +0600]',
    request:
     '"GET /avisit_free_site/eyJzaXRlX2lkIjoiMTAiLCJzaXRlX3VybCI6Imh0dHBzJTNBJTJGJTJGaHR0cC1iaWtyb3ktY29tLjAuZnJlZWJhc2ljcy5jb20lMkYiLCJyZWZlcmVyIjoiaHR0cDpcL1wvd3d3LmdwZWFzeW5ldC5jb20ifQ%3D%3D HTTP/1.1"',
    status: '302',
    body_bytes_sent: '5',
    request_time: '0.075',
    d: '-',
    http_referer: '"-"',
    http_user_agent:
     '"Mozilla/5.0 (Linux; Android 5.1.1; SM-J320FN Build/LMY47V; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/49.0.2623.105 Mobile Safari/537.36"',
    http_x_forwarded_for: '"-"',
    upstream_response_time: '"0.075"',
    x: '"8801789799948"',
    http_msisdn: '"web-2"',
    upstream_http_X_Upstream: '"d600a472ff82eccebfe2eec0ece56ca9"',
    },
    {
    remote_addr: '119.30.32.186',
    '-': '-',
    remote_user: '-',
    time_local: '[21/Sep/2018:23:55:03 +0600]',
    request:
     '"GET /visit_free_site/eyJzaXRlX2lkIjoiMTAiLCJzaXRlX3VybCI6Imh0dHBzJTNBJTJGJTJGaHR0cC1iaWtyb3ktY29tLjAuZnJlZWJhc2ljcy5jb20lMkYiLCJyZWZlcmVyIjoiaHR0cDpcL1wvd3d3LmdwZWFzeW5ldC5jb20ifQ%3D%3D HTTP/1.1"',
    status: '302',
    body_bytes_sent: '5',
    request_time: '0.075',
    d: '-',
    http_referer: '"-"',
    http_user_agent:
     '"Mozilla/5.0 (Linux; Android 5.1.1; SM-J320FN Build/LMY47V; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/49.0.2623.105 Mobile Safari/537.36"',
    http_x_forwarded_for: '"-"',
    upstream_response_time: '"0.075"',
    x: '"8801789799948"',
    http_msisdn: '"web-2"',
    upstream_http_X_Upstream: '"d600a472ff82eccebfe2eec0ece56ca9"',
    },
  {
    remote_addr: '119.30.47.170',
    '-': '-',
    remote_user: '-',
    time_local: '[21/Sep/2018:23:55:03 +0600]',
    request: '"GET / HTTP/1.0"',
    status: '200',
    body_bytes_sent: '13689',
    request_time: '0.379',
    d: '-',
    http_referer: '"-"',
    http_user_agent:
     '"Mozilla/5.0 (Linux; Android 7.0; Primo G7 Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/55.0.2883.91 Mobile Safari/537.36[FBAN/InternetOrgApp;',
    http_x_forwarded_for: 'FBAV/7.0;]"',
    upstream_response_time: '"-"',
    x: '"0.226"',
    http_msisdn: '"8801784304960"',
    upstream_http_X_Upstream: '"web-2"',
    upstream_http_Session_Id: '"7b54000425725f298dad2f011a092e12"',
    },
  {
    remote_addr: '119.30.39.88',
    '-': '-',
    remote_user: '-',
    time_local: '[21/Sep/2018:23:55:03 +0600]',
    request: '"GET / HTTP/1.0"',
    status: '200',
    body_bytes_sent: '13691',
    request_time: '0.517',
    d: '-',
    http_referer: '"-"',
    http_user_agent:
     '"Mozilla/5.0 (Linux; Android 7.1.1; SM-J250F Build/NMF26X; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/64.0.3282.137 Mobile Safari/537.36 [FBAN/InternetOrgApp;FBAV/28.0.0.5.165;]"',
    http_x_forwarded_for: '"-"',
    upstream_response_time: '"0.232"',
    x: '"8801721852378"',
    http_msisdn: '"web-2"',
    upstream_http_X_Upstream: '"840ff67cd903bae6f6ef68637cc674c7"',
    },
  {
    remote_addr: '123.108.244.88',
    '-': '-',
    remote_user: '-',
    time_local: '[21/Sep/2018:23:55:03 +0600]',
    request: '"GET /google_search HTTP/1.1"',
    status: '200',
    body_bytes_sent: '4573',
    request_time: '0.106',
    d: '-',
    http_referer: '"-"',
    http_user_agent: '"Dorado WAP-Browser/1.0.0"',
    http_x_forwarded_for: '"-"',
    upstream_response_time: '"0.106"',
    x: '"8801779088757"',
    http_msisdn: '"web-1"',
    upstream_http_X_Upstream: '"09a2a0528ae16a1b15028d64f6e7e87e"',
    },
  {
    remote_addr: '119.30.32.57',
    '-': '-',
    remote_user: '-',
    time_local: '[21/Sep/2018:23:55:03 +0600]',
    request: '"GET / HTTP/1.0"',
    status: '200',
    body_bytes_sent: '13701',
    request_time: '2.840',
    d: '-',
    http_referer: '"-"',
    http_user_agent:
     '"Mozilla/5.0 (Linux; Android 5.1.1; SM-J500F Build/LMY48B; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/69.0.3497.100 Mobile Safari/537.36 [FBAN/InternetOrgApp;FBAV/31.0.0.2.150;]"',
    http_x_forwarded_for: '"-"',
    upstream_response_time: '"0.216"',
    x: '"8801719412965"',
    http_msisdn: '"web-2"',
    upstream_http_X_Upstream: '"080f674858119641ba0023758f244df2"',
    },
];

const newObj = oldObj.filter((item, index, self) => {
    const value = index === self.findIndex((t) => {
        const result = t.request === item.request && t.upstream_http_X_Upstream === item.upstream_http_X_Upstream;
        return result;
    });
    return value;
});

console.log(newObj);
console.log(newObj.length);


const str = "GET /pack/facebook-28-days HTTP/1.1";
const aaa = str.split(' ');
console.log(aaa);
