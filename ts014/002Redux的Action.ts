type Action = {
    type:'add',payload:number;
} | {
    type:'delete',payload:string;
} | {
    type:'update',payload:Date;
}


function reducer(state:any,actoin:Action){
    switch(actoin.type){
        case 'add':
            console.log(actoin.payload) // number
            break
        case 'delete':
            console.log(actoin.payload) // string
            break
        case 'update':
            console.log(actoin.payload) // Date
            break
    }
}


