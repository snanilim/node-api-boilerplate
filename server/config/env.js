
const environment = 'development';
exports.environment = environment;

const config = {
    development: {
        port: 3000,
        version: 'v1',
        mongo: 'mongodb://localhost:27017/node-api-boilerplate',
        token_secret: '8788dc07d30444747841d8c67d807294',
        app_key: '8788dc07d30444747841d8c67d807294',
    },
    sandbox: {
        port: 3000,
        version: 'v1',
        mongo: 'mongodb://localhost:27017/node-api-boilerplate',
        token_secret: '8788dc07d30444747841d8c67d807294',
        app_key: '8788dc07d30444747841d8c67d807294',
    },
    live: {
        port: 4000,
        version: 'v1',
        mongo: 'mongodb://localhost:27017/node-api-boilerplate',
        token_secret: '8788dc07d30444747841d8c67d807294',
        app_key: '8788dc07d30444747841d8c67d807294',

    },
};

const env = Object.freeze(config[`${environment}`]);

exports.env = env;
