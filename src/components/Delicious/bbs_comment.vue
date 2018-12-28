<template>
  <div style="border-top:5px solid black;margin:0px 200px">
    <el-container style>
      <el-aside width="200px">
        <img src="../../assets/gay.jpg" style="width:70%;height:160px;margin:10px">
        <span style="margin:0px 91px">zzl</span>
      </el-aside>
      <el-main style="width:200px;word-wrap: break-word; word-break: normal;">
        <span >
        {{delicious_blog}}
        </span>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  computed: {
    BK() {
      return this.$store.state.delicious_comment;//监听本地仓库的变化而动态获取值
    }
  },
  name: "",
  data() {
    return {
      delicious_blog: {}
    };
  },
  watch: {
    //computed实际上就是一个值，不是函数，功能methods也能实现，实际上methods里的函数就是函数，而computed的’函数‘实际上是值
    //这里BK实际上就是一个变量，所以可以通过watch来监听
    BK: function(nv) {  
      this.delicious_blog = this.$store.state.delicious_comment;//给与delicious_blog动态赋值
    }                             //仓库值变则重新赋值
  },
  methods: {}
};
</script>

<style lang="" scoped>
</style>