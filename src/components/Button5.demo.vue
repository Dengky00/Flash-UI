<demo>支持 disabled</demo>
<script lang="ts" setup>
import Button from "../lib/Button.vue";
</script>

<template>
    <h4>loading属性:可添加加载中动画</h4>
    <div>
        <Button loading>加载中</Button>
        <Button>加载完毕</Button>
    </div>
</template>