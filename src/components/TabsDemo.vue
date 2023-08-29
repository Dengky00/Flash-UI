<script lang="ts" setup>
import { ref } from 'vue';
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
const selected = ref('导航1')
</script>

<template>
    <h1>示例1</h1>
    <Tabs v-model:selected="selected">
        <Tab title="导航1">内容1</Tab>
        <Tab title="导航2">内容2</Tab>
    </Tabs>
</template>

<style lang="scss" scoped></style>