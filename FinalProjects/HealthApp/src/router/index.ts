import { createRouter, createWebHistory, type NavigationGuardNext, type RouteLocationNormalized } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginVue from '@/views/Login.vue'
//import ProductsVue from '@/views/Products.vue'
import { useSession } from '@/Model/session'
import FeedVue from '@/views/Feed.vue'
import AboutView from '../views/AboutView.vue'
import SignUpView from '../views/SignUpView.vue'
import MyHomeView from '../views/MyHomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home', component: HomeView},
   // {path:'/products', name:'products', component: ProductsVue, beforeEnter: secureRoute },
    {path:'/feed', name:'feed', component: FeedVue, beforeEnter: secureRoute},
    {path: '/login', name: 'login', component: LoginVue},
    {path: '/about',name: 'about', component: AboutView},
    {path: '/signup',name: 'signup', component: SignUpView},
    {path: '/myhome',name: 'myhome', component: MyHomeView, beforeEnter: secureRoute}
  ]
})

export default router

function secureRoute (to : RouteLocationNormalized, from : RouteLocationNormalized, next : NavigationGuardNext) {
  const session = useSession()
  if (session.user) {
    next()
  } else {
    next('/login' )
  }
}