interface Human{
    name:string,
    age:number
}

let x:Human = {name:'aa',age:18} //正常

// 如果你手贱非要加一个 gender 呢？ 报错
// let x2:Human = {name:'aa',age:18,gender:'man'} // 报错 

let y = {name:'aa',age:18,gender:'man'}
let x3:Human = y; //这样却没问题