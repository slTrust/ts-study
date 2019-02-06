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