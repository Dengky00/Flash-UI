<script lang="ts" setup>
import Switch from '../lib/Switch.vue'
import { ref } from 'vue'
const bool = ref(false)
</script>

<template>
    <Switch v-model:value="bool" />
</template>