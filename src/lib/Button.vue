<script lang="ts">
export default {
    // inheritAttrs: false,//继承属性,无法在<script setup>中声明,需要在普通script中使用
    props: {
        theme: {
            type: String,
            default: 'button'
        },
    },
    setup(props, context) {
    },
}
</script>

<template>
    <button class="flash-button" :class="`theme-${theme}`">
        <slot />
    </button>
</template>

<style lang="scss" scoped></style>