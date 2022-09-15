<template>
  <div class="killGoods">
    <div class="countdown">
      <span class="jdkill">京东秒杀</span>
      <van-count-down :time="time" format="HH:mm:ss">
        <template #default="timeData">
          <span class="block">{{
            timeData.hours >= 10 ? timeData.hours : "0" + timeData.hours
          }}</span>
          <span class="colon">:</span>
          <span class="block">{{ timeData.minutes }}</span>
          <span class="colon">:</span>
          <span class="block">{{ timeData.seconds }}</span>
        </template>
      </van-count-down>
      <a href="">爆款轮番秒<span>></span></a>
    </div>
    <div class="goodsBox">
      <div class="goods" v-for="item in killGoods" :key="item.id">
        <img :src="item.img" />
        <span class="price">￥{{ item.price }}</span>
      </div>
      <span @click="allKillGoods" class="seemore"
        ><van-icon name="share" color="#c82915" />查看更多</span
      >
    </div>
  </div>
</template>

<script>
import { killGoods } from "../data";
export default {
  data() {
    return {
      time:12 * 60 * 60 * 1000,
      killGoods,
    };
  },
  methods: {
    allKillGoods() {},
  },
};
</script>

<style lang="scss" scoped>
.killGoods {
  background-color: #fff;
  width: 9.4667rem;
  margin: 0 auto;
  border-radius: .2667rem;
  padding: .2667rem;
}
.colon {
  display: inline-block;
  margin: 0 .1067rem;
  color: #ee0a24;
}
.block {
  display: inline-block;
  width: .5867rem;
  color: #fff;
  font-size: .32rem;
  text-align: center;
  background-color: #ee0a24;
}
.countdown {
  display: flex;
  font-size: .32rem;
  a {
    color: red;
    margin-left: auto;
    span {
      display: inline-block;
      color: #fff;
      background-color: #ee0a24;
      padding: 0 3px;
      font-size: .2667rem;
      border-radius: 50%;
      margin-left: .1333rem;
    }
  }
  .jdkill {
    padding-right: .2667rem;
  }
}
.van-count-down {
  & > span {
    border-radius: .1333rem;
    padding: 0;
    margin: 0;
  }
}
.goodsBox {
  display: flex;
  overflow: scroll;
}
.goods {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 2px;
  img {
    width: 1.4667rem;
  }
  .price {
    color: #ee0a24;
    font-size: .2933rem;
  }
}
.seemore {
  font-size: .2933rem;
  background-color: #f6f6f6;
}
</style>