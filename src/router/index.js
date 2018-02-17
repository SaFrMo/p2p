import Vue from 'vue'
import Router from 'vue-router'
import FrontPage from '@/components/FrontPage'
import GameBoard from '@/components/GameBoard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'FrontPage',
      component: FrontPage
    },
    {
      path: '/level-:level/:step?',
      name: 'GameBoard',
      component: GameBoard
    }
  ]
})
