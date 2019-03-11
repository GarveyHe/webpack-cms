// 入口文件
import Vue from 'vue';

// 导入路由的包
import VueRouter from 'vue-router';

//导入 Mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 按需导入Mint-ui中的组件
import { Header } from 'mint-ui';
Vue.component( Header.name, Header );

// 导入app根组件
import app from './App.vue';

var vm = new Vue({
  el: '#app',
  render: c => c(app)
})
