<template>
    <div>
        I am hjx!
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import HelloWorld from './HelloWorld.vue';

@Component({
  components: {
    HelloWorld
  },
})
export default class Hjx extends Vue{}
</script>