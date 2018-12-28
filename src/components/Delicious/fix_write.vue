
<template>
  <div style="position:fixed;right:0px;margin:200px 0px;width:180px">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>写点什么？</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <textarea v-model="cm" style="width:100px;height:300px"/>
      <el-button type="primary" icon="el-icon-edit" circle @click="publish_comment"></el-button>
    </el-card>
  </div>
</template>
<script>
export default {
  mounted: function() {
    this.save();
  },
  data() {
    return {
      cm: "",   //用户评论
      cm2:{},   //美食评论对象
      count:0,  //待定
      user:{}   //用户信息  
    };
  },
  methods: {
    publish() {
      sessionStorage.cm1;    //将用户写的评论发给服务器
      this.$http.post("", { blog_data: sessionStorage.cm1 }).then(
        res => {},
        () => {
          console.log("请求失败");
        }
      );
    },
    save() {
      sessionStorage.cm1;
      this.$store.commit("delicious_comment", { cm: sessionStorage.cm1 })//每次刷新就重新赋值给本地仓库
    },
    publish_comment() {
    //  sessionStorage.co += 1;
      sessionStorage.cm1 = this.cm;//获取用户输入
 
      this.cm2.id=this.count;  //评论ID
      this.cm2.writer=this.$store.state.user_info.username;//从用户仓库获取用户信息
      this.cm2.comment=sessionStorage.cm1;//将评论赋值给一个对象（美食评论对象）
     // console.log(sessionStorage.co);
   
      this.publish();//提交给服务器
      this.$store.commit("delicious_comment", { cm: sessionStorage.cm2 });//将评论保存到本地仓库
      this.count++;
    }
  }
};
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>