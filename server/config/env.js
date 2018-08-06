
const environment = "development";
exports.environment = environment;

const config = {
    development:{
        port: 8000,
        version: 'v1',
        app_key: '8788dc07d30444747841d8c67d807294'
    },
    sandbox:{
        port: 3000,
        version: 'v1',
        app_key: '8788dc07d30444747841d8c67d807294'
    },
    live:{
        port: 4000,
        version: 'v1',
        app_key: '8788dc07d30444747841d8c67d807294'

    }
};

const env = Object.freeze(config[`${environment}`]);

exports.env = env;