import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "../views/AboutView.vue"
import ContactView from '../views/ContactsView'
import LoginView from '../views/LoginView.vue'
import RegistrationView from '../views/RegistrationView.vue'
import ConsultationView from '../views/ConsultationView.vue'
import DoctorsPageView from '../views/DoctorsPageView.vue'
import ForgotPassView from '../views/ForgotPassView.vue'
import SubscriptionPageView from '../views/SubscriptionPageView.vue'
import LiveChatView from '../views/LiveChatView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationView
  },
  {
    path: '/consultation',
    name: 'consultation',
    component: ConsultationView
  },
  {
    path: '/doctors',
    name: 'doctors',
    component: DoctorsPageView
  },
  {
    path: '/forgotPassword',
    name: 'forgotPassword',
    component: ForgotPassView
  },
  {
    path: '/subscribe',
    name: 'subscribe',
    component: SubscriptionPageView
  },
  {
    path: '/livechat',
    name: 'livechat',
    component: LiveChatView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
