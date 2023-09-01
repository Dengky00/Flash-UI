<script lang="ts" setup>
import Demo from './Demo.vue'
import Dialog1Demo from './Dialog1.demo.vue';
import Dialog2Demo from './Dialog2.demo.vue';
</script>

<template>
    <div>
        <h1>Dialog 组件示例</h1>
        <Demo :component="Dialog1Demo" />
        <Demo :component="Dialog2Demo" />
    </div>
</template>

<style lang="scss" scoped></style>