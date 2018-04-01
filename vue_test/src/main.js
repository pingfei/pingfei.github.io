// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入css样式文件
import './assets/css/bootstrap.css'
// 引入js文件
import './assets/js/jquery-3.2.0'
// 将myheader.vue作为一个全局组件
import MyHeader from '@/components/myheader'
Vue.component("myheader",MyHeader)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
