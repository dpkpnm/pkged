import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

const generateRoutes = () => {
  switch (location.hostname) {
    default: {
      return [{path:'/',component:Home}]
    }
  }
}


const router = new Router({
  mode:'history',
  routes: generateRoutes()
})
export default router

