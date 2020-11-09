import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Banner from '../views/Banner'
import Login from '../views/Login'
import page1 from '../views/page1'
// import page2 from '../views/page2'


Vue.use(VueRouter)

const routes = [

  {
    path: "/",
    name: '/',
    component: Home,
    redirect: '/Home',
    children: [{
        path: 'Banner',
        name: 'Banner',
        component: Banner
      },{
        path: 'page1',
        name: 'page1',
        component: page1
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  // {
  //   path: "/",
  //   name: 'page1',
  //   component: page1,
  //   redirect: '/page1',
  //   children: [{
  //       path: 'page2',
  //       name: 'page2',
  //       component: page2
  //     },]
  // }
]

const router = new VueRouter({
  routes
})

export default router
