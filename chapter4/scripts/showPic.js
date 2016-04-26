function showPic(whichpic) {
	var source = whichpic.getAttribute('href');
	var placeholder = document.getElementById('placeholder');
	placeholder.setAttribute('src',source);

	var text = whichpic.getAttribute('title');
	var description = document.getElementById('description');

	description.firstChild.nodeValue=text;
}

/*function countBodyChildren(){
	var body_element = document.getElementsByTagName("body")[0];
	alert(body_element.childNodes.length);
}
window.onload=countBodyChildren;*/
//window.onload=countBodyChildren();
//加括号后只是一个普通方法调用，调用的时候DOM没有加载完成，只加载到script这里；
//加括号前是整个DOM加载完成后才执行



