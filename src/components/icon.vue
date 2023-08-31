<script lang="ts" setup>

const props = defineProps({
    name: {
        type: String,
        required: true
    }
})
</script>

<template>
    <svg>
        <use :href="`#icon-${props.name}`"></use>
    </svg>
</template>

<style lang="scss">
svg {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>