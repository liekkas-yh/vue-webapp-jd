const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      // 进行API路由匹配，如果在请求地址中有'/api'字符串，就执行下面这个代理
      "/api": {
        target: "http://localhost:9999", // 远程服务器
        changeOrigin: true, // 允许改变“源”
      },
    },
  },
});
