declare function y(a:number,b:number):number;
export default y;

// 给ccc声明
// 方式一 直接 export 你的定义
// export function ccc(a:number):string;

//方式二 所有的定义都是 declare 开头 ，然后 export
declare function ccc(a:number):string;
export {ccc} 
