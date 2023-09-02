<script lang="ts" setup>
import { Ref, inject } from 'vue';

const props = defineProps({
    toggleMenuButtonVisible: {
        type: Boolean,
        default: false
    }
})
const asideVisible = inject<Ref<boolean>>('asideVisible')
</script>

<template>
    <div class="topnav">
        <RouterLink to="/" class="logo">
            <Icon name="flash" class="flash" />
        </RouterLink>
        <ul class="menu">
            <li>
                <router-link to="/doc">文档</router-link>
            </li>
        </ul>
        <Icon name="menu" class="toggleAside" @click="asideVisible = !asideVisible" v-if="props.toggleMenuButtonVisible" />
    </div>
</template>

<style lang="scss" scoped>
$color: #e67700;

.topnav {
    color: $color;
    position: fixed;
    display: flex;
    justify-content: space-between;
    padding: 16px 16px 8px 16px;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 20;
    background: #fff4e6;
    box-shadow: 0 0 6px 0 fade-out(black, 0.6);

    >.logo {
        font-size: 0;

        .flash {
            width: 42px;
            height: 42px;
        }
    }

    >.menu {
        display: flex;
        justify-content: space-around;
        align-items: center;
        white-space: nowrap; //用于处理元素内的空白符:不会换行
        flex-wrap: nowrap;
    }

    >.toggleAside {
        display: none;
        width: 32px;
        height: 32px;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
    }

    @media (max-width:500px) {
        >.menu {
            display: none;
        }

        >.logo {
            margin: 0 auto;
        }

        >.toggleAside {
            display: inline-block;
        }
    }
}
</style>