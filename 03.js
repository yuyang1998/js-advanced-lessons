var x="1";
x+=1;
x/=1;
//"+="转换成字符串类型  "/="转换成number类型
console.log(2>1&&4<5);//true
console.log(true&&(!2));//false
console.log(false&&("2"==2));//false
console.log(false&&false);//false
console.log(2>1||4<5);//true
//函数定义声明方式
var max=new Function("a","b","return a>b?a:b");
max(2,3)//3
//函数调用
function foo(){
	console.log("foo");
}
foo==window.foo;//true

var x=45;
var obj={
	name:"obj";
	x:23,
	test:function(){
		function foo(){
			console.log(this.x)
		}
	foo();
}//45
//作为方法调用
var obj={
	name="obj",
	x:23,
	test:function(){
		console.log(this.x,this);
	}
};
obj.test();
var sayHi=function(){
	console.log("Hi,i 'm",this.name);
};
obj.sayHi=sayHi;
obj.sayHi();
//通过call()和apply()间接调用
var fish = {
    name:"fish",
    swim:function (m,n) {
        console.log("i'm "+this.name+" i cam swim ___",m,n);
    }
};

var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};

var me = {
    name:"ABC"
};

bird.fly(5,6);
fish.swim.call(me,3,4);
bird.fly.call(me,7,8);
//短路原则
console.log(2&&4);//4
console.log(0&&4);//0
console.log({x:2}&&{name:"Jack"});//Object{name:"jack"}
console.log(null&&"hello");//null
console.log({}&&"world");//world
console.log(2||4);//2
console.log(0||4);//4
console.log({x:2}||{name:"Jack"});//Object{x:2}
console.log(null||"hello");//hello
console.log({}||"world");//Object{}
console.log((new Boolean(false))&&234);//234
console.log((new Boolean(false))||234);//Bollean{[[PrimitiveValue]]:false}
//等级评定
var score = 76;
if(score>90){
    console.log("优");
}else if(score>75){
    console.log("良");
}else if(score>60){
    console.log("及格");
}else{
    console.log("不及格");
}//良
var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3));//6
console.log(sum(1,2));//8
console.log(sum(1));//10
var sum = function(a,b,c){
    if(b!=false){b = b||4;}//(b!=false)&&(b=b||4);
    if(c!=false){c = c||5;}//(c!=false)&&(c=c||5);
    return a+b+c;
};
console.log(sum(1,2,3));//6
console.log(sum(1,2));//8
console.log(sum(1));//10
console.log(sum(1,0,0));//1
//对象方法调用
var obj = {
    name:"obj",
    x:23,
    test:function(){
        console.log(this.x,this);
    }
};
obj.test();
//给obj动态添加方法
var sayHi = function () {
    console.log("Hi，i'm",this.name);
};
obj.sayHi = sayHi;//添加给对象添加方法
obj.sayHi();
//间接调用
var fish = {
    name:"fish",
    swim:function (m,n) {
        console.log("i'm "+this.name+" i cam swim ___",m,n);
    }
};

var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};

var me = {
    name:"ABC"
};

bird.fly(5,6);//i'm:polly i can fly ___ 5 6
fish.swim.call(me,3,4);//i'm ABC i cam swim ___ 3 4
bird.fly.call(me,7,8);//i'm:ABC i can fly ___ 7 8
//构造函数
function Person(name){
    this.name = name;
}
Person.prototype.sayHi = function(){
    console.log("Hi,i'm "+this.name);
};
var p1 = new Person("Jack");
p1.sayHi();//Hi,i'm Jack
//实参小于形参
var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3));//6
console.log(sum(1,2));//8
console.log(sum(1));//10