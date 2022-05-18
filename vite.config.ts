import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons' // svg 使用
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 开发构建代码检查
    eslintPlugin({
    }),
    vueJsx({
      // 配置选项
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons/iconfont')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: '@use "@/styles/element/index.scss" as *;'
        additionalData: '@use "@/styles/element/index.scss" as *;'
      }
    }
  }
  // env环境变了配置更换文件夹
  // envDir: './src/envPlugins'
  // server: {
  //   proxy: {
  //     // 字符串简写写法
  //     '/foo': 'http://localhost:4567',
  //     // 选项写法
  //     '/api': {
  //       // 代理的目标地址
  //       // http 请求头部的 origin 字段
  //       // 默认的origin 是真实的 origin:localhost:3000
  //       // changeOrigin: true 代理服务会把 origin 修改为目标地址 http://localhost:4567
  //       target: 'http://jsonplaceholder.typicode.com',
  //       changeOrigin: true,// 兼容基于名字的虚拟主机
  //       // 路径重写 http://localhost:4567 + 重写
  //       // http://localhost:4567/xxx
  //       // /api/xxx => http://localhost:4567/api/xxx
  //       rewrite: (path) => path.replace(/^\/api/, '')
  //     },
  //     // 正则表达式写法
  //     '^/fallback/.*': {
  //       target: 'http://jsonplaceholder.typicode.com',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/fallback/, '')
  //     },
  //     // 使用 proxy 实例
  //     '/api': {
  //       target: 'http://jsonplaceholder.typicode.com',
  //       changeOrigin: true,
  //       configure: (proxy, options) => {
  //         // proxy 是 'http-proxy' 的实例
  //       }
  //     }
  //   }
  // }
})
