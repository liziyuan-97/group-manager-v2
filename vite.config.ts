/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: xinyan
 * @Date: 2024-09-11 15:47:38
 * @LastEditors: xinyan
 * @LastEditTime: 2024-09-11 17:45:01
 */
import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{ //路径别名
    alias:{
      '@': resolve(__dirname, './src')
    }
  },
})
