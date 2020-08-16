<template>
	<div id="app">
		<div id="nav">
			<div class="nav-maun">
				<router-link to="/">我的简历</router-link>
			</div>
			<div class="con_maun">
			<div class="float_con_maun">|</div>
			</div>
			<div class="nav-maun">
				<router-link to="/about">部分实践</router-link>
			</div>
		</div>
		<router-view />
	</div>
</template>

<script type="text/javascript">
	//import router from "router.js";
	export default {
		name: "about",
		components: {},
		
		data() {
			return {
				numder: 0,
				embed: null
			};
		},

		mounted() {
			console.log('gggg')
			this.$router.push('/about')
			window.addEventListener('scroll', this.onWscrollTop)
		},
		computed: {},
		methods: {},
		}
		</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	html,
	body {
		background-image: url('colorui/2.png');
		background-size: 100%;
		background-repeat: no-repeat;
		/* 滚动高度超过100%的颜色 */
		background-color: #fff;
	}

	@media only screen and (min-width: 200px) and (max-width: 500px) {
		#nav {
			padding: 24% 30px 30px 30px;
		}
		.nav-maun{
			background-color: #EFA8FB;
			display: inline-block;
			border-radius:5px;
			margin:0px 10px;
			padding: 2px 3px;
			box-shadow: 0px 5px 8px rgb(17, 180, 200, 0.9);
			box-shadow: 0px 5px 8px rgba(17, 180, 200, 0.9);
			opacity: 0.9;
			font-size: 15px;
		}
		.con_maun{
			position: relative;
			display: inline-block;
		}
		.float_con_maun{
			position: absolute;
			left: -3px;
			top: -13px;
			animation: float_con_maun 10s infinite;
		}
	}

	@media only screen and (min-width: 500px) and (max-width: 1700px) {
		#nav {
			padding: 50px;
		}
		.nav-maun{
			background-color: #EFA8FB;
			display: inline-block;
			border-radius:5px;
			margin:0px 10px; 
			padding: 3px 5px;
			box-shadow: 0px 5px 8px rgb(17, 180, 200, 0.9);
			box-shadow: 0px 5px 8px rgba(17, 180, 200, 0.9);
			opacity: 0.9;
		}
		.con_maun{
			position: relative;
			display: inline-block;
		}
		.float_con_maun{
			position: absolute;
			left: -3px;
			top: -13px;
			animation: float_con_maun 10s infinite;
		}
	}

	@import "colorui/main.css";
	@import "colorui/icon.css";

	.nav-list {
		display: flex;
		flex-wrap: wrap;
		padding: 0px 40upx 0px;
		justify-content: space-between;
	}

	.nav-li {
		margin: 30upx;
		border-radius: 3px;
		box-shadow: 0px 5px 20px rgb(17, 180, 200, 0.9);
		box-shadow: 0px 5px 20px rgba(17, 180, 200, 0.9);
		width: 45%;
		margin: 0 2.5% 40upx;
		/* background-image: url(https://cdn.nlark.com/yuque/0/2019/png/280374/15529
		96358352-assets/web-upload/cc3b1807-c684-4b83-8f80-80e5b8a6b975.png); */
		background-size: cover;
		background-position: center;
		position: relative;
		z-index: 1;
		opacity: 0.95;
	}

	.nav-li::after {
		content: "";
		position: absolute;
		z-index: -1;
		background-color: inherit;
		width: 100%;
		height: 100%;
		left: 0;
		bottom: -10%;
		border-radius: 10upx;
		opacity: 0.2;
		transform: scale(0.9, 0.9);
	}

	.nav-li.cur {
		color: #fff;
		background: rgb(94, 185, 94);
		box-shadow: 4upx 4upx 6upx rgba(94, 185, 94, 0.4);
	}

	.nav-title {
		font-size: 32upx;
		font-weight: 300;
	}

	.nav-title::first-letter {
		font-size: 40upx;
		margin-right: 4upx;
	}

	.nav-name {
		font-size: 28upx;
		text-transform: Capitalize;
		margin-top: 20upx;
		position: relative;
	}

	.nav-name::before {
		content: "";
		position: absolute;
		display: block;
		width: 40upx;
		height: 6upx;
		background: #fff;
		bottom: 0;
		right: 0;
		opacity: 0.5;
	}

	.nav-name::after {
		content: "";
		position: absolute;
		display: block;
		width: 100upx;
		height: 1px;
		background: #fff;
		bottom: 0;
		right: 40upx;
		opacity: 0.3;
	}

	.nav-name::first-letter {
		font-weight: bold;
		font-size: 36upx;
		margin-right: 1px;
	}

	.nav-li text {
		position: absolute;
		right: 30upx;
		top: 30upx;
		font-size: 52upx;
		width: 60upx;
		height: 60upx;
		text-align: center;
		line-height: 60upx;
	}

	.text-light {
		font-weight: 300;
	}

	@keyframes show {
		0% {
			transform: translateY(-50px);
		}

		60% {
			transform: translateY(40upx);
		}

		100% {
			transform: translateY(0px);
		}
	}

	@-webkit-keyframes show {
		0% {
			transform: translateY(-50px);
		}

		60% {
			transform: translateY(40upx);
		}

		100% {
			transform: translateY(0px);
		}
	}
	@keyframes float_con_maun {
		0% {
			transform: translateY(0px)  translateX(0px);
		}
		10% {
			transform: translateY(-3px)  translateX(3px);
		}
		12% {
			transform: translateY(-5px)  translateX(5px);
		}
		20% {
			transform: translateY(-8px)  translateX(2px);
		}
		50% {
			transform: translateY(-10px)  translateX(0px);
		}
		70% {
			transform: translateY(2px)  translateX(7px);
		}
		80% {
			transform: translateY(5px)  translateX(-3px);
		}
		100% {
			transform: translateY(0px)  translateX(0px);
		}
	}
	@-webkit-keyframes float_con_maun {
			0% {
			transform: translateY(0px)  translateX(0px);
		}
		10% {
			transform: translateY(-3px)  translateX(3px);
		}
		12% {
			transform: translateY(-5px)  translateX(5px);
		}
		20% {
			transform: translateY(-8px)  translateX(2px);
		}
		50% {
			transform: translateY(-10px)  translateX(0px);
		}
		70% {
			transform: translateY(2px)  translateX(7px);
		}
		80% {
			transform: translateY(5px)  translateX(-3px);
		}
		100% {
			transform: translateY(0px)  translateX(0px);
		}
	}
</style>


<style lang="scss">
	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;

	}

	#nav {
		/* padding: 30px; */
		margin: 0px 30px 3px 30px;

		a {
			font-weight: bold;
			color: #2c3e50;

			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
</style>
