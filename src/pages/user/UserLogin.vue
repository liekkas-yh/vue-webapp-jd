<template>
  <div class="register">
    <header>
      <van-icon name="arrow-left" @click="backHome" /><span>京东登陆注册</span>
    </header>
    <div>
      <div class="tel">
        <span>+86</span><input type="text" placeholder="请输入手机号" />
      </div>
      <div class="code">
        <input type="text" placeholder="请输入验证码" /><span>获取验证码</span>
      </div>
      <button>登录</button>
      <div class="quick-btn">
        <span>账号密码登录</span>
        <span>手机快速注册</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    backHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  font-size: 17px;
  span {
    margin-left: 95px;
  }
}
.register {
  padding: 10px 20px;
  button {
    color: white;
    background-color: #f23030;
    height: 50px;
    width: 325px;
    font-size: 18px;
    border-radius: 25px;
    border: none;
    margin: 30px 5px;
  }
}

.tel {
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgrey;
  height: 50px;
  margin-top: 10px;
  font-size: 15px;

  span {
    width: 50px;
    font-size: 18px;
  }
  input {
    display: block;
    width: 270px;
    // flex: 1;
    border: none;
  }
}
.code {
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgrey;
  height: 50px;
  margin-top: 10px;
  font-size: 15px;

  span {
    width: 100px;
    font-size: 16px;
    border-left: 1px solid lightgrey;
    padding: 5px 10px;
  }
  input {
    width: 220px;
    border: none;
  }
}
.quick-btn {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
}
</style>