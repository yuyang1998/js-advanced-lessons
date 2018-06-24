var a=new Array(5);
console.log(a);//5
var b=new Array("5");
console.log(b);//"5"
console.log(typeof new new Function());//object
console.log(typeof new new Function());//true
console.log(Array instanceof Function)//true
console.log(Array instanceof Object)//true
console.log(Date instanceof Function);//true
console.log(Date instanceof Object);//true
console.log(Math instanceof Function);//false
console.log(Math instanceof Object);//true
console.log(JSON instanceof Function);//false
console.log(JSON instanceof Object);//true
//demo05
function foo(){}
console.log(foo); //function foo(){}
console.log(typeof foo); //function
console.log(foo instanceof Object); //true
console.log(foo instanceof Function); //true
console.log(foo === window.foo); //true
console.log(typeof Function);//function
console.log(typeof Array);	 //function
console.log(typeof Date);	 //function
console.log(typeof Error); 	 //function
console.log(typeof Math);	 //object
console.log(typeof JSON);	 //object
console.log(typeof new Function());// function
console.log(typeof new Array());	 //object
console.log(typeof new Date());	 //object
console.log(Function instanceof Function);//true
console.log(Function instanceof Object);//true
console.log(Array instanceof Function);//true
console.log(Array instanceof Object);//true
console.log(Date instanceof Function);//true
console.log(Date instanceof Object);//true
console.log(Math instanceof Function);//false
console.log(Math instanceof Object);//true
console.log(JSON instanceof Function);//false
console.log(JSON instanceof Object);//true
//demo06
function swim(m,n){
    console.log("i'm:"+this.name+" i can swim ___",m,n);
}
var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};

var me = {
    name:"ABC"
};
swim(1,2);//i'm: i can swim ___ 1 2
swim.call(me,3,4);//i'm:ABC i can swim ___ 3 4
bird.fly(5,6);//i'm:polly i can fly ___ 5 6
bird.fly.call(me,7,8);//i'm:ABC i can fly ___ 7 8
bird.fly.apply(me,[7,8]);//i can fly ___ 7 8
swim.call(null,1,2);//i'm: i can swim ___ 1 2	
//关于绑定
var x = 45;
var obj = {
    x:23,
    test:function(){
		function foo(){
			console.log(this.x);
		}
		foo.bind(this)();//var fee = foo.bind(this); fee();
		foo();
    }
};
obj.test();
//23
//45

//高阶函数
function add(x, y, f) {
    return f(x) + f(y);
}
add(2,3,function(z){return z*z;});
add(2,-3,Math.abs);
add(2,3,Math.sqrt);//3.1462643699419726

function foo(x,y,c1,c2){
	return 2*c1(x)-3*c2(y);
}
function f1(x){
	return x+1;
}
function f2(x){
	return x-1;
}
function f3(x){
	return x*x;
}
foo(1,1,f1,f3);//1
foo(1,1,f3,f2);//2
foo(1,1,f1,f2);//4
//length函数参数的个数
function foo(x,y,z){
console.log(foo.length);
}
foo(1,2,3);//3
//caller属性只有当函数正在执行时才被定义
function test() {
    if (test.caller == null) {
        console.log("test is called from the toppest level");
    } else {
        console.log("test is called from the function:");
        console.log(test.caller.toString());
    }
}
console.log("没有调用的情况下test.caller为：",test.caller);//没有调用的情况下test.caller为： null
//函数对象属性之callee 返回正被执行的 Function 对象，
//即指定的 Function 对象的正文
//callee 属性是 arguments 对象的一个成员
//该属性仅当相关函数正在执行时才可用。通常这个属性被用来递归调用匿名函数
var func = function(n){
    if (n <= 0)
        return 1;
    else
        return n * func(n - 1);
        //return n * arguments.callee(n - 1);
};
console.log(func(4));//24
//函数对象属性之 prototype
//获取对象的原型。每一个构造函数都有一个prototype属性，指向另一个对象。
//这个对象的所有属性和方法，都会被构造函数的实例继承。
function Man(name,age){
	this.name=name;
	this.age=age;
}
Man.prototype.sex="M";
Man.prototype.sayHi=function(){
console.log("Hi,i am",this.name);//M
};
var li=new Man('Leo',10);
console.log(li.sex);
Man.prototype.isStrong=true;
console.log(li.isStrong);//true
//间接调用
var obj={
	x:12,
	foo:function(y){
		console.log(this.x,y);
	}
}
var obj1={
	x:34,
}
obj.foo.call(obj1,"xx");//34 "xx"
//预解析
AA();
function AA(){
	console.log("AA_1");//AA_1
}
var AA=function  AA(){
	console.log("AA_2");//AA_2
};
AA();
//作用域链
var name="Jack";
function echo(){
	console.log(name);
}
functionfoo(){
	var name="Bill";
	echo();
}
foo();
//demo10
if(true){
    var i = 0;
}

function foo(){
    console.log("j:",j);//undefined
    var j = 10;
    console.log("j:",j);//10
}
foo();

console.log("i:",i);//0
console.log("j:",j);//报错
//等价于
var i;
if(true){
    i = 0;
}

function foo(){
    var j;
    console.log("j:",j);//undefined
    j = 10;
    console.log("j:",j);//10
}
foo();

console.log("i:",i);//0
console.log("j:",j);//报错
//预解析
console.log(obj1,obj2);//undefined undefined
var obj1 = {x:23};
console.log(obj1,obj2);//Object {x: 23} undefined
var obj2 = obj1;
console.log(obj1,obj2);//Object {x: 23} Object {x: 23}
obj2.x =25;
console.log(obj1,obj2);//Object {x: 25}  Object {x: 25}


















