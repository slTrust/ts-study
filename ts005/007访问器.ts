class Human{
    name: string;
    private _age: number; //把你真正用到的值藏起来
    get age(){
        return this._age;
    }
    set age(value:number){
        if(value < 0){
            this._age = 0;
        }else{
            this._age = value;
        }
    }
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
}

let hjx = new Human('hjx',18);


// 其他人恶意篡改 age 属性
// hjx.age = -1
// hjx.age = 10000

hjx.age = -1
console.log(hjx.age);

