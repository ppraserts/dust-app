// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false
Axios.defaults.baseURL = 'https://agile-reaches-83574.herokuapp.com/api'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBVNfK_wQ43UUJACCNC79lM0z2KG6P-ZUk',
    libraries: 'places' // necessary for places input
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
