import React from 'react';
import './button.css';

interface IProps {
    size?: string,
}
interface IState {
    n : number 
}

class Button2 extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props)
        this.state = {
            n:1
        }
    }
    onClick = () => {
        this.x();
    }
    x(){
        console.log('x');
    }
    render(){
        return (
            <div className="button" onClick={this.onClick}>
                {this.props.children}
            </div>
        )
    }
}

export default Button2;
