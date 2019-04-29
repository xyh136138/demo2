import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import a from './views/a.vue'
import b from './views/b.vue'
import test1 from './views/test1.vue'
import test2 from './views/test2.vue'
import Count from './views/Count.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/a',
      component:a,
      children:[
        {
          name:"/a/test1",
          path:"/a/test1",
          component: test1
        },{
          path:"/a/test2",
          component:test2
        }
      ]
    },
    {
      path: '/b',
      component:b,
    },
    {
      path: '/home',
      redirect:'/'
    }

  ]
})
