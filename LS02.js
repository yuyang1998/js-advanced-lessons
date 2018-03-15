console.log(typeof 123);  //number
console.log(typeof true);  //boolean
console.log(typeof "abc");	//string
console.log(typeof null);   //object
console.log(typeof undefined);	//undefined
console.log(typeof {name:"Mike",age:20});	//object
console.log(typeof function foo(){});	//function
console.log(typeof Array);	//function
console.log(typeof Function);	//function
console.log(typeof Date);	//function
console.log(typeof Number);	//function
console.log(typeof Math);	//object
console.log(typeof JSON);	//Object
//类型检测 instanceof 
//（左侧操作数为对象，右侧操作数为原型链中的一个类型时，返回为true）
var a = {name:"Mike",age:20};
console.log(a instanceof Object);	//true
var Person = function(){
    //...
};
var p1 = new Person();
console.log(p1 instanceof Person);	//true

(function () { //立即执行表达式开始
//基本（原始）数据类型与引用（对象）类型的区别1 判等不同
var a1 = 100;
var b1 = 100;
console.log(a1 == b1);	//true
console.log(a1 === b1);	//true

//
var a2 = new Number(200);
var b2 = new Number(200);
console.log(a2 == b2);	//false
console.log(a2 === b2);	//false

//
var a3 = new Number(200);
var b3 = a3;
console.log(a3 == b3);	//true
console.log(a3 === b3);	//true

b3 = new Number(200);
console.log(a3 === b3);	//false
/*
//思考
var a4 = new Number(200);
var b4 = 200;
console.log(a4 == b4);//思考：是b4转换了，还是a4转换了
console.log(a4 === b4);//a4转换了

//思考
var a5 = {x:1,y:2};
var b5 = {x:1,y:2};
console.log(a5 === b5);
console.log(a5.x === a5.x);
//对象属性如果是基本类型内存分配在哪，比较时是值比较还是引用比较
//堆区     比较时时引用比较
*/
}());
//思考：函数、对象属性、对象方法之间的关系
//对象方法为函数，对象属性是描述对象的特征
//思考：在node.js中全局对象是什么？
//global
console.log(Math.ceil(a2));	//24
console.log(Math.floor(a2));	//23
console.log(Math.round(a2));	//23
a3 = 5e2;//指数形式
console.log(a3);	//500
console.log(typeof Math);	//object
var x = Number("xis021");//试着转成Number类型
console.log(x);//NaN
isNaN(x);//true
typeof NaN;
console.log(Math.log(-1));//NaN
console.log(Math.acos(2));//NaN
console.log(NaN === NaN);//false
//Infinity与-Infinity
var y1 = 2/0;
console.log(y1);//Infinity
var y2 = -2/0;
console.log(y2);//-Infinity
isFinite(y2);//false，非有限数
isFinite(23);//true，有限数

//0与-0
var z1 = 1/Infinity;
console.log(z1);//0
var z2 = -1/Infinity;
console.log(z2);//-0
//字符串常用操作
var str = "abc_def_ghi_jkl_mn";
str.split("_");//"abc", "def", "ghi", "jkl", "mn"
str.split("_",2);//"abc", "def"
str.concat("_opq");//"abc_def_ghi_jkl_mn_opq"
str.substr(4,7);//"def_ghi"
str.substring(4,7);//"def"
str.slice(2);//"c_def_ghi_jkl_mn"
str.slice(2,5);//"c_d"
str.slice(-2);//"mn"
str.slice(2,-2);//"c_def_ghi_jkl_"
str.bold();//"<b>abc_def_ghi_jkl_mn</b>"
str.link();//"<a href="undefined">abc_def_ghi_jkl_mn</a>"
str.fontcolor("red");//"<font color="red">abc_def_ghi_jkl_mn</font>"
str.fontsize(50);//"<font size="50">abc_def_ghi_jkl_mn</font>"
//对象类型
var obj = {x:1,y:2};//obj的原型是Object.prototype,并且obj继承的属性和方法都源于这个原型
console.log(obj.__proto__ === Object.prototype);//true
console.log(Object.prototype);
var arr = [1,2,3,4,5];//arr的原型是Array.prototype,并且arr继承的属性和方法都源于这个原型
console.log(arr.__proto__ === Array.prototype);//true
console.log(Array.prototype);
console.log(arr.__proto__.__proto__ === Object.prototype);//true

function foo() { //foo的原型是Function.prototype,并且foo继承的属性和方法都源于这个原型
    console.log("foo function!");//true
};
console.log(foo.__proto__ === Function.prototype);
console.log(foo.__proto__.__proto__ === Object.prototype);
console.log(obj instanceof Object);//true
console.log(arr instanceof Object);//true
console.log(foo instanceof Object);//true
console.log(foo === window.foo);//true