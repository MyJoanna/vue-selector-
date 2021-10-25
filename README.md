# vue-selector

## Project setup
```
npm install --save ad-selector
```

### 在main.js中或者页面引入组件
```
import Vue from 'vue'
import vueSelector from 'ad-selector'
import 'ad-selector/lib/vue-selector.css'
Vue.use(vueSelector)
```

### 使用组件
```
<vue-selector  @openAddress="openAddress()" :model="model" :title="title" :datas="datas" :checkedDatas="checkedDatas" @getSelectData="getSelectData"></vue-selector>
```

### 页面的js部分
```
<script>
	import Vue from 'vue'
	import vueSelector from 'ad-selector'
	import 'ad-selector/lib/vue-selector.css'
	Vue.use(vueSelector)
	
	export default {
		name: 'app',
		data() {
			return {
				model: false,
				title: '部门人员选择器',
				quickSearch: '',
				// 已选择数据
				checkedDatas: [{
						label: '小曹',
						id: 4,
						parentId: 3,
						icon: 'el-icon-self-nvxing'
					},
					{
						label: '吴敏',
						id: 18,
						parentId: 16,
						icon: 'el-icon-self-nanxing'
					}
				],
				checkedDatas2: [],
				curLists: [],
				datas: [{
						label: '事业部',
						id: 2,
						parentId: 1,
						icon: 'el-icon-self-bumenguanli',
						child: [{
								label: '数据中心',
								id: 3,
								parentId: 2,
								icon: 'el-icon-self-bumenguanli',
								child: [{
										label: '小曹',
										id: 4,
										parentId: 3,
										icon: 'el-icon-self-nvxing'
									},
									{
										label: '数据维护',
										id: 5,
										parentId: 3,
										icon: 'el-icon-self-bumenguanli',
										child: [{
											label: '数据安全',
											id: 16,
											parentId: 5,
											icon: 'el-icon-self-bumenguanli',
											child: [{
													label: '杨越',
													id: 17,
													parentId: 16,
													icon: 'el-icon-self-nvxing'
												},
												{
													label: '吴敏',
													id: 18,
													parentId: 16,
													icon: 'el-icon-self-nanxing'
												}
											]
										}]
									}
								]
							},
							{
								label: '开发一部',
								id: 6,
								parentId: 2,
								icon: 'el-icon-self-bumenguanli',
								child: [{
										label: '教务开发组',
										id: 7,
										parentId: 6,
										icon: 'el-icon-self-bumenguanli',
										child: [{
											label: '教务产品中心',
											id: 19,
											parentId: 7,
											icon: 'el-icon-self-bumenguanli',
											child: [{
													label: '周武',
													id: 20,
													parentId: 19,
													icon: 'el-icon-self-nanxing'
												},
												{
													label: '任平',
													id: 21,
													parentId: 19,
													icon: 'el-icon-self-nanxing'
												}
											]
										}]
									},
									{
										label: '教务维护组',
										id: 8,
										parentId: 6,
										icon: 'el-icon-self-bumenguanli',
										child: [{
											label: '运维中心',
											id: 22,
											parentId: 8,
											icon: 'el-icon-self-bumenguanli',
											child: [{
													label: '尹佳伟',
													id: 23,
													parentId: 22,
													icon: 'el-icon-self-nanxing'
												},
												{
													label: '蔡姐',
													id: 24,
													parentId: 22,
													icon: 'el-icon-self-nvxing'
												}
											]
										}]
									}
								]
							}
						]
					},
					{
						label: '财务部',
						id: 9,
						parentId: 1,
						icon: 'el-icon-self-bumenguanli',
						child: [{
								label: '税务管理',
								id: 10,
								parentId: 9,
								icon: 'el-icon-self-bumenguanli',
								child: [{
										label: '王浩',
										id: 11,
										parentId: 10,
										icon: 'el-icon-self-nanxing'
									},
									{
										label: '老谈',
										id: 12,
										parentId: 10,
										icon: 'el-icon-self-nanxing'
									},
									{
										label: '老张',
										id: 13,
										parentId: 10,
										icon: 'el-icon-self-nvxing'
									}
								]
							},
							{
								label: '财务管理',
								id: 13,
								parentId: 9,
								icon: 'el-icon-self-bumenguanli',
								child: [{
										label: '老汪',
										id: 14,
										parentId: 13,
										icon: 'el-icon-self-nvxing'
									},
									{
										label: '小星星',
										id: 15,
										parentId: 13,
										icon: 'el-icon-self-nvxing'
									},
									{
										label: '狒狒',
										id: 15,
										parentId: 13,
										icon: 'el-icon-self-nvxing'
									},
									{
										label: '小萍',
										id: 16,
										parentId: 13,
										icon: 'el-icon-self-nvxing'
									}
								]
							}
						]
					}
				]
			}
		},
		mounted() {
			
		},
		methods: {

			// 获取选择数据
			getSelectData(datas, showValue) {
				// 清空历史选择数据
				this.model = false
				this.quickSearch = showValue
			},
			openAddress(){
				this.model = true						
			}
		},
		components:{
			
		}
	}
</script>
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
