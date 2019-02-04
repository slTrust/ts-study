interface Shape{
    head:string,
    body:string
}

interface Human{
    name:string,
    age:number,
    shape:Shape
}

let p1:Human = {name:'hjx',age:18,shape:{head:'头',body:'方的'}}

