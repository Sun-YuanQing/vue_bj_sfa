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
			
				<div class="month-box" v-for="(item, key,i) in weeksM">
					<div v-for="(itemM, key1) in item">
						<div class="month-Title">{{key}} 年{{ key1 - 0 + 1 }}月 </div>
						<div class="days-box">
							<div class="day" v-for="(day)  in itemM">{{day | dateDay}}</div>
						</div>
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
		date,
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

		Mstart: any = '';
		Mend: any = '';
		date: any = new Date();
		year: number = date.getFullYear();
		years: (number | string)[] = years;
		month: number = date.getMonth();
		months: (number | string)[] = months;
		day: number = date.getDate();
		days: (number | string)[] = days;
		p_currents: any = p_currents;
		currents: any = {};
		current: number = 0;
		valuedate: any = [];
		weeksM: any = {};
		weeks: any = [];
		week: any = {
			index: 0, //当前周的下标
			day: false,
			week: '' //当前周
		}
		tmpWeek: any = '';
		mounted() {
			for (let i: any = 0; i < 12; i++) {
				let tmpdate: any = [0, i];
				this.setWeeksM(tmpdate);
			}
			console.log(this.weeksM);
			this.$forceUpdate();
			// console.log( year, month,
			// 	day, years, months,
			// 	days, p_currents, this.currents,
			// 	this.current, this.valuedate, JSON.stringify( this.weeksM),
			// 	this.weeks, this.week, this.tmpWeek)
		};
		setWeeksM(tmpdate) {
			//准备好参数
			let dateWeek: any = tmpdate || this.p_currents.d;
			let y: any = this.years[dateWeek[0]];
			let m: any = dateWeek[1];

			let MDateStart: any = new Date(y, m, 1);
			//console.log(this.format(MDateStart),MDateStart.getDay());
			//好奇怪算最后一位要加一位
			let MDateEnd: any = new Date(y, m + 1, 0);
			//console.log(this.format(MDateEnd),MDateEnd.getDay());
			//周日:字符
			let strMstart: any = this.getWeek1(MDateStart);
			console.log(strMstart);
			let strMend: any = this.getWeekEnd(MDateEnd);
			console.log(strMend);

			let Mstart: any = new Date(strMstart);
			let Mend: any = new Date(strMend);

			if (this.weeksM[y]) {
				// console.log(typeof this.weeksM[y][m]);
				if (typeof this.weeksM[y][m] == "object") {
					if (Mend > tmpDate) {
						//this.format(tmpDate)
						this.weeksM[y][m].push(tmpDate);
						tmpDate = this.addDate(tmpDate, 1);
					} else {
						return;
					}
				} else {
					this.weeksM[y][m] = [];
				}
			} else {
				this.weeksM[y] = {};
			}
			let tmpDate: any = Mstart;
			let WeeksMpush: any = () => {
				if (typeof this.weeksM[y][m] == "object") {
					
				} else {
					this.weeksM[y][m] = [];
				}
				if (this.weeksM[y]) {
					// console.log(typeof this.weeksM[y][m]);
					if (typeof this.weeksM[y][m] == "object") {
						if (Mend > tmpDate) {
							//this.format(tmpDate)
							this.weeksM[y][m].push(tmpDate);
							tmpDate = this.addDate(tmpDate, 1);
						} else {
							return;
						}
					} else {
						this.weeksM[y][m] = [];
					}
				} else {
					this.weeksM[y] = {};
				}
				WeeksMpush();

			}
			WeeksMpush();

		};

		//算周日 中国标准时间
		getWeek1(date) {
			let nowTime = date.getTime();
			let day = date.getDay() == 0 ? 7 : date.getDay();
			let oneDayLong = 24 * 60 * 60 * 1000;
			let time = nowTime - (day +1) * oneDayLong;
			let week1 = new Date(time);
			return this.format(week1);
		};
		//算周六
		getWeekEnd(date) {
			let nowTime = date.getTime();
			let day = date.getDay() == 0 ? 6 : date.getDay();
			let oneDayLong = 24 * 60 * 60 * 1000;
			let time = nowTime + (6 - day) * oneDayLong;
			let week1 = new Date(time);
			return this.format(week1);
		};
		addDate(date, T) {
			if (T == undefined || T == '') {
				T = 1;
			}
			return new Date(date.setDate(date.getDate() + T));
		};
		//将标准时间 字符串格式化
		format(date) {
			let y = date.getFullYear();
			let m = date.getMonth() + 1;
			let d = date.getDate();
			return y + '-' + this.fill(m) + '-' + this.fill(d);
		};
		//格式化月 字符串格式化
		fill(a) {
			return 10 > a ? '0' + (0 | a) : a;
		};
		// setDays(date) {
		// 	let dateWeek:any = date || this.p_currents.d;
		// 	let y:any = this.years[dateWeek[0]];
		// 	let m :any= dateWeek[1];
		// 	//出现重复不执行

		// 	if (this.weeksM[y]) {
		// 		this.weeksM[y][m + 1] = this.weeksM[y][m + 1] ? this.weeksM[y][m + 1] : [];
		// 		if (this.weeksM[y][m + 1].length > 0) {
		// 			return;
		// 		}
		// 	}
		// 	//kai开始和结束

		// 	let prevDate:any = new Date(y, m, 1);
		// 	console.log(prevDate,prevDate.getDay());
		// 	//好奇怪要加一位
		// 	let prevDateEnd:any = new Date(y, m + 1, 0);
		// 	console.log(prevDateEnd,prevDateEnd.getDay());
		// 	//周日:字符
		// 	let start:any = this.getWeek1(prevDate);
		// 	console.log(start);
		// 	this.weeks = []; //上面滑动的
		// 	let i:any = 0;
		// 	let dateWeeks:any = null;
		// 	let fun:any = () => {
		// 		//准备递归的判断出口参数
		// 		let startTime:any = new Date(start);
		// 		// console.log('startTime', startTime.getFullYear(), startTime.getMonth(), startTime.getDate())
		// 		// console.log('prevDateEnd', prevDateEnd.getFullYear(), prevDateEnd.getMonth(), prevDateEnd.getDate())
		// 		startTime = startTime.getTime();
		// 		let endTime:any = prevDateEnd.getTime();

		// 		//console.log('>>> 循环');
		// 		let arr:any = start.split('-');
		// 		//运算周的开头和结尾
		// 		if (i % 2 == 0) {
		// 			if (arr[0] > this.year) {
		// 				return;
		// 			}
		// 			this.weeks.push(arr[0] + '-' + arr[1] + '-' + arr[2]); //滑动显示的
		// 			this.tmpWeek = arr[1] + '-' + arr[2]; //下拉列表显示的
		// 		} else {
		// 			let str:any = this.weeks[this.weeks.length - 1];
		// 			//链接   周
		// 			this.weeks[this.weeks.length - 1] = str + ' — ' + arr[0] + '-' + arr[1] + '-' + arr[2];
		// 			this.tmpWeek = this.tmpWeek + ' 到 ' + arr[1] + '-' + arr[2];

		// 			//标记当天所在周
		// 			let start_date:any = str.split('-');
		// 			if (arr[1] > this.month + 1 && arr[0] == y || start_date[1] > this.month + 1 && start_date[0] == y) {
		// 				return;
		// 			}
		// 			if (this.week.day == false) {
		// 				if (
		// 					(arr[0] == this.year && arr[1] == this.month + 1 && arr[2] >= this.day) ||
		// 					(start_date[0] == this.year && start_date[1] == this.month + 1 && start_date[2] == this.day)
		// 				) {
		// 					this.week.index = this.weeks.length - 1;
		// 					this.week.day = true;
		// 					this.week.week = this.weeks[this.weeks.length - 1];
		// 				}
		// 			}

		// 			//取出每月对应的周数据
		// 			let intY:any = parseInt(arr[0]);
		// 			let intM:any = parseInt(arr[1]);
		// 			//如果没有年月处理
		// 			if (!this.weeksM[intY]) {
		// 				this.weeksM[intY] = {};
		// 			}
		// 			if (!dateWeeks) {
		// 				dateWeeks = [];
		// 			} else {
		// 				// this.weeksM[intY][intM].map((car) => {
		// 				// 	console.log('car',car)
		// 				// })

		// 			}

		// 			var data:any = {
		// 				week: this.tmpWeek,
		// 				weeksIndex: this.weeks.length - 1
		// 			};
		// 			dateWeeks.push(data);

		// 			//当周定位
		// 			if (this.week.day == true && this.currents.mz < 0) {
		// 				this.valuedate[1] = intM - 1;
		// 				this.valuedate[2] = dateWeeks.length - 1;
		// 				this.p_currents.mz[2] = dateWeeks.length - 1;
		// 				this.currents.mz = dateWeeks.length - 1;
		// 				this.current = this.weeks.length - 1;
		// 			}
		// 		}
		// 		i += 1;
		// 		var start1 :any= new Date(start);
		// 		let start2 :any= start1.getDay();
		// 		//周日是0,周一6

		// 		if (start2 == 0) {
		// 			start = this.addDate(start1, 6);
		// 		} else {
		// 			start = this.addDate(start1, 1);
		// 		}

		// 		if (startTime >= endTime) {
		// 			//console.log('>>> 推出');
		// 			return;
		// 		}
		// 		fun();
		// 	}
		// 	fun();

		// 	this.weeksM[y][m + 1] = dateWeeks;

		// };
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
		background-color: #E5E5E5;
		padding: 0rem 0.2rem;

		.month-Title {
			height: 0.62rem;

			opacity: 1;
			font-size: 0.28rem;
			font-family: Microsoft YaHei Bold, Microsoft YaHei Bold-Bold;
			font-weight: 700;
			text-align: left;
			color: #343434;
			line-height: 0.62rem;
		}

		.days-box {
			width: 100%;
			height: 100%;
			display: inline-block;
			background: rgba(255, 255, 255, 1.0);
			border-radius: 0.1rem;

			.day {
				width: 14.28%;
				padding: 0.35rem 0rem;
				float: left;
				text-align: center;
			}
		}
		padding-bottom: 1rem;
	}

	// }
</style>
