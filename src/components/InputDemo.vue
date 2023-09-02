<template>
  <div>
    <h1>Input 组件示例</h1>
    <Demo :component="InputDemo1" />
    <Demo :component="InputDemo2" />
    <Demo :component="InputDemo3" />
  </div>
</template>

<script lang="ts" setup>
import Demo from './Demo.vue'
import InputDemo1 from './Input1.demo.vue';
import InputDemo2 from './Input2.demo.vue';
import InputDemo3 from './Input3.demo.vue';
</script>