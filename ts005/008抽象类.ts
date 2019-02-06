abstract class Animal {
    abstract move():void;
}

class Human extends Animal{
    move():void{
        console.log('move');
    }
}

let hjx = new Human();

hjx.move()

