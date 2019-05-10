import Vue from 'vue'
import Router from 'vue-router'
import WelcomePage from '@/components/WelcomePage'
import LoginPage from "@/components/LoginPage";
import SignUpPage from "@/components/SignUpPage";
import Profile from "@/components/Profile";
import MainPage from "@/components/MainPage";
import Class from "@/components/Class";
import ClassCreation from "@/components/ClassCreation";
import ClassList from "@/components/ClassList";


Vue.use(Router)


const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MainPage,
      meta: {
        requiresAuth: true,
        redirect: 'WelcomePage'
      }
    },
    {
      name: 'WelcomePage',
      path: '/',
      component: WelcomePage,
      meta: {
        requiresAuth: false
      }
    },
    {
      name: 'LoginPage',
      path: '/login',
      component: LoginPage,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/signup',
      component: SignUpPage,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        requiresAuth: true,
        redirect: 'LoginPage'
      }
    },
    {
      path: '/class',
      component: Class,
    },
    {
      path: '/classCreation',
      component: ClassCreation,
    },
    {
      path: '/classList',
      component: ClassList,
    }

  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

router.beforeEach((to, from, next) => {
  const authRequired = to.meta.requiresAuth;
  const loggedIn = localStorage.getItem('auth_token');

  console.log(to, authRequired, loggedIn);

  if (authRequired && !loggedIn) {
    console.log(authRequired, loggedIn);
    if (to.meta.redirect)
      return next({name: to.meta.redirect});
    else {
      return next({name: 'WelcomePage'});
    }
  }

  next();
});

export default router;
