<script lang="ts" setup>
import Button from './Button.vue'
const props = defineProps({
    visible: {
        type: Boolean,
        default: false
    },
    closeOnClickOverlay: {
        type: Boolean,
        default: true
    },
    ok: {
        type: Function,
    },
    cancel: {
        type: Function,
    }
})
const emits = defineEmits(['update:visible'])
const close = () => {
    emits('update:visible', false)
}
const onClickOverlay = () => {
    if (props.closeOnClickOverlay) {
        close()
    }
}
const ok = () => {
    if (props.ok?.() !== false) {
        close()
    }
}
const cancel = () => {
    props.cancel?.()
    close()
}
</script>

<template>
    <template v-if="props.visible">
        <!-- 传送组件,传送至body,防止父元素z-index过小 -->
        <Teleport to="body">
            <div class="flash-dialog-overlay" @click="onClickOverlay"></div>
            <div class="flash-dialog-wrapper">
                <div class="flash-dialog">
                    <header>
                        <slot name="title" />
                        <span class="flash-dialog-close" @click="close"></span>
                    </header>
                    <main>
                        <slot name="content" />
                    </main>
                    <footer>
                        <Button level="main" @click="ok">OK</Button>
                        <Button @click="cancel">Cancel</Button>
                    </footer>
                </div>
            </div>
        </Teleport>
    </template>
</template>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;

.flash-dialog {
    background: white;
    border-radius: $radius;
    box-shadow: 0 0 3px 0 fade_out(black, 0.5);
    min-width: 15em;
    max-width: 90%;

    &-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: fade_out(black, 0.5);
        z-index: 10;
    }

    &-wrapper {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 11;
    }

    >header {
        padding: 12px 16px;
        border-bottom: 1px solid $border-color;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 20px;
    }

    >main {
        padding: 12px 16px;
    }

    >footer {
        border-top: 1px solid $border-color;
        padding: 12px 16px;
        text-align: right;
    }

    &-close {
        position: relative;
        display: inline-block;
        width: 16px;
        height: 16px;
        cursor: pointer;

        //界面关闭x按钮
        &::before,
        &::after {
            content: '';
            position: absolute;
            height: 1px;
            background: black;
            width: 100%;
            top: 50%;
            left: 50%;
        }

        &::before {
            transform: translate(-50%, -50%) rotate(-45deg);
        }

        &::after {
            transform: translate(-50%, -50%) rotate(45deg);
        }
    }
}
</style>