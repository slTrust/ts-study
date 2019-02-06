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
}

let hjx = new Human('hjx',18);

console.log(JSON.stringify(hjx));

interface Human2{
    name: string;
    age: number;
    move(): void;
}

let hjx2: Human2 = {
    name: 'hjx2',
    age: 18,
    move(): void{
        console.log('我动了2')
    }
}
// 接口就要一个一个属性挨个写一遍
let hjx3: Human2 = {
    name: 'hjx3',
    age: 18,
    move(): void{
        console.log('我动了3')
    }
}