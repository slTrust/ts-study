class Animal{
    constructor(){
        console.log('动物出生了')
    }
    move():void{
        console.log('move');
    }
}

class Human extends Animal{
    name: string;
    age: number;
    constructor(name:string, age:number){
        super()
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

hjx.say();