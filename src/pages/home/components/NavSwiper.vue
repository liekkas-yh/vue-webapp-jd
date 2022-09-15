<template>
  <van-swipe class="my-swipe" indicator-color="red">
    <van-swipe-item>
      <div v-for="item in data1" :key="item.id">
        <img :src="item.img" /><span v-text="item.name"></span>
      </div>
    </van-swipe-item>
    <van-swipe-item>
      <div v-for="item in data2" :key="item.id">
        <img :src="item.img" /><span v-text="item.name"></span>
      </div>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import { data1, data2 } from "../data";
export default {
  data() {
    return {
      data1: data1,
      data2: data2,
    };
  },
};
</script>

<style lang="scss" scoped>
.van-swipe-item {
  display: flex;
  flex-wrap: wrap;
  height: 4.6667rem;
  align-content: center;
  & > div {
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 2rem;
    justify-content: space-evenly;
    align-items: center;
    img {
      width: 1.0667rem;
      height: 1.0667rem;
    }
    span {
      font-size: .32rem;
    }
  }
}
</style>