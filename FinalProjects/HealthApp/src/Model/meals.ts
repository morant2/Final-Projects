import data from "../data/meals.json";
import { api } from "./myFetch";
import { useSession } from "./session";
import { computed, reactive } from "vue";

const session = useSession();

const meals = reactive(data.meals);

export interface Meal {
    user: string;
    date: string;
    type: string;
    description: string;
    calories: number;
}

export function getMeals(): Meal[] {
    return meals;
}

export function getMealsbyUser(): Meal[] {
    return meals.filter((meal) => meal.user === session.user?.name);
}
export const totalCalories = computed(() => {
    return getMealsbyUser().reduce((total, meal) => total + meal.calories, 0);
});

export const todaysCalories = computed(() => {
    const today = new Date();
    const mealsToday = getMealsbyUser().filter(
        (meal) => meal.date.split("T")[0] === today.toISOString().split("T")[0]
    );

    return mealsToday.reduce((total, meal) => total + meal.calories, 0);
});

export const weekCalories = computed(() => {
    const oneDay = 24 * 60 * 60 * 1000;
    const today = new Date();

    const weekAgo = new Date(today.getTime() - 7 * oneDay);
    const mealsThisWeek = getMealsbyUser().filter(
        (meal) => meal.date > weekAgo.toISOString()
    );

    return mealsThisWeek.reduce((total, meal) => total + meal.calories, 0);
});

export const monthCalories = computed(() => {
    const oneMonth = 30 * 24 * 60 * 60 * 1000;

    const today = new Date();
    const monthAgo = new Date(today.getTime() - oneMonth);

    const mealsThisMonth = getMealsbyUser().filter(
        (meal) => meal.date > monthAgo.toISOString()
    );

    return mealsThisMonth.reduce((total, meal) => total + meal.calories, 0);
});

    export function addMeal(meal: Meal) {
    meals.push(meal);
}

export function deleteMeal(meal: Meal) {
    const index = meals.indexOf(meal);
    meals.splice(index, 1);
}

export function getDate(date: string) {
    return new Date(date);
}

