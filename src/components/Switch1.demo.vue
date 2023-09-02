<demo>常规用法</demo>
<script lang="ts" setup>
import Switch from '../lib/Switch.vue'
import { ref } from 'vue'
const bool = ref(false)
</script>

<template>
    <h4>value属性:双向绑定布尔值</h4>
    <Switch v-model:value="bool" />
</template>