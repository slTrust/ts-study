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


type MyLayout = React.FunctionComponent & { Header :React.FunctionComponent } 
const Layout2 : MyLayout = ()=>{
    return (
        React.createElement('div',null,'hi')
    )
}

Layout2.Header = ()=>{
    return (
        React.createElement('div',null,'hi')
    )
}
