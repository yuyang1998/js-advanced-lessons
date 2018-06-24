//不用解构赋值方式定义变量
var a = 1;var b = 2;var c = 3;
console.log(a,b,c);//不用解构赋值方式定义变量
var a = 1;var b = 2;var c = 3;
console.log(a,b,c);//1 2 3
//用解构赋值方式定义变量
//Part 1111111111111111 数组的解构赋值
var [a, b, c] = [1, 2, 3];
console.log(a,b,c);//1 2 3
//let 也支持解构赋值
let [foo,[[bar],baz]] = [1,[[2],3]];
console.log(foo,bar,baz);//1 2 3
let [ , , xx] = ["foo", "bar", "baz"];
console.log(xx);// "baz"
let [x, , y] = [1, 2, 3];
console.log(x,y);//1 3
let [head, ...tail] = [1, 2, 3, 4];
console.log(head,tail);//1 [2, 3, 4]
let [d, e, ...f] = ['a'];
console.log(d,e,f);//"a" undefined []
//注意：如果解构不成功，变量的值就等于undefined
var [foo2] = [];
var [bar2, fee2] = [1];
console.log(foo2,fee2);
//不完全解构的情况
let [x2, y2] = [1, 2, 3];
console.log(x2, y2);//1 2
let [a2, [b2], d2] = [1, [2, 3], 4];
console.log(a2, b2, d2);// 1 2 4
//默认值可以引用解构赋值的其他变量，但该变量必须已经声明
let [m1 = 1, n1 = m1] = []; // m1=1; n1=1
let [m2 = 1, n2 = m2] = [2]; // m2=2; n2=2
let [m3 = 1, n3 = m3] = [1, 2]; // m3=1; n3=2
//let [m4 = n4, n4 = 1] = []; // ReferenceError
console.log(m1,n1,m2,n2,m3,n3);
let a = [];
let b=[2,3,4];
a = b;
console.log(a == b);//true
//Generator案例
function* fibs() {
    var a8 = 0;
    var b8 = 1;
    while (true) {
        yield a8;
        [a8, b8] = [b8, a8 + b8];
    }
}
var [first, second, third, fourth, fifth, sixth,xxx,yyy,zzz,mm,nn,pp] = fibs();
console.log(first, second, third, fourth,fifth,sixth,xxx,yyy,zzz,mm,nn,pp);//
//Generator案例
function* fibs() {
    var a8 = 0;
    var b8 = 1;
    while (true) {
        yield a8;
        [a8, b8] = [b8, a8 + b8];
    }
}
var [first, second, third, fourth, fifth, sixth,xxx,yyy,zzz,mm,nn,pp] = fibs();
console.log(first, second, third, fourth,fifth,sixth,xxx,yyy,zzz,mm,nn,pp);//
//0 1 1 2 3 5 8 13 21 34 55 89
//0 1 1 2 3 5 8 13 21 34 55 89
//对象的解构赋值
var { foo1, bar1 } = { foo1: "aaa", bar1: "bbb" };
console.log(foo1,bar1);//aaa bbb      //aaa bbb
// 对象的解构与数组有一个重要的不同。\
// 数组的元素是按次序排列的，变量的取值由它的位置决定
// 而对象的属性没有次序，变量必须与属性同名，才能取到正确的值
var { bar2, foo2 } = { foo2: "ccc", bar2: "ddd" };//顺序不同，没关系
console.log(foo2,bar2);//ccc ddd
var { baz3 } = { foo3: "ccc", bar3: "ddd" };
console.log(baz3);//undefined
//左侧为键值对时,注意键值对赋值时的对应关系
var { foo4: baz4 } = { foo4: 'aaa', bar4: 'bbb' };
console.log(baz4);// "aaa"

let obj1 = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj1;
console.log(f,l);//hello world
let { first, last } = obj1;
console.log(first,last);//hello world

var { foo5: foo5, bar5: bar5 } = { foo5: "aaa", bar5: "bbb" };
var { foo6: baz6 } = { foo6: "aaa", bar6: "bbb" };
console.log(baz6);// "aaa"
//和数组一样，解构也可以用于嵌套结构的对象,如果是键值对的情况，键只用于匹配，真正赋给的是对应的值
var obj2 = {
    p: [
        'Hello',
        { y: 'World' }
    ]
};
var { p: [x, { y }] } = obj2;
console.log(x); // "Hello"
console.log(y); // "World

var node = {
    loc: {
        start: {
            line: 1,
            column: 5
        }
    }
};
var { loc: { start: { line }} } = node;
line // 1

let obj3 = {};
let arr = [];
({ foo7: obj3.prop, bar7: arr[0] } = { foo7: 123, bar7: true });
console.log(obj3);// {prop:123}
console.log(arr);// [true]

//对象的解构也可以指定默认值。
var {x2 = 3} = {};
console.log(x2); // 3
var {x3, y3 = 5} = {x3: 1};
console.log(x3); // 1
console.log(y3); // 5
var {x4:y4 = 3} = {};
console.log(y4); // 3
var {x5:y5 = 3} = {x5: 5};
console.log(y5); // 5
var { message: msg = 'Something went wrong' } = {};
console.log(msg); // "Something went wrong"

//类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
let {length : len} = 'hello';
console.log(len); // 5

//解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。
let {toString: s1} = 123;
console.log(s1); //function toString() { [native code] }
//demo  12
function add([x, y]){
    return x + y;
}
add([1, 2]); // 3

//函数参数的解构也可以使用默认值,下例中用了两次的解构赋值
function move1({x = 0, y = 0} = {}) {
    return [x, y];
}
console.log(move1({x: 3, y: 4})); // [3, 4]
console.log(move1({x: 3})); // [3, 0]
console.log(move1({})); // [0, 0]
console.log(move1()); // [0, 0]

//注意，下面的写法会得到不一样的结果。
function move2({x, y} = { x: 0, y: 0 }) {
    return [x, y];
}
console.log(move2({x: 3, y: 8})); // [3, 8]
console.log(move2({x: 3})); // [3, undefined]
console.log(move2({})); // [undefined, undefined]
console.log(move2()); // [0, 0]
// 1 交换变量的值
var [x,y] = ["a","b"];
[x, y] = [y, x];
console.log(x,y);//b,a
//demo    13
// 返回一个数组
function example() {
    return [1, 2, 3];
}
var [a, b, c] = example();//undefined
// 返回一个对象
function example() {
    return {
        foo: 1,
        bar: 2
    };
}
var { foo, bar } = example();//undefined
//demo   14
//解构赋值对提取JSON对象中的数据，尤其有用。
var jsonData = {
    id: 42,
    status: "OK",
    data: [867, 5309]
};
let { id, status, data: number } = jsonData;
console.log(id, status, number);//42 "OK" (2) [867, 5309]
//6 遍历Map结构 Map相关内容参见Map Set章节
// 任何部署了Iterator接口的对象，都可以用for...of循环遍历。
// Map结构原生支持Iterator接口，配合变量的解构赋值，获取键名和键值就非常方便。
var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');
for (let [key, value] of map) {
    console.log(key + " is " + value);
}//first is hello    second is world




































