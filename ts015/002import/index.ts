// 你觉得 require很不爽 就想用 import行不行？ 可以
import reduce from './b.js';
// 如何让 reduce 有类型约束呢？ 声明 同名的 b.d.ts
reduce(2,1);
// reduce(3,'a') 飙红了就

import multiply,{ccc} from './c.js';
multiply(1,3);
ccc(1); // 如何 给 ccc声明