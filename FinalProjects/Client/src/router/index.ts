import { createRouter, createWebHistory, type NavigationGuardNext, type RouteLocationNormalized } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginVue from '@/views/Login.vue'
import { useSession } from '@/Model/session'
import FeedVue from '@/views/Feed.vue'
import AboutView from '../views/AboutView.vue'
import MyHomeView from '../views/MyHomeView.vue'
import UsersView from '../views/UsersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home', component: HomeView},
    {path:'/feed', name:'feed', component: FeedVue, beforeEnter: secureRoute},
    {path: '/login', name: 'login', component: LoginVue},
    {path: '/about',name: 'about', component: AboutView},
    {path: '/myhome',name: 'myhome', component: MyHomeView, beforeEnter: secureRoute},
    {path: '/users', name: 'users', component: UsersView, beforeEnter: secureAdminRoute}
  ]
})

export default router

function secureRoute (to : RouteLocationNormalized, from : RouteLocationNormalized, next : NavigationGuardNext) {
  const session = useSession()
  if (session.user) {
    next()
  } else {
    if(!session.redirectUrl && to.path != '/login') {
      session.redirectUrl = to.fullPath;
    }
    next('/login' )
  }
}

function secureAdminRoute (to : RouteLocationNormalized, from : RouteLocationNormalized, next : NavigationGuardNext) {
  const session = useSession()
  if (session.user?.name == 'John Doe') {
    next()
  } else {
    next('/login' )
  }
}