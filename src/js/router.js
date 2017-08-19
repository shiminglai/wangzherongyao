// 因使用webpack打包 → 文件都是模块 → 放在一个沙箱函数中执行 → 无全局变量 → 需单独导入；
import VueRouter from 'vue-router';

// 这个js导出一个路由实例
export default new VueRouter({
    routes: [
        {path:'/',redirect:'/index'},
        {parh:'/index',component:{template:'<p>首页</p>'}},
        {parh:'/news',component:{template:'<p>新闻页</p>'}}
    ]
});