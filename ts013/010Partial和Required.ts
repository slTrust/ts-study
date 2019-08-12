{
    interface Person {
        name:string;
        age:number;
        grade:number;
    }

    interface Person2 {
        name?:string;
        age?:number;
        grade?:number;
    }

    type Person3 = Partial<Person>;
    // 等价于 Person2 


    type P4 = Required<Person3>

}