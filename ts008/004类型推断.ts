function add(n1:string,n2:string){
    return n1 + n2
}

var s = add('hi','aa');
console.log(s.split('')) // 没有写返回值的类型，为什么不报错

var s2 = {}
s2.split('') //报错

function add3(n1:string,n2:string){
    if(n1 > '1'){
        return n1 

    }else{
        return 0
    }
}

var s4 = add3('hi','aa');
s4.split('') // 此时他返回的类型有两种可能 string|number