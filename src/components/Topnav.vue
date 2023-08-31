<script lang="ts" setup>
import { Ref, inject } from 'vue';

const asideVisible = inject<Ref<boolean>>('asideVisible')
</script>

<template>
    <div class="topnav">
        <div class="logo">LOGO</div>
        <ul class="menu">
            <li>菜单1</li>
            <li>菜单2</li>
        </ul>
        <span class="toggleAside" @click="asideVisible = !asideVisible"></span>
    </div>
</template>

<style lang="scss" scoped>
$color: #007974;

.topnav {
    color: $color;
    display: flex;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;

    >.logo {
        max-width: 6em;
        margin-right: auto;
    }

    >.toggleAside {
        display: none;
        width: 24px;
        height: 24px;
        background: red;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
    }

    >.menu {
        display: flex;
        justify-content: center;
        align-items: center;
        white-space: nowrap; //用于处理元素内的空白符:不会换行
        flex-wrap: nowrap;

        >li {
            margin: 0 1em;
        }
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