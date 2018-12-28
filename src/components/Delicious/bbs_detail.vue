<template>
  <div>
    <el-container>
      <el-header>
        <bbs_header></bbs_header>
      </el-header>

      <div style="margin-top:60px;">
        <div v-for="o in 10" :key="o">
          <comments_delicious></comments_delicious>
        </div>
      </div>
      <fix_write style="position:fixed;"></fix_write>
    </el-container>
  </div>
</template>

<script>
import comments_delicious from "./bbs_comment.vue";
import bbs_header from "./delicious_header.vue";
import fix_write from "./fix_write.vue";
export default {
  name: "",
  data() {
    return {
      count:0
    };
  },
  components: {
    comments_delicious,
    bbs_header,
    fix_write
  },
  methods:{
     bbs_ouline(){
this.$http.get("",{}).then((res)=>{
         res.body
},()=>{
  console.log("请求失败")
})



     }      





  }
};
</script>

<style lang="" scoped>
</style>