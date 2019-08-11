import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

const fn:React.MouseEventHandler = function(e){
    console.log(e);
}

ReactDOM.render(<div>
    HelloWorld
    
    <Button size="small"><span>Click ME</span></Button>
    <Button size="small">
        <span>Click ME</span>
        <span>Click ME</span>
    </Button>
    <Button onClick={fn}>Click Me</Button>
    <Button size="big">Click Me</Button>
</div>, document.getElementById('root'));

