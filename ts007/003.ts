// 用一个占位符
function xxx<T>(something:T):T{ 
    return something
}

let fn: <T>(something:T)=>T = xxx;

