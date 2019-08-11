<template>
  <div>
      {{number}}
      <button @click="add">+</button>  
      <button @click="minus">-</button>  
  </div>
</template>

<script lang="ts">
export default {
    name:'hjx',
    data(){
        return {
            number:0,
        }
    },
    methods:{
        add(){
            let number:number = this.number + 1;
            this.number = number;
        },
        minus(){
            let number:number = this.number - 1;
            this.number = number;
        }
    }
}
</script>
<style>
</style>    