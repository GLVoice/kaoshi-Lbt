//找对象
var div =document.querySelector("#box");
ul = div.querySelector("#box1");
imgs = div.querySelector("#box1").children;
ol = div.querySelector("#box2");
btns = [];
goNext = div.querySelector("#goNext");
goPrev = div.querySelector("#goPrev");
var index = 0;
var timer = null;
//创建按钮
for(let i = 0; i <imgs.length; i++){
var li = document.createElement("li");
li.innerHTML = i+1;
ol.appendChild(li);
btns.push(li);
}
//按钮点击
for(let i = 0; i < btns.length; i++) {
btns[i].onclick = function () {
btns[index].classList.remove("on");
index = i;
btns[index].classList.add("on");
ul.style.top = -500*index + "px";
}
}
//向右切换
goNext.onclick = function () {
btns[index].classList.remove("on");
index++;
if(index === imgs.length){
index = 0;
}
btns[index].classList.add("on");
ul.style.top = -500*index + "px";
}
//向左切换
goPrev.onclick = function () {
btns[index].classList.remove("on");
index--;
if(index < 0){
index = as.length-1;
}
btns[index].classList.add("on");
ul.style.top = -500*index + "px";
}
//自动
timer = setInterval(function() {
goNext.onclick();
},1000);
//鼠标进入停止
div.onmouseenter = function () {
clearInterval(timer);
}
div.onmouseleave = function () {
timer = setInterval(function() {
goNext.onclick();
},1000);
}