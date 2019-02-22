import Vue from 'vue'
import App from './App.vue' 
import axios from 'axios'
import VueAxios from 'vue-axios'
import ECharts from 'vue-echarts' 
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip' 
import 'echarts-gl'


Vue.component('v-chart', ECharts)
 
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
