<template>
  <div class="home" @scroll="scroll" ref="page">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <OpenApp />
      <SearchBar />
      <AdSwiper />
      <NavSwiper />
      <KillGoods />
      <!-- 列表  -->
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        :immediate-check="false"
      >
        <GoodList :list="list" />
      </van-list>
    </van-pull-refresh>
    <OpenAppBtn />
    <TabBar />
  </div>
</template>

<script>
import OpenApp from "./components/OpenApp.vue";
import SearchBar from "./components/SearchBar.vue";
import AdSwiper from "./components/AdSwiper.vue";
import GoodList from "./components/GoodList.vue";
import NavSwiper from "./components/NavSwiper.vue";
import KillGoods from "./components/KillGoods.vue";
import OpenAppBtn from "./components/OpenAppBtn.vue";
export default {
  name: "HomeList",
  components: {
    OpenApp,
    SearchBar,
    AdSwiper,
    GoodList,
    NavSwiper,
    KillGoods,
    OpenAppBtn,
  },
  data() {
    return {
      refreshing: false, // 是否处于下拉刷新状态
      loading: false, // 是否处于触底加载状态
      finished: false, // 是否还有数据
      list: [], // 放置后端返回的商品列表
      num: 10,
      top: 0, // 记录滚动条的位置
    };
  },
  mounted() {
    setTimeout(() => {
      this.list = Array(this.num).fill(1);
    }, 500);
  },
  methods: {
    onRefresh() {
      console.log("---触发下拉事件");
      this.num = 10;
      this.finished = false;
      setTimeout(() => {
        this.list = Array(10).fill(1);
        this.refreshing = false;
      }, 500);
    },
    onLoad() {
      console.log("---触底了");
      setTimeout(() => {
        this.num += 10;
        this.list = Array(this.num).fill(1);
        this.loading = false;

        // 假如数据库只有40条数据
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    },
    scroll(ev) {
      console.log("---页面滚动了");
      console.log("---ev.srcElement.scrollTop", ev.srcElement.scrollTop);
      this.top = ev.srcElement.scrollTop;
    },
  },
  activated() {
    // 当激活时，手动把页面div滚动到“离开时的那位位置”
    this.$refs.page.scrollTop = this.top;
  },
  beforeDestroy() {
    console.log("----HomeList beforeDestroy");
  },
};
</script>

<style lang="scss" scoped>
.home {
  padding-bottom: 2rem;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: scroll;
  background-color: #f6f6f6;
}
</style>
