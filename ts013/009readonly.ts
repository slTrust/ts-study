{
    interface Person {
        name:string;
        age:number;
    }

    const p :Person = {
        name:'aa',
        age:12
    }
    p.name = 'bb';

    

    // Readonly<T> 全部只读
    const p2 :Readonly<Person> = {
        name:'hjx',
        age:18
    }
    // p2.name = 1; // 报错

    interface ReadonlyPerson {
        readonly name:string,
        age:number;
    }
    
    const p3 :ReadonlyPerson = {
        name:'hjx',
        age:18
    }
    // p3.name = 1; // 报错
    p3.age = 22

}