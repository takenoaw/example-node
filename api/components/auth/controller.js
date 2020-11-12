const { sign } = require('../../../auth/index');
const bcrypt = require('bcrypt')
const TABLA = 'Auth'
const { rounds } = require('../../../config').api

module.exports = (injectedStore) => {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }
    const login = async (username, password) => {
        const data = await store.query(TABLA, { username });
        return bcrypt.compare(password, data.password)
            .then((same) => {
                if (same) {
                    return sign({ username: data.username, id:data.id })
                } else {
                    throw new Error("Wrong password")
                }
            });

    }

    const insert = async (data) => {
        const authData = {
            id: data.id
        }
        if (data.username) {
            authData.username = data.username
        }
        if (data.password) {
            authData.password = await bcrypt.hash(data.password, rounds)
        }
        return store.insert(TABLA, authData)
    }

    const update = async(data)=>{
        const authData = {
            id: data.id
        }
        if (data.username) {
            authData.username = data.username
        }
        if (data.password) {
            authData.password = await bcrypt.hash(data.password, rounds)
        }
        return store.update(TABLA, authData)
    }
    return {
        insert,
        login,
        update
    }
}