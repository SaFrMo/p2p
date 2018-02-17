import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import fullHeight from 'fh-components/v-full-height'

Vue.config.productionTip = false

// Vue.directive('full-height', fullHeight)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
