{
    const fn = (options)=>{}

    var options = {
        time: new Date,
        isEdit: true,
        size : 20,
        name :  'xxx'
    }

    fn(options)

    // 如何声明 options 的类型呢?
    interface fnOptions {
        // 我的 key 必须是 string ，value 是任意值
        [K:string]:any
    }
    // 以前你要这样
    interface fnOptions2{
        size:number
        name:string
    }
    const fn2 = (options:fnOptions)=>{}


    // T[K] 是啥
    // 只能传递 前面有的 key
    function pluck<T, K extends keyof T>(objext:T,keys:Array<K>) {
        // T - {name:string,age:number,grade:number}
        // keyof T - 'name'|'age'|'grade'
        // K extends keyof T - 'name'|'age'|'grade'
    }

    
    // 第二个参数数组 必须是  第一个参数里的 key 否则报错
    pluck({name:'hjx',age:18,grade:100},['name','age'])

    interface Person{
        name:string;
        age:number;
        grade:number;
    }
    type X = keyof Person; // X 只能是 Person里的属性

    // T[K]返回值啥意思
    function pluck2<T, K extends keyof T>(objext:T,keys:Array<K>): T[K][] {
        // 报错，因为 T[K] 里面是对应每个 key的类型 是动态的
        // return 'string';
        return keys.map(key => objext[key])        
    }
    pluck2({name:'hjx',age:18,grade:100},['name','age'])
    /* 
        ['hjx',18] 
        => 
        Array<Person[name]|Person[age]> 
        =>
        Array<T[K]> 
        => 
        T[K][]
    */

}
