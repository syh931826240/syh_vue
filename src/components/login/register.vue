<template>
  <div class="main">
    <div class="header">
      <a href="/">
        <img src="../../assets/say.png" style="height:80px;width:80px">
      </a>
      <h1>用户注册</h1>
    </div>
    <form id="register_form" method="post" action="/register">
      <div class="form-group">
        <label for="email">邮箱</label>
        <input
          type="email"
          class="form-control"
          id="email"
          name="email"
          placeholder="Email"
          autofocus
          v-model="email"
        >
      </div>
      <div class="form-group">
        <label for="nickname">昵称</label>
        <input
          type="text"
          class="form-control"
          id="nickname"
          name="nickname"
          placeholder="Nickname"
          v-model="username"
        >
      </div>
      <div class="form-group">
        <label for="password">密码</label>
        <input
          type="password"
          class="form-control"
          id="password"
          name="password"
          placeholder="Password"
          v-model="password"
        >
      </div>
    </form>
    <button type="submit" class="btn btn-success btn-block" @click="register_request()">注册</button>
    <div class="message">
      <p>已有账号?
        <router-link to="/login">点击登录</router-link>.
      </p>
      <p>返回首页?
        <router-link to="/">首页</router-link>.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      email: "",
      password: "",
      username: ""
    };
  },
  methods: {
    login_request() {
      this.$http
        .post(
          "/login/",
          { username: this.username, password: this.password },
          { emulateJSON: true }
        )
        .then(data => {
          this.login_status = data.body; //记录用户信息
          //在这里登陆就会获取用户信息
          sessionStorage.userinfo_by_register = this.login_status;
          //注册用户信息到session,并传至本地仓库
          this.$store.commit("userinfo", {
            userinfo_by_register: sessionStorage.userinfo_by_register   
          });
        }),
        err => {
          console.log("请求失败");
        };
    },
    open1() {
      this.$confirm("注册成功", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "Success"
      });
    },
    open2() {
      this.$confirm("注册失败,该用户已存在", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "Danger"
      });
    },
    register_request() {
      console.log(this.username);
      this.$http
        .post(
          "/signup/",
          {
            username: this.username, //用户名
            password: this.password, //密码
            email: this.email //邮箱
          },
          { emulateJSON: true } //表单格式
        )
        .then(res => {
          //   console.log()
          if (res.body.status == "successful") {
            this.open1();
            this.login_request(); //注册后直接登陆，得到用户信息。
          } else {
            this.open2();
          }
        });
    },

    zc() {
      this.$http.post("", {}).then();
    }
  }
};
</script>

<style lang="" scoped>
</style>