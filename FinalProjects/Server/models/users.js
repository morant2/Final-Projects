const data = require('../data/usersList.json');
const { connect, ObjectId } = require('./mongo');

const COLLECTION_NAME = 'users';

async function collection() {
    const db = await connect();
    return db.collection(COLLECTION_NAME);
}

async function getUsers() {
    const col = await collection();
    const items = await col.find().toArray();
    return items;
}

async function getUserbyId(id) {
    const col = await collection();

    const item = await col.findOne({ _id: ObjectId(id) });
    return item;
}

async function getUserbyName(name) {
    const col = await collection();

    const item = await col.findOne({ name: name });
    return item;
}

async function addUser(user) {
    const col = await collection();
    const result = await col.insertOne(user);

    user._id = result.insertedId;
    return user;
}

async function updateUser(user) {
    const col = await collection();
    const result = await col.findOneAndUpdate(
        {_id: new ObjectId(user._id)},
        {$set: user},
        { returnDocument: 'after'}
    );
    return result.value;
}

async function deleteUser(id) {
    const col = await collection();
    const result = await col.deleteOne({ _id: ObjectId(id) });
    return result.deletedCount;
}

async function seed() {
    const col = await collection();
    const result = await col.insertMany(data.users);

    return result.insertedCount;
}

module.exports = {
    seed,
    getUsers,
    getUserbyId,
    getUserbyName,
    addUser,
    updateUser,
    deleteUser
};