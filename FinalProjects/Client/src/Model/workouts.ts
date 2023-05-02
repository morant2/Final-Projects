//import data from "../data/workouts.json";
import type { DataListEnvelope, DataEnvelope } from "./myFetch";
import { api } from "./session";

import { useSession } from "./session";
import { computed, reactive } from "vue";



const session = useSession();
export interface Workout {
    user: string;
    type: string;
    description: string;
    date: string;
    activeTime: number;
}

export function getWorkouts(): Promise<DataListEnvelope<Workout>> {
    return api('workouts')
}


export function getWorkoutsbyUser(): Promise<DataListEnvelope<Workout>> {
    return api('workouts/' + session.user?.name);
} 

export function getWorkout(id: string): Promise<DataEnvelope<Workout>> {
    return api('workouts/' + id);
}

export function addWorkout(workout: Workout): Promise<DataEnvelope<Workout>> {
    return api('workouts', workout)
}

export const totalActiveTime = computed(() => {
    
});

export const todaysActiveTime = computed(() => {
    
});

export const weekActiveTime = computed(() => {
    
});

export const monthActiveTime = computed(() => {
    
});
