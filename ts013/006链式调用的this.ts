{
    class Calc {
        public value: number
        constructor(n:number){
            this.value = n
        }
        add(n:number){
            this.value += n;
            return this;
        }
        multiple(n:number){
            this.value *= n;
            return this;
        }
    }

    // 多态
    class BiggerCalc extends Calc {
        sin(){
            this.value = Math.sin(this.value);
            return this;
        }
    }

    const c = new Calc(1);
    c.add(1).multiple(2);

    const bc = new BiggerCalc(1);
    bc.add(1).multiple(2).sin(3).add(1);
}