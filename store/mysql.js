const mysql = require('mysql');
const { host, database, password, user } = require('../config').mysql

const dbconf = {
    host: host,
    user: user,
    password: password,
    database: database,
}

//connect

let connection;

const handleCon = () => {
    connection = mysql.createConnection(dbconf);

    connection.connect((err) => {
        if (err) {
            console.log(err)
            setTimeout(handleCon, 2000)
        } else {
            console.log("database connected")
        }
    });

    connection.on('error', (error) => {
        if (error.code === 'PROTOCOL_CONNECTION_LOST') {
            handleCon()
        }
        else {
            throw error
        }
    })
}

handleCon()

const insert = (table, data) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO ${table} SET ?`, data, (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result)
        })
    })
}

const list = (table) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT *  FROM ${table}`, (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result)
        })
    })
}

const get = (table, id) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT *  FROM ${table} where ID=?`,id, (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result)
        })
    })
}

const upsert = (table, data) => {
    if (data && data.id){
        return update(table,data)
    }else{
        return insert(table, data)
    }
    // return insert(table, data)
}
const update = (table, data) => {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE ${table} SET ? WHERE ID=?`, [data, data.id], (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result)
        })
    })
}

const query = (table, query)=>{
    return new Promise((resolve, reject)=>{
        connection.query(`select * from ${table} where ?`, query, (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result[0])
        })
    })
}
module.exports = {
    list,
    get,
    upsert,
    query,
    insert,
    update,
}