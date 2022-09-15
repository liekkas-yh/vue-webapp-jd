<template>
  <van-swipe
    class="my-swipe"
    :show-indicators="false"
    @change="curIdx = $event + 1"
  >
    <van-swipe-item v-for="(item, index) in imgs" :key="index">
      <img v-lazy="item.img" class="swip" />
      <div class="page">{{ curIdx }}/{{ imgs.length }}</div>
      <img class="back" :src="back" @click="$router.back()" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import back from "@/assets/icons/back.png";
export default {
  props: {
    imgs: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      curIdx: 1,
      back,
    };
  },
  mounted() {
    console.log(this.$router);
  },
};
</script>

<style lang="scss" scoped>
.my-swipe {
  .van-swipe-item{
    width: 100%;
  }
  .swip {
    width: 100%;
  }
  .page {
    position: absolute;
    bottom: 0;
    right: 0;
    color: white;
    font-size: 40px;
    background-color: black;
    opacity: 0.5;
  }
}
.back {
  position: absolute;
  top: 0.2667rem;
  left: 0.2667rem;
  width: 0.9867rem;
  height: 0.9867rem;
  border-radius: 50%;
}
</style>