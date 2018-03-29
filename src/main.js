import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import Documentation from './DocumentationComponent.vue'

Vue.component('awesome-test', Home);
Vue.component('documentation', Documentation);

new Vue({
  el: '#app',
  render: h => h(App)
})
