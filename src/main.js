import { createApp } from 'vue'
import App from './App.vue'
import '@vant/touch-emulator'
import { imgsPreloader, glbsPreloader } from './config/preloader'
import { imgs, glbs } from './config/preloaderFileLists'

(async () => {
  // 预加载资源
  await imgsPreloader(imgs);
  await glbsPreloader(glbs);
  createApp(App).mount('#app')
})();


