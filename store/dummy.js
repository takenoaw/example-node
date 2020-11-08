const db = {
    user: [
        {
            id: '1',
            name: "juan",
            last_name: "perez"
        },
        {
            id: '2',
            name: "felipe",
            last_name: "perez"
        }
    ]
}

const list = async (table) => {
    return db[table]
}

const get = async (table, id) => {
    const col = await list(table)
    return col.filter(item => item.id === id )
}

const query = async(table,query)=>{
    const col = await list(table);
    const keys = Object.keys(query)
    const key = keys[0]
    return col.filter(item => item[key] === query[key])[0]
}

const remove = async (table, id) => {
    db[table].remove(id)
}

const upsert = async (table, data) => {
    if(!db[table]){
        db[table]=[]
    }
    db[table].push(data);
    return data;
}

module.exports = {
    list,
    get,
    remove,
    query,
    upsert,
}