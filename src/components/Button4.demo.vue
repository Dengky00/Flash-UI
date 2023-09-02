<demo>支持 disabled</demo>
<script lang="ts" setup>
import Button from "../lib/Button.vue";
</script>

<template>
    <h4>disabled属性:可禁用按钮</h4>
    <div>
        <Button disabled>禁用按钮</Button>
        <Button theme="link" disabled>禁用链接按钮</Button>
        <Button theme="text" disabled>禁用按钮</Button>
    </div>
</template>