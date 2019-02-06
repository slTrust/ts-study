/*
1. 声明一个类 A
2. 声明一个类 B
3. B 继承 A（B extends A）
4. A 的对象属性有
    a1，类型为 number
    a2，是一个函数，函数的实现随意
5. A 的构造函数会初始化 a1
6. B 的对象属性有
    b1，类型为 string
    b2，是一个函数，函数的实现随意
7. B 的构造函数会初始化 b1
*/

class A{
    a1: number;
    constructor(a1: number){
        this.a1 = a1;
    }
    a2():void{
        console.log('a2');
    }
}

class B extends A{
    b1: string;
    constructor(b1: string){
        super(1);
        this.b1 = b1;
    }
    b2():void{
        console.log('b2');
    }
}

let b = new B('test');

console.log(b);
