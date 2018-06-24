var name="jack";
function echo(){
	console.log(name);
}
function foo(){
	var name="bill";
	function fee(){
		var name="lucy";
		echo();
	}
	fee();
}
foo();//jack
//全局作用
var a = 10,
    b = 20;
function fn() {
    //fn局部作用域
    var a = 100,
        c = 200;
    //console.log(a,b,c,d);
    function bar() {
        //bar局部作用域
        var a = 500,
            d = 600;
        console.log(a,b,c,d);
    }
    bar();
}
fn();//500 20 200 600
//IIfe的使用
var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
    //alert("userId = "+userId);
};
/*
function () {
    console.log("userId = ",userId);
    //alert("userId = "+userId);
}
*/
//执行上下文
console.log("小明回家");
var xx = ["书桌","书包","铅笔盒"];//小明家中
console.log("在家-做作业中 1 ...全局上下文");
function goToStore(){
    var yy = ["文具店老板","出售的文具"];//文具商店中
    console.log("在文具店-买文具中  ...函数1上下文");
    console.log("在文具店-买文具中  ...函数1上下文 发现没带钱");
    goToBank();
    console.log("在文具店-买好文具  ...函数1上下文 返回家");
}
function goToBank(){
    var zz = ["银行职员","柜员机"];//银行中
    console.log("在银行-取钱 ...函数2上下文 返回文具店");
}
console.log("在家-做作业中 2 ...全局上下文 发现笔没油了");
goToStore();//笔没油了，去商店买笔
console.log("在家-继续做作业...全局上下文");
/*
小明回家
在家-做作业中 1 ...全局上下文
在家-做作业中 2 ...全局上下文 发现笔没油了
在文具店-买文具中  ...函数1上下文
在文具店-买文具中  ...函数1上下文 发现没带钱
在银行-取钱 ...函数2上下文 返回文具店
在文具店-买好文具  ...函数1上下文 返回家
在家-继续做作业...全局上下文
*/
//调用栈
console.log("全局上下文-start");
var x = 1;
function foo(){
    console.log("foo上下文-start");//设置断点
    var y = 2;
    function bar(){
        console.log("bar上下文-start");//设置断点
        var z = 3;
        console.log(x+y+z);
        console.log("bar上下文-end");//设置断点
    }
    bar();
    console.log("foo上下文-end");//设置断点
}
foo();//设置断点
console.log("全局上下文-end");//设置断点
/*
全局上下文-start
foo上下文-start
bar上下文-start
6
bar上下文-end
foo上下文-end
全局上下文-end
*/
//IIFE
(function(){
	var a=2,b=3;
	if(a<b){
		var useId=234;
	}
});
/*
function (){
	var a=2,b=3;
	if(a<b){
		var useId=234;
	}
}
*/
// 使用Chorme的 Watch窗口（追踪x，y，z）和
// Scope窗体（观察作用域链的变化）
console.log("全局上下文-start");
var x = "家中环境-";
function goToStore_A(){
    console.log("goToStore_A 上下文-start");//设置断点
    var y = "文具店A环境-";
    goToBank_C();//设置断点
    // goToBank_D();//设置断点
    console.log("goToStore_A 上下文-end");//设置断点
}
function goToStore_B(){
    console.log("goToStore_B 上下文-start");//设置断点
    var y = "文具店B环境-";
    goToBank_C();//设置断点
    // goToBank_D();//设置断点
    console.log("goToStore_B 上下文-end");//设置断点
}
function goToBank_C(){
    console.log("goToBank_C 上下文-start");//设置断点
    var z = "银行C环境-";
    //console.log(x+y+z);
    console.log("goToBank_C 上下文-end");//设置断点
}
function goToBank_D(){
    console.log("goToBank_D 上下文-start");//设置断点
    var z = "银行D环境-";
    //console.log(x+y+z);
    console.log("goToBank_D 上下文-end");//设置断点
}
goToStore_A();//设置断点
// goToStore_B();//设置断点
console.log("全局上下文-end");//设置断点
/*
全局上下文-start
goToStore_A 上下文-start
goToBank_C 上下文-start
goToBank_C 上下文-end
goToStore_A 上下文-end
全局上下文-end
*/
//立即执行表达式 常见形式
(function max( x,y){
    console.log("the max is",x>y?x:y);
}(2,3));

(function (x,y){ //可以没有函数名
    console.log("the min is",x<y?x:y);
})(2,3);
//the max is 3
//the min is 2


// 其他形式的IIFE 与运算符结合的写法
var i = function(){
    return 10;
}(); //i为10


true && function(a,b){
    return a>b?a:b;
}(5,9);


!function(x,y){
    return x==y?true:false; // === 返回什么
}("5",5);//false
