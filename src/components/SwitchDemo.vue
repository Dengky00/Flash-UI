<script lang="ts" setup>
import Switch from '../lib/Switch.vue'
import { ref } from 'vue';

const bool = ref(false)
</script>

<template>
    <div>
        <Switch v-model:value="bool" />
    </div>
</template>

<style lang="scss" scoped></style>