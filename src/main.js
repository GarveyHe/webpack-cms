// 入口文件
import Vue from 'vue';

// 1.1 导入 vue-router
import VueRouter from 'vue-router';
// 1.2 安装路由
Vue.use(VueRouter);

// 导入 Mui的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 按需导入Mint-ui中的组件
import { Header } from 'mint-ui';
Vue.component( Header.name, Header );

import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 1.3导入自己的router.js路由模块
import router from './router.js'

// 导入app根组件
import app from './App.vue';

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router // 挂载路由对象
})
