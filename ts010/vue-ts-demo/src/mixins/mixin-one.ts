// mixin.js
import Vue from 'vue'
import Component from 'vue-class-component'

// You can declare a mixin as the same style as components.
@Component
export class MyMixin extends Vue {
  mixinValue = '111111111111'
}