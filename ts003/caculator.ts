/*
// 第一步
{
    let a:number = 1;
    console.log(a);
}
*/


/*
// 第二步
{   
    // 这是js
    // let button = document.createElement('button');
    // 使用 ts
    let button:HTMLButtonElement = document.createElement('button');
    button.textContent = '0';
    document.body.appendChild(button);
}
*/


/*
// 第三步
{   
    function createButton(text:string){
        let button:HTMLButtonElement = document.createElement('button');
        button.textContent = text;
        document.body.appendChild(button);
    }

    createButton('0')
    createButton('1')
    createButton('2')
    createButton('3')
    createButton('4')
    createButton('5')
    createButton('6')
    createButton('7')
    createButton('8')
    createButton('9')

    // '0' 表示 字符串
    // 0 表示 数字
    // 如果你瞎搞 ts 就弄死你
}
*/

/*
// 第四步
// 生成所有按钮
{   
    function createButton(text:string){
        let button:HTMLButtonElement = document.createElement('button');
        button.textContent = text;
        document.body.appendChild(button);
    }

    `clear,/,
    7,8,9,*,
    4,5,6,-,
    1,2,3,+,
    0,.,=`.split(',').forEach(string=>{
        createButton(string);
    })
}
*/



/*
// 计算器基本雏形好了
// 第五步
{   
    function createButton(text:string,container:HTMLElement){
        let button:HTMLButtonElement = document.createElement('button');
        button.textContent = text;
        container.appendChild(button);
    }

    let keys:Array<Array<string>> = [
        ["clear", "/"],
        ["7", "8", "9", "*"], 
        ["4", "5", "6", "-"], 
        ["1", "2", "3", "+"],
        [ "0", ".", "="]
    ];

    keys.forEach( ( textList:Array<string> )=>{
        let div:HTMLDivElement = document.createElement('div');
        textList.forEach( (text:string)=>{
            createButton(text,div);
        })
        document.body.appendChild(div);
    });
}
*/


/*
// 第六部 添加样式
{   
    function createButton(text:string,container:HTMLElement,className:string){
        let button:HTMLButtonElement = document.createElement('button');
        button.textContent = text;
        if(className){
            button.className = className;
        }
        container.appendChild(button);
    }

    // 让计算器有个容器而不是直接塞到 body里
    let container:HTMLDivElement = document.createElement('div');
    container.classList.add('caculator');
    document.body.appendChild(container);
    // 显示结果的地方
    let output:HTMLDivElement = document.createElement('div');
    output.classList.add('output');
    let span:HTMLSpanElement = document.createElement('span');
    span.textContent = '0';
    output.appendChild(span);
    container.appendChild(output);

    let keys:Array<Array<string>> = [
        ["clear", "/"],
        ["7", "8", "9", "*"], 
        ["4", "5", "6", "-"], 
        ["1", "2", "3", "+"],
        [ "0", ".", "="]
    ];

    keys.forEach( ( textList:Array<string> )=>{
        let div:HTMLDivElement = document.createElement('div');
        div.classList.add('row');
        textList.forEach( (text:string)=>{
            // 添加样式
            createButton(text,div,`button text-${text}`);
        })
        container.appendChild(div);
    });
}

*/


/*
// 事件委托
{   
    function createButton(text:string,container:HTMLElement,className:string){
        let button:HTMLButtonElement = document.createElement('button');
        button.textContent = text;
        if(className){
            button.className = className;
        }
        container.appendChild(button);
        return button;
    }

    // 让计算器有个容器而不是直接塞到 body里
    let container:HTMLDivElement = document.createElement('div');
    container.classList.add('caculator');
    document.body.appendChild(container);
    // 显示结果的地方
    let output:HTMLDivElement = document.createElement('div');
    output.classList.add('output');
    let span:HTMLSpanElement = document.createElement('span');
    span.textContent = '0';
    output.appendChild(span);
    container.appendChild(output);

    container.addEventListener('click',function(event){
        console.log(event.target);
    });

    let keys:Array<Array<string>> = [
        ["clear", "/"],
        ["7", "8", "9", "*"], 
        ["4", "5", "6", "-"], 
        ["1", "2", "3", "+"],
        [ "0", ".", "="]
    ];

    keys.forEach( ( textList:Array<string> )=>{
        let div:HTMLDivElement = document.createElement('div');
        div.classList.add('row');
        textList.forEach( (text:string)=>{
            // 添加样式
            createButton(text,div,`button text-${text}`);
        })
        container.appendChild(div);
    });
}
*/


/*
// 点击的逻辑
{   
    // 声明创建函数
    function createButton(text:string,container:HTMLElement,className:string){
        let button:HTMLButtonElement = document.createElement('button');
        button.textContent = text;
        if(className){
            button.className = className;
        }
        container.appendChild(button);
        return button;
    }

    // 让计算器有个容器而不是直接塞到 body里
    let container:HTMLDivElement = document.createElement('div');
    container.classList.add('caculator');
    document.body.appendChild(container);
    
    // 显示结果的地方
    let output:HTMLDivElement = document.createElement('div');
    output.classList.add('output');

    // 创建 output 里的 span
    let span:HTMLSpanElement = document.createElement('span');
    span.textContent = '0';
    output.appendChild(span);
    container.appendChild(output);

    // 三个变量  n1 n2 数字  operator 操作符
    let n1:number
    let n2:number
    let operator:string

    container.addEventListener('click',function(event){
        if( event.target instanceof HTMLButtonElement){
            let button:HTMLButtonElement = event.target;
            let text:string = button.textContent
            //看 text 是不是0-9的数字
            if('0123456789'.indexOf(text)>=0){
                console.log('数字')
                // 如果已经有操作符就操作n2
                if(operator){
                    if(n2){
                        n2 = parseInt(n2.toString() + text);
                    }else{
                        n2 = parseInt(text);
                    }
                    span.textContent = n2.toString();
                }else{
                    if(n1){
                        n1 = parseInt(n1.toString() + text);
                    }else{
                        n1 = parseInt(text);
                    }
                    span.textContent = n1.toString();
                }
                
            }else if('+*-/'.indexOf(text)>=0){
                console.log('操作符')
                operator = text;
            }else if('='.indexOf(text)>=0){
                let result:number;
                if(operator === '+'){
                    result = n1 + n2
                }else if(operator === '-'){
                    result = n1 - n2
                }else if(operator === '*'){
                    result = n1 * n2
                }else if(operator === '/'){
                    result = n1 / n2
                }

                span.textContent = result.toString();
            }else{
                console.log('不知道')
            }
            console.log(n1,operator,n2)
        }
    });

    let keys:Array<Array<string>> = [
        ["clear", "/"],
        ["7", "8", "9", "*"], 
        ["4", "5", "6", "-"], 
        ["1", "2", "3", "+"],
        [ "0", ".", "="]
    ];

    keys.forEach( ( textList:Array<string> )=>{
        let div:HTMLDivElement = document.createElement('div');
        div.classList.add('row');
        textList.forEach( (text:string)=>{
            // 添加样式
            createButton(text,div,`button text-${text}`);
        })
        container.appendChild(div);
    });
}

*/


/*
// class 使用
{   
    class Caculator{
        public container:HTMLDivElement;
        private output:HTMLDivElement;
        private span:HTMLSpanElement;
        public n1:number;
        public n2:number;
        public operator:string;
        public keys:Array<Array<string>> = [
            ["clear", "/"],
            ["7", "8", "9", "*"], 
            ["4", "5", "6", "-"], 
            ["1", "2", "3", "+"],
            [ "0", ".", "="]
        ];

        constructor(){
            this.createContainer();
            this.createOutput();
            this.createButtons();
            this.bindEvents();
        }
        createButton(text:string,container:HTMLElement,className:string){
            let button:HTMLButtonElement = document.createElement('button');
            button.textContent = text;
            if(className){
                button.className = className;
            }
            container.appendChild(button);
            return button;
        }
        createContainer(){
            let container:HTMLDivElement = document.createElement('div');
            container.classList.add('caculator');
            document.body.appendChild(container);
            this.container = container;
        }
        createOutput(){
            let output:HTMLDivElement = document.createElement('div');
            output.classList.add('output');

            let span:HTMLSpanElement = document.createElement('span');
            span.textContent = '0';
            output.appendChild(span);

            this.output = output;
            this.span = span;
            this.container.appendChild(output);
        }
        createButtons(){
            this.keys.forEach( ( textList:Array<string> )=>{
                let div:HTMLDivElement = document.createElement('div');
                div.classList.add('row');
                textList.forEach( (text:string)=>{
                    // 添加样式
                    this.createButton(text,div,`button text-${text}`);
                })
                this.container.appendChild(div);
            });
        }
        bindEvents(){
            this.container.addEventListener('click',(event)=>{
                if( event.target instanceof HTMLButtonElement){
                    let button:HTMLButtonElement = event.target;
                    let text:string = button.textContent
                    //看 text 是不是0-9的数字
                    if('0123456789'.indexOf(text)>=0){
                        console.log('数字')
                        // 如果已经有操作符就操作n2
                        if(this.operator){
                            if(this.n2){
                                this.n2 = parseInt(this.n2.toString() + text);
                            }else{
                                this.n2 = parseInt(text);
                            }
                            this.span.textContent = this.n2.toString();
                        }else{
                            if(this.n1){
                                this.n1 = parseInt(this.n1.toString() + text);
                            }else{
                                this.n1 = parseInt(text);
                            }
                            this.span.textContent = this.n1.toString();
                        }
                        
                    }else if('+*-/'.indexOf(text)>=0){
                        console.log('操作符')
                        this.operator = text;
                    }else if('='.indexOf(text)>=0){
                        let result:number;
                        if(this.operator === '+'){
                            result = this.n1 + this.n2;
                        }else if(this.operator === '-'){
                            result = this.n1 - this.n2;
                        }else if(this.operator === '*'){
                            result = this.n1 * this.n2;
                        }else if(this.operator === '/'){
                            result = this.n1 / this.n2;
                        }
        
                        this.span.textContent = result.toString();
                    }else{
                        console.log('不知道')
                    }
                    console.log(this.n1,this.operator,this.n2);
                }
            });
        }
    }

   new Caculator();
}

*/


// 优化

{   
    class Caculator{
        public container:HTMLDivElement;
        private output:HTMLDivElement;
        private span:HTMLSpanElement;
        public n1:string = null; // 用 number 导致 1.0 会变成 1
        public n2:string = null;
        public operator:string = null;
        public result:string = null;
        public keys:Array<Array<string>> = [
            ["clear", "/"],
            ["7", "8", "9", "*"], 
            ["4", "5", "6", "-"], 
            ["1", "2", "3", "+"],
            [ "0", ".", "="]
        ];

        constructor(){
            this.createContainer();
            this.createOutput();
            this.createButtons();
            this.bindEvents();
        }
        createButton(text:string,container:HTMLElement,className:string){
            let button:HTMLButtonElement = document.createElement('button');
            button.textContent = text;
            if(className){
                button.className = className;
            }
            container.appendChild(button);
            return button;
        }
        createContainer(){
            let container:HTMLDivElement = document.createElement('div');
            container.classList.add('caculator');
            document.body.appendChild(container);
            this.container = container;
        }
        createOutput(){
            let output:HTMLDivElement = document.createElement('div');
            output.classList.add('output');

            let span:HTMLSpanElement = document.createElement('span');
            span.textContent = '0';
            output.appendChild(span);

            this.output = output;
            this.span = span;
            this.container.appendChild(output);
        }
        createButtons(){
            this.keys.forEach( ( textList:Array<string> )=>{
                let div:HTMLDivElement = document.createElement('div');
                div.classList.add('row');
                textList.forEach( (text:string)=>{
                    // 添加样式
                    this.createButton(text,div,`button text-${text}`);
                })
                this.container.appendChild(div);
            });
        }
        bindEvents(){
            this.container.addEventListener('click',(event)=>{
                if( event.target instanceof HTMLButtonElement){
                    let button:HTMLButtonElement = event.target;
                    let text:string = button.textContent
                    this.updateNumberOrOperator(text);
                   
                }
            });
        }
        updateNumber(name:string,text:string):void{
            if(this[name]){
                this[name] += text;
            }else{
                this[name] = text;
            }
            this.span.textContent = this[name].toString();
        }
        updateNumbers(text:string):void{
            if(this.operator){
                this.updateNumber('n2',text);
            }else{
                this.updateNumber('n1',text);
            }
        }
        updateResult():void{
            let result;
            let n1:number = parseFloat(this.n1);
            let n2:number = parseFloat(this.n2);

            if(this.operator === '+'){
                result = n1 + n2;
            }else if(this.operator === '-'){
                result = n1 - n2;
            }else if(this.operator === '*'){
                result = n1 * n2;
            }else if(this.operator === '/'){
                result = n1 / n2;
            }
            this.span.textContent = result.toString();
            // 结果出来后重置 n1 n2
            this.n1 = null;
            this.n2 = null;
            this.operator = null;
            this.result = result;
        }
        updateOperator(text:string):void{
            //  点符号时候 没点过数字
            if(this.n1 === null){
                this.n1 = this.result;
            }
            this.operator = text;
        }
        updateNumberOrOperator(text:string){
            if('0123456789.'.indexOf(text)>=0){
                this.updateNumbers(text);
            }else if('+*-/'.indexOf(text)>=0){
                this.updateOperator(text);
            }else if('='.indexOf(text)>=0){
                this.updateResult();
            }else if(text==='clear'){
                this.n1 = null;
                this.n2 = null;
                this.operator = null;
                this.result = null;
                this.span.textContent = '0';
            }else{
                console.log('不知道')
            }
        }
    }

   new Caculator();
}
