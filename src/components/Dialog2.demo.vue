<demo>快速配置 Dialog</demo>
<script lang="ts" setup>
import Button from '../lib/Button.vue'
import { openDialog } from '../lib/openDialog'
const showDialog = () => {
    openDialog({
        title: '标题',
        content: '你好',
        ok: () => true,
        cancel: () => { }
    })
}
</script>

<template>
    <div>
        <h4>openDialog函数:无需引入Dialog,可快速配置简易Dialog的title、content、ok、cancel</h4>
        <Button @click="showDialog">一键打开</Button>
    </div>
</template>