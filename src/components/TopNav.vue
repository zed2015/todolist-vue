<template>
    <div class="top_nav">
        <div id="logo">
            <a href="#">
                <img src="../assets/logo.png">
            </a>
        </div>
        <div id="quick_find">
<!--            <div id="quick_find_icon">icon</div>-->
            <input id="quick_find_input" placeholder="快速查找">
        </div>
        <div id="top_icons">
            <span id="notification">通知</span>
            <span id="setting">设置</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TopNav"
    }
</script>

<!-- 组件的样式不复用-->
<style scoped lang="scss">
    @import '~@/style/components/top_nav';
</style>
