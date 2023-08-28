<script lang="ts">
import { computed } from 'vue';

export default {
    // inheritAttrs: false,//继承属性,无法在<script setup>中声明,需要在普通script中使用
    props: {
        theme: {
            type: String,
            default: 'button'
        },
        size: {
            type: String,
            default: 'normal'
        },
        level: {
            type: String,
            default: "normal"
        },
    },
    setup(props) {
        const classes = computed(() => {
            return [
                `flash-theme-${props.theme}`,
                `flash-size-${props.size}`,
                `flash-level-${props.level}`
            ]
        })
        return { classes }
    },
}
</script>

<template>
    <button class="flash-button" :class="classes">
        <slot />
    </button>
</template>

<style lang="scss">
$h: 32px;
$radius: 4px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$red: red;

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
    transition: all 250ms;

    &+& {
        margin-left: 8px;
    }

    &:hover,
    &:focus {
        color: $blue;
        border-color: $blue;
    }

    //链接按钮
    &.flash-theme-link {
        border-color: transparent;
        box-shadow: none;
        border-bottom: 1px solid;
        border-radius: 0;
        padding: 0;
        height: inherit;

        &:hover,
        &:focus {
            color: lighten($blue, 10%);
        }
    }

    //文本按钮
    &.flash-theme-text {
        border-color: transparent;
        box-shadow: none;
        color: inherit;
        font-weight: bold;

        &:hover,
        &:focus {
            background: darken(white, 5%);
        }
    }

    //大按钮
    &.flash-size-big {
        font-size: 24px;
        height: 48px;
        padding: 0 16px;

        &.flash-theme-link {
            height: inherit;
            padding: 0;
        }
    }

    //小按钮
    &.flash-size-small {
        font-size: 12px;
        height: 20px;
        padding: 0 4px;

        &.flash-theme-link {
            height: inherit;
            padding: 0;
        }
    }

    &.flash-theme-button {
        &.flash-level-main {
            background: $blue;
            color: white;
            border-color: $blue;

            &:hover,
            &:focus {
                background: darken($blue, 10%);
                border-color: darken($blue, 10%);
            }
        }

        &.flash-level-danger {
            background: $red;
            border-color: $red;
            color: white;

            &:hover,
            &:focus {
                background: darken($red, 10%);
                border-color: darken($red, 10%);
            }
        }
    }

    &.flash-theme-link {
        &.flash-level-main {
            color: $blue;

            &:hover,
            &:focus {
                color: darken($blue, 10%);
            }
        }

        &.flash-level-danger {
            color: $red;

            &:hover,
            &:focus {
                color: darken($red, 10%);
            }
        }
    }

    &.flash-theme-text {
        &.flash-level-main {
            color: $blue;

            &:hover,
            &:focus {
                color: darken($blue, 10%);
            }
        }

        &.flash-level-danger {
            color: $red;

            &:hover,
            &:focus {
                color: darken($red, 10%);
            }
        }
    }
}
</style>