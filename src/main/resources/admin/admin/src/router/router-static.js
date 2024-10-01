import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import zichanweixiu from '@/views/modules/zichanweixiu/list'
    import yonghu from '@/views/modules/yonghu/list'
    import zichanxinxi from '@/views/modules/zichanxinxi/list'
    import zichanfenlei from '@/views/modules/zichanfenlei/list'
    import zichanguihai from '@/views/modules/zichanguihai/list'
    import zichanjiechu from '@/views/modules/zichanjiechu/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/zichanweixiu',
        name: '资产维修',
        component: zichanweixiu
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/zichanxinxi',
        name: '资产信息',
        component: zichanxinxi
      }
      ,{
	path: '/zichanfenlei',
        name: '资产分类',
        component: zichanfenlei
      }
      ,{
	path: '/zichanguihai',
        name: '资产归还',
        component: zichanguihai
      }
      ,{
	path: '/zichanjiechu',
        name: '资产借出',
        component: zichanjiechu
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
