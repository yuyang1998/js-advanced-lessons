
//循环语句
for(var i=0;i<10;i++){
    console.log("i:",i);
}
console.log("out of for:",i);//此时为多少  1 2 3 4 5 6 7 8 9 10
//
var a = 10;
console.log(++a);   //11

var b = 20;
console.log(b++);   //20
//数字类型
console.log(1===1.0);   //true
console.log(Number("xyz"));  //NaN
console.log(3/0);   //Ifinity
//逻辑与或
console.log(2>1&&4<5);    //true
console.log(true&&(!2));    //false
console.log(false&&("2" == 2));  //false
console.log(false&&false);    //false

console.log(2>1||4<5);   //true
console.log(true||(!2));  //true
console.log(false||("2" == 2)); //true
console.log(false||false);  //false
//typeof与instance
//typeof常用于检测基本类型的变量
//instance常用于检测引用类型的变量
console.log(typeof Number); //function
console.log(typeof String); //function
console.log(typeof Boolean); //function
console.log(typeof Object); //function
console.log(typeof Array); //function
console.log(typeof Function); //function
console.log(typeof RegExp); //function
console.log(typeof Error); //function
console.log(typeof Math); //object
console.log(typeof JSON);//undefined

console.log(typeof NaN);//什么类型 
//   number
console.log(typeof Infinity);     
//number

for(var i=0;i<3;i++){
    console.log("i:",i);
}
console.log(i);//是否会报错，若不报错的话此时i为多少？？？？？
//i值输出  0,1,2,3 

//数组去重四种方法
//双层循环  外层循环元素 内层循环时比较值 
//有相同值跳过，不相同push进数组
Array.prototype.distinct = function(){
 var arr = this,
  result = [],
  i,
  j,
  len = arr.length;
 for(i = 0; i < len; i++){
  for(j = i + 1; j < len; j++){
   if(arr[i] === arr[j]){
    j = ++i;
   }
  }
  result.push(arr[i]);
 }
 return result;
}
var arra = [1,2,3,4,4,1,1,2,1,1,1];
arra.distinct();    //返回[3,4,2,1]
//第二种：利用splice直接在原数组进行操作
//双层循环，外层循环元素，内层循环时比较值
//值相同时，则删去这个值,数组长度减一
Array.prototype.distinct = function (){
 var arr = this,
  i,
  j,
  len = arr.length;
 for(i = 0; i < len; i++){
  for(j = i + 1; j < len; j++){
   if(arr[i] == arr[j]){
    arr.splice(j,1);
    len--;
    j--;
   }
  }
 }
 return arr;
};
var a = [1,2,3,4,5,6,5,3,2,4,56,4,1,2,1,1,1,1,1,1,];
var b = a.distinct();
console.log(b.toString()); //1,2,3,4,5,6,56
//第三种：利用对象的属性不能相同的特点进行去重
Array.prototype.distinct = function (){
 var arr = this,
  i,
  obj = {},
  result = [],
  len = arr.length;
 for(i = 0; i< arr.length; i++){
  if(!obj[arr[i]]){ //如果能查找到，证明数组元素重复了
   obj[arr[i]] = 1;
   result.push(arr[i]);
  }
 }
 return result;
};
var a = [1,2,3,4,5,6,5,3,2,4,56,4,1,2,1,1,1,1,1,1,];
var b = a.distinct();
console.log(b.toString()); //1,2,3,4,5,6,56
//第四种：数组递归去重
Array.prototype.distinct = function (){
 var arr = this,
  len = arr.length;
 arr.sort(function(a,b){  //对数组进行排序才能方便比较
  return a - b;
 })
 function loop(index){
  if(index >= 1){
   if(arr[index] === arr[index-1]){
    arr.splice(index,1);
   }
   loop(index - 1); //递归loop函数进行去重
  }
 }
 loop(len-1);
 return arr;
};
var a = [1,2,3,4,5,6,5,3,2,4,56,4,1,2,1,1,1,1,1,1,56,45,56];
var b = a.distinct();
console.log(b.toString());  //1,2,3,4,5,6,45,56

var num=1.23456;
console.log(Boolean(null));
// false
var a=3;
var b=4;
console.log(typeof(a>b),a>b);    //false
console.log(typeof(a==b),a==b);  //false
console.log(typeof(a<b),a<b);    //true
var c="img"+3+".jpg";
var d="23"-5;
console.log(c,d);     //img3.jpg 18
undefined
var e=!23;    
var f=!!34;   
var g=!!{};   
console.log(e,f,g);
// false true true
undefined