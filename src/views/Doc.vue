<script lang="ts" setup>
import { Ref, inject } from 'vue';
import Topnav from '../components/Topnav.vue';

const asideVisible = inject<Ref<boolean>>('asideVisible')
</script>

<template>
    <div class="layout">
        <Topnav class="nav" toggleMenuButtonVisible />
        <div class="content">
            <aside v-if="asideVisible">
                <h2>文档</h2>
                <ol>
                    <li>
                        <RouterLink to="/doc/intro">介绍</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/doc/install">安装</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/doc/get-started">开始使用</RouterLink>
                    </li>
                </ol>
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
.layout {
    display: flex;
    flex-direction: column;
    height: 100vh;

    >.nav {
        flex-shrink: 0;
    }

    >.content {
        flex-grow: 1;
        padding-top: 60px;
        padding-left: 156px;

        @media (max-width: 500px) {
            padding-left: 0;
        }
    }
}

.content {
    display: flex;

    >aside {
        flex-shrink: 0;
    }

    >main {
        flex-grow: 1;
        padding: 16px;
        background: white;
    }
}

aside {
    background: lightblue;
    width: 150px;
    padding: 16px 0;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
    height: 100%;
    z-index:10;

    >h2 {
        margin-bottom: 4px;
        padding: 0 16px;
    }

    >ol {
        >li {
            >a {
                display: block;
                padding: 4px 16px;
                text-decoration: none;
                position: relative;
            }
        }
    }
}

main {
    overflow: auto;
}

//选中背景渐变动画
a:before,
a:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    z-index: -2;
}

a:before {
    background: white;
    transition: all .5s;
    z-index: -1;
}

a.router-link-active {
    background: transparent;
    z-index: 1;
}

a.router-link-active:before,
a.router-link-active:after {
    width: 100%;
}
</style>