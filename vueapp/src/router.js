import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import commodity from "./components/commodity/commodity"
import login from "./components/login/login"
import reg from "./components/login/reg"
import serivce from "./components/serivce/serivce"
import spoilmanagement from "./components/spoilmanagement/spoilmanagement"
import storeapplication from "./components/storeapplication/storeapplication"
import storemanagement from "./components/storemanagement/storemanagement"
import theorder from "./components/theorder/theorder"
import usercontrol from "./components/usercontrol/usercontrol"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg
    },
    {
      path: '/commodity',
      name: 'commodity',
      component: commodity
    },
    {
      path: '/serivce',
      name: 'serivce',
      component: serivce
    },
    {
      path: '/spoilmanagement',
      name: 'spoilmanagement',
      component: spoilmanagementn
    },
    {
      path: '/storeapplication',
      name: 'storeapplication',
      component: storeapplication
    },
    {
      path: '/storemanagement',
      name: 'storemanagement',
      component: storemanagement
    },
    {
      path: '/theorder',
      name: 'theorder',
      component: theorder
    },
    {
      path: '/usercontrol',
      name: 'usercontrol',
      component: usercontrol
    },
    // {
    //   path: '/reg',
    //   name: 'reg',
    //   component: reg,
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
