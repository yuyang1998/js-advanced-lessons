//创建数组的不同方式
var arr1=[1,2,3,"4"];
var arr2=new Array(5);
console.log(arr2);//(5) [undefined × 5]
for(var i=0;i<arr2.length;i++){arr2[i]=i}
var arr3=new Array(1,2,3,4);
console.log(arr1,arr2,arr3);//(4) [1, 2, 3, "4"] (5) [0, 1, 2, 3, 4] (4) [1, 2, 3, 4]
//数组元素的增删改查的基本操作
var a=["hello"];
a[1]=3.14;
a[2]="world";
console.log("删除a[2]前的数组a",a);//删除a[2]前的数组a (3) ["hello", 3.14, "world"]
delete a[2];
console.log("删除a[2]后的数组a",a);//删除a[2]后的数组a (3) ["hello", 3.14, undefined × 1]
a[0]="XX";
console.log(a[0]);//XX
//数组相对于普通对象的特别之处
var a=[];
a[-1.23]=true;
a["100"]=0;
a[1.00]="Hi";
console.log(a.length);//101
console.log(a);//(101) [undefined × 1, "Hi", undefined × 98, 0, -1.23: true]
