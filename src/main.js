// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import CheckBox from './components/CheckBox.vue'
// import Select from './components/Select.vue'
import MainRouter from './router/MainRouter.vue'
import Computed from './components/Computed.vue'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [{
  path: '/main/:id',
  component: MainRouter,
  children: [
    {path: 'item_one', component: CheckBox},
    {path: 'item_two', component: Computed}]
}]

const router = new VueRouter({routes})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
