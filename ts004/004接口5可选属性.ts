interface Shape{
    head:string,
    body:string
}

interface Human{
    readonly name :string,
    age:number,
    shape:Shape,
    likedGame?:Array<string>;
    say(word: string):void;
}

let p1:Human = {
    name:'hjx',
    age:18,
    shape:{head:'头',body:'方的'},
    likedGame:['王者荣耀','lol'],
    say(word: string){
        console.log(`${this.name}-${word}`);
    }
}

let p2:Human = {
    name:'hjx2',
    age:20,
    shape:{head:'头',body:'方的'},
    say(word: string){
        console.log(`${this.name}-${word}`);
    }
}

p1.say('hello')

