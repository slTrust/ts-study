export interface Person{
    name:string;
    age:number ;
 }
 
const a = function(p:Person){
     console.log(p)
 }
 
export default a

/* 
// 直接报错不存在这个属性
window.server = {
    host:'xxxx'
}
*/

declare global {
    interface Window { server: {
        host:string
    }; }
}

window.server = {
    host:'xxxx'
}

console.log(window.server)