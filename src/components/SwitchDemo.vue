<script lang="ts" setup>
import Switch from '../lib/Switch.vue'
import { ref } from 'vue';

const value = ref(false)
</script>

<template>
    <div>
        <Switch v-model:value="value" />
    </div>
</template>

<style lang="scss" scoped></style>