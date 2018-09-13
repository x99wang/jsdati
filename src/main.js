// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
// import App from './App'
// import router from './router'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import MyApp from './MyApp'

Vue.config.productionTip = false

/* new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}) */

// eslint-disable-next-line no-new
new Vue({
  el: '#my-app',
  components: { MyApp },
  template: '<my-app/>',

})
