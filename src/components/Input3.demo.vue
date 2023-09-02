<demo>支持禁用</demo>
<template>
  <h4>disabled属性:可禁用输入框</h4>
  <Input placeholder="禁用" v-model:value="text" disabled />
</template>

<script lang="ts">
import { ref } from 'vue';
import Input from '../lib/Input.vue';

export default {
  name: 'InputDemo3',
  components: { Input },
  setup() {
    const text = ref('');

    return { text };
  }
};
</script>

<style lang="scss" scoped></style>