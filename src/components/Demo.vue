<script lang="ts" setup>
import { computed, ref } from 'vue';
import 'prismjs';
import 'prismjs/themes/prism-okaidia.css'
import Button from '../lib/Button.vue'
const Prism = (window as any).Prism
const props = defineProps({
    component: {
        type: Object,
        required: true
    }
})
const codeVisible = ref(false)
const html = computed(() => Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html'))
</script>

<template>
    <div class="demo">
        <h2>{{ props.component.__sourceCodeTitle }}</h2>
        <div class="demo-component">
            <component :is="props.component" />
        </div>
        <div class="demo-actions">
            <Button v-if="codeVisible" @click="codeVisible = !codeVisible">隐藏代码</Button>
            <Button v-else @click="codeVisible = !codeVisible">查看代码</Button>
        </div>
        <div class="demo-code" v-if="codeVisible">
            <pre class="language-html" v-html="html" />
        </div>
    </div>
</template>
    
<style lang="scss" scoped>
$border-color: #d9d9d9;

.demo {
    border: 1px solid $border-color;
    margin: 16px 0 32px;

    >h2 {
        font-size: 20px;
        padding: 8px 16px;
        border-bottom: 1px solid $border-color;
    }

    &-component {
        padding: 16px;
    }

    &-actions {
        padding: 8px 16px;
        border-top: 1px dashed $border-color;
    }

    &-code {
        padding: 8px 16px;
        border-top: 1px dashed $border-color;

        >pre {
            line-height: 1.1;
            font-family: Consolas, 'Courier New', Courier, monospace;
            margin: 0;
        }
    }
}
</style>