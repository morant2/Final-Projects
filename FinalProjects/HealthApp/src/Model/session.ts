import { reactive } from "vue";
import { useRouter } from "vue-router";
import { users } from "../data/usersList.json";



const session = reactive({
    user: null as User | null,
})

export interface User {
   
    id?: number;
    name: string;
    email: string;
    photo: string;
    token: string;

}

export function useSession() {
    return session;
}

export function login() {
    session.user = {
        id:2,
        name: "John Doe",
        email: "jd@gmail.com",
        photo: "https://picsum.photos/200/300",
        token: "1234567890"
    }
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