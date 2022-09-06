// 扩展vue原有的功能：全局组件，自定义指令，挂载原型方法，注意：没有全局过滤器。
// 这就是插件
// vue2.0插件写法要素：导出一个对象，有install函数，默认传入了Vue构造函数，Vue基础之上扩展
// vue3.0插件写法要素：导出一个对象，有install函数，默认传入了app应用实例，app基础之上扩展
// import xtxSkeleton from '@/components/library/xtx-skeleton'
// import xtxCarousel from '@/components/library/xtx-carousel'
// import xtxMore from '@/components/library/xtx-more'
// import xtxBread from '@/components/library/xtx-bread'
// import xtxBreadItem from '@/components/library/xtx-bread-item'
// 定义指令
import defaultImg from '@/assets/images/200.png'
import Message from '@/components/library/Message'

const importFn = require.context('./', false, /\.vue$/)
// console.log(importFn.keys())
export default {
  install (app) {
    // 在app上进行扩展，app提供 component directive 函数
    // 如果要挂载原型 app.config.globalProperties 方式
    // app.component(xtxSkeleton.name, xtxSkeleton)
    // app.component(xtxCarousel.name, xtxCarousel)
    // app.component(xtxMore.name, xtxMore)
    // app.component(xtxBread.name, xtxBread)
    // app.component(xtxBreadItem.name, xtxBreadItem)
    //     - 使用 require 提供的函数 context 加载某一个目录下的所有 .vue 后缀的文件。
    // - 然后 context 函数会返回一个导入函数 importFn
    //     - 它又一个属性 keys() 获取所有的文件路径
    //     - 通过文件路径数组，通过遍历数组，再使用 importFn 根据路径导入组件对象
    //     - 遍历的同时进行全局注册即可
    // 导入library文件夹下的所有组件
    // 批量导入需要使用一个函数 require.context(dir,deep,matching)
    // 参数：1. 目录  2. 是否加载子目录  3. 加载的正则匹配
    importFn.keys().forEach(path => {
      const component = importFn(path).default
      app.component(component.name, component)
    })
    // 定义指令
    defineDirective(app)

    // 在vue原型上挂载组件
    app.config.globalProperties.message = Message
  }
}
// 指令
const defineDirective = (app) => {
  // 图片懒加载指令
  app.directive('lazyload', {
    mounted (el, binding) {
      const observer = new IntersectionObserver(([{ isIntersecting }]) => {
        if (isIntersecting) {
          observer.unobserve(el)
          el.onerror = () => {
            el.src = defaultImg
          }
          el.src = binding.value
        }
      }, {
        threshold: 0.01
      })
      observer.observe(el)
    }
  })
}
