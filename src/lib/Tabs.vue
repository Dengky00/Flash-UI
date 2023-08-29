<script lang="ts" setup>
import { VNode } from "vue";
import Tab from "./Tab.vue";

const props = defineProps({
    selected: {
        type: String,
        required: true,
    }
});
const emits = defineEmits(['update:selected']);
const slots = defineSlots();
const defaults = slots.default();
defaults.forEach((element: VNode) => {
    if (element.type !== Tab) {
        throw new Error("Tabs 子标签必须是 Tab");
    }
});
const titles = defaults.map((element: VNode) => {
    return element.props?.title;
});
</script>

<template>
    <div class="flash-tabs">
        <div class="flash-tabs-nav">
            <div class="flash-tabs-nav-item" v-for="(t, index) in titles" :key="index"
                :class="{ selected: t === props.selected }" @click="emits('update:selected', t)">
                {{ t }}
            </div>
        </div>
        <div class="flash-tabs-content">
            <component class="flash-tabs-content-item" v-for="(tab, index) in defaults" :key="index" :is="tab" />
        </div>
    </div>
</template>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.flash-tabs {
    &-nav {
        display: flex;
        color: $color;
        border-bottom: 1px solid $border-color;

        &-item {
            padding: 8px 0;
            margin: 0 16px;
            cursor: pointer;

            &:first-child {
                margin-left: 0;
            }

            &.selected {
                color: $blue;
            }
        }
    }

    &-content {
        padding: 8px 0;
    }
}
</style>
