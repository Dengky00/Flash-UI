<script lang="ts" setup>
import { Ref, inject } from 'vue';
import Topnav from '../components/Topnav.vue';

const asideVisible = inject<Ref<boolean>>('asideVisible')

</script>

<template>
    <div>
        <Topnav />
        <div class="content">
            <aside v-if="asideVisible">
                <h2>组件列表</h2>
                <ol>
                    <li>
                        <RouterLink to="/doc/switch">Switch 组件</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/doc/button">Button 组件</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/doc/dialog">Dialog 组件</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/doc/tabs">Tabs 组件</RouterLink>
                    </li>
                </ol>
            </aside>
            <main>
                <RouterView />
            </main>
        </div>
    </div>
</template>

<style lang="scss" scoped>
aside {
    background: lightblue;
    width: 150px;
    padding: 16px;

    >h2 {
        margin-bottom: 4px;
    }

    >ol {
        >li {
            padding: 4px 0;
        }
    }

    @media (max-width: 500px) {
        position: fixed;
        top: 0;
        left: 0;
        padding-top: 70px;
    }
}
</style>