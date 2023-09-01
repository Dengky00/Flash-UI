<script lang="ts" setup>
import Topnav from '../components/Topnav.vue';
</script>

<template>
    <div>
        <div class="topnavAndBanner">
            <Topnav />
            <div class="banner">
                <h1>闪电UI</h1>
                <h2>一个使开发快速的UI框架</h2>
                <p class="actions">
                    <a href="https://github.com/Dengky00/Flash-UI">GitHub</a>
                    <RouterLink to="/doc">开始</RouterLink>
                </p>
            </div>
        </div>
        <div class="features">
            <ul>
                <li>
                    <Icon name="vue" class="svg" />
                    <h3>基于 Vue 3</h3>
                    <p>使用了最新的 Vue 3 Composition API</p>
                </li>
                <li>
                    <Icon name="typescript" class="svg" />
                    <h3>基于 TypeScript </h3>
                    <p>源代码采用 TypeScript 书写（非严格检查）</p>
                </li>
                <li>
                    <Icon name="light" class="svg" />
                    <h3>文档完整</h3>
                    <p>所有功能都有细致易懂的讲解说明</p>
                </li>
                <li>
                    <Icon name="code" class="svg" />
                    <h3>代码易读</h3>
                    <p>每个组件的源代码都极其简洁</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 8px;
$color: #007974;

.topnavAndBanner {
    background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
    clip-path: ellipse(70% 60% at 50% 40%);

    .banner {
        color: $color;
        padding: 100px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        >.actions {
            padding: 8px 0;

            a {
                margin: 0 8px;
                background: $green;
                color: white;
                display: inline-block;
                padding: 8px 24px;
                border-radius: $border-radius;

                &:hover {
                    text-decoration: none;
                }
            }
        }
    }
}

.features {
    margin: 64px auto;
    width: 400px;

    @media (min-width: 800px) {
        width: 800px;
    }

    @media (min-width: 1200px) {
        width: 1200px;
    }

    >ul {
        display: flex;
        flex-wrap: wrap;

        >li {
            width: 400px;
            margin: 16px 0;
            display: grid;
            justify-content: start;
            align-content: space-between;
            grid-template-areas:
                "icon title"
                "icon text";
            grid-template-columns: 80px auto;
            grid-template-rows: 1fr auto;

            .svg {
                grid-area: icon;
                width: 64px;
                height: 64px;
            }

            >h3 {
                grid-area: title;
                font-size: 28px;
            }

            >p {
                grid-area: text
            }
        }
    }
}
</style>