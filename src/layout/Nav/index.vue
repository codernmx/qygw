<template>
  <div class="container">
    <el-row type="flex" class="box">
      <el-col :span="3" class="logo">
        <img
          src="@/assets/imgs/logo.png"
          width="120px"
          style="margin-top: -5px"
        />
      </el-col>
      <el-col :span="18" class="flex">
        <div
          v-for="(item, i) in routers"
          :key="i"
          @click="openMenu(item.path)"
          class="item"
        >
          <div class="text-center" :class="active == item.path ? 'active' : ''">
            {{ item.meta.title }}
          </div>
          <img
            src="@/assets/imgs/nav.png"
            alt=""
            v-if="active == item.path"
            style="margin-top: -6px"
          />
        </div>
      </el-col>
      <el-col :span="3">
        <div @click="login">登录/注册</div>
      </el-col>
    </el-row>
    <el-carousel>
      <el-carousel-item v-for="item in 4" :key="item">
        <el-image
          style="width: 100%; height: 100%"
          src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          fit="cover"
        ></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "Nav",
  data() {
    return {
      active: "/home",
      routers: [],
    };
  },
  methods: {
    openMenu(key) {
      if (this.$route.path != key) {
        this.active = key;
        this.$router.push(key);
      }
    },
    login() {
      this.$router.push("/login");
    },
  },
  mounted() {
    this.routers = router.getRoutes().filter((item) => item.meta.isShow);
    //刷新
    this.active = window.location.pathname;
  },
};
</script>

<style scoped lang="less">
.container {
  line-height: 60px;
  cursor: pointer;

  .box {
    padding: 0 80px;
    .logo {
      display: flex;
      align-items: center;
    }

    .item {
      width: 82px;
      height: 60px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .active {
        color: #0773e7;
      }
    }
  }
}
</style>
