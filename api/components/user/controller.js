const { nanoid } = require('nanoid');
const auth = require('../auth')
const TABLE = "User"

module.exports = (injectedStore) => {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }
    const list = () => {
        return store.list(TABLE);
    }
    const get = (id) => {
        return store.get(TABLE, id);
    }
    const remove = (id) => {
        return store.get(TABLE, id);
    }
    const save = async (data) => {
        const user = {
            name: data.name,
            username: data.username,
        }
        user.id = nanoid()
        if (data.password || data.username) {
            await auth.upsert({
                id: user.id,
                username: data.username,
                password: data.password
            });
        }
        return store.upsert(TABLE, user);
    }

    const follow = (from, to) => {
        return store.upsert(TABLE + '_Follow', {
            user_from: from,
            user_to: to
        })
    }

    const query = (user_from) => {
        return store.query(TABLE + '_Follow', { user_from });
    }

    return {
        list,
        get,
        remove,
        save,
        follow,
        query
    }
}