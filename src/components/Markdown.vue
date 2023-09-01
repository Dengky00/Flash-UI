<script lang="ts" setup>
import { ref, computed } from 'vue';
import MarkdownIt from 'markdown-it'
const markdown = new MarkdownIt()
const props = defineProps({
    md: {
        type: String,
        required: true
    }
})
const path = computed(() => `../markdown/${props.md}.md?raw`)
const content = ref<string>('')
import(path.value).then(result => {
    content.value = result.default
})
</script>

<template>
    <article class="markdown-body" v-html="markdown.render(content)" />
</template>