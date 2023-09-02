<demo>支持 disabled</demo>
<script lang="ts" setup>
import Switch from '../lib/Switch.vue'
import { ref } from 'vue'
const bool = ref(false)
</script>

<template>
    <h4>disabled属性:可禁用开关</h4>
    <Switch v-model:value="bool" disabled />
</template>