interface Person{
    姓:string,
    名:string
}

function greeter(person: Person) {
    return "Hello, " + person.姓 +person.名;
}

let user = {姓:'漩涡',名:'鸣人'};

console.log( greeter(user) );