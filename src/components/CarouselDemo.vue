<template>
  <div>
    <h1>Carousel 组件示例</h1>
    <Demo :component="Carousel1Demo" />
    <Demo :component="Carousel2Demo" />
  </div>
</template>

<script lang="ts">
// @ts-nocheck
import Demo from './Demo.vue'
import Carousel1Demo from './Carousel1.demo.vue'
import Carousel2Demo from './Carousel2.demo.vue'

export default {
  components: { Demo },
  setup() {
    return { Carousel1Demo, Carousel2Demo }
  },
}
</script>