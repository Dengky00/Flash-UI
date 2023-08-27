<script lang="ts" setup>
import Topnav from '../components/Topnav.vue';
</script>

<template>
    <div>
        <Topnav />
        <div class="content">
            <aside>边栏</aside>
            <aside>
                <h2>组件列表</h2>
                <ol>
                    <li>
                        <RouterLink to="/doc/swich">Switch 组件</RouterLink>
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
            <main>主内容</main>
        </div>
    </div>
</template>