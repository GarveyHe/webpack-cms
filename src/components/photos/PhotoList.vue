<template>
    <div>

		<div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
						推荐
					</a>
					<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
						热点
					</a>
					<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
						北京
					</a>
					<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
						社会
					</a>
					<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
						娱乐
					</a>
					<a class="mui-control-item" href="#item6mobile" data-wid="tab-top-subpage-6.html">
						上海
					</a>
					<a class="mui-control-item" href="#item7mobile" data-wid="tab-top-subpage-7.html">
						苏州
					</a>
				</div>
				<div class="mui-scroll">
					<a :class="['mui-control-item', item.id = 0 ? 'mui-active' : '']" v-for="item in cates" :key="item.id" @tap='getPhotoListByCateId(item.id)'>{{ item.title }}</a>
				</div>
			</div>
		</div>
		<!-- 图片列表区域 -->
		<ul class="photo-list">
			<router-link v-for="item in list" :key="item.id" tag="li" :to="'/home/photoinfo/' + item.id">
				<img v-lazy="item">
			</router-link>
		</ul>
    </div>
</template>

<script>
// 1.导入mui的js文件
import mui from '../../lib/mui/js/mui.min.js'

export default {
    data() {
        return {
			cates: [],  // 所有分类的列表数组
			list: []    // 图片列表数组
        }
	},
	created() {
		this.getAllCategory();
		// 默认进入页面，主动请求图片列表的数据
		this.getPhotoListByCateId(0);
	},
    mounted() {
        // 当组件中的Dom结构被渲染好并放在页面中后，会执行这个钩子函数
        // 如果要操作元素最好在mounted里面，因为时候的元素是最新的
        // 2.初始化滑动组件
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });   
	},
	methods: {
		getAllCategory() {
			this.$http.get('api/getimgcategory').then(result => {
				if(result.body.status === 0) {
					// 手动拼接出一个最完整的分类列表
					result.body.message.unshift({title: '全部', id: 0});
					this.cates = result.body.message;
				}
			})
		}
		// getPhotoListByCateId() {
		// 	// 根据分类ID获取图片列表
		// 	this.$http.get('api/getimages/' + cateId).then(result => {
		// 		if(result.body.status === 0) {
		// 			this.list = result.body.message;
		// 		}
		// 	}
		// }
	}
}
</script>

<style lang="scss" scoped>
* {
    touch-action: pan-y;
}
.photo-list {
	list-style-type: none;
	margin: 0;
	padding: 10px;
	padding-bottom: 0;
	li {
		margin-bottom: 10px;
		background-color: #ccc;
		text-align: center;
		box-shadow: 0 0 9px #999;
		img {
			width: 100%;
			vertical-align: middle;
		}
		img[lazy=loading] {
		width: 40px;
		height: 300px;
		margin: auto;
		}
	}
}
</style>
