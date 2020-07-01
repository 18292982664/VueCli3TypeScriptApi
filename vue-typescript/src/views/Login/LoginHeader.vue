<template>
    <div class="login-header">
        <div class="header">login-登录</div>
        <div class="container">
            <slot name="container"></slot>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
    components: {}
})
export default class Layout extends Vue {}
</script>
<style lang="scss">
.header {
    text-align: center;
}
</style>