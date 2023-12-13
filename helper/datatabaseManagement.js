function updateLog(body, db , database) {
    const { data = {}, id = {}} = body;
    const collection = database.collection(db)
    collection.updateOne(id,
        { $set: data }
    ).then((data) => {
        return data
    });
}

const getLogs = (id = {}, db, database) => {
// const id = body.id ?? {}
    const collection = database.collection(db)

    return new Promise((resolve, reject) => {
        collection.find(id).toArray().then((data) => {
            data ? resolve({ sucsess: true, data }) : resolve({ sucsess: false, data: {} })
        })
    })
}

const addLogs = async (body, db , database) => {
    const data = body.data ?? {}
    const collection = database.collection(db)
    const res = await collection.insertOne(data)
    return res
}

const clearLogs = async (body, db , database) => {
    const data = body.data ?? {}
    const res = await database.collection(db).deleteMany(data)
    return res
}



const createCollection = async (body, db , database) => {
    return await database.createCollection(db)
}

module.exports = {
    updateLog, getLogs, addLogs, clearLogs, createCollection
}