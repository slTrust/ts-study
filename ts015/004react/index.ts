import * as React from 'react';
declare module 'react' {
    let xxx:number;
    const yyy:string;

    // 给 添加属性 HTMLAttributes
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        styleName?:string // 它不会覆盖 HTMLAttributes 的属性
    }
}

// React.xxx = 1 //这样是不行的，因为一旦允许那么 别的地方使用的时候就会又歧义 是 read-only的 
console.log(React.version)

function aaa(a:number,b:string){
    console.log(a,b)
}

aaa(React.xxx,React.yyy);


