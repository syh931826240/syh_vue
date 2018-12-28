<template>

<el-card class="box-card">
  <div v-for="o in 5" :key="o" class="text item">
    {{o}}
    <div v-if="o==1" key=1>
    <el-button round>1</el-button>
    </div>
    <div v-else-if="o==2" key=2>
    <el-button round>2</el-button>
    </div>
    <div v-else-if="o==3" key=3>
    <el-button round>3</el-button>
    </div>
    <div v-esle-if="o==4" key=4>
    <el-button round>4</el-button>
    </div>
   <div v-esle>
    <el-button type="success">
    <router-link to="/" tag="span">返回首页</router-link></el-button>
    </div>
  </div>
</el-card>

</template>
<script>
   export default{

  
   }

</script>
<style>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    top:200px;
    right:0px;
    width: 150px;
   position: fixed;
   
  }
</style>