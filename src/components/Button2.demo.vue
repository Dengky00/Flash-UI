<demo>支持 Size</demo>
<script lang="ts" setup>
import Button from "../lib/Button.vue";
</script>

<template>
    <h4>size属性:决定按钮大小,默认普通大小</h4>
    <table>
        <tr>
            <td><Button size="big">大大大</Button></td>
            <td><Button>普普通</Button></td>
            <td><Button size="small">小小小</Button></td>
        </tr>
        <tr>
            <td><Button theme="link" size="big">大大大</Button></td>
            <td><Button theme="link">普普通</Button></td>
            <td><Button theme="link" size="small">小小小</Button></td>
        </tr>
        <tr>
            <td><Button theme="text" size="big">大大大</Button></td>
            <td><Button theme="text">普普通</Button></td>
            <td><Button theme="text" size="small">小小小</Button></td>
        </tr>
    </table>
</template>

<style lang="scss" scoped>
table {
    text-align: center;

    td {
        padding: 8px;
    }
}
</style>