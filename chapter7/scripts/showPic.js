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

//insertAfter通用函数（在现有元素后面插入一个元素(p110))
function insertAfter(newElement, targetElement){
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}

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



//以下为chapter7部分,首先删去了placeholder图片和description首页文本

//生成placeholder图片和description首页文本
function preparePlaceholder(){
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById('imagegallery')) return false;
	var placeholder = document.createElement('img');
	placeholder.setAttribute('id','placeholder');
	placeholder.setAttribute('src','images/placeholder.gif');
	placeholder.setAttribute('alt','my image gallery');
	var description = document.createElement('p');
	description.setAttribute('id','description');
	var desctext = document.createTextNode('首页文本');
	description.appendChild(desctext);
	var gallery = document.getElementById('imagegallery');
	var h = document.getElementById('h');
	insertAfter(placeholder,gallery);                            //insertAfter通用函数
	insertAfter(description,h);                                  //insertAfter通用函数
}

addLoadEvent (prepareGallery);                                   //addLoadEvent通用函数
addLoadEvent (preparePlaceholder);                               //addLoadEvent通用函数
