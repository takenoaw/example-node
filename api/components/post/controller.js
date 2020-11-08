const TABLE = "Post"
const { nanoid } = require('nanoid');

module.exports = (injectedStore) => {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }
    const list = () => {
        return store.list(TABLE);
    }

    const save = (data)=>{
        data.id = nanoid();
        return store.insert(TABLE,  data);
    }

    const update = (data)=>{
        return store.update(TABLE,data)
    }
    const deletePost = (id)=>{
        return store.get(TABLE,id)
    }
    return {
        list,
        save,
        update,
        deletePost
    }
}