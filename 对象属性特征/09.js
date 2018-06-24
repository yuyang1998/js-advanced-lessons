//demo06
var objProto = {
    z:3
};

var obj = Object.create(objProto);
obj.x = 1;
obj.y = 2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3
console.log(obj.toString);//原型链上有toString属性
for(var k in obj){//通过for...in遍历所有原型链上的属性
    console.log(k,obj[k]);//能遍历到toString
}
/*
function toString() { [native code] }
 x 1
 y 2
 z 3
 */

//修改obj属性
var obj = {
    x:1,
    y:2
};
Object.defineProperty(obj,"x",{enumerable:false});
for(var k in obj){
    console.log(k,obj[k]);
}// y 2

//defineProperty方法设置
var obj={
	x:1,
	y:2
};
for(var k in obj){
	console.log(k,obj[k]);
}
// x 1
// y 2
var obj={
	x:1,
	y:2
};
Object.defineProperty(obj,"x",{enumerable:false});
for(var k in obj){
	console.log(k,obj[k]);
}//y 2

//demo 08
var person={name:"Jack"};
Object.defineProperty(person,"name",{
	writable:false,
	configurable:false,
	enumerable:true,
	value:"Mike"
});
console.log(person.name);//Mike
person.name="Lucy";
console.log(person.name);//Mike
delete person.name;
console.log(person.name);//Mike

//demo 09
//直接添加的属性，其所有特性默认都是true
obj.z = 3;
for(var k in obj){
    console.log(k,obj[k]);
}

//Part 2
var obj = {
    x:1,
    y:2
};

//直接添加的属性，其所有特性默认都是true
obj.z = 3;
//通过Object.defineProperty方法添加的属性，除了手动修改，其所有特性默认都是false
Object.defineProperty(obj,"w",{value:456,configurable:true});//writable,enumerable没有指定，所以默认为false
for(var k in obj){
    console.log(k,obj[k]);
}
//console.log(obj.w);//有w，但上边for...in遍历不到
//通过属性特性描述符来查看某一对象属性的特性
//属性特性描述符
var obj = {x:5};
Object.defineProperty(obj,"y",{
    configurable:false,
    writable:false,
    enumerable:true,
    value:6
});
Object.defineProperty(obj,"z",{
    configurable:false,
    value:7
});
Object.getOwnPropertyDescriptor(obj,"x");//Object {value: 5, writable: true, enumerable: true, configurable: true}

//改变访问器属性特性 注意添加访问器和修改访问器特性的写法的区别
var obj2={
    _name:"Lucy",
    set name(val){this._name = val;},
    get name(){return this._name;}
};
Object.defineProperty(obj2,"name",{
    get:function (){
        return this._name+"_hihi";
    },
    set:function (val) {
        this._name = val+"_haha";
    }
});
console.log(obj2.name);//Lucy_hihi
obj2.name="jack";
console.log(obj2.name);//jack_haha_hihi

//demo 11设置访问器属性特性
var person = {_name:"Jack"};
Object.defineProperty(person,"name",{
    configurable:false,//若为true会如何
    enumerable:true,
    set:function(val){this._name = val},
    get:function(){return this._name}
});
console.log(person.name);//Jack
person.name = "Lucy";
console.log(person.name);//Lucy
delete person.name;//delete person.name;
console.log(person.name);//Lucy

//属性特性描述符
var obj = {x:5};
Object.defineProperty(obj,"y",{
    configurable:false,
    writable:false,
    enumerable:true,
    value:6
});
Object.defineProperty(obj,"z",{
    configurable:false,
    value:7
});
Object.getOwnPropertyDescriptor(obj,"x");
//Object {value: 5, writable: true, enumerable: true, configurable: true}

//demo 13给多个属性设置特性的方法
var book={};
//调用Object.defineProperties(对象名，要添加的属性)方法，为对象一次定义多个属性(1.数据属性)(2.访问器属性)
Object.defineProperties(book,{
//添加的两个数据属性(_year,edition)
    _year:{//(_year)前面的下划线表示只能通过对象方法访问的属性
        value:2004,
        writable:true //如果没写这一行会怎样？
    },
    edition:{
        value:1,
        writable:true
    },
//添加了访问器属性(year)
    year:{
//调用get方法读取属性
        get:function(){
            return this._year;
        },
//调用set方法写入属性
        set:function(newValue){
            if (newValue>2004) {
                this._year=newValue;
                this.edition+=newValue-2004;
            }
        }
    }
});
//测试
//book.year=2006;
console.log(book.year);//2004
//关于Object.create的第二个属性，思考x是empty自身属性还是obj2的自身属性？
var empty = {};
var obj2 = Object.create(empty,{
   x:{value:1}, y:{value:2,enumerable:true}
});
console.log(obj2);//Object {y: 2, x: 1}
console.log(obj2.hasOwnProperty("x"));//true

//访问器属性特性的继承特点
var o3 = {_x:21};
Object.defineProperty(o3,"x",{
    get:function(){return this._x}
});
o3.x = 34;
console.log(o3.x);//21

var o4 = Object.create(o3);
Object.defineProperty(o4,"x",{
    set:function (val) {
        this._x = val;
    },
    get:function () {
        return ++this._x;
    }
});
o4.x = 56;
console.log(o4.x);//57

//遍历属性的综合实例
var o4 = {};
o4.a = "aaa";
Object.defineProperty(o4,"b",
    {configurable:true,enumerable:false,writable:true,value:"bbb"}
);
var o5 = Object.create(o4);
o5.c = 234;
Object.defineProperty(o5,"d",{enumerable:false,value:567});
for(var k in o5){
    if(o5.hasOwnProperty(k)){
        console.log("o5 自有可遍历属性：",k,o5[k]);//o5 自有可遍历属性： c 234
    }else {
        console.log("o5 非自有可遍历属性：",k,o5[k]);//o5 非自有可遍历属性： a aaa
    }
}
console.log(o5.propertyIsEnumerable("a"),
    o5.propertyIsEnumerable("b"),
    o5.propertyIsEnumerable("c"),
    o5.propertyIsEnumerable("d")
);//false false true false
console.log("a" in o5,"b" in o5,"c" in o5,"d" in o5);//true true true true
console.log(Object.keys(o5));//["c"]
console.log(Object.getOwnPropertyNames(o5));//(2) ["c", "d"]