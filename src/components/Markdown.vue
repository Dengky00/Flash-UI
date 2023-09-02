<script lang="ts" setup>
import MarkdownIt from 'markdown-it'
const markdown = new MarkdownIt()
const props = defineProps({
    md: {
        type: String,
        required: true
    }
})
</script>

<template>
    <article class="markdown-body" v-html="markdown.render(props.md)" />
</template>