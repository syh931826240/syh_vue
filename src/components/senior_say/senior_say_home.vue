<template>
  <div>
    <headerd></headerd>

    <fixd></fixd>
    <selectd></selectd>
  </div>
</template>

<script>
import headerd from "./header.vue";
import bg from "./bg.vue";
import bgdetails from "./bg_details.vue";
import fixd from "./fix.vue";
import selectd from "./select.vue";

export default {
  methods:{
   get_blog(){

     this.$http.get("",{}).then((res)=>{

},()=>{
  console.log("请求失败")
})
   }


    
  },
  components: {
    bgdetails,
    fixd,
    bg,
    selectd,
    headerd
  },
  data() {
    return {
      tie: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      currentDate: new Date()
    };
  }
};
</script>
<style>
</style>