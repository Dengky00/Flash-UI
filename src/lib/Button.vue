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

<style lang="scss" scoped>
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;

.flash-button {
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex; //如果父元素不设置宽度,inline-flex父元素宽度等于子元素,flex父元素宽度100%
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 0 3px 0 fade-out(black, 0.8); //在给定的淡出程度下,fade-out会将颜色过渡为透明

    &+& {
        margin-left: 8px;
    }

    &:hover,
    &:focus {
        color: $blue;
        border-color: $blue;
    }
}
</style>