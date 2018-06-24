//异常处理基本形式
try{
	console.og("try_statements");
	throw "Some Error";
}
catch(e){
	console.warh("catch_statements",e);
}
finally{
	console.log("finally_statements");
}//finally_statements