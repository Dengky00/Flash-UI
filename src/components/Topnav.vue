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
        font-size: 0;

        .flash {
            width: 32px;
            height: 32px;
        }
    }

    >.toggleAside {
        display: none;
        width: 32px;
        height: 32px;
        // background: red;
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