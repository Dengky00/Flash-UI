<script lang="ts" setup>

const props = defineProps({
    name: {
        type: String,
        required: true
    }
})
</script>

<template>
    <svg aria-hidden="true">
        <use :href="`#icon-${props.name}`"></use>
    </svg>
</template>