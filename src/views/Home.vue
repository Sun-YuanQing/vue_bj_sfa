<template>
	<div class="body">

		<div class="wrapper">
			<div class="box1"></div>
		</div>
		<embed id='embed' name="embed" src="pdf/web/viewer.html?file=IT sunyuanqing.pdf" @scroll="onscroll" style="width: 100%;height: 105%;">
		<!-- <a href="../pdf/web/viewer.html?file=../../pdf/web/IT sunyuanqing.pdf">../pdf/web/viewer.html</a> -->
	</div>
</template>

<script type="text/javascript">
	export default {
		name: "about",
		components: {},
		data() {
			return {
				numder: 0,
				embed: null
			};
		},
         show(){
			 console.log('scrollTop')
		 },
		 
		mounted() {
			window.addEventListener('scroll', this.onWscrollTop)
		},
		computed: {},
		methods: {
			onclick(e) {
				console.log(e)
			},
			onscroll(e) {
				console.log('e.target.scrollTop')
			},
			onWscrollTop() {
				var scrollTop = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop;
				console.log(scrollTop)
				
			}
		}
	};
	document.body.addEventListener("click", function(e) {
		console.log('body');
		//e.preventDefault() /* （不支持IE9下） */
	})




	/* 	(function () {
		        var w = window.screen.width;
		        var targetW = 320; 
		        var scale = w / targetW; //当前尺寸/目标尺寸
		        var meta = document.createElement("meta");
		        meta.name = "viewport";
		        meta.content = "user-scalable=no,initial-scale=" +
		    		scale + ",minimum-scale=" + scale + ",maximum-scale=" + scale + ",width=" + targetW;
		        console.log(scale);
		      //  alert(scale);
		        document.head.appendChild(meta); 
		    }());

	/* document.onscroll=function(e){
		console.log(e)
	} */
</script>
<style>
	* {
		padding: 0rem;
		margin: 0rem;
	}

	html,
	body {
		width: 100%;
		height: 100%;
	}

	#app {
		width: 100%;
		height: 100%;
	}

	.body {
		width: 100%;
		height: 100%;
	}

	.wrapper {
		display: flex;
		justify-content: flex-end; /* 元素靠右*/
	}

	@media only screen and (min-width: 200px) and (max-width: 500px) {
		.wrapper {
			background: dodgerblue;
			height: 21px;
			clear: both;
			overflow: hidden;
			overflow-x: hidden;
			opacity: 0.3;
			margin-top:20% ;
		}

		.box1 {
			position: relative;
	opacity: 1;
		}

		.box1::before {
			position: absolute;
			font-size: 16px;
			/* 动画名称 时间 线性运动 无限循环  有无往返initial/normal*/
			animation: from_to 20s linear infinite;
			white-space: nowrap;
			/* 不换行 */
			overflow: hidden;
			/* 出现滚动条和允许复制标题*/
			overflow-x: hidden;
			content: "您使用的是移动端,PC大屏更爽,去PC下载/打印简历吧^_^";
				opacity:1;
		}
	}

	@keyframes from_to {
		0% {
			transform: translateX(0%);
		}

		100% {
			transform: translateX(-210%);
		}
	}

	@media only screen and (min-width: 500px) and (max-width: 1700px) {

		.wrapper {
			background: #DDDDDD;
			height: 21px;
			clear: both;
		}

		.box1:before {
			font-size: 16px;
			content: "下载/打印简历";
		}
	}
</style>
