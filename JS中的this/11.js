//一般函数中的this
function thisTest(){
	console.log(this === window);
}
thisTest();//true
//通过this在函数内添加、删除、修改全局属性
var a=10,b="Hi";
function thisTest(){
	this.a=20;
	delete this.b;
	this.c="添加新的全局变量"
}
thisTest();
console.log(a,c);//8 20 "添加新的全局变量"
//一般函数中的this(严格模式)为undefined
function thisTest(){
	"use strict"
	console.log(this);
}
thisTest();//undefined
//对象方法中的this
var point ={
	x:0,
	y:0,
	moveTo:function(x,y){
		this.x=x;
		this.y=y;
	}
};
point.moveTo(1,1)
console.log(point);//Object {x: 1, y: 1, moveTo: function}
//构造函数中的this
function Point(s,y){
	this.x=x;
	this.y=y;
}
var p=new Point(2,3);
p;//Point {x: 2, y: 3}
//间接调用中的this
objA = {name:"AA",x:1};
objB = {name:"BB",x:5};
objA.test = function () {
    console.log(this.name,this.x);
};

objA.test();//AA 1
objA.test.call(objB);//BB 5