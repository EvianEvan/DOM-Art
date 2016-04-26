//分离javascript（事件处理函数）
window.onload=prepareLinks;
function prepareLinks() {
var links= document.getElementsByTagName('a');
for (var i=0; i<links.length; i++){
	if(links[i].getAttribute('class') == 'popup'){
		links[i].onclick=function(){
			popUp(this.getAttribute('href'));
			return false;
		}
	}
  }
}

//弹出窗口
function popUp(url){
window.open(url, 'popUp','width=980,height=560')
}

//查询子节点数量
/*function countBodyChildren(){
	var body_element = document.getElementsByTagName("body")[0];
	alert(body_element.childNodes.length);
}
window.onload=countBodyChildren;*/
//window.onload=countBodyChildren();
//加括号后只是一个普通方法调用，调用的时候DOM没有加载完成，只加载到script这里；
//加括号前是整个DOM加载完成后才执行



