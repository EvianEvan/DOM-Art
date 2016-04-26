//遍历列表里的每个链接，当用户点击链接时会调用showPic函数（p90）
function prepareGallery(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById('imagegallery')) return false;
	var gallery = document.getElementById('imagegallery');
	var links = gallery.getElementsByTagName('a');
	for (var i=0; i < links.length; i++){
		links[i].onclick=function(){
			return showPic(this) ? false:ture; 
		}
	}
}
//点击后在本页替换图片并将文本替换为链接的title值（p90）
function showPic(whichpic) {
	if(!document.getElementById('placeholder')) return false;//part1
	var source = whichpic.getAttribute('href');
	var placeholder = document.getElementById('placeholder');
	var description = document.getElementById('description');

	if (placeholder.nodeName!='IMG') return false;//part2
	placeholder.setAttribute('src',source);
	if(document.getElementById('description')){
		var text = whichpic.getAttribute('title') ? whichpic.getAttribute('title'):'';
		if(description.firstChild.nodeType == 3){
			description.firstChild.nodeValue = text;
		}
	}
	return true;
}

//addLoadEvent通用函数(用于添加window.onload事件处理函数的子函数(P83))
function addLoadEvent(func){
	var oldonload = window.onload;
	if (typeof window.onload != 'function'){
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

addLoadEvent (prepareGallery);

/*function countBodyChildren(){
	var body_element = document.getElementsByTagName("body")[0];
	alert(body_element.childNodes.length);
}
window.onload=countBodyChildren;*/
//window.onload=countBodyChildren();
//加括号后只是一个普通方法调用，调用的时候DOM没有加载完成，只加载到script这里；
//加括号前是整个DOM加载完成后才执行



