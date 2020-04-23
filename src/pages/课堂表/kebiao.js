var container=document.getElementById('divcontainer');

/**
 * 得到允许拖拽的dom元素，如果没有，返回undefined
 */
function getAllowedDom(target){
	if(target.dataset.allowed==='true'){
		return target;
	}
	if(target.parentNode.dataset.allowed){
		return target.parentNode;
	}
}
var curDiv;
container.ondragstart=function(e){
	curDiv=e.target;
}
//悬浮目标改变样式
container.ondragover=function(e){
	//阻止浏览器的默认行为
	e.preventDefault();
	var dom=getAllowedDom(e.target);
	if(dom){
		e.dataTransfer.dropEffect=dom.tagName==="DIV"?"move": "copy";
	}else{
		e.dataTransfer.dropEffect="none";
	}
}
//进入目标改变颜色
container.ondragenter=function(e){
	var dom=getAllowedDom(e.target);
	if(dom && dom.tagName==="TD"){
		dom.style.background="#eee";
	}
}

//离开目标改变颜色
container.ondragleave=function(e){
	var dom=getAllowedDom(e.target);
	if(dom && dom.tagName==="TD"){
		dom.style.background="#fff";
	}
}
//松开目标改变颜色
container.ondrop=function(e){
	var dom=getAllowedDom(e.target);
	console.log(dom)
	if(!dom){
		return;
	}
	dom.style.background="";
	if(curDiv.parentNode.tagName==="DIV" && dom.tagName==="TD"){
		//复制
		dom.innerHTML='';
		dom.appendChild(curDiv.cloneNode(true)) ;
	}else if(dom.tagName==="TD"){
		//移动
		var defoer=dom.innerHTML;
		var parent=curDiv.parentNode;
		dom.innerHTML='';
		dom.appendChild(curDiv);
		parent.innerHTML=defoer;
	}else{
		curDiv.remove();
	}
}

// var div=document.getElementById('test');
// var tdtest=document.getElementById('tdtest');
// div.ondragstart=function(){
// 	console.log(' id="test" draggable="true"')
// 	console.log('div.ondragstart  开始拖')
// }
// 
// div.ondrag=function(){
// 	console.log('div.ondrag  继续');
// }
// 
// div.ondragend=function(){
// 	console.log('div.ondragend 结束拖');
// }
// 
// tdtest.ondragenter=function(){
// 	console.log('id="tdtest" 目标');
// 	console.log('tdtest.ondragenter 进入-目标');
// }
// 
// tdtest.ondragover=function(e){
// 	//阻止浏览器的默认行为
// 	e.preventDefault();
// 	e.dataTransfer.dropEffect="copy";//none,copy,move,link
// 	tdtest.style.borderColor="#80E3F7"
// 	console.log('tdtest.ondragover 悬浮-目标');
// }
// 
// tdtest.ondragleave=function(){
// 	tdtest.style.borderColor="#999"
// 	console.log('tdtest.ondragleave 离开-目标');
// }
// 
// tdtest.ondrop=function(e){
// 	tdtest.style.borderColor="#999"
// 	
// 	console.log('tdtest.ondrop 到目标松手-目标');
// }
// 
// 