interface Shape{
    head:string,
    body:string
}

interface Human{
    name:string,
    age:number,
    shape:Shape,
    say(word: string):void;
}

let p1:Human = {
    name:'hjx',
    age:18,
    shape:{head:'头',body:'方的'},
    say(word: string){
        console.log(word)
    }
}

p1.say('I\'m hjx')

