<template>
  <!-- <div>
    <van-tree-select :items="items" :main-active-index.sync="active">
      <template #content>
        <div v-for="(item, idx) in items[active].data" :key="idx">
          <div>{{ item.name }}</div>
          <div class="content">
            <div class="list" v-for="(i, idx) in item.data" :key="idx">
              {{ i.name }}
              <img :src="i.img" alt="" />
            </div>
          </div>
        </div>
      </template>
    </van-tree-select>
    <TabBar />
  </div> -->
  <div class="cate">
    <van-nav-bar title="品类" left-arrow @click-left="onClickLeft" />
    <LeftCate :cates="cates" v-model="activeKey" />
    <RightGood :list="cache[activeKey]" />
  </div>
</template>

<script>
// export default {
//   data() {
//     return {
//       active: 0,
//       items: [
//         {
//           text: "热门推荐",
//           data: [
//             {
//               name: "热门分类",
//               data: [
//                 {
//                   name: "小米",
//                   img: "https://img11.360buyimg.com/focus/s140x140_jfs/t1/117080/5/10502/18158/5ef0103eE416ae569/898a7ac882ba6c63.jpg",
//                 },
//                 {
//                   name: "小米",
//                   img: "https://img11.360buyimg.com/focus/s140x140_jfs/t1/117080/5/10502/18158/5ef0103eE416ae569/898a7ac882ba6c63.jpg",
//                 },
//                 {
//                   name: "小米",
//                   img: "https://img11.360buyimg.com/focus/s140x140_jfs/t1/117080/5/10502/18158/5ef0103eE416ae569/898a7ac882ba6c63.jpg",
//                 },
//               ],
//             },
//             {
//               name: "手机通讯",
//               data: [
//                 {
//                   name: "小米",
//                   img: "https://img11.360buyimg.com/focus/s140x140_jfs/t1/117080/5/10502/18158/5ef0103eE416ae569/898a7ac882ba6c63.jpg",
//                 },
//               ],
//             },
//           ],
//         },
//         {
//           text: "手机数码",
//           data: [
//             {
//               name: "手机数码",
//               data: [
//                 {
//                   name: "小米122",
//                   img: "https://img11.360buyimg.com/focus/s140x140_jfs/t1/117080/5/10502/18158/5ef0103eE416ae569/898a7ac882ba6c63.jpg",
//                 },
//                 {
//                   name: "小米2",
//                   img: "https://img11.360buyimg.com/focus/s140x140_jfs/t1/117080/5/10502/18158/5ef0103eE416ae569/898a7ac882ba6c63.jpg",
//                 },
//                 {
//                   name: "小米",
//                   img: "https://img11.360buyimg.com/focus/s140x140_jfs/t1/117080/5/10502/18158/5ef0103eE416ae569/898a7ac882ba6c63.jpg",
//                 },
//               ],
//             },
//             {
//               name: "手机通讯",
//               data: [
//                 {
//                   name: "小米",
//                   img: "https://img11.360buyimg.com/focus/s140x140_jfs/t1/117080/5/10502/18158/5ef0103eE416ae569/898a7ac882ba6c63.jpg",
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     };
//   },
// };
import LeftCate from "./LeftCate.vue";
import RightGood from "./RightGood.vue";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "CartList",
  components: { LeftCate, RightGood },
  data() {
    return {
      activeKey: 0,
      cates: [], // 左侧的品类数组
    };
  },
  computed: {
    // 从good这个子store中映射cache变量，映射成功可以使用this访问它们
    ...mapState("good", ["cache", "num"]),
    ...mapGetters("good", ["total"]),

    payload() {
      const activeKey = this.activeKey;
      const cate = this.cates[activeKey].cate;
      return { activeKey, cate };
    },
  },
  watch: {
    activeKey() {
      // 先判断vuex中有没有当前activeKey所对应的缓存数据
      // 如果有，直接用于渲染右侧视图；如果没有，才需要走Vuex流程进行调接口。
      if (!this.cache[this.activeKey]) {
        // this.$store.dispatch('good/getList', this.payload)
        this.getList(this.payload);
      }
    },
  },
  async mounted() {
    const res = await this.$api.fetchCates();
    this.cates = res.list;
    // this.$store.dispatch('good/getList', this.payload)
    this.getList(this.payload);
  },
  methods: {
    // 从good这个子store中映射addNum，映射成功后可以用this访问并调用
    ...mapMutations("good", ["cleanCache"]),
    ...mapActions("good", ["getList"]),
    onClickLeft() {
      this.$router.back();
    },
  },
  beforeDestroy() {
    // 当组件销毁时，清除vuex中的缓存数据
    this.cleanCache();
  },
};
</script>

<style lang="scss" scoped>
// .van-tree-select {
//   height: unset !important;
// }

// .content {
//   display: flex;
// }
// .list {
//   width: 33%;
//   img {
//     width: 100%;
//   }
// }
</style>
<style lang="scss" scoped>
.cate {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  & > .left {
    position: absolute;
    top: 1.2rem;
    left: 0;
    bottom: 1.3333rem;
    width: 2.2667rem;
    overflow: scroll;
  }
  & > .left::-webkit-scrollbar {
    display: none;
  }

  & > .right {
    position: absolute;
    top: 1.2rem;
    left: 2.2667rem;
    bottom: 1.3333rem;
    right: 0;
    overflow: scroll;
  }
  & > .right::-webkit-scrollbar {
    display: none;
  }
}
</style>
