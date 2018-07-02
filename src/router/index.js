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
        {path:'/',component:Pkged},
        {path:'/other',component:Other},
        {path:'/cartoons',component:Cartoons},
        {path:'/template',component:Template},
      ]
  	}
    default: {
      return [{path:'/',component:Template}]
      // return [{path:'/',component:Home}]
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

