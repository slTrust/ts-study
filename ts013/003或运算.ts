{
    interface A {
        name:string;
        age:number
    }
    
    interface B {
        name:string;
        grade:number
    }
    
    // 都满足
    const c: A | B = {
        name:'aaa',
        age:11,
        grade:100
    }

    // 满足单个
    const c1: A | B = {
        name:'aaa',
        age:11
    }
    // 满足单个
    const c2: A | B = {
        name:'aaa',
        grade:11
    }

    /*
    function add(a : number|string,b : number|string){
        // 标红
        // 运算符“+”不能应用于类型“string | number”和“string | number”。
        return a + b;
    }

    add(1,2)
    add('1','2')
    // 歧义
    add(1,'2')
    */

    /*
    function add<T>(a : T,b : T ){
        //运算符“+”不能应用于类型“T”和“T”
        return a + b;
    }
    */
    function add(a:string,b : string ):string;
    function add(a:number,b : number ):number;
    function add(a:any,b : any ):any{
        return a + b;
    }
    add(1,2)
    add('1','2')
}
