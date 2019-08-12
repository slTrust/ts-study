import React from 'react';
import Button from './components/button'
import Button2 from './components/button2'

class App extends React.Component{
    /*
    onClick(e:React.MouseEvent){
      console.log(e)
      // style 竟然标红了 
      // 提示 类型“EventTarget”上不存在属性“style”。
      //console.log(e.target.style.width)
      // 你只能断言
      // const div = e.target as HTMLDivElement;
      // console.log(div.style.width)

      // 断言还是有风险，因为 如果 Button 里传递的是 <span>hi</span>你好
      // 断言就有问题了 它不是 div 有可能是 span
    }
    */
    // 泛型参数 指定触发事件的元素一定是个 div
    onClick(e:React.MouseEvent<HTMLDivElement>){
       console.log(e.currentTarget)
       const div = e.currentTarget;
       console.log(div.style.width)
    }
    render(){
        return (
            <div className="App">
              <Button onClick={this.onClick}>你好</Button>
              <Button2>button2</Button2>
            </div>
        )
    }
}

export default App;
