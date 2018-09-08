import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Pkged from '@/components/Pkged'
import Other from '@/components/Other'
import Cartoons from '@/components/Cartoons'
import Diy3d from '@/components/Diy3d'
import Javascript from '@/components/Javascript'
import Readtokid  from '@/components/Readtokid'
import Template  from '@/components/Template'
import Lyrics  from '@/components/Lyrics'
import Songs  from '@/components/Songs'
import Pravachanam  from '@/components/Pravachanam'
import App  from '@/components/App'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(Router)
Vue.use(VueAwesomeSwiper);


const generateRoutes = () => {
  switch (location.hostname) {
    case "diy3dprint.com": {
      return [{path:"/",component:Diy3d}]
    }
    case "thejavascript.com": {
      return [{path:"/", component:Javascript}]
    }
    // case "readtokid.com": {
    //   return [{path:"/", component:Readtokid}]
    // }
  	case "pkged.com": {
  		return [
        {path:'/',component:App},
        {path:'/other',component:Other},
        {path:'/template',component:Template},
        {path:'/cartoons',component:Cartoons},
        // {path:'/',component:Cartoons},
        {path:'/template',component:Template},
        {path:'/lyrics',component:Lyrics},
        {path:'/songs',component:Songs},
        {path:'/pravachanam',component:Pravachanam},
      ]
  	}
    default: {
      return [{path:'/',component:App}]
     // return [{path:'/',component:Diy3d}]
      // return [{path:'/',component:Javascript}]
    }
  }
}


const router = new Router({
  mode:'history',
  routes: generateRoutes()
})
export default router

