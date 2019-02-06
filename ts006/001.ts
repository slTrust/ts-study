/*
function hi(){ // hi == address 100
    console.log('hi')
}

let hi2 = function (){ // hi == address 390
    console.log('hi')
}

let hi3 = ()=>{    // hi3 == address 401
    console.log('hi')
}
*/


// 带参数
function hi(name: string,age: number){
    console.log(`hi,${name},${age}`)

}

// 可选参数
function hi2(name: string,age?: number){
    console.log(`hi,${name},${age}`)
}

// 默认值
// 为什么不声明 age的类型 因为这个类型可以推断
// age = 18 等价于 age: number = 18
function hi3(name: string,age = 18){
    console.log(`hi,${name},${age}`)
}

hi('hjx',18) // hi,hjx,18
hi2('hjx') // hi,hjx,undefined
hi3('hjx') // hi,hjx,18


// 什么都不返回
function hi4(name: string,age?: number):void {
    console.log(`hi,${name},${age}`)
}

// 返回string
function hi4(name: string,age?: number):string {
    if (age>18){
        return 'hi'
    }else{
        // return 404 //报错 因为你指定了返回 string
        return '404'
    }
}

// 或者这样写
// 返回string 或 number
function hi5(name: string,age?: number):string | number{
    if (age>18){
        return 'hi'
    }else{
        return 404
    }
}
