import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Test from './components/PageContents/test.vue'

Vue.config.productionTip = false

Vue.use(Router)

const routes = [
  {
    path: '/monthlyincome',
    component: Test
  },
  {
    path: '/transactionalrecord',
    component: Test
  }
]

const router = new Router({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
