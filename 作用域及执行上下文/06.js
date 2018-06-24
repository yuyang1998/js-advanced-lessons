//立即执行表达式
!function(x,y){
	return x==y?true:false;
}("5",9);//true
function max(x,y){
	return x>y?x:y;
}
max(2,3);//等价于
(function max(x,y){
	return x>y?x:y;
}(2,3));//小括号写法
//IIFE解决变量共享
function f(){
	var getNumFuncs=[];//数组
	for(var i=0;i<10;i++){
		(function(j){
			getNumFuncs[j]=function(){return j;};
		})(i);
	}
	return getNumFuncs;
}
var tmp=f();
tmp[3]();//3
//局部变量的案例
function f(){
	var getNumFuncs = [];
	var j;
	for(var i=0;i<10;i++){
		j=i;
		getNumFuncs[i]=function(){
			return j;
		};
	}
	return getNumFuncs;
}
var tmp=f();
tmp[3]();//9