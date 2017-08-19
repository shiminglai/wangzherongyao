//一、导入第三方包
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

// 手动use地洞插件
Vue.use(VueRouter);
Vue.use(VueResource);

// 二、导入自己写的模块
import router from './router';  //路由实例
// 导入自己的组件
import ComptApp from '../component/App.vue';  //根组件


// 关联视图，根组件渲染到视图中
new Vue({
    el: '#app',
    render: c => c(ComptApp),
    router
}); 