<script lang="ts" setup>
import md from '../markdown/install.md?raw'//将markdown文件转换为字符串导入
import MarkdownIt from 'markdown-it'
const markdown = new MarkdownIt()
</script>

<template>
    <article class="markdown-body" v-html="markdown.render(md)" />
</template>

<style lang="scss" scoped></style>