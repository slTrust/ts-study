class Animal{
    protected kind:string;
    constructor(kind:string){
        console.log('动物出生了')
        this.kind = kind;
    }
    move():void{
        console.log('move');
    }
}

class Human extends Animal{
    name: string;
    age: number;
    constructor(name:string, age:number){
        super('哺乳动物');
        console.log('people 出生了')
        this.name = name;
        this.age = age;
    }
    say():string{
        this.move();
        return 'hi'
    }
}

let hjx = new Human('hjx',18);
// 访问不到 protected 修饰的属性
console.log(hjx.kind); // 报错