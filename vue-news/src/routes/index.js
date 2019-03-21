import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode:'history',
    routes: [
      {
          path: '/',
          redirect:'news',
      },
      { 
          // path : url주소
          path: '/news',
          // componets: url 주소로 갔을 떄 표시될 컴포넌트 
          component: NewsView,
      },
      {
          path: '/ask',
          component: AskView,
      },
      {
        path: '/jobs',
        component: JobsView,
     },
  ]
})