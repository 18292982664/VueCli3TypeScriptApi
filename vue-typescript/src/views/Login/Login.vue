<template>
    <div class="login">
        标题
        <LoginHeader>
            <el-from slot="container">
                <div class="title">
                    <h3>账号密码登录</h3>
                </div>
            </el-from>
        </LoginHeader>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LoginHeader from "./LoginHeader.vue";
@Component({
    components: {
        LoginHeader
    }
})
export default class Login extends Vue {}
</script>
<style lang="scss">
.login {
    text-align: center;
    .title {
        text-align: center;
        font-size: 16px;
        width: 500px;
        height: 400px;
        border: 1px solid wheat;
        margin: 0 auto;
    }
}
</style>