/*
function fn<T>(something:T):T{ 
    console.log(something.length);
    return something
}
*/

interface hasLength{
    length:number
}

function fn<T extends hasLength>(something:T):T{ 
    console.log(something.length);
    return something
}


