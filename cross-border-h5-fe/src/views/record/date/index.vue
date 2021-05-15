<template>
	<div class="page">
		<Tabs v-model="tabActive" animated color="#367DFF" title-active-color="#367DFF" background="#E5E5E5">
			<Tab title="显示日历">
				<div class="weekTitle f-row-WHcenter">
					<div class="text">日</div>
					<div class="text">一</div>
					<div class="text">二</div>
					<div class="text">三</div>
					<div class="text">四</div>
					<div class="text">五</div>
					<div class="text">六</div>
				</div>

				<div class="month-box">
					<div class="month-Title">2021年1月</div>
					<div class="days-box">
						<div class="day">1</div>
						<div class="day">1</div>
						<div class="day">1</div>
						<div class="day">1</div>
						<div class="day">1</div>
						<div class="day">1</div>
						<div class="day">1</div>
						<div class="day">1</div>
						<div class="day">1</div>
						<div class="day">1</div>
						<div class="day">1</div>
					</div>
				</div>
			</Tab>
			<Tab title="显示日期">内容 2</Tab>
		</Tabs>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import {
		Component
	} from 'vue-property-decorator';
	import {
		Tabs,
		Tab
	} from 'vant';
	import {
		year,
		month,
		day,
		years,
		months,
		days,
		p_currents
	} from './index';

	@Component({
		components: {
			Tabs,
			Tab
		},
	})
	export default class TIcon extends Vue {
		tabActive: number = 0;
		mounted(){
			console.log(year,
				month,
				day,
				years,
				months,
				days,
				p_currents)
		}
	}
</script>

<style lang="less" scoped>
	@import './index.less';

	.page {
		background-color: #E5E5E5;
		height: 100vh;
	}

	.weekTitle {
		width: 100%;
		background-color: rgba(255, 255, 255, 1);
		padding: 0 0.2rem;

		.text {
			width: 14.28%;
			text-align: center;
			padding: 0.2rem 0rem;
		}
	}

	// .content{

	.month-box {
		padding: 0rem 0.2rem;
		.month-Title{
			height: 0.62rem;
			
			opacity: 1;
			font-size: 0.28rem;
			font-family: Microsoft YaHei Bold, Microsoft YaHei Bold-Bold;
			font-weight: 700;
			text-align: left;
			color: #343434;
			line-height:  0.62rem;
		}
		.days-box {
			width: 100%;
			height: 100%;
			display: inline-block;
			background: rgba(255, 255, 255, 1.0);
			border-radius: 0.1rem;
			.day{
				width: 14.28%;
				padding: 0.35rem 0rem;
				float: left;
				text-align: center;
			}
		}
	}

	// }
</style>
