class Human{
    name: string;
    age: number;
    private secret:string;
    constructor(name:string, age:number,secret:string){
        this.name = name;
        this.age = age;
        this.secret = secret;
    }
}

let hjx = new Human('hjx',18,'中了200w');


// 因为secret属性是 private 所有只有类内部可以访问  类外部不可以访问
console.log(hjx.secret);


/*
class Human{
    name: string;
    age: number;
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
}

等价于

class Human{
    public name: string;
    public age: number;
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
}
*/