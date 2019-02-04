interface 有机物{
    c:boolean;
    h:boolean;
    o:boolean,
}

interface Animal{
    move(): void;
}


interface Human extends Animal,有机物{
    name: string;
    age: number;
}

let p: Human = {
    c:true,
    h:true,
    o:true,
    name:'hjx',
    age:18,
    move(){
        console.log('我在动')
    }
}

p.move();