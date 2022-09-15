<template>
  <div class="right">
    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="item in list" :key="item._id">
        <van-image :src="item.img" />
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  props: {
    list: { type: Array, default: () => [] },
  },
};
</script>

<style></style>