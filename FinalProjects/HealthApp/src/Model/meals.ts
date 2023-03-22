import data from "../data/meals.json";
import { useSession } from "./session";
import { computed } from "vue";

const session = useSession();

export interface Meal {
    user: string;
    date: string;
    type: string;
    description: string;
    calories: number;
}

export function getMeals(): Meal[] {
    return data.meals;
}

export function getMealsbyUser(): Meal[] {
    return data.meals.filter((meal) => meal.user === session.user.name);
}

export const totalCalories = computed(() => {
    return getMealsbyUser().reduce((total, meal) => total + meal.calories, 0);
});