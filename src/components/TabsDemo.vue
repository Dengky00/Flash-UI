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
        <Tab title="导航22">内容22</Tab>
        <Tab title="导航333">内容333</Tab>
        <Tab title="导航4444">内容4444</Tab>
    </Tabs>
</template>

<style lang="scss" scoped></style>