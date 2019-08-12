interface A {
    name:string;
    age:number
}

interface B {
    name:string;
    grade:number
}

const c: A & B = {
    name:'aaa',
    age:11,
    grade:100
}