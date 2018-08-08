<template>
  <div class="dynamic">
    <h1>This is an dynamic page</h1>
    <h2>{{msg}}</h2>
  </div>
</template>
<script type="text/babel">
import { getDynamic } from "../api/dynamic";
export default {
  data() {
    return {
      msg: ""
    };
  },
  mounted() {
    // 获取动态数据
    getDynamic().then(res => {
      this.msg = res.data;
    });
  }
};
</script>

<style scoped lang="less">
</style>
