<template>
  <div class="search">
    <van-icon name="wap-nav" size="20" color="#ffffff" />
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      background="#c82915"
    />
    <span class="right">登录</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style lang="scss">
.search {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #c82915;
  .right {
    font-size: 14px;
    color: #fff;
  }
}
.van-search {
  padding: .2rem 0;
  width:7.2rem;
}
.van-search__content {
  border-radius: 20px;
}
</style>