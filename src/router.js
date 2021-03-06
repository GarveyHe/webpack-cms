// 导入路由的包
import VueRouter from 'vue-router'

// 导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photos/PhotoList.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'
import Goodslist from './components/goods/Goodslist.vue'


// 创建路由对象
var router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeContainer  },
    { path: '/member', component: MemberContainer  },
    { path: '/shopcar', component: ShopcarContainer  },
    { path: '/search', component: SearchContainer  },
    { path: '/home/newslist', component: NewsList },
    { path: '/home/newsinfo/:id', component: NewsInfo },
    { path: '/home/photolist', component: PhotoList },
    { path: '/home/photoInfo', component: PhotoInfo },
    { path: '/home/goodslist', component: Goodslist }    
  ],
  linkActiveClass: 'mui-active'
})

// 把路由对象暴露出去
export default router