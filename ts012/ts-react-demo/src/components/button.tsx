import React from 'react';
import './button.css';


// 第一种接收 size 参数的写法
/*
class Button extends React.Component<{size:string}>{
    render(){
        return (
            <div className="button">{this.props.children}</div>
        )
    }
}
*/


// 第二种接收 size 参数的写法 使用 type
/*
type Props = {
    size: string,
    xxx:string,
    xxx2:string,
    onClick:()=>void
}
class Button extends React.Component<Props>{
    render(){
        return (
            <div className="button">{this.props.children}</div>
        )
    }
}
*/

// 第三种接收 size 参数的写法 使用 接口
/*
interface IProps {
    size: string,
    xxx:string,
    xxx2:string,
    onClick:()=>void
}
class Button extends React.Component<IProps>{
    render(){
        return (
            <div className="button">{this.props.children}</div>
        )
    }
}
*/

// 我还存在 state 怎么办
/*
interface IProps {
    size: string,
    xxx?:string,
    xxx2?:string,
    onClick?:()=>void
}
interface IState {
    n : number
}

class Button extends React.Component<IProps,IState>{
    // 这里 必须给 props 指定类型 否则报错
    constructor(props:IProps){
        super(props)
        this.state = {
            n:1
        }
    }
    render(){
        return (
            <div className="button">
                {this.props.children}

            </div>
        )
    }
}
*/

interface IProps {
    size: string,
    xxx?:string,
    xxx2?:string,
    onClick?: React.MouseEventHandler
}
interface IState {
    n : number 
}

class Button extends React.Component<IProps,IState>{
    static displayName = "HjxButton"
    // 这里给 size 设置默认值 当你不传递的时候
    static defaultProps = {
        size : 'normal',
        xxx: 'aaa'
    }
    constructor(props:IProps){
        super(props)
        this.state = {
            n:1
        }
        // 这句话报错 因为 xxx 可能是 undefined 
        // undefined 不能直接和数字 + 操作
        // console.log(this.props.xxx + 1)
        // 解决办法就是 加一个 “!”
        // 就是断言 保证它不会为空 ，出问题自己负责
        console.log(this.props.xxx! + 1)
        // 或者这样
        console.log(this.props.xxx as string + 1)
        // 或者还可以这样
        if(this.props.xxx === undefined){

        }else{
            console.log(this.props.xxx + 1)
        }
    }
    render(){
        return (
            <div className="button" onClick={this.props.onClick}>
                {this.props.children}
            </div>
        )
    }
}

export default Button;
