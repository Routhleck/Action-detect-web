import { createApp } from "vue";
import { reactive } from "vue"; // 添加此行

import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import echarts from 'echarts';
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import axios from "axios";
import "element-plus/dist/index.css";
import "@/assets/css/gloabal.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

// 移除 Vue.prototype.$echarts

const app = createApp(App);
app
  .use(store)
  .use(router)
  .use(ElementPlus, {
    locale: zhCn,
  })
  .mount("#app");

app.config.globalProperties.$echarts = reactive(echarts); // 添加此行
app.config.globalProperties.$axios = axios; // 移动至正确位置

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
