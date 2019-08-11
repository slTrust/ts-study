<template>
  <div id="app">
    props 值为name:{{name}}
    Hi TS vue <br>
    mixins 值为 ： {{mixinValue}} <br>
    data里的msg: {{msg}}  <br>
    <button @click="fn">点我</button> <br>
    为 HelloWorld 组件传递值 hjx <br>
    <hello-world name="hjx"></hello-world>
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
@Component({
  components:{
    HelloWorld
  }
})
export default class App extends Mixins(MyMixin) {
  // 原来的 data里的数据
  msg = 123

  //原来  method 里的函数
  fn () {
    alert('hello: ' + this.msg)
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: red;
}
</style>
