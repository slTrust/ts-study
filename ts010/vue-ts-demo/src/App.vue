<template>
  <div id="app">
    props 值为name:{{name}}
    Hi TS vue <br>
    mixins 值为 ： {{mixinValue}} <br>
    data里的msg: {{msg}}  <br>
    <button @click="fn">点我</button> <br>
    为 HelloWorld 组件传递值 hjx <br>
    <hello-world name="hjx"></hello-world>
    <hr>

  <div class="inner">
    <NewTodo @addTodo="addTodo"></NewTodo>
    <TodoList :list="list" @updateTodo="updateTodo"></TodoList>
  </div>
    

  </div>
</template>

<script lang="ts">
/*
// 原来的写法
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
@Component({
  components:{
    HelloWorld
  }
})
export default class App extends Vue {
  // 原来的 data里的数据
  msg = 123

  //原来  method 里的函数
  fn () {
    alert('hello: ' + this.msg)
  }
}
*/

// 使用 mixins
import { Component, Vue , Mixins } from 'vue-property-decorator';
import { MyMixin } from './mixins/mixin-one';
import HelloWorld from './components/HelloWorld.vue';
import NewTodo from './components/NewTodo.vue';
import TodoList from './components/TodoList.vue';
import Todo from './models/todo'



@Component({
  components:{
    HelloWorld,
    NewTodo,
    TodoList
  },
  watch:{
    list(newValue:Array<Todo>){
      console.log('我开始存数据了');
      let string = JSON.stringify(newValue);
      localStorage.setItem('data',string);
    }
  }
})
export default class App extends Mixins(MyMixin) {
  // 原来的 data里的数据
  msg = 123

  //原来  method 里的函数
  fn () {
    alert('hello: ' + this.msg)
  }

  // 华丽的分割线 ----------------------------------------------------------------------

  // list: Array<Todo> = [
  //   {name:"任务一",status:'todo'},
  //   {name:"任务二",status:'done'},
  // ]
  // 从 localStorage里读取数据 并加断言
  list: Array<Todo> = localStorage.getItem('data') ? JSON.parse(<string>localStorage.getItem('data')) : [];

  addTodo(name:String){
    let todo:Todo = {name:name,status:'todo'}
    this.list.push(todo);
  }

  // Partial<Todo> 代表 todo的部分属性
  updateTodo(todo:Todo,part:Partial<Todo>){
    let index:number = this.list.indexOf(todo);
    // 对象是不能直接改的 你要产生一个新的值
    let newTodo:Todo = Object.assign({},todo,part)
    this.list.splice(index,1,newTodo)
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;

  .inner{ 
    display: flex;
    justify-content: center;
    align-items: center;
    border:1px solid red;
  }
  
}
</style>
