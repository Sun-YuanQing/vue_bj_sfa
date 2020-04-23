var row = 3;
var col = 3;

var arrList = [];
var arrRun = []; //乱序

var imgBox = document.getElementsByClassName('imgBox')[0];
var cellW = imgBox.offsetWidth / col;
var cellH = imgBox.offsetHeight / row;

var btnStart = document.getElementsByClassName('start')[0];
var flag = true;
var imgCell;
var imgWrap = document.getElementsByClassName('imgBox')[0];

function init() {
	imgSpilt();
	bindEvent();
}

init();
//图片切开展示
function imgSpilt() {
	var cell;
	//行
	for (var i = 0; i < row; i++) {
		for (var j = 0; j < col; j++) {
			//第一行 i=0; j=0,1,2 /0 1 2
			//第二行 i=1; j=0,1,2 /3 4 5
			//第三行 i=2; j=0,1,2 /6 7 8
			arrList.push(i * 3 + j);
			arrRun.push(i * 3 + j);

			cell = document.createElement('div');
			cell.classList.add('imgCell');
			cell.style.width = cellW + 'px';
			cell.style.height = cellH + 'px';
			cell.style.left = j * cellW + 'px';
			cell.style.top = i * cellH + 'px';
			cell.style.backgroundPosition = (-j) * cellW + 'px ' + (-i) * cellH + 'px';
			imgBox.appendChild(cell);
		}
	}
	imgCell = document.getElementsByClassName('imgCell');
}
function bindEvent() {
	btnStart.onclick = function() {
		//开始玩
		if (flag) {
			flag = false;
			btnStart.innerHTML = '复原';
			//打乱Cell,打乱数组
			randomArr();
			cellOrder(arrRun);
			//复原
		} else {
			btnStart.innerHTML = '开始';
			flag = true;
			//传入一个正序数组
			cellOrder(arrList);
		}
	}
}

function randomArr() {
	//打乱数组
	arrRun.sort(function(a, b) {
		return (Math.random() - 0.5);
	})
	console.log(arrList, arrRun)
}
//排列展示渲染
//i * 3 + j =num;   arrRun=[2,0,3,5,,7,6,8];
function cellOrder(arr) {
	for (var i = 0; i < arr.length; i++) {
		//i
		row = Math.floor(arr[i] / 3);
		//j
		col = arr[i] % 3;

		imgCell[i].style.left = col * cellW + 'px';
		imgCell[i].style.top = row * cellH + 'px';
		imgCell[i].style.transition = 'all 0.3s ease-in-out';
	}
}
