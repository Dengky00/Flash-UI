<script lang="ts" setup>
import Button from '../lib/Button.vue'
import 'prismjs';
import 'prismjs/themes/prism-okaidia.css'
const Prism = (window as any).Prism
const props = defineProps({
    component: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="demo">
        <h2>{{ props.component.__sourceCodeTitle }}</h2>
        <div class="demo-component">
            <component :is="props.component" />
        </div>
        <div class="demo-actions">
            <Button>查看代码</Button>
        </div>
        <div class="demo-code">
            <pre class="language-html"
                v-html="Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')" />
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