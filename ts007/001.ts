//用js 你给我什么就返回什么 
function fn1(something){ 
    return something
}


// 用 ts, 你给我任意类型的东西，我给你任意类型的东西
/*
有问题了
给你 number => string  满足条件 any => any
*/
function fn2(something:any):any{ 
    return something
}

// 用一个占位符
function fn3<T>(something:T):T{ 
    return something
}

let s: string = fn3('hi');
let s2 = fn3('hi') // 因为 'hi'的类型是 string 所以返回值的类型是 string
let s3 = fn3<string>('hi');
let s4 = fn3<number>(1);
let s5 = fn3<boolean>(true);

interface Human{
    name:string;
    age:number
}

let s6 = fn3<Human>({name:'hjx',age:18});
let s7 = fn3({name:'hjx',age:18});





