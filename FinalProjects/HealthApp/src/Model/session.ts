import { reactive } from "vue";
import { useRouter } from "vue-router";
import { users } from "../data/usersList.json";



const session = reactive({
    user: null as User | null,
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