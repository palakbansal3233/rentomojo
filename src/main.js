import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import router from './router'
import App from './App.vue'
import VueAxios from 'vue-axios'
import Axios from 'axios'

Vue.use(BootstrapVue)
Vue.use(VueAxios, Axios)
Vue.use(router)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
