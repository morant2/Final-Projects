import data from "../data/meals.json";
import { useSession } from "./session";
import { computed, reactive } from "vue";

const session = useSession();

const meals = reactive(data.meals);

export interface Meal {
    id: number;
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

export function addMeal(meal: Meal) {
    meals.push(meal);
}

export function deleteMeal(meal: Meal) {
    const index = meals.indexOf(meal);
    meals.splice(index, 1);
}