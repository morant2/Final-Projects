import { reactive } from "vue";
import { useRouter } from "vue-router";
import * as myFetch from "./myFetch";
import type { DataEnvelope, DataListEnvelope } from "./myFetch";
import type { ObjectId } from "mongodb";



const session = reactive({
    user: null as User | null,
    isLoading: false,
    messages: [] as {
        msg: string,
        type: "success" | "error" | "info" | "warning",
    }[],
    redirectUrl: null as string | null,
})

export interface User {
   
    id: ObjectId;
    name: string;
    email: string;
    password: string;
    photo: string;
    token?: string;
    role: string;
}

export function useSession() {
    return session;
}


export function useLogout() {
    const router = useRouter();
 
    return function () {
        console.log({router})
        session.user = null;

        router.push("/login");
    }
}

export function getAllUsers(): Promise<DataListEnvelope<User>> {
    return api('users')
}

export function getAllNames(): Promise<DataListEnvelope<User>> {
    return api('users/names')
}

export function getUser(id : number): Promise<DataEnvelope<User>> {
    return api('users/' + id)
}

export function addUser(user: User): Promise<DataEnvelope<User>> {
    return api('users', user)
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

export function useLogin() {
    const router = useRouter();

    return function (user: User) {
        session.user = user;

        router.push(session.redirectUrl ?? "/");
        session.redirectUrl = null;
    }
}
