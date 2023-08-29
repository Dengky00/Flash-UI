<script lang="ts" setup>
import { ref } from 'vue';
import Dialog from '../lib/Dialog.vue'
const x = ref(false)
function toggle() {
    x.value = !x.value
}
</script>

<template>
    <div>Dialog 示例</div>
    <h1>示例1</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="x"></Dialog>
</template>

<style lang="scss" scoped></style>