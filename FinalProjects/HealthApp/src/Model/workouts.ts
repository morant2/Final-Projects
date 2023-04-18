import data from "../data/workouts.json";
import { useSession } from "./session";
import { computed, reactive } from "vue";

const session = useSession();

const workouts = reactive(data.workouts);
export interface Workout {
    user: string;
    type: string;
    description: string;
    date: string;
    activeTime: number;
}

export function getWorkouts(): Workout[] {
    return workouts;
}


export function getWorkoutsbyUser(): Workout[] {
    return workouts.filter((workout) => workout.user === session.user?.name);
} 

export const totalActiveTime = computed(() => {
    return getWorkoutsbyUser().reduce((total, workout) => total + workout.activeTime, 0);
});

export const todaysActiveTime = computed(() => {
    const today = new Date();
    const workoutsToday = getWorkoutsbyUser().filter(
        (workout) => workout.date.split("T")[0] === today.toISOString().split("T")[0]
    );

    return workoutsToday.reduce((total, workout) => total + workout.activeTime, 0);
});

export const weekActiveTime = computed(() => {
    const oneDay = 24 * 60 * 60 * 1000;
    const today = new Date();

    const weekAgo = new Date(today.getTime() - 7 * oneDay);
    const workoutsThisWeek = getWorkoutsbyUser().filter(
        (workout) => workout.date > weekAgo.toISOString()
    );

    return workoutsThisWeek.reduce((total, workout) => total + workout.activeTime, 0);
});

export const monthActiveTime = computed(() => {
    const oneMonth = 30 * 24 * 60 * 60 * 1000;

    const today = new Date();
    const monthAgo = new Date(today.getTime() - oneMonth);

    const workoutsThisMonth = getWorkoutsbyUser().filter(
        (workout) => workout.date > monthAgo.toISOString()
    );

    return workoutsThisMonth.reduce((total, workout) => total + workout.activeTime, 0);
});


export function addWorkout(workout: Workout) {
    workouts.push(workout);
}

export function deleteWorkout(workout: Workout) {
    const index = workouts.indexOf(workout);
    workouts.splice(index, 1);
}

export function getDate(date: string) {
    return new Date(date);
}