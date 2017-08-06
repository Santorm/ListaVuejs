import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Scrum from '@/components/Scrum'

Vue.use(Router)

export default new Router({
  routes: [
  
    {
      path: '/',
      name: 'Scrum',
      component: Scrum
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
