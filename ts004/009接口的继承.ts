interface Animal{
    move(): void;
}

interface Human extends Animal{
    name: string;
    age: number;
}

let p: Human = {
    name:'hjx',
    age:18,
    move(){
        console.log('我在动')
    }
}

p.move();