<template>
  <div>
    <van-swipe vertical :autoplay="3000" :show-indicators="false" v-if="show">
      <van-swipe-item>打开京东APP</van-swipe-item>
      <van-swipe-item>购物更轻松</van-swipe-item>
    </van-swipe>
    <div class="close" @click="handleClose"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  methods: {
    handleClose() {
      this.show = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.van-swipe {
  height: 40px;
  width: 190px;
  position: fixed;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 70px;
  background: url("https://img12.360buyimg.com/img/s372x80_jfs/t1/169576/11/7635/6641/6035b6f3Eef97a89c/a6772680a123d8e3.png")
    no-repeat;
  background-size: cover;
  border-radius: 40px;
}
.van-swipe-item {
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  margin-left: 35px;
}
.close {
  width: 30px;
  height: 30px;
  background: red;
    opacity: 0;
  position: fixed;
  left: 90px;
  bottom: 75px;
}
</style>
