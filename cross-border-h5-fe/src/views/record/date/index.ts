export { default } from "./index.vue";

let date :any= new Date();
let year :number= date.getFullYear();
let years:(number | string)[] = [];
var month:number = date.getMonth();
let months:(number | string)[] = [];
let day:number = date.getDate();
let days:(number | string)[] = [];
var p_currents :any= {
	current: 0,
	y: [],
	m: [],
	mz: [],
	d: []
};
function fill(a) {
	return 10 > a ? '0' + (0 | a) : a;
}
let yearMinStart:number = year; //开始年份
let yearMinEnd :number = year ;//yearMinStart - 3; //结束年份 ===> 以year往后推3年

for (let dateStart:any = yearMinEnd; dateStart <= yearMinStart; dateStart++) {
	years.push(dateStart);
	//console.log("dateStart>>>>", dateStart, year)
	if (dateStart == year) {
		//得到年下标
		p_currents.y.push(years.length - 1);
		p_currents.m.push(years.length - 1);
		p_currents.mz.push(years.length - 1);
		p_currents.d.push(years.length - 1);//[y,m,d]不要以为[y,y,y,y,y]
	}
}

for (let i:any = 0; i < 12; i++) {
	months.push(i);
	if (month == i) {
		//得到月下标
		p_currents.m.push(i);
		p_currents.mz.push(i);
		p_currents.d.push(i);
	}
}
let dateM:any = new Date(yearMinStart, month + 1, 0);
let dayMax :any = dateM.getDate();

for (let t:any=1; t <= dayMax; t++) {
	days.push(t);
	if (t == day) {
		//天下标
		p_currents.d.push(t - 1);
	}
}
	
// console.log(year, month, day, years, months, days);
export{
	year,
	month,
	day,
	years,
	months,
	days,
	p_currents
}