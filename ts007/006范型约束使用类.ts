function createT( c ){
    // c 必须是 类 才可以 ，而且在js里不报错
    return new c();
}
// createT('hi') 报错


class Student{}

class Human{}

// ts里 约束参数是个类
function createT2<T>( c:{new ():T} ):T{
    // c 必须是 类 才可以 ，而且在js里不报错
    return new c();
}

// createT2<Human>(Student) 报错 因为明确约束了 类
createT2<Human>(Human)
