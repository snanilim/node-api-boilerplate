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
class PromiseSimple {
    constructor(executionFunction) {
        this.promiseChain = [];
        this.handleError = () => {};

        this.onResolve = this.onResolve.bind(this);
        this.onReject = this.onReject.bind(this);

        executionFunction(this.onResolve, this.onReject);
    }

    then(onResolve) {
        this.promiseChain.push(onResolve);
        return this;
    }

    catch(handleError) {
        this.handleError.push(handleError);
        return this;
    }

    onResolve(value) {
        let storeValue = value;

        try {
            this.promiseChain.forEach((nextFunction) => {
                storeValue = nextFunction(storeValue);
            });
        } catch (error) {
            this.promiseChain = [];
            this.onReject(error);
        }
    }

    onReject(error) {
        this.handleError(error);
    }
}

fakeApiBackend = () => {
    const user = {
      username: 'treyhuffine',
      favoriteNumber: 42,
      profile: 'https://gitconnected.com/treyhuffine'
    };
    // Introduce a randomizer to simulate the
    // the probability of encountering an error
    if (Math.random() > 0.05) {
      return { 
        data: user, 
        statusCode: 200,
      };
    }
    const error = {
    statusCode: 404,
    message: 'Could not find user',
    error: 'Not Found',
    };
    return error;
  };
