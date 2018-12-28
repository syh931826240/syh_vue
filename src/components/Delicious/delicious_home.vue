<template>
  <!-- header   -->
  <div>
    <delicious_header style="margin-bottom:20px"></delicious_header>
    <!-- body   -->
    <delicious_body></delicious_body>

    <!-- footer   -->
  </div>
</template>
<script>
import delicious_body from "./delicious_body";
import delicious_header from "./delicious_header";
export default {
  data() {
    return {};
  },
  components: {
    delicious_body,
    delicious_header
  },
  methods: {
    add_delicious() {
      this.$http.get("", {}).then(
        res => {
        res  

        },
        () => {
          console.log("请求失败");
        }
      );
    }
  }
};
</script>

<style lang="" scoped>
</style>