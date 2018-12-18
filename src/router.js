import Vue from 'vue'
import Router from 'vue-router'
import Chart from './views/Chart.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'chart',
      component: Chart,
    },
  ],
})
