<script lang="ts" setup>
import Button from '../lib/Button.vue'
</script>

<template>
    <Button>默认按钮</Button>
    <Button theme="button">普通按钮</Button>
    <Button theme="link">链接按钮</Button>
    <Button theme="text">文本按钮</Button>
</template>

<style lang="scss" scoped>
div {
    border: 1px solid red;
}
</style>