<template>
  <div>
    <home_header></home_header>
    <el-carousel :interval="4000" type="card" height="400px">
      <el-carousel-item v-for="item in img" :key="item.id">
        <img :src="item.url" height="100%" width="100%">
      </el-carousel-item>
    </el-carousel>
    <div>
      <senior_say_home></senior_say_home>
    </div>

    <div>
      <dilicious>
        <router-link to="/delicious_home" style="position:relative;left:1000px">舌尖上的海大</router-link>
      </dilicious>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>
<script>
import senior_say_home from "./display_senior_say";
import dilicious from "./display_delicious";
import home_header from "./home_header";
export default {
  components: {
    senior_say_home,
    dilicious,
    home_header
  },
  data() {
    return {
      img: [
        { id: 1, url: require("../../assets/timg.jpg") },
        { id: 2, url: require("../../assets/t2.jpg") },
        { id: 3, url: require("../../assets/r3.jpg") },
        { id: 4, url: require("../../assets/t3.jpg") },
        { id: 5, url: require("../../assets/t4.jpg") }
      ]
    };
  }
};
</script>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>