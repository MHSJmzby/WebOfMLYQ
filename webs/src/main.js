import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import 'normalize.css'
import 'animate.css'
import './assets/css/reset.css'
// import './assets/css/bootstrap-theme.css'
// import './assets/css/bootstrap.min.css'
// import './assets/css/font-awesome.min.css'
// import './assets/css/style.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
