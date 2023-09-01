<script lang="ts" setup>
import Demo from './Demo.vue'
import Switch1Demo from './Switch1.demo.vue'
import Switch2Demo from './Switch2.demo.vue'
</script>

<template>
    <div>
        <h1>Switch 组件示例</h1>
        <Demo :component="Switch1Demo" />
        <Demo :component="Switch2Demo" />
    </div>
</template>