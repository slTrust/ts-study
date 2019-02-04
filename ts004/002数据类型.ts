let aa: null = null;
let bb: undefined = undefined;

let cc: boolean = false;
let dd: string = 'hello';
let ee: number = 1.23;
let ff: Object = {name:'hjx'};
// let ss = Symbol('key');


// ts里有个规定——你声明了 类型就不能更改,但是在js里是可以的
/*
let n:number = 1;
n = 'hello'
*/

// 如何在 ts 里给一个可以改变类型的变量怎么办？
let n2: any = 1;
n2 = 'hello'

// 枚举——的出现场景

/*
// 以前想给员工信息进行统计，用这样一个字段， 男的就是 man 女的就是 woman
let gender = 'man'

gender = 'woman'

// 有时你写错了个字母也发现不了
gender = 'men'
*/


enum Gender{
    Man,
    Woman
}

//此时在声明类型
let gender:Gender = Gender.Man
console.log(gender)  // 0
// 万一要修改就
gender = Gender.Woman
console.log(gender)  // 1


// 如果我想指定别的呢？
enum Gender2{
    Man = 3,
    Woman = 'hello'
}

//此时在声明类型
let gender2:Gender2 = Gender2.Man
console.log(gender2)  // 3
// 万一要修改就
gender2 = Gender2.Woman
console.log(gender2)  // hello


// void 明确的告诉别人 没有返回值
function print(x: any):void{
    console.log(x);
}

// let a:number = print(1) //报错 因为已经说了没有返回值

// 如果a 不声明类型呢?
let a = print(1); 
a === undefined // a 就是 undefined


// 任何类型 undefined 都可以赋值
let a1:number = undefined
let a2:string = undefined
let a3:boolean = undefined



