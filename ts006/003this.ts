function add(a: number,b: number): number{
    return arguments[0] + arguments[1]
}

add(100,200) //小白调用法
/*
调用add(100,200)时 会构建这样一个对象
this = ?
arguments = {
    0:100,
    1:200,
    length:2
}
*/

add.call('fuck',100,200) //大师调用法
/*
调用add(100,200)时 会构建这样一个对象
this = 'fuck' //call的第一个参数
arguments = {
    0:100,
    1:200,
    length:2
}
*/