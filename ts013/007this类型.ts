{
    function fn(n:number){
        console.log(n)
    }
    fn(1);
    fn.call('string',1);

    // this 也可以是参数，我怎么指定this的类型
    function fn2(this:string,n:number){
        console.log(n)
    }
    // 报错了
    // fn2(1); this is undefined
    fn2.call('string',1);

    // 如何解决这个 不指定this的报错呢？ void
    function fn3(this: string | void,n:number){
        console.log(n)
    }
    fn3(1);
    fn3.call('string',1);
    fn3.call(true,1) // 居然也成功了 ！！！ 
    // 因为 ts 对 call 不做类型检查
    
}