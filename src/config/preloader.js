import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'

// 定义一个函数来加载 GLB 文件
const loadModel = (url) => {
  // 创建一个 GLTFLoader 实例
  const loader = new GLTFLoader()
  const dracoLoader = new DRACOLoader()
  dracoLoader.setDecoderPath('./draco/')
  dracoLoader.setDecoderConfig({ type: 'wasm' }) // 使用wasm,js方式解压
  dracoLoader.preload() // 初始化_initDecoder 解码器
  loader.setDRACOLoader(dracoLoader) // 设置gltf加载器dracoLoader解码器
  return new Promise(resolve => {
    loader.load(url, resolve);
  });
};

export const glbsPreloader = glbs => {
  let promises = [];
  glbs.forEach(url => {
    const promise = loadModel(url);
    promises.push(promise);
  });
  return Promise.all(promises);
};

const loaderImg = url => {
  return new Promise((resolve, reject) => {
    let image = new Image();
    image.onload = () => {
      resolve();
    };
    image.onerror = () => {
      reject();
    };
    image.src = url;
  });
};

export const imgsPreloader = imgs => {
  let promiseArr = [];
  imgs.forEach(element => {
    promiseArr.push(loaderImg(element));
  });
  return Promise.all(promiseArr);
};