const data = require('../data/meals.json');
const { connect, ObjectId } = require('./mongo');

const COLLECTION_NAME = 'meals';

async function collection() {
    const db = await connect();
    return db.collection(COLLECTION_NAME);
}

async function getMeals() {
    const col = await collection();
    const items = await col.find().toArray();
    return items;
}

async function getMealbyId(id) {
    const col = await collection();

    const item = await col.findOne({ _id: ObjectId(id) });
    return item;
}

async function getMealsbyUser(name) {
    const col = await collection();

    const items = await col.find({ user: name }).toArray();
    return items;
}

async function addMeal(meal) {
    const col = await collection();
    const result = await col.insertOne(meal);

    meal._id = result.insertedId;
    return meal;
}

async function updateMeal(meal) {
    const col = await collection();
    const result = await col.findOneAndUpdate(
        {_id: new ObjectId(meal._id)},
        {$set: meal},
        { returnDocument: 'after'}
    );
    return result.value;
}

async function deleteMeal(id) {
    const col = await collection();
    const result = await col.deleteOne({ _id: ObjectId(id) });
    return result.deletedCount;
}

async function seed() {
    const col = await collection();
    const result = await col.insertMany(data.meals);

    return result.insertedCount;
}

module.exports = {
    getMeals,
    getMealbyId,
    addMeal,
    updateMeal,
    deleteMeal,
    getMealsbyUser,
    seed
}