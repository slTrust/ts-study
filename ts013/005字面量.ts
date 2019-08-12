interface People {
    gender :  '男' | '女'
}

const a:People = {
    // 报错 ，限定了 gender 必须是 '男' or '女'
    // gender :'人妖'
    gender:'男'
}

// 方向
type Dir = '上' | '下' | '左' | '右'
// const dir: Dir = 'e'; // 直接报错
const dir : Dir = '上'

// 字面量类型 还能包含多个类型取值
type Aa= 1 | 2 | 3 | 4 | 5 | 6
type Bb = true | false | 6 | '上'

// 丰富的类型搭配
interface People {
    gender :  '男' | '女',
    name? : string;
    name2: string | undefined;
    name3: string | undefined | null;
}
