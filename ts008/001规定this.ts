// 规定函数的this

interface Human{
    name:string;
    age:number;
}

function fn(this:Human){
    console.log(this);
}

fn.call({name:'hjx',age:18})

// fn() //  报错