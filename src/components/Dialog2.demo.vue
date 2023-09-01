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
        <Button @click="showDialog">一键打开</Button>
    </div>
</template>