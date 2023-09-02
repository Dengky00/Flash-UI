<demo>支持类型</demo>
<template>
  <h4>type属性:决定输入框类型,默认text</h4>
  <Input placeholder="文本类型"  v-model:value="text"/>
  <span class="picked">
    {{text}}
  </span>
  <Input placeholder="密码类型" type="password" v-model:value="password"/>
  <span class="picked">
    {{password}}
  </span>
</template>

<script lang="ts">
import {ref} from 'vue';
import Input from '../lib/Input.vue';

export default {
  name: 'InputDemo2',
  components: {Input},
  setup() {
    const text = ref('');
    const password = ref('');

    return {text,password};
  }
};
</script>

<style lang="scss" scoped>
.picked{
  padding: 10px 15px;
}
</style>