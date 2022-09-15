<template>
  <div class="info">
    <!-- 轮播图 -->
    <GoodSwiper :imgs="info.imgs" />
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import GoodSwiper from "./components/GoodSwiper.vue";
export default {
  components: { GoodSwiper },
  props: {},
  data() {
    return {
      info: {
        imgs: [
          {
            id: 1,
            img: "//m.360buyimg.com/mobilecms/s750x750_jfs/t1/7408/1/16316/244717/6278a7b6E01963be4/a701cf343c21cbef.jpg!q80.dpg",
          },
          {
            id: 2,
            img: "//m.360buyimg.com/mobilecms/s843x843_jfs/t1/113245/22/25956/280032/6278a7b2Ee3269c57/d01912bd28d1fdaa.jpg!q70.dpg.webp",
          },
        ],
        price: 99,
        name: "鳄鱼恤 CROCODILE拖鞋男士2022新款夏季外穿踩屎感ins潮防滑防臭沙滩凉鞋运动凉拖 全黑 39",
      },
    };
  },
};
</script>

<style></style>