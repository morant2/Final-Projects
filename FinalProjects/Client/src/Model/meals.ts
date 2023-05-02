//import data from "../data/meals.json";
import type { DataListEnvelope, DataEnvelope } from "./myFetch";
import { api } from "./session";

import { useSession } from "./session";
import { computed, reactive } from "vue";

const session = useSession();

export interface Meal {
    user: string;
    date: string;
    type: string;
    description: string;
    calories: number;
}

export function getMeals(): Promise<DataListEnvelope<Meal>> {

    return api('meals')

}

export function getMealsbyUser(): Promise<DataListEnvelope<Meal>> {
    return api('meals/' + session.user?.name);
}

export function getMeal(id: string): Promise<DataEnvelope<Meal>> {
    return api('meals/' + id);
}

export function addMeal(meal: Meal): Promise<DataEnvelope<Meal>> {
    return api('meals', meal)
}

export const totalCalories = computed(() => {

});

export const todaysCalories = computed(() => {

});

export const weekCalories = computed(() => {

});

export const monthCalories = computed(() => {

});

/*
export const totalCalories = computed(() => {


export const todaysCalories = computed(() => {
    const today = new Date();
    const mealsToday = getMealsbyUser().then(meals => meals.filter(
        (meal) => meal.date.split("T")[0] === today.toISOString().split("T")[0]
    ));

    return mealsToday.then(meals => meals.reduce((total, meal) => total + meal.calories, 0));
});

export const weekCalories = computed(() => {
    const oneDay = 24 * 60 * 60 * 1000;
    const today = new Date();

    const weekAgo = new Date(today.getTime() - 7 * oneDay);
    const mealsThisWeek = getMealsbyUser().then(meals => meals.filter(
        (meal) => meal.date > weekAgo.toISOString()
    ));

    return mealsThisWeek.then(meals => meals.reduce((total, meal) => total + meal.calories, 0));
});

export const monthCalories = computed(() => {
    const oneMonth = 30 * 24 * 60 * 60 * 1000;

    const today = new Date();
    const monthAgo = new Date(today.getTime() - oneMonth);

    const mealsThisMonth = getMealsbyUser().then(meals => meals.filter(
        (meal) => meal.date > monthAgo.toISOString()
    ));

    return mealsThisMonth.then(meals => meals.reduce((total, meal) => total + meal.calories, 0));
});
*/