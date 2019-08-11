<template>
  <div class="">
      <ul>
          <li v-for="(todoItem,index) in list" :key="index">
              <input type="checkbox" :checked="todoItem.status === 'done'"
                @change="changeStatus(todoItem,$event)"
              >
              {{todoItem.name}}
          </li>
      </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Todo from '../models/todo'
@Component({
    props:{
        // 这是什么数组 不知道类型啊？ 
        // 这是 todo 啊 那 todo 是什么啊？
        // 那么你就要声明 todo 有那些属性
        // list:Array<Todo> 报错
        list: Array
    }
})
export default class TodoList extends Vue {
    changeStatus(todoItem:Todo,e:Event){
        console.log((<HTMLInputElement>e.target).checked);
        let checked = (<HTMLInputElement>e.target).checked ;

        this.$emit('updateTodo',todoItem,{status: checked? 'done':'todo'})
    }
}
</script>
<style scoped lang="scss">

</style>
