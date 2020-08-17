import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import New from '@/components/New'
import Category from '@/components/Category'
import Search from '@/components/Search'
import Full from '@/components/Full'
import Error from '@/components/Error'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
    path: '/Category',
    name: 'Category',
    component: Category
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/Full',
      name: 'Full',
      component: Full
    },
    {
      path: '/New',
      name: 'New',
      component: New
    },
    {
      path: '/Error',
      name: 'Error',
      component: Error
    }
  ]
})
