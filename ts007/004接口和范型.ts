interface add{
    (a:number,b:number):number;
}

let numAdd:add = (a:number,b:number):number=>{
    return a + b;
}

// 接口和范型

interface anyAdd<T>{
    (a:T,b:T):T;
}

let stringAdd:anyAdd<string> = (a:string,b:string):string =>{
    return a + b;
}

let numberAdd:anyAdd<number> = (a:number,b:number):number =>{
    return a + b;
}