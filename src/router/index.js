import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Pkged from '@/components/Pkged'
import Other from '@/components/Other'
import Cartoons from '@/components/Cartoons'
import Diy3d from '@/components/Diy3d'


Vue.use(Router)

const generateRoutes = () => {
  switch (location.hostname) {
    case "diy3dprint.com": {
      return [{path:"/",component:Diy3d}]
    }
  	case "pkged.com": {
  		return [
        {path:'/',component:Pkged},
        {path:'/other',component:Other},
        {path:'/cartoons',component:Cartoons},
      ]
  	}
    default: {
      return [{path:'/',component:Diy3d}]
    }
  }
}


const router = new Router({
  mode:'history',
  routes: generateRoutes()
})
export default router

