import Vue from 'vue'
import Router from 'vue-router'
import Station from '@/components/Station'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Station',
      component: Station
    }
  ]
})
