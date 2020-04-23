<template name="basics">
	<div>
		<div scroll-y class="page">
			<!-- <img src="../../colorui/e256b4ce-d9a4-488b-8da2-032747213982.png"
			class="response"> -->
			<div class="nav-list">
				<a hover-class="none" :href=" item.name" class="nav-li" navigateTo :class="'bg-'+item.color"
				 :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" v-for="(item,index) in elements" :key="index">
					<div class="nav-title">{{item.title}}</div>
					<div class="nav-name">{{item.meg}}</div>
					<text :class="'cuIcon-' + item.cuIcon"></text>
				</a>
				
			</div>
			<div class="cu-tabbar-height"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "basics",
		data() {
			return {
				elements: [{
						title: '游戏人物',
						name: './pages/游戏人物角色选择介绍jQuery特效动画切换效果/index.html',
						color: 'cyan',
						cuIcon: 'newsfill'
					},
					{
						title: '日食',
						name: './pages/07-25position变换(日食)/index.html',
						color: 'blue',
						cuIcon: 'colorlens'
					},
					{
						title: '抖音时钟',
						name: './pages/09-05抖音超火时钟屏保/index.html',
						color: 'purple',
						cuIcon: 'font'
					},
					{
						title: '旋转魔方',
						name: './pages/2019-10-07Monica旋转魔方/index.html',
						color: 'mauve',
						cuIcon: 'cuIcon'
					},
					{
						title: '游戏加载',
						name: './pages/CSS3游戏加载效果/index.html',
						color: 'pink',
						cuIcon: 'btn'
					},
					{
						title: '课堂表',
						name: './pages/课堂表/kebiao.html',
						color: 'brown',
						cuIcon: 'tagfill'
					},
					{
						title: '傲鹏PDA',
						name: 'http://opensoft.vicp.net:8888/api/Pda/upgrade/downloadapk',
						color: 'red',
						cuIcon: 'myfill',
						meg:'自动下载-无页面'
					},
					{
						title: '深圳成飞APP',
						name: 'http://hzcfcc.xicp.net:81/szcfapp/download/',
						color: 'orange',
						cuIcon: 'icloading'
					},
					{
						title: '拼图',
						name: './pages/拼图游戏/pingtu.html',
						color: 'olive',
						cuIcon: 'copy'
					}/* ,
					{
						title: '加载',
						name: '',
						color: 'green',
						cuIcon: 'loading2'
					} */
					
				]
			};
		},
		onShow() {
			console.log("success")
		}
	}
</script>

<style>
	/* .page {
		height: 100px;
	} */
	@media only screen and (min-width: 200px) and (max-width: 500px) {
		.nav-list {
			margin-top: 20%;

		}

		.nav-li {
			margin: 2%;
		}
	}
   a{
	   /* 去掉下划线*/
	  text-decoration: none;
	  display: flex;
	  justify-content: center;
      align-items: center;
	  flex-direction: column;
   }
	@media only screen and (min-width: 500px) and (max-width: 1700px) {
      
		.nav-li {
			margin: 2%;
			height: 3rem;
		}
	}
</style>