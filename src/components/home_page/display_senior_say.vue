<template>
  <div class>
    <el-row>
      <el-col :span="3" v-for="(o, index) in 5" :key="o" :offset="index > 0 ? 1 : 0">
        <el-card :body-style="{ padding: '0px' }" style>
          <img src="../../assets/yan.jpg" class="image" style="width:100%;height:150px">
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <router-link to="/senior_say_home">学长学姐说</router-link>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  }
};
</script>

<style lang="" scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>