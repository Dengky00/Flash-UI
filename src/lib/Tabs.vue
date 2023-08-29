<script lang="ts" setup>
import { VNode } from 'vue';
import Tab from './Tab.vue'

const slots = defineSlots();
const defaults = slots.default()
defaults.forEach((element: VNode) => {
    if (element.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab')
    }
});
const titles = defaults.map((element: VNode) => {
    return element.props?.title
})
</script>

<template>
    <div>
        <div v-for="(t, index) in titles" :key="index">{{ t }}</div>
        <component v-for="(tab, index) in defaults" :key="index" :is="tab" />
    </div>
</template>

<style lang="scss"></style>
