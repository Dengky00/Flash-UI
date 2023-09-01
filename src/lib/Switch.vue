<script lang="ts" setup>
const props = defineProps({
    value: {
        type: Boolean,
        default: false
    }
})
const emits = defineEmits(['update:value']);
function toggle() {
    emits('update:value', !props.value)
}
</script>

<template>
    <button class="flash-switch" :class="{ 'flash-checked': props.value }" @click="toggle"> <span></span> </button>
</template>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;

.flash-switch {
    height: $h;
    width: $h*2;
    border: none;
    background: #bfbfbf;
    border-radius: calc($h/2);
    position: relative;

    &:active {
        >span {
            width: $h2 + 4px;
        }
    }

    &.flash-checked {
        background: #1890ff;

        &:active {
            >span {
                width: $h2 + 4px;
                margin-left: -4px;
            }
        }

        >span {
            left: calc(100% - $h2 - 2px);
        }
    }

    >span {
        position: absolute;
        top: 2px;
        left: 2px;
        height: $h2;
        width: $h2;
        background: white;
        border-radius: calc($h2 / 2);
        transition: all 250ms;
    }
}
</style>