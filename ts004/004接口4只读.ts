interface Shape{
    head:string,
    body:string
}

interface Human{
    readonly name :string,
    age:number,
    shape:Shape,
    say(word: string):void;
}

let p1:Human = {
    name:'hjx',
    age:18,
    shape:{head:'头',body:'方的'},
    say(word: string){
        console.log(`${this.name}-${word}`);
    }
}

// 报错
p1.name = 'xxx';
p1.say('hello')

