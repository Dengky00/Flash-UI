<demo>常规使用</demo>
<script lang="ts" setup>
import { ref } from 'vue'
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'

const visible = ref(false)
const ok = () => true
const cancel = () => { }
</script>

<template>
    <h4>closeOnClickOverlay属性:决定点击对话框外是否关闭,默认false</h4>
    <h4>ok函数:点击对话框ok键触发,返回true时关闭对话框</h4>
    <h4>cancel函数:点击对话框Cancel键触发</h4>
    <div>
        <Button @click="visible = !visible">打开对话框</Button>
        <Dialog v-model:visible="visible" :closeOnClickOverlay="false" :ok="ok" :cancel="cancel">
            <template v-slot:title>
                <strong>自定义标题</strong>
            </template>
            <template v-slot:content>
                <strong>自定义</strong>
                <div>内容</div>
            </template>
        </Dialog>
    </div>
</template>