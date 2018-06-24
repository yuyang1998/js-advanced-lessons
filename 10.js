//demo01  三种创建对象的方式
//通过字面量的方式创建JS对象
var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
//通过Object工场方法创建JS对象,注：JS对象是通过原型链的方式实现的对象继承
var newObj = Object.create(obj);
newObj.age = 23;
console.log(newObj.num);
console.log(newObj.str);
console.log(newObj.show());
console.log(newObj.age);//自有属性
var empty = {};
var obj2 = Object.create(empty,{
   x:{value:1}, y:{value:2,enumerable:true}
});
console.log(obj2);
console.log(obj2.hasOwnProperty("x"));
//构造函数的方式创建JS对象  此处略讲，详情参照后续面向对象编程 注：JS对象是通过原型链的方式实现的对象继承
function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.sayName = function(){
    console.log("hello,i'm",this.name,this.age,"years old");
};

var person1 = new Person("Mike",21);
person1.sayName();
//demo 02
var obj={
	num:10,
	str:"Hi",
	show:function(){
		return this.str;
	}
};
console.log(obj.__proto__);
console.log(obj.__proto__ === Object.prototype);
console.log(newObj.__proto__ === obj);
console.log(newObj2.__proto__ === obj);
console.log(newObj.__proto__.__proto__);//Object.prototype
console.log(newObj.__proto__.__proto__.__proto__);//null
/*
Object {__defineGetter__: function, __defineSetter__: function, hasOwnProperty: function, __lookupGetter__: function, __lookupSetter__: function…}
true
true
true
*/

//demo 03 P1:原型链综述
var proObj={
	z:3
};
var obj=Object.create(proObj);
obj.x=1;
obj.y=2;
console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3
"z" in obj;//true
obj.hasOwnProperty("z");//false
//demo 03 Part2原型链属性操作
obj.z = 5;
console.log(obj.hasOwnProperty("z"));//true
console.log(obj.z);//5
console.log(proObj.z);//3
obj.z = 8;
console.log(obj.z);//8
delete obj.z;//true
console.log(obj.z);//3
delete obj.z;//true
console.log(obj.z);//3
//如何删除原型上的属性
delete  obj.__proto__.z;//或者delete proObj.z;
console.log(obj.z);//此时彻底没有z了
//demo 04
function Person(age,name) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHi = function () {
    console.log("Hi,i'm "+this.name);
};
var p1 = new Person(20,"Jack");
console.log(p1.name);//Jack
console.log(p1.age);//20
p1.sayHi();//Hi,i'm Jack
//demo 05
function Person(name) {
    this.name = name;
    this.age = 21;
}
Person.prototype.sayHi = function () {
    console.log("Hi,i'm ",this.name,this.age,"years old!");
};
var p1 = new Person("Mike");
console.log(p1.name);//Mike
console.log(p1.age);//21
p1.sayHi();//Hi,i'm  Mike 21 years old!
console.log(p1.__proto__ === Person.prototype);//true
//demo 06
function MyObj() { }
MyObj.prototype.z = 3;

var obj = new MyObj();
obj.x = 1;
obj.y = 2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3
console.log("z" in obj);//true
console.log(obj.hasOwnProperty("z"));//false
//demo 06 Part2原型链属性操作
obj.z = 5;
obj.hasOwnProperty("z");
console.log(obj.z);//5
console.log(MyObj.prototype.z);//3
obj.z = 8;
console.log(obj.z);//8
delete obj.z;//true
console.log(obj.z);//3
delete obj.z;//true
console.log(obj.z);//3
//如何删除原型上的属性
delete  obj.__proto__.z;//或者delete MyObj.prototype.z;
console.log(obj.z);//此时彻底没有z了