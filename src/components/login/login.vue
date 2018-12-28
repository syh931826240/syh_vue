<template>
  <div class="main">
    <div class="header">
      <a href="/">
        <img src="../../assets/say.png" style="height:80px;width:80px">
      </a>
      <h1>用户登录</h1>
    </div>
    <form id="login_form" method="post">
      <div class="form-group">
        <label for>邮箱</label>
        <input
          type="text"
          class="form-control"
          name="username"
          placeholder="Username"
          autofocus
          v-model="username"
        >
      </div>
      <div class="form-group">
        <label for>密码</label>
        <a class="pull-right" href>忘记密码？</a>
        <input
          type="password"
          class="form-control"
          name="password"
          placeholder="Password"
          v-model="password"
        >
      </div>
      <div class="checkbox">
        <label>
          <input type="checkbox">记住我
        </label>
      </div>
    </form>
    <input type="button" class="btn btn-success btn-block" @click="login_request()" value="登录">
    <div class="message">
      <p>没有账号?
        <router-link to="/register">点击创建</router-link>
      </p>
      <p>返回首页?
        <router-link to="/">首页</router-link>.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login_status: {},
      username: "",
      password: ""
    };
  },
  methods: {
    login_request() {
      //  console.log(this.username);
      //  console.log(this.password);
      this.$http
        .post(
          "/login/",
          { username: this.username, password: this.password },
          { emulateJSON: true }
        )
        .then(data => {
          this.login_status = data.body;
          /*  if(login_status.status==0){   
          let userinfo=  login_status.body;
          this.$store.dispatch("record_user",useinfo)
         // this.$router.replace("/")
        } 
        else{
        }    */
          //在这里登陆就会获取用户信息
          sessionStorage.userinfo = this.login_status;//将服务器返回的数据保存在session中
          this.$store.commit("userinfo", {
            userinfo1: sessionStorage.userinfo
          });//提交session的数据到本地仓库
          router.push({ name: 'home'})//登陆完跳转到主页
        }),
        err => {
          console.log("请求失败");
        };
    }
  }
};
</script>
<style>
body {
  background-color: #f9f9f9;
}

.main {
  width: 340px;
  margin: 0 auto;
  margin-top: 50px;
  color: #333;
}

.main .header {
  text-align: center;
}

.main .header h1 {
  font-size: 26px;
}

.main form {
  padding: 20px;
  margin-bottom: 15px;
  border: 1px solid #d8dee2;
  border-radius: 5px;
  background-color: #fff;
}

.main .message {
  padding: 10px;
  padding-bottom: 0;
  border: 1px solid #d8dee2;
  border-radius: 5px;
}
</style>
