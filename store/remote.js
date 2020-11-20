const axios = require('axios').default;


const createRemote = (host, port) => {
    const URL = 'http://' + host + ':' + port;

    const list = (table) => {
        return req('GET', table);
    }

    const insert = (table, data)=>{
        return req('POST',table,data);
    }
    const req = (method, table, data) => {
        const url = URL + '/' + table;
        return new Promise((resolve, reject) => {
            axios(url, {
                method,
                data
            })
                .then(data => {
                    resolve(data.data);
                })
                .catch(err => {
                    const { data } = err.response;
                    reject(data);
                })
        })
    }

    return {
        list,
        insert
    }
}

module.exports = createRemote;