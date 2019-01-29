function greeter(person) {
    if(typeof person !== 'string'){
        throw new Error('person 必须是一个字符串')
    }
    return "Hello, " + person;
}
var user = [1, 2, 3];
console.log( greeter(user) );
