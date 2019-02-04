interface 二则运算{
    (a: number,b: number): number;
    逆运算(a: number,b: number): number;
}

let add:二则运算=(
    (): 二则运算 =>{
        let x: any = function(a: number,b: number){
            return a + b;
        }
        x.逆运算 = function(a: number,b: number): number{
            return a - b;
        }
        return x;
    }
)();

console.log(add(1,2))
