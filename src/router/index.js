import Vue from 'vue'
import Router from 'vue-router'
import app from '../App.vue'
import bgdetails from "../components/senior_say/bg_details.vue";
import bg from "../components/senior_say/bg.vue";
import login from "../components/login/login.vue";
import senior_say_home from "../components/senior_say/senior_say_home.vue";
import delicious_home from "../components/Delicious/delicious_home.vue";
import home from "../components/home_page/home.vue";
import register from "../components/login/register.vue";
import bbs_detail from "../components/Delicious/bbs_detail.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
     component:home,
    },
    {
      path: '/senior_say_home',
      name: "senior_say_home",
      component: senior_say_home,
      children: [{
        path: 'bg_details/:id',
        name: 'bg_details',
        component: bgdetails
      }, ]
    },
    {
      path: '/login',
      name: 'login',
      component: login

    },
    {
      path: '/register',
      name: 'register',
      component: register

    },
    {
      path: '/delicious_home',
      name: 'delicious_home',
      component: delicious_home

    },{
      path: '/delicious_home/bbs_detail',
      name: 'bbs_detail',
      component: bbs_detail

    },
  ]
})
