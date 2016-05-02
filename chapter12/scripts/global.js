function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	}else{
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

function insertAfter(newElement,targetElement) {
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElemnet);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibing);
	}
}

function addClass(element,value){
	if (!element.className){
		element.className = value;
	}else{
		newClassName = element.className;
		newClassName+= ' ';
		newClassName+= value;
		element.className = newClassName;
	}
}

function highlightPage(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	var headers = document.getElementsByTagName('header');
	if (headers.length == 0) return false;
	var navs = headers[0].getElementsByTagName('nav');
	if(navs.length == 0) return false;

	var links = navs[0].getElementsByTagName('a');
	var linkurl;
	for (var i=0;i<links.length; i++){
		linkurl = links[i].getAttribute('href');
		if (window.location.href.indexOf(linkurl) != -1){               //为当前页对应链接添加类，以实现高亮效果    
			links[i].className = 'here';
			var linktext = links[i].lastChild.nodeValue.toLowerCase();  //为每个不同链接生成ID，以实现不同效果
			document.body.setAttribute('id',linktext);
		}
	}
}
addLoadEvent(highlightPage);