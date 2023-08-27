<script lang="ts" setup>
import { provide, ref } from 'vue';

const asideVisible = ref(false)
provide('asideVisible', asideVisible)

</script>

<template>
  <RouterView />
</template>

<style lang="scss" scoped></style>
