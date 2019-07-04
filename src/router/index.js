import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/hello-world',
      name: 'hello-world',
      component: HelloWorld
    }
  ]
})
