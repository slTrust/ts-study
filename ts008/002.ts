function fn(this:any){
    console.log(this);
    function fn2(this:any){
        console.log(this);
    }
    fn2() // 此时this已经变了,谁叫你不用 call 
}

fn.call({name:'hjx'})