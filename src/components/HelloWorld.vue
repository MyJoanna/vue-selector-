<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
	data(){
		return{
			model1: false,
			model2: false,
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
	methods:{
		// 获取选择数据
		getSelectData(datas, showValue) {
			// 清空历史选择数据
			this.model1 = false
			this.model2 = false
			this.quickSearch = showValue
		},
		openAddress(val){
			console.log(1)
			if(val == 1){
				this.model1 = true
			}else{
				this.model2 = true
			}								
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
