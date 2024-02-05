import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/direct',
      name: 'Direct',
      component: () => import(/* webpackChunkName: "direct" */ '../views/direct/DirectView.vue'),
    },
    {
      path: '/explore',
      name: 'Explore',
      component: () => import(/* webpackChunkName: "explore" */ '../views/explore/ExploreView.vue'),
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import(/* webpackChunkName: "profile" */ '../views/profile/IndexView.vue'),
      children: [
        {
          path: '',
          name: 'ProfilePost',
          component: () => import(/* webpackChunkName: "post" */ '../views/profile/PostView.vue'),
        },
        {
          path: 'save',
          name: 'ProfileSave',
          component: () => import(/* webpackChunkName: "save" */ '../views/profile/SaveView.vue'),
        },
        {
          path: 'reels',
          name: 'ProfileReels',
          component: () => import(/* webpackChunkName: "reels" */ '../views/profile/ReelsView.vue'),
        },
        {
          path: 'tag',
          name: 'ProfileTag',
          component: () => import(/* webpackChunkName: "tag" */ '../views/profile/TagView.vue'),
        },
      ]
    }
  ]
})

export default router
