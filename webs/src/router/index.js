import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'hash', // require service support
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/Home.vue'),
      
    },
    {
      path:'/about',
      component: () => import('@/views/about/About.vue'),
      children: [
        {
          path:'companyIdeal',
          component: () => import('@/views/about/CompanyIdeal.vue')
        },
        {
          path:'teamIntroduction',
          component: () => import('@/views/about/TeamIntroduction.vue')
        },
      ]
    },
    {
      path:'/contact',
      component: () => import('@/views/Contact.vue')
    },
    {
      path:'/serve',
      component: () => import('@/views/serve/Serve.vue'),
      children:[
        {
          path:'ourService',
          component: () => import('@/views/serve/OurServices.vue')
        },
        {
          path:'itemIntroduction',
          component: () => import('@/views/serve/ItemIntr.vue')
        },
      ]
    },
    {
      path: '/news',
      component: () => import('@/views/news/News.vue'),
      children: [
        {
          path:'first',
          component: () => import('@/views/news/firstNew.vue')
        },
        {
          path:'second',
          component: () => import('@/views/news/secondNew.vue')
        },
        {
          path:'third',
          component: () => import('@/views/news/thirdNew.vue')
        }
      ]
    }
  ]
})

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

export default router