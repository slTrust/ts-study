// 类型转换
let n: number = 123;
// n.split('') // 报错
// 你只能转换之后在用
let str = n.toString()
console.log(str.split(''));



// ts 如何进行转化呢？
// let m: number = 123;
// 还是报错
// console.log(<string>m.split(''))


// let n1: any = 123
// console.log(n1.split('')) // 这样写是有安全隐患的
// 会在运行的时候报错

let n2: any = '123'
console.log(n2.split('')) 

// 明确告诉程序它是什么类型, 意思就是 你不用担心 n3是什么，我能确保它是 string ——只是主观判断 
// 如果你实际这样  let n3: any = 123 声明 还是会运行报错，那会是谁的责任，写代码的人
// 这样的意义有什么用，以后会有用——这个概念叫做 断言
let n3: any = '123'
console.log(<string>n3.split(''))


/*
let a = '123'
a = a - 0
// 在 js 里 可以 把 a 变成 number 
// 在 ts 里 是绝对禁止 这样的类型转换
// 但是 js 缺喜欢 偷偷的 类型转换

let b = 123
b = b + '' // '123'
*/

// 正确姿势
let a:number = 123;
let b:string = a.toString();


let c:string = '123'
let d:number = parseFloat(c);

let s1:number = 1;
// 非常不推荐这样写
let b1:boolean = !!s1; 
//应该这样
let b2:boolean = Boolean(s1);

let o1 = {name:'hjx',age:18}
let str1 = JSON.stringify(o1);
console.log(o1); 
console.log(str1);

let str2 = `{"name": "aaa", "age": 18}`;
let o2 = JSON.parse(str2);

