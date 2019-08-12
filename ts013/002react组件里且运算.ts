import React from 'react';

const Layout : React.FunctionComponent & { Header :React.FunctionComponent } = ()=>{
    return (
        React.createElement('div',null,'hi')
    )
}

Layout.Header = ()=>{
    return (
        React.createElement('div',null,'hi')
    )
}

// 垂直写法

interface Layout2 extends React.FunctionComponent{
    Header:React.FunctionComponent
}

const Layout2:Layout2 = ()=>{
    return (
        React.createElement('div',null,'hi')
    )
}
Layout2.Header = ()=>{
    return (
        React.createElement('div',null,'hi')
    )
}
// 小知识点
// 接口名和变量能一样吗？ 可以 ts 自己就能识别