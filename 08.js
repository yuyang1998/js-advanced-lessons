//定义对象的三种方法
var obj1 = {x:1};
var obj2 = Object.create(obj1);
var obj3 = function(){
	this.z=3;
}
//JS对象
var obj={
	num:10,
	str:"Hi",
	show:function(){
		console.log(this.str);
	}
};
console.log(obj.num);//10
console.log(obj.str);//Hi
obj.show();//Hi
//Part 1
var i = new String("str");          
var h = new Number(1);              
var g = new Boolean(true);          
var j = new Object({name : "Tom"}); 
var k = new Array([1, 2, 3, 4]);   
var l = new Date();                 
var m = new Error();
var n = new Function();
var o = new RegExp("\\d");
//Part 2
console.log(Object instanceof Function);//true
console.log(Object instanceof Object);//true
console.log(Number instanceof Function);//true
console.log(Number instanceof Object);//true
console.log(Function instanceof Function);//true
console.log(Function instanceof Object);//true
console.log(Number instanceof Function);//true
console.log(Number instanceof Object);//true
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
//JS对象的属性
var o={
	_x:1.0,
	get x(){
		return this._x;
	},
	set x(val){
		this._x=val;
	}
};
console.log(o.x);//1
o.x=2;
console.log(o.x,o._x);//2 2
//访问器属性 实例一
var o = {
    _x:1.0,//如果都写成x会怎样
    get x(){
        return this._x;//如果都写成x会怎样
    },
    set x(val){
        this._x = val;//如果都写成x会怎样
    }
};
console.log(o.x);//1
o.x = 2;
console.log(o.x,o._x);//2 2
//访问器属性 实例二 只读
var o = {
    _x:1.0,
    get x(){
        return this._x;
    }
};
console.log(o.x);//1
o.x = 2;
console.log(o.x,o._x);//1  1
//访问器属性 实例三
var p1 = {
    _name:"Jack",
    _age:23,
    set age(val){
        if(val>0&&val<150){
            this._age = val;
        }else{
            console.log("请设置正常年龄");
        }
    },
    get age(){
        return this._age;
    }
};
p1.age = 178;
console.log(p1.age);//请设置正常年龄  23
//访问器属性 综合实例
var p ={
    x:1,
    y:1,
    get r(){return Math.sqrt(this.x*this.x+this.y*this.y);},
    set r(newValue){
        var oldValue = Math.sqrt(this.x*this.x+this.y*this.y);
        var ratio = newValue/oldValue;
        this.x*=ratio;
        this.y*=ratio;
    },
    get theta(){return Math.atan2(this.y,this.x);}
};
var q = Object.create(p);
q.x = 2;
q.y = 2;
console.log(q.r);//2.8284271247461903
console.log(q.theta);//0.7853981633974483
//通过Object工场方法创建JS对象
var newObj = Object.create(obj);//newObj的原型是obj
newObj.age = 23;
console.log(newObj.num);
console.log(newObj.str);
console.log(newObj.show());
console.log(newObj.age);//自有属性
console.log(newObj.__proto__);
console.log(newObj.__proto__ === obj);
//构造函数的方式创建JS对象
function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.sayName = function(){
    console.log("hello,i'm",this.name,this.age,"years old");
};
var person1 = new Person("Mike",21);
person1.sayName();//hello,i'm Mike 21 years old
//注意
var objStr = new Object("xxx");
console.log(typeof objStr);//object
console.log(objStr instanceof String);//true
var objNum = new Object(23);
console.log(typeof objNum);//object
console.log(objNum instanceof Number);//true
var objBoolean = new Object(true);
console.log(typeof objBoolean);//object
console.log(objBoolean instanceof Boolean);//true
//demo05
var obj = {};
obj.x = 2;//直接添加属性
console.log(obj.x);//通过.访问属性  2
obj.x = 5;//设置属性
console.log(obj["x"]);//通过[]访问属性   5
delete obj.x;//删除属性
console.log(obj.x);//undefined
//思考obj3 和 obj4 内容是什么？为什么？
var obj3 = {};
for(var i=0;i<10;i++){
    obj3.i = i;
}

var obj4 = {};
for(var i=0;i<10;i++){
    obj4[i] = i;
}
console.log(obj3);
console.log(obj4);
//Object {i: 9}
//Object {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9}