<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import home from "./components/home_page/home.vue";

export default {
  components: {
    home
  },
  data() {
    return {};
  }
};
</script>
<style>
</style>