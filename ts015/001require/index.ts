/*
默认是不支持 require的
第一步 npm install @types/node --save-dev

第二步 tsconfig.json里添加如下内容
{
    "compilerOptions": {
        "types": ["node"],
        "typeRoots": [ "../node_modules/@types" ]
    }
}
*/
interface A{
    (a:number,b:number):number
}
// 给别人定义好的js 加声明
const add:A = require('./a.js')
add(1,2);
