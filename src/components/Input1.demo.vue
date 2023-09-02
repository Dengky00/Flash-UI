<demo>常规使用</demo>
<template>
  <h4>value属性:支持双向绑定</h4>
  <Input placeholder="请输入内容" v-model:value="text" />
  <span class="picked">{{ text }}</span>
</template>

<script lang="ts">
import { ref } from 'vue';
import Input from '../lib/Input.vue';

export default {
  name: 'InputDemo1',
  components: { Input },
  setup() {
    const text = ref('');
    return { text };
  }
};
</script>

<style lang="scss" scoped>
.picked {
  padding: 10px 15px;
}
</style>