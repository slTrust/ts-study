function add(a: number,b: number): number{
    //let a = arguments[0]
    //let b = arguments[1]
    // a,b是形式参数
    return a + b;
    // 可以这样
    // return arguments[0] + arguments[1]
}

add(100,200) //实际参数
/*
调用add(100,200)时 会构建这样一个对象
arguments = {
    0:100,
    1:200,
    length:2
}
*/