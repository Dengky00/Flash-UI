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
        disabled: {
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: false
        }
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
    <button class="flash-button" :class="classes" :disabled="disabled">
        <span v-if="loading" class="flash-loadingIndicator"></span>
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
$grey: grey;

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

    //普通按钮
    &.flash-theme-button {
        &[disabled] {
            cursor: not-allowed;
            color: $grey;

            &:hover {
                border-color: $grey;
            }
        }

        &.flash-level-main {
            background: $blue;
            color: white;
            border-color: $blue;

            &:hover,
            &:focus {
                background: darken($blue, 20%);
                border-color: darken($blue, 20%);
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

    //链接按钮
    &.flash-theme-link {
        border-color: transparent;
        box-shadow: none;
        border-bottom: 1px solid $color;
        border-radius: 0;
        padding: 0;
        height: inherit;

        &:hover,
        &:focus {
            color: lighten($blue, 10%);
            border-bottom: 1px solid lighten($blue, 10%);
        }

        &[disabled] {
            cursor: not-allowed;
            color: $grey;
            border-bottom: 1px solid $grey;
        }

        &.flash-level-main {
            color: $blue;
            border-bottom: 1px solid $blue;

            &:hover,
            &:focus {
                color: darken($blue, 20%);
                border-bottom: 1px solid darken($blue, 20%);
            }
        }

        &.flash-level-danger {
            color: $red;
            border-bottom: 1px solid $red;


            &:hover,
            &:focus {
                color: darken($red, 10%);
                border-bottom: 1px solid darken($red, 10%);
            }
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

        &[disabled] {
            cursor: not-allowed;
            color: $grey;
        }

        &.flash-level-main {
            color: $blue;

            &:hover,
            &:focus {
                color: darken($blue, 20%);
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

    >.flash-loadingIndicator {
        width: 14px;
        height: 14px;
        display: inline-block;
        margin-right: 4px;
        border-radius: 8px;
        border-color: blue blue blue transparent;
        border-style: solid;
        border-width: 2px;
        animation: flash-spin 1s infinite linear;
    }
}

@keyframes flash-spin {
    0% {
        transform: rotate(0deg)
    }

    100% {
        transform: rotate(360deg)
    }
}
</style>