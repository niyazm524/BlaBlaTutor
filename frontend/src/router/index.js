import Vue from 'vue'
import Router from 'vue-router'
import WelcomePage from '@/components/WelcomePage'
import LoginPage from "@/components/LoginPage";
import SignUpPage from "@/components/SignUpPage";
import Profile from "@/components/Profile";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: WelcomePage
    },
    {
      path: '/login',
      component: LoginPage
    },
    {
      path: '/signup',
      component: SignUpPage,
    },
    {
      path: '/profile',
      component: Profile,
    },

  ]
})
