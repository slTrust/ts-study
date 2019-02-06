function printThis(){
    'use strict'
    console.log(this);
    console.log(arguments);
}

printThis.call('fuck',100,200)
/*
this = 'fuck'
arguments = {
    0:100,
    1:200,
    length:2
}
*/

printThis(1,2); 
/*
this = ?
如果是浏览器 this => window
如果是浏览器,并开启严格模式 this => undefined
如果是node是 global

arguments = {
    0:100,
    1:200,
    length:2
}
*/

// 第二个情况
let obj = {
    fn(){
        'use strict'
        console.log(this);
    },
    obj2:{
        fn2(){
            console.log(this);
        }
    }
}

obj.fn(); 
// this是  .fn前面的东西 obj
obj.obj2.fn2();
// this是  .fn2 前面的东西 obj.obj2
obj.fn.call('fuck')
// this => 'fuck'


// 第三个情况
let fn3 = obj.fn;
console.log('---');
fn3(); // this => ? undefined
