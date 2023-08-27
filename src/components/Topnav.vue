<script lang="ts" setup>
import { Ref, inject } from 'vue';

const asideVisible = inject<Ref<boolean>>('asideVisible')
const toggleAside = () => {
    asideVisible!.value = !asideVisible!.value
}

</script>

<template>
    <div class="topnav">
        <div class="logo">LOGO</div>
        <ul class="menu">
            <li>菜单1</li>
            <li>菜单2</li>
        </ul>
        <span class="toggleAside" @click="toggleAside"></span>
    </div>
</template>

<style lang="scss" scoped>
.topnav {
    background: pink;
    display: flex;
    padding: 16px;
    position: relative;
    z-index: 10;

    >.logo {
        max-width: 6em;
        margin-right: auto;
    }

    >.toggleAside {
        display: inline-block;
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