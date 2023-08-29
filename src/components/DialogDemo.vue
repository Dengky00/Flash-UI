<script lang="ts" setup>
import { ref } from 'vue';
import Dialog from '../lib/Dialog.vue'
const x = ref(false)
function toggle() {
    x.value = !x.value
}
function ok() {
    console.log(1);
    return true
}
function cancel() {
    console.log(2);
}
</script>

<template>
    <div>Dialog 示例</div>
    <h1>示例1</h1>
    <div style="position: relative; z-index: 1;">
        <Button @click="toggle">toggle</Button>
        <Dialog v-model:visible="x" :closeOnClickOverlay="true" :ok="ok" :cancel="cancel">
            <template v-slot:title>
                <strong>加粗的标题</strong>
            </template>
            <template v-slot:content>
                <strong>hi</strong>
                <div>hi2</div>
            </template>
        </Dialog>
    </div>
    <div style="position: relative; z-index: 2; width: 300px; height: 300px; background: red;"></div>
</template>

<style lang="scss" scoped></style>