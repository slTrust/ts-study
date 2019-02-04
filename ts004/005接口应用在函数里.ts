interface RectConfig{
    height?: number,
    width?: number
}

function createRect(config:RectConfig):void{

}

// 由于可选  所以可以传递一个属性
let mySquare = createRect({width:100})
let mySquare2 = createRect({height:100})
// 如果在参数里传递多余的是不允许的
// let mySquare3 = createRect({width:100,height:100,color:'red'})

// 如果声明在变量里就允许
let config = {
    height:100,
    width:100,
    color:'red'
}

let mySquare4 = createRect(config);
