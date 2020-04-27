import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue();

Vue.use(require('vue-moment'));

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
