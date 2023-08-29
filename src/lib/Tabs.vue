<script lang="ts" setup>
import { VNode, computed, onMounted, onUpdated, ref } from 'vue';
import Tab from "./Tab.vue";

const props = defineProps({
    selected: {
        type: String,
        required: true,
    }
});
const emits = defineEmits(['update:selected']);
//获取组件内容,判断是否为Tab组件
const slots = defineSlots();
const defaults = slots.default();
defaults.forEach((item: VNode) => {
    if (item.type !== Tab) {
        throw new Error("Tabs 子标签必须是 Tab");
    }
});
const titles = defaults.map((item: VNode) => {
    return item.props?.title;
});
//寻找当前用户选择的导航栏对应内容
const current = computed(() => defaults.find((item: VNode) => item.props?.title === props.selected))
//计算下划线对应长度
const container = ref<HTMLDivElement>()
const navItems = ref<Element[]>([])//v-for遍历生成的div的数组
const indicator = ref<HTMLDivElement>()
const x = () => {
    const divs = navItems.value
    //寻找用户所点击的导航栏
    const result = divs.find((div: Element) => div.classList.contains('selected')) as Element//断言只为Element类型,不为空
    const { width } = result.getBoundingClientRect()//计算导航栏长度
    indicator.value!.style.width = width + 'px'
    //控制下划线位置
    const { left: left1 } = container.value!.getBoundingClientRect()//导航栏起点
    const { left: left2 } = result.getBoundingClientRect()//下划线要移动的地方
    const left = left2 - left1
    indicator.value!.style.left = left + 'px'
}
onMounted(x)
onUpdated(x)
</script>

<template>
    <div class="flash-tabs">
        <div class="flash-tabs-nav" ref="container">
            <div class="flash-tabs-nav-item" v-for="(t, index) in titles" :key="index"
                :class="{ selected: t === props.selected }" @click="emits('update:selected', t)"
                :ref="(el) => { if (el) navItems[index] = el as Element }">
                {{ t }}
            </div>
            <div class="flash-tabs-nav-indicator" ref="indicator"></div>
        </div>
        <div class="flash-tabs-content">
            <component class="flash-tabs-content-item" :is="current" :key="current.props.title" />
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
        position: relative;

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

        &-indicator {
            position: absolute;
            height: 3px;
            background: $blue;
            left: 0;
            bottom: -1px;
            width: 100px;
            transition: all 250ms;
        }
    }

    &-content {
        padding: 8px 0;
    }
}
</style>
