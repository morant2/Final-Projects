const data = require('../data/meals.json');

function getMeals() {
    return data.meals;
}

function getMealbyId(id) {
    return data.meals.find(meal => meal.id == id);
}

function getMealsbyUser(name) {
    return data.meals.filter(meal => meal.user == name);
}

function addMeal(meal) {
    meal.id= data.meals.length + 1;
    meal.user= user.name;
    data.meals.push(meal);
}

function updateMeal(meal) {
    const index = data.meals.findIndex(m => m.id == meal.id);
    data.meals[index] = meal;
}

function deleteMeal(id) {
    const index = data.meals.findIndex(m => m.id == id);
    data.meals.splice(index, 1);
}

module.exports = {
    getMeals,
    getMealbyId,
    addMeal,
    updateMeal,
    deleteMeal,
    getMealsbyUser,
}