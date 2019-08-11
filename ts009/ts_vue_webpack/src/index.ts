import Vue from 'vue';
import Hjx from './Hjx.vue';

let div = document.createElement('div');
div.id = 'app';
div.textContent = "hjx webpack";

document.body.appendChild(div);


new Vue({
    el:div,
    render:(h)=> h(Hjx)
})