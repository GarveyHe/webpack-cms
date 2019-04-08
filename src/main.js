// 入口文件
import Vue from 'vue';
// 1.1 导入 vue-router
import VueRouter from 'vue-router';
// 1.2 安装路由
Vue.use(VueRouter);

// 2.1 导入 vue-resource
import VueResource from 'vue-resource';
// 2.2 安装vue-resource
Vue.use(VueResource);
// 全局设置请求的根路径
Vue.http.options.root = 'http://vue.studyit.io';
// 全局设置 post 时表单数据格式组织形式
Vue.http.options.emulateJSON = true;

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dateStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dateStr).format(pattern);
})

// 导入 Mui的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 按需导入Mint-ui中的组件
// import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui';
// Vue.component( Header.name, Header );
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);

// 使用懒加载必须全部导入Mint-ui
import MintUI from 'mint-ui';
Vue.use(MintUI);
import 'mint-ui/lib/style.css'

// 1.3导入自己的router.js路由模块
import router from './router.js'

// 导入app根组件
import app from './App.vue';

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router // 挂载路由对象
})
