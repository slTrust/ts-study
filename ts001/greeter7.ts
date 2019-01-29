interface Person{
    gender:string
}

function merry(a:Person,b:Person):[Person,Person]{
    if(a.gender !== b.gender){
        return [a,b];
    }else{
        throw new Error('同性不能结婚')
    }
}

let a = {gender:'男'};
let b = {gender:'女'};

console.log(merry( a , b ));
