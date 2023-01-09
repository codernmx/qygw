<template>
  <div class="container">
    <div class="loginBox">
      <el-card class="box-card">
        <h3 class="text-center">欢迎登录</h3>
        <el-form
          ref="loginForm"
          :model="loginForm"
          label-width="80px"
          class="top"
        >
          <el-input placeholder="请输入账号" v-model="loginForm.username">
            <template slot="prepend">
              <i class="el-icon-user"></i>
            </template>
          </el-input>
          <el-input
            placeholder="请输入密码"
            v-model="loginForm.password"
            type="password"
            show-password
            class="top"
          >
            <template slot="prepend">
              <i class="el-icon-lock"></i>
            </template>
          </el-input>
          <el-button
            type="primary"
            @click="submit"
            style="width: 100%; margin-top: 30px"
            >立即登录
          </el-button>
        </el-form>
        <div class="top10">
          <span class="bottom-btn">忘记密码？</span>
          <span class="bottom-btn">立即注册</span>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
interface aa={
  
}
export default {
  name: "login",
  data() {
    return {
      loginForm: {},
    };
  },
  methods: {
    submit() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped lang="less">
.container {
  height: 100vh;

  .loginBox {
    width: 100%;
    height: 100%;
    background-image: url("https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg");
    background-size: cover;
    background-position: 50%;
    position: relative;
    display: flex;
    align-items: center;
  }

  .box-card {
    width: 400px;
    position: absolute;
    right: 150px;

    .bottom-btn {
      font-size: 14px;
      cursor: pointer;
      padding-bottom: 3px;
    }

    .bottom-btn:hover {
      border-bottom: 2px solid #1890ff;
    }
  }
}
</style>
