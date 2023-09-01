<script lang="ts" setup>
import Demo from './Demo.vue'
import Button1Demo from "./Button1.demo.vue";
import Button2Demo from "./Button2.demo.vue";
import Button3Demo from "./Button3.demo.vue";
import Button4Demo from "./Button4.demo.vue";
import Button5Demo from "./Button5.demo.vue";
</script>

<template>
    <div>
        <h1>Button 组件示例</h1>
        <Demo :component="Button1Demo" />
        <Demo :component="Button2Demo" />
        <Demo :component="Button3Demo" />
        <Demo :component="Button4Demo" />
        <Demo :component="Button5Demo" />
    </div>
</template>