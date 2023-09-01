<demo>支持 disabled</demo>
<script lang="ts" setup>
import Switch from '../lib/Switch.vue'
import { ref } from 'vue'
const bool = ref(false)
</script>

<template>
    <Switch v-model:value="bool" disabled />
</template>