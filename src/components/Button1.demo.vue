<demo>常规使用</demo>
<script lang="ts" setup>
import Button from "../lib/Button.vue";
</script>

<template>
    <div>
        <h4>theme属性:决定按钮样式,默认普通按钮</h4>
        <Button>普通按钮</Button>
        <Button theme="link">链接按钮</Button>
        <Button theme="text">文本按钮</Button>
    </div>
</template>