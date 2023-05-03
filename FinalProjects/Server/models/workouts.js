const { connect, ObjectId } = require('./mongo');
//const data = require('../data/workouts.json');

const COLLECTION_NAME = 'workouts';

async function collection() {
    const db = await connect();
    return db.collection(COLLECTION_NAME);
}

async function getAll() {
    const col = await collection();
    const items = await col.find().toArray();
    return items;
}

async function getById(id) {
    const col = await collection();

    const item = await col.findOne({ _id: ObjectId(id) });
    return item;
}

async function getByUser(name) {
    const col = await collection();

    const items = await col.find({ user: name }).toArray();
    return items;
}

async function add(item) {
    const col = await collection();
    const result = await col.insertOne(workout);

    item._id = result.insertedId;
    return item;
}

async function update(item) {
    const col = await collection();
    const result = await col.findOneAndUpdate(
        {_id: new ObjectId(item._id)},
        {$set: item},
        { returnDocument: 'after'}
    );
    return result.value;
}

async function deleteItem(id) {
    const col = await collection();
    const result = await col.deleteOne({ _id: ObjectId(id) });
    return result.deletedCount;
}

const totalActiveTimeByUser = (workouts, user) => {
    let total = 0;
    workouts.forEach(workout => {
        if (workout.user === user) {
            total += workout.activeTime;
        }
    });
    return total;
}

const todayActiveTimeByUser = (workouts, user) => {
    let total = 0;
    workouts.forEach(workout => {
        if (workout.user === user && workout.date === new Date().toLocaleDateString()) {
            total += workout.activeTime;
        }
    });
    return total;
}

const weekActiveTimeByUser = (workouts, user) => {
    let total = 0;
    workouts.forEach(workout => {
        if (workout.user === user && workout.date >= new Date(new Date().setDate(new Date().getDate() - 7)).toLocaleDateString()) {
            total += workout.activeTime;
        }
    });
    return total;
}

const monthActiveTimeByUser = (workouts, user) => {
    let total = 0;
    workouts.forEach(workout => {
        if (workout.user === user && workout.date >= new Date(new Date().setDate(new Date().getDate() - 30)).toLocaleDateString()) {
            total += workout.activeTime;
        }
    });
    return total;
}

async function seed() {
    const col = await collection();
    const result = await col.insertMany(data.workouts);

    return result.insertedCount;
}

module.exports = {
    getAll,
    getById,
    getByUser,
    add,
    update,
    deleteItem,
    totalActiveTimeByUser,
    todayActiveTimeByUser,
    weekActiveTimeByUser,
    monthActiveTimeByUser,
    seed
}

