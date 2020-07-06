<template>
    <div class="login">
        <header class="header_head">标题</header>
        <LoginHeader>
            <el-from
               ref="ruleForm" 
                :rules="rules"
                v-model="ruleForm"
                label-positions="left"
                label-width="0"
                slot="container"
            >
                <div class="title">
                    <h3>账号密码登录</h3>
                </div>
                <!-- username -->
                <el-from-item prop="username">
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
                <el-from-item prop="pwd">
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
                    <el-button @click="submitForm('ruleForm')" style="width:100%" type="primary">登录</el-button>
                </el-from-item>
                <!-- 7天登录 -->
                <!-- <el-from-item>
                    <el-checkbox v-model="ruleForm.autoLogin" :checked="ruleForm.autoLogin">7天自动登录</el-checkbox>
                    <el-button type="text" class="floright" @click="$router.push('/password')">忘记密码</el-button>
                </el-from-item>-->
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
        autoLogin: Boolean;
    } = {
        username: "",
        pwd: "",
        autoLogin: true //是否登录
    };
    @Provide() rules = {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        pwd: [{ required: true, message: "请输入密码", trigger: "blur" }]
    };

    submitForm(formName:void): void {
        // this.$nextTick(function() {
            
            (this.$refs['formName'] as any).validate((valid: boolean) => {
                if (valid) {
                    alert("submit!");
                } else {
                    console.log("222");
                    // return false;
                }
            });
        // });
    }
}
</script>
<style lang="scss">
.login {
    width: 500px;
    height: 400px;
    border: 1px solid wheat;
    margin: 0 auto;
    padding: 10px;
    .header_head {
        text-align: center;
    }
    .title {
        text-align: center;
        font-size: 16px;
    }
    .floright {
        float: right;
    }
}
</style>