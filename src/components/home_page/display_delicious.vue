<template>
  <div class>
    <el-row>
      <el-col
        :span="3"
        v-for="(o, index) in display_delicious"
        :key="index"
        :offset="index > 0 ? 1 : 0"
      >
        <el-card :body-style="{ padding: '0px' }" style>
          <img
            src="../../assets/yan.jpg"
            v-if="o.tag=='yan'"
            class="image"
            style="width:100%;height:150px"
          >
          <img
            src="../../assets/xue.jpg"
            v-else-if="o.tag=='xue'"
            class="image"
            style="width:100%;height:150px"
          >
          <img
            src="../../assets/hai.jpg"
            v-else-if="o.tag=='hai'"
            class="image"
            style="width:100%;height:150px"
          >
          <img src="../../assets/ye.jpg" v-else class="image" style="width:100%;height:150px">

          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <router-link to="/delicious_home" style="margin-bottom:0px">舌尖上的海大</router-link>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      display_delicious: [
        { tag: "yan" },
        { tag: "hai" },
        { tag: "ye" },
        { tag: "xue" },
        { tag: "xue" }
      ],

      currentDate: new Date()
    };
  },
  methods: {
    preview_data: function() {
      this.$http.get("").then(res => {
        display_delicious = res.body;
      });
    }
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