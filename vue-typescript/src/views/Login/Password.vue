<template>
    <div class="password">
        <LoginHeader>
            <el-from slot="container">
                <div class="title">
                    <h3>找回密码</h3>
                </div>
            </el-from>
        </LoginHeader>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LoginHeader from "./LoginHeader.vue";
@Component({
    components: { LoginHeader }
})
export default class Password extends Vue {}
</script>
<style lang="scss">
.password {
    width: 500px;
    height: 400px;
    border: 1px solid wheat;
    margin: 0 auto;
    .title {
        text-align: center;
        font-size: 16px;
    }
}
</style>