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