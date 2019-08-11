import React, { Children } from 'react';
import './Button.css';


/*
// 第一种方式
interface iProps {
    // ？代表 size 可有可无
    size?: string;
    children?:string | JSX.Element | JSX.Element[];
}
export default function Button(props: iProps) {
    return <div className={`button ${props.size}`}>
        {props.children}
    </div>;
}
*/

// 第二种方式
interface iProps {
    // ？代表 size 可有可无
    size?: string;
    onClick?:React.MouseEventHandler
}
const Button:React.FunctionComponent<iProps> = function (props) {
    return (
        <div className={`button ${props.size}`} onClick={props.onClick}
        >   
        {props.children}
        </div>);
}

export default Button;
