class Student {
    全名: string;
    constructor(public 姓, public 名) {
        this.全名 = 姓 + 名;
    }
}

interface Person {
    姓: string;
    名: string;
}

function greeter(person : Person) {
    return "Hello, " + person.姓 + " " + person.名;
}

let user = new Student("漩涡", "鸣人");

console.log(greeter(user));