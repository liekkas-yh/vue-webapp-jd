<template>
  <div class="goodlist">
    <div v-for="i in rows" :key="i">
      <div @click="skipTo">左<span v-text="i"></span></div>
      <div @click="skipTo">右</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    rows() {
      return Math.floor(this.list.length / 2);
    },
  },
  methods: {
    skipTo(id=1) {
      //   // this.$router.push('/login')  路由栈进栈操作
      //   // this.$router.replace('/login')  替换路由栈顶的那个路由信息
      //   // this.$router.back() 路由栈出栈操作
      //   // this.$router.push({ name: 'cc' })
      //   // this.$router.push('/cate')
      //   // this.$router.push('/good/info?id='+id)
      this.$router.push("/good/info/" + id);
    },
  },
};
</script>

<style lang="scss" scoped>
.goodlist {
  & > div {
    display: flex;
    & > div {
      flex: 1;
      border: 1px solid #ccc;
      line-height: 4rem;
      text-align: center;
    }
  }
}
</style>