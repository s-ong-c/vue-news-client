import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
import createListView from '../views/CreateListView.js'
import bus from '../utils/bus.js'
import {store} from '../store/index.js'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode:'history',
    routes: [
      {
          path: '/',
          redirect:'news',
      },
      { 
          path: '/news',
          name: 'news',
        //  component: createListView('NewsView')
          component: NewsView,
          beforeEnter:(to, from, next) =>{
            bus.$emit('start:spinner')
            //#1
            console.log(to);
            store.dispatch('FETCH_LIST',to.name)     //this.$route.name)
                  .then(()=>next())
                  .catch((e)=>{
                      console.log(e);
                  }); 
            // console.log('to',to)
            // console.log('from',from)
            // console.log('next',next)
            // if(to.auth){
            //     next();
            // }else{
            //     router.replace('/login')
            // }
            
          },

      },
      {
          path: '/ask',
          name: 'ask',
         // component: createListView('AskView')
         component: AskView,
         beforeEnter:(to, from, next) =>{
            bus.$emit('start:spinner')
            //#1
            console.log(to);
            store.dispatch('FETCH_LIST',to.name)
                  .then(()=>{
                       bus.$emit('end:spinner')
                       next();
                  })
                  .catch((e)=>{
                      console.log(e);
                  });
            
          },
      },
      {
        path: '/jobs',
        name: 'jobs',
       // component: createListView('JobsView')
        component: JobsView,
        beforeEnter:(to, from, next) =>{
            bus.$emit('start:spinner')
            //#1
            console.log(to);
            store.dispatch('FETCH_LIST',to.name)
                  .then(()=>{
                       //bus.$emit('end:spinner')
                       next();
                  })
                  .catch((e)=>{
                      console.log(e);
                  });
            
          },
     },
     {
        path:'/user/:id',
        component: UserView,
     },
     {
        path:'/item/:id',
        component: ItemView,
     },
  ]
})
