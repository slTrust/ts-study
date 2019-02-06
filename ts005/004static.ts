class Human{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    move(): void{
        console.log('我动了')
    }
    say(): string{
        this.move();
        return 'hi'
    }
}

let hjx = new Human('hjx',18);

/*
name age move say  constructor是 实例对象的属性,不是类的属性

如果你直接给 类加属性报错
Human.xxx = 1; // 报错
*/

// 正确姿势

class Human2{
    static xxx = 1
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    move(): void{
        console.log('我动了')
    }
    say(): string{
        this.move();
        return 'hi'
    }
}

console.log(Human2.xxx);