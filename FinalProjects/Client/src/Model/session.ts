import { reactive } from "vue";
import { useRouter } from "vue-router";
import { users } from "../data/usersList.json";
import * as myFetch from "./myFetch";



const session = reactive({
    user: null as User | null,
    isLoading: false,
    messages: [] as {
        msg: string,
        type: "success" | "error" | "info" | "warning",
    }[],
})

export interface User {
   
    id: number;
    name: string;
    email: string;
    photo: string;

}

export function useSession() {
    return session;
}

export function login2(name:string){
    const user = users.find(user => user.name === name)
    if(user){
        session.user = user
    }
}

export function useLogout() {
    const router = useRouter();
 
    return function () {
        console.log({router})
        session.user = null;

        router.push("/login");
    }
}

export function getNames() {
    return users.map(user => user.name)
}

export function getUsers() {
    return users;   
}

export function getUser(name : string) {
    return users.find(user => user.name === name)
}

export function api(url: string, data?: any, method?: string, headers?: any) {
    session.isLoading = true;

    return myFetch.api(url, data, method, headers)
        .catch(err => {
            console.error(err);
            session.messages.push({
                msg: err.message ?? JSON.stringify(err),
                type: "error",
                })
            })
        .finally(() => {
            session.isLoading = false;
        })
}