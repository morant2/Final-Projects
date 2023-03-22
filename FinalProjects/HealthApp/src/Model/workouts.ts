import data from "../data/workouts.json";
import { useSession } from "./session";
import { computed } from "vue";



const session = useSession();


export interface Workout {
    user: string;
    type: string;
    description: string;
    date: string;
    activeTime: number;
}

export function getWorkouts(): Workout[] {
    return data.workouts;
}
//grab start and end times from workouts.json and subtract them to get active time for a given workout

export function getWorkoutsbyUser(): Workout[] {
    return data.workouts.filter((workout) => workout.user === session.user.name);
}

export const activeTime = computed(() => {
    return getWorkoutsbyUser().reduce((total, workout) => total + workout.activeTime, 0);
});