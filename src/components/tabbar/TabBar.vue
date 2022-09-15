<template>
  <van-tabbar v-model="active" active-color="#ff0000" route>
    <van-tabbar-item v-for="(item, idx) in list" :key="idx" :to="item.path" :icon="item.mate.icon">
      {{ item.mate.text }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { tabRouters } from "@/router";
export default {
  name: "TabBar",
  data() {
    return {
      active: 0,
      list: tabRouters,
    };
  },
};
</script>

<style></style>
