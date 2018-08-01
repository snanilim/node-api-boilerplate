
const environment = "development";

const config = {
    development:{
        port: 8000,
        verssion: 'v1'
    },
    sandbox:{
        port: 3000,
        verssion: 'v1'
    },
    live:{
        port: 4000,
        verssion: 'v1'
    }
};



module.exports = config[`${environment}`];