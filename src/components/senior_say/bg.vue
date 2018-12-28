<template>
  <div class="article-list" style="width:790px">
    <div class="item">
      <a href="https://www.baidu.com/">Lorem ipsum dolor sit amet dolor sit</a>
      <div class="status">发布于：2050-10-01 | 阅读：3500 | 标签：#两性 #HTML</div>
      <div
        class="content"
      >9年里，我始终对房子有一种执念。 我诞生的房子在东北长白山深处的一个小林场，如今我除了房子外面的狗窝，已经不记得它的模样。 对狗窝印象深刻是因为那时候养的狗，叫小黑，毛色黑白相间，脸尖尖的，有一条白色条纹，点缀着黑溜溜的眼睛，面相像一只狐狸，性情却温和忠厚，我那时候只有5岁左右，抱它、追它、拉它的尾巴，他始终不恼......</div>
    </div>
    <p>
      <router-link :to="'/senior_say_home/bg_details/'+this.idb" @click="show3 = !show3">了解更多</router-link>
    </p>
    <router-view></router-view>
    <!--  <button @click="show3 = !show3" value="了解更多">了解更多</button>
    <bgd></bgd>-->
  </div>
</template>

<script>
import bgd from "./bg_details.vue";
/*$(function(){
    $("button").click(function(){
    $("bgd").slideToggle("slow");
  });
})*/
export default {
  props: ["id"],
  data() {
    return {
      idb: this.id,
      show3: true
    };
  },
  watch: {
    idb: function(newz) {
      this.idb = newz;
    }
  },
  components: {
    bgd
  }
};
</script>
<style>
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;  
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
.article-list,
.article {
  margin-right: 30%;
  background: #fff;
  padding: 20px 30px;
  -webkit-box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.2);
}

.article-list .item {
  margin-bottom: 25px;
}

.article-list .item .title,
.article .title {
  color: #454545;
  font-size: 22px;
  font-weight: 700;
}

.article-list .item .status,
.article .status {
  font-size: 13px;
  color: #ccc;
}

.article-list .item > *,
.article > * {
  margin: 10px 0;
}
</style>