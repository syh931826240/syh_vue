<template>
  <el-tabs type="border-card" style="width:86%">
    <el-tab-pane label="全部">
      <bg v-for="it in tie" :key="it.pk" class="pd" :id="it.pk" width="100%"></bg>
    </el-tab-pane>
  <!--  <el-tab-pane label="考研">
      <bg v-for="it in tie" :key="it.pk" class="pd" :id="it.pk"></bg>
    </el-tab-pane>
    <el-tab-pane label="就业">
      <bg v-for="it in tie" :key="it.pk" class="pd" :id="it.pk"></bg>
    </el-tab-pane>
    <el-tab-pane label="学习经验">
      <bg v-for="it in tie" :key="it.pk" class="pd" :id="it.pk"></bg>
    </el-tab-pane>-->
  </el-tabs>
</template>

<script>
import bg from "./bg.vue";
export default {
  data() {
    return {
      blog_data1: {},
      tie: []
    };
  },
   watch: {
    BK: function(nv) {
      this.tie = [...this.$store.state.receive_blog];
    }
  },
  mounted: function() {
    this.re();
  },
  components: {
    bg
  },
  methods: {
    re() {
      this.$http.get("/blog", { gay: "gay" }).then(
        data => {
          sessionStorage.blog_data = data.body;
          this.blog_data1=sessionStorage.blog_data;
          console.log(data.body);
          this.$store.dispatch("receive_blog", this.blog_data1);
        },
        () => {
          console.log("请求失败");
        }
      );
      console.log(this.blog_data1);
    }
  }
};
</script>
<style>
</style>