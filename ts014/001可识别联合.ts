interface Props {
    action:'create'|'update';
    id?:number;
    name:string
}

/*
// 创建的时候 
{
    action:'create',
    // 创建时没id
    name:'aaa'
}

// 更新的时候 
{
    action:'update',
    // 更新时必须有id
    id:1,
    name:'bbb'
}
*/


// 此时你可以这样

type Props2 = {
    action:'create';
    name:string;
} | {
    action:'update';
    id:number;
    name:string;
}

function fn(a:Props2){
    if(a.action === 'create'){
        console.log(a.name)
    }else{
        console.log(a.id)
    }
}