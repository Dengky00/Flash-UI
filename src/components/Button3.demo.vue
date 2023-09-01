<demo>支持 level</demo>
<script lang="ts" setup>
import Button from "../lib/Button.vue";
</script>

<template>
    <table>
        <tr>
            <td><Button level="main">重要</Button></td>
            <td><Button>普通</Button></td>
            <td><Button level="danger">慎重</Button></td>
        </tr>
        <tr>
            <td><Button theme="link" level="main">重要</Button></td>
            <td><Button theme="link">普通</Button></td>
            <td><Button theme="link" level="danger">慎重</Button></td>
        </tr>
        <tr>
            <td><Button theme="text" level="main">重要</Button></td>
            <td><Button theme="text">普通</Button></td>
            <td><Button theme="text" level="danger">慎重</Button></td>
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