<template>
    <div class="login">
        标题
        <LoginHeader>
            <el-from v-model="ruleForm" label-positions="left" label-width="0" slot="container">
                <div class="title">
                    <h3>账号密码登录</h3>
                </div>
                <!-- username -->
                <el-from-item>
                    <el-input
                        type="text"
                        v-model="ruleForm.username"
                        auto-complete="off"
                        placeholder="账号"
                    >
                        <i slot="prefix" class="el-input__icon el-icon-s-check"></i>
                    </el-input>
                </el-from-item>
                <!-- password -->
                <el-from-item>
                    <el-input
                        type="password"
                        v-model="ruleForm.password"
                        auto-complete="off"
                        placeholder="密码"
                    >
                        <i slot="prefix" class="el-input__icon el-icon-s-check"></i>
                    </el-input>
                </el-from-item>
                <!-- 登录 -->
                <el-from-item>
                    <el-button type="primary">登录</el-button>
                </el-from-item>
            </el-from>
        </LoginHeader>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import LoginHeader from "./LoginHeader.vue";
@Component({
    components: {
        LoginHeader
    }
})
export default class Login extends Vue {
    @Provide() ruleForm: {
        username: String;
        pwd: String;
        autoLogin: boolean;
    } = {
        username: "",
        pwd: "",
        autoLogin: true //是否登录
    };
}
</script>
<style lang="scss">
.login {
    text-align: center;
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