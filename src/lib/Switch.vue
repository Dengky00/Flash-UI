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
    <button :class="{ checked: props.value }" @click="toggle"> <span></span> </button>
    <div>{{ props.value }}</div>
</template>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;

button {
    height: $h;
    width: $h*2;
    border: none;
    background: grey;
    border-radius: $h/2;
    position: relative;

    >span {
        position: absolute;
        top: 2px;
        left: 2px;
        height: $h2;
        width: $h2;
        background: white;
        border-radius: $h2 / 2;
        transition: all 250ms;
    }

    &.checked {
        background: blue;

        >span {
            left: calc(100% - $h2 - 2px);
        }
    }
}
</style>