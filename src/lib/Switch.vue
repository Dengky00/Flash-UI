<script lang="ts" setup>
import { ref } from 'vue';
const checked = ref(false)
</script>

<template>
    <button :class="{ checked: checked }" @click="checked = !checked"> <span></span> </button>
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
    }

    &.checked {
        background: blue;

        >span {
            left: calc(100% - $h2 - 2px);
        }
    }
}
</style>