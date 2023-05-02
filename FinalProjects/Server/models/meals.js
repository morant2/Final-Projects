const data = require('../data/meals.json');
const { connect, ObjectId } = require('./mongo');

const COLLECTION_NAME = 'meals';

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
    const result = await col.insertOne(item);

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
    const result = await col.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount;
}

async function seed() {
    const col = await collection();
    const result = await col.insertMany(data.meals);

    return result.insertedCount;
}


const totalCaloriesByUser = (meals, user) => {
    let total = 0;
    meals.forEach(meal => {
        if (meal.user === user) {
            total += meal.calories;
        }
    });
    return total;
}

const todayCaloriesByUser = (meals, user) => {
    let total = 0;
    meals.forEach(meal => {
        if (meal.user === user && meal.date === new Date().toISOString().slice(0, 10)) {
            total += meal.calories;
        }
    });
    return total;
}

const weekCaloriesByUser = (meals, user) => {
    let total = 0;
    meals.forEach(meal => {
        if (meal.user === user && meal.date >= new Date(new Date().getTime() - (7 * 24 * 60 * 60 * 1000)).toISOString().slice(0, 10)) {
            total += meal.calories;
        }
    });
    return total;
}

const monthCaloriesByUser = (meals, user) => {
    let total = 0;
    meals.forEach(meal => {
        if (meal.user === user && meal.date >= new Date(new Date().getTime() - (30 * 24 * 60 * 60 * 1000)).toISOString().slice(0, 10)) {
            total += meal.calories;
        }
    });
    return total;
}

module.exports = {
    getAll,
    getById,
    add,
    update,
    deleteItem,
    getByUser,
    seed,
    totalCaloriesByUser,
    todayCaloriesByUser,
    weekCaloriesByUser,
    monthCaloriesByUser
};