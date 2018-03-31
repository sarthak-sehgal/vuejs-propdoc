import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import Documentation from './DocumentationComponent.vue'
import '../node_modules/propdoc/style.scss';

Vue.component('awesome-test', Home);
Vue.component('documentation', Documentation);

new Vue({
  el: '#app',
  render: h => h(App)
})