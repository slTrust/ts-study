function returnArray<T>(array:T[]):T[]{
    return array;
}

let a = returnArray([1,2,3]);

interface Human{
    name:string;
    age:number
}

let a2 = returnArray<Human>([{name:'aa',age:11},{name:'bb',age:12}])
let a3 = returnArray([{name:'aa',age:11},{name:'bb',age:12}])


/*
function returnArray<T>(array:T[]):T[]{
    return array;
}
还可以写成
function returnArray<T>(array:Array<T>):Array<T>{
    return array;
}
*/